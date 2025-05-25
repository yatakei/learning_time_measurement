
import { auth } from '@/lib/firebase/firebase'
import React from 'react'

const SignOutButton = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  )
}

export default SignOutButton