"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const session = useSession()
  // console.log(session)
  const router = useRouter()
  if (session.status === "loading"){
    return <p>Loading...</p>
  }
  if (session.status === "unauthenticated"){
    router.push('/dashboard/login')
  }
  if (session.status === "authenticated"){
    // router.push('/dashboard/login')
    return (
      <div>Dashboard</div>
    )
  }
}

export default Dashboard