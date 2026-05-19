import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/d/patients/$patientId/file')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/patients/$patientId/file"!</div>
}
