import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/planning')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/schedule"!</div>
}
