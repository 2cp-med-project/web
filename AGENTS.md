# Project Architecture Guidelines

This document defines the architecture rules for structuring the frontend codebase.

The goal is:

- predictable structure
- clear separation of concerns
- scalable feature isolation
- strict dependency direction

---

# 1. High-Level Structure

```
src/
├── routes/      # File-based routing (TanStack Router)
├── pages/       # Route composition layer
├── features/    # Domain/business logic per panel
├── context/     # Global shared state only
└── components/  # Reusable UI primitives
```

---

# 2. Dependency Flow

Code must follow this strict direction:

```
routes → pages → features → components
                    ↓
              context (global only)
```

### Rules:

- No reverse imports allowed
- Features must NOT depend on pages
- Pages must NOT contain business logic
- Context must NOT store feature-specific state

---

# 3. Routes (`routes/`)

Responsible for:

- URL mapping
- route configuration only

Rules:

- No UI logic
- No business logic
- Only connects routes → pages

---

# 4. Pages (`pages/`)

Pages are composition layers.

They:

- assemble features
- define layout structure
- orchestrate feature outputs

They must NOT:

- fetch data directly
- implement business logic
- define reusable components

Example:

```
pages/patient/dashboard.tsx
```

---

# 5. Features (`features/`)

Features are the core domain layer.

A feature represents a business concept (e.g. chat, profile, scan, billing), scoped per panel (doctor, patient, admin).

## Structure

```
features/
└── <panel>/
    └── <feature>/
        ├── <component>
        ├── context.tsx  (optional)
        └── index.ts/index.tsx
```

---

## Responsibilities

A feature may contain:

- domain-specific UI
- local state logic
- feature-level context
- hooks
- API placeholders (NOT implementations)

---

## Rules

- Must be self-contained
- Must not depend on pages
- Must expose a public API via `index.ts`
- Must not implement real API calls (only placeholders)

---

# 6. Components (`components/`)

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

# 7. Context (`context/`)

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

---

# 8. Component Architecture Pattern

## 8.1 Components with Loading State

If a component fetches data, structure it like:

```
ComponentName/
├── Content.tsx
├── Skeleton.tsx
├── Error.tsx     (optional)
└── index.tsx
```

### Responsibilities

#### Content.tsx

- Pure UI
- Receives data via props
- No loading/error logic

#### Skeleton.tsx

- Loading state UI
- Mirrors Content layout

#### Error.tsx (optional)

- Error UI
- Retry handling when needed

#### index.tsx

- Smart container component
- Handles loading, error, data states
- Composes Content/Skeleton/Error

---

## 8.2 Static Components

If no data fetching is needed:

- single file only
- no abstraction overhead

---

# 9. Feature Context Pattern

If a feature needs shared state:

- use React Context inside the feature
- keep it scoped to the feature
- expose a custom hook for access

Rules:

- no global pollution
- no page-level context
- always encapsulate logic

---

# 10. API Rules

- API calls must NOT be implemented directly in components
- Only define placeholders:

```ts
// FIXME: implement API call here
```

Real API logic should be centralized later (service layer if needed).

---

# 11. Skeleton Utility

Use shared skeleton component:

```tsx
import { cn } from "@/lib/utils";

export function Skeleton({ className = "w-5 h-5" }) {
  return <div className={cn("rounded bg-gray-200 animate-pulse", className)} />;
}
```

---

# 12. Summary Rules

- Pages = composition only
- Features = business logic
- Components = reusable UI only
- Context = global state only
- Routes = mapping only

Strict layering ensures scalability and maintainability.
