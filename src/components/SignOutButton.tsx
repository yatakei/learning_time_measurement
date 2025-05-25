'use client'
import { auth } from '@/lib/firebase/firebase'
import React from 'react'
import { useRouter } from 'next/router'



const signOut = async() => {
  await auth.signOut();
  push('/')
}

const SignOutButton = () => {
  return (
    <button onClick={signOut}>
      <p>サインアウト</p>
    </button>
  )
}

export default SignOutButton