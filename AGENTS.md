# Project Architecture Guidelines

This document defines the architecture rules for structuring the frontend codebase.

The goal is:

- predictable structure
- clear separation of concerns
- scalable feature isolation
- strict dependency direction

---

# 1. High-Level Structure

```text
src/
├── routes/      # File-based routing (TanStack Router)
├── pages/       # Route-level composition and state handling
├── features/    # Domain UI blocks per panel
├── hooks/       # Data access orchestration
├── api/         # API layer / mock API layer
├── constants/   # Static UI content and mock datasets
├── context/     # Global shared state only
└── components/  # Reusable UI primitives
```

---

# 2. Dependency Flow

Code must follow this strict direction:

```text
routes -> pages -> features -> components
                 ^
hooks -> api -> constants

context = global only
```

### Rules:

- No reverse imports allowed
- Features must NOT depend on pages
- Pages may depend on hooks and features
- Hooks may depend on API
- API may depend on constants for mock data
- Context must NOT store feature-specific state

---

# 3. Routes (`routes/`)

Responsible for:

- URL mapping
- route configuration only

Rules:

- No UI logic
- No business logic
- Only connects routes -> pages

---

# 4. Pages (`pages/`)

Pages are the smart route layer.

They:

- assemble features
- define page layout structure
- call hooks to collect route data
- handle loading / error / success states
- pass resolved data down into features as props

They must NOT:

- implement raw API calls directly
- define reusable UI components that belong in `features/` or `components/`
- contain unrelated business logic
- store static mock datasets inline

## Page Pattern

For any route-backed screen with remote or mock-backed data, prefer:

```text
pages/
└── <Panel>/
    └── <Page>/
        ├── Content.tsx
        ├── Skeleton.tsx
        ├── Error.tsx
        └── index.tsx
```

### Responsibilities

#### `index.tsx`

- Smart page container
- Calls one or more hooks
- Handles loading / error / data states
- Renders `Content.tsx`

#### `Content.tsx`

- Pure page composition
- Receives all dynamic data via props
- Composes features

#### `Skeleton.tsx`

- Page loading state
- Mirrors the page structure

#### `Error.tsx`

- Page failure state
- Handles retry when needed

Example:

```text
pages/PatientPanel/Profile/
├── Content.tsx
├── Skeleton.tsx
├── Error.tsx
└── index.tsx
```

---

# 5. Features (`features/`)

Features are reusable domain UI blocks scoped to a panel.

A feature represents a business concept such as chat, profile, files, planning, billing, or scan.

## Structure

```text
features/
└── <Panel>/
    └── <Feature>/
        ├── <SubBlock>/
        ├── context.tsx   # optional, feature-local only
        └── index.ts
```

## Responsibilities

A feature may contain:

- domain-specific UI
- local UI state
- feature-scoped context
- reusable feature sections used by pages
- `Content/Skeleton/Error` files for a reusable block when needed

## Rules

- Must be self-contained
- Must not depend on pages
- Must expose a public API via `index.ts`
- Must not implement API calls
- Must not own route-level loading/error orchestration by default
- Should receive dynamic data via props from pages

## Feature Pattern

Default expectation:

- pages are smart
- features are presentational or feature-local

If a feature has reusable sub-blocks, split them into folders:

```text
features/
└── PatientPanel/
    └── Files/
        ├── TitleBlock/
        │   └── index.tsx
        ├── FiltersBar/
        │   └── index.tsx
        ├── FilesTable/
        │   ├── Content.tsx
        │   ├── Skeleton.tsx
        │   ├── Error.tsx
        │   └── index.ts
        └── index.ts
```

In this pattern:

- the page fetches data
- the page owns filters and route states
- the feature exports reusable UI sections
- a feature sub-block may expose `Content`, `Skeleton`, and `Error` so the page can compose state-specific layouts

---

# 6. Hooks (`hooks/`)

Hooks are the data access orchestration layer.

They:

- call the API layer
- connect auth/session context to API requests
- expose query state to pages

Rules:

- Hooks must not render UI
- Hooks should be called from pages for route-level data
- Hooks may be feature-specific if the data belongs to one panel or domain

Example flow:

```text
useFiles() -> PatientAPI.Files.fetch() -> constants/ui/patient/files.ts
```

---

# 7. API (`api/`)

API modules are the request layer.

They:

- define fetch functions
- centralize request behavior
- provide mock implementations until real APIs exist

Rules:

- API calls must NOT be implemented directly in components
- API functions belong in `src/api/`
- Mock-backed responses may read from `src/constants/`
- Keep the API surface stable even when data is temporary

Temporary mock API implementations are allowed:

```ts
// FIXME: implement API call here
```

---

# 8. Constants (`constants/`)

Constants store static UI content and mock datasets.

Use them for:

- placeholder text
- labels
- configuration maps
- temporary mock response data

Do NOT use them for:

- component state
- request orchestration
- business logic branching

---

# 9. Components (`components/`)

Shared UI primitives.

Examples:

- Button
- Input
- Modal
- Skeleton
- Layout primitives

Rules:

- No business logic
- No API calls
- Fully reusable across features

---

# 10. Context (`context/`)

Global application state only.

Use for:

- authentication
- theme
- session
- app-wide configuration

Do NOT use for:

- feature state
- page state
- domain-specific logic

Feature-specific shared state belongs inside the feature itself.

---

# 11. Component Architecture Pattern

## 11.1 Route Pages with Data

If the route loads data, the page owns the state.

Pattern:

```text
index.tsx  -> hook call + state branching
Content.tsx -> feature composition
Skeleton.tsx -> loading UI
Error.tsx -> error UI
```

This is the default for route-backed pages.

## 11.2 Reusable Feature Blocks with State Variants

If a reusable feature block needs its own visual variants, structure it like:

```text
FeatureBlock/
├── Content.tsx
├── Skeleton.tsx
├── Error.tsx
└── index.ts
```

Responsibilities:

- `Content.tsx`
  - pure UI
  - receives data via props
- `Skeleton.tsx`
  - loading visual for that block
- `Error.tsx`
  - error visual for that block
- `index.ts`
  - re-export surface only

Do not default to a smart `index.tsx` container inside `features/` when the route page can own the data flow.

## 11.3 Static Components

If no loading/error/data variants are needed:

- keep it as a single file
- avoid unnecessary abstraction

---

# 12. Skeleton Utility

Use the shared skeleton component:

```tsx
import { cn } from "@/lib/utils";

export function Skeleton({ className = "w-5 h-5" }) {
  return <div className={cn("rounded bg-gray-200 animate-pulse", className)} />;
}
```

---

# 13. Summary Rules

- Routes = mapping only
- Pages = smart route composition + state handling
- Features = reusable domain UI blocks
- Hooks = data access orchestration
- API = request layer / mock request layer
- Constants = static UI content and mock datasets
- Components = reusable UI only
- Context = global state only

Preferred runtime flow:

```text
constants -> api -> hooks -> pages -> features -> components
```

Strict layering ensures scalability and maintainability.
