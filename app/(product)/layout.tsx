import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function layoutProducts ({children,}: Readonly<{children: React.ReactNode;}>) {
   const user = await auth()
   if(!user) return redirect('/login')
  return (
    <div>
      {children}
    </div>
  )
}

