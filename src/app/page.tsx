'use client';
import LoginButton from '@/components/LoginButton';
import SignOutButton from '@/components/SignOutButton';
import UserInfo from '@/components/UserInfo';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState,createContext } from 'react';

export const MyContext = createContext<User|null>(null);

export default function Home() {
  const [user, setUser] = useState<string>('');
  // const [user] = useAuthState(auth);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
      }
    });
  }, []);

  const currentuser = auth.currentUser;
  console.log(currentuser);
  //
  // console.log(user)

  return (
    <>
    <MyContext.Provider value={currentuser}>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <LoginButton />
      )}
      </MyContext.Provider>
    </>
  );
}
