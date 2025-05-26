'use client';
import { MyContext } from '@/components/Header';
import LoginButton from '@/components/LoginButton';
import Link from 'next/link';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(MyContext);
  return (
    <>
      {user ? (
        <>{''}</>
      ) : (
        <>
          <LoginButton />
          <Link href="/create">新規登録</Link>
        </>
      )}
    </>
  );
}
