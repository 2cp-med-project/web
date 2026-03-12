import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/patients/$patientId/report')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/patients/$patientId/report"!</div>
}
