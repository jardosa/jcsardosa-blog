import { cookies } from "next/headers"

export default async function clearAuthToken() {
  'use server'
  cookies().delete('authToken')
}