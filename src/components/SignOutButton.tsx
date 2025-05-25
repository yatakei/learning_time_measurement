'use client';
import { auth } from '@/lib/firebase/firebase';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { MyContext } from './Header';

const SignOutButton: React.FC = () => {
  const { setUser } = useContext(MyContext);
  const router = useRouter();
  const signOut = async () => {
    await auth.signOut();
    setUser('');
    router.push('/');
  };

  return (
    <button onClick={signOut} type="button">
      サインアウト
    </button>
  );
};

export default SignOutButton;
