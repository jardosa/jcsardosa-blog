import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { deleteCookie } from 'cookies-next'

export const Route = createFileRoute('/logout')({
  component: () => <Page />
})


export default function Page() {

  useEffect(() => {
    deleteCookie('authToken')
  }, [])

  return (
    <div className="grid place-items-center w-full h-screen bg-white">
      <div className="text-center space-y-2">
        <div className="text-lg">You have been logged out</div>
        <div>
          <Link
            className="hover:text-slate-400 focus:text-slate-400 transition cursor-pointer underline"
            to={'/login'}
          >
            Click Here to go to login page
          </Link>
        </div>
      </div>
    </div>
  )
}
