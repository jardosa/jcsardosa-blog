import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/posts/new')({
  component: () => <div>Hello /admin/posts/new!</div>
})