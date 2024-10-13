import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/posts/$postId')({
  component: () => <div>Hello /admin/posts/$post/id!</div>
})