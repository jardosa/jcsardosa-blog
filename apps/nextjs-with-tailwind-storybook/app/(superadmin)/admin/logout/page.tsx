"use client"

import Link from "next/link";

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    localStorage.removeItem('authToken')
  }, [])
  return (
    <div className="grid place-items-center w-full h-screen bg-white">
      <div className="text-center space-y-2">
        <div className="text-lg">You have been logged out</div>
        <div>
          <Link
            className="hover:text-ui-orange-400 focus:text-ui-orange-400 transition cursor-pointer underline"
            href={'/login'}
          >
            Click Here to go to login page
          </Link>
        </div>
      </div>
    </div>
  )
}
