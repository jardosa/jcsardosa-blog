"use client"

import { Button } from "@mantine/core";
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem('authToken');
      router.push('/admin/login')
    }

    logout()

  }, [])

  return <div>
    <div className="text-2xl">Log out</div>
    <Button>Click Me!</Button>
  </div>
}