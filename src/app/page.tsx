'use client'
import LoginButton from '@/components/LoginButton';
import SignOutButton from '@/components/SignOutButton';
import UserInfo from '@/components/UserInfo';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
const [user,setUser] = useState<string>("");
// const [user] = useAuthState(auth);

useEffect(() => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    setUser(uid);
  } else {
  }
});
},[]);

const currentuser = auth.currentUser;
console.log(currentuser)
// 
// console.log(user)

  return (
    <>
    {user ? (
  <>
    <UserInfo />
    <SignOutButton />
  </>
) : (
  <LoginButton />
)}
    </>
  );
}
