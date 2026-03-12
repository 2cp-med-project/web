import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/patients/$patientId/drafts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/patients/$patientId/drafts"!</div>
}
