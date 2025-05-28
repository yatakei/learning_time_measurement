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
          <div className='mx-auto flex items-center justify-center flex-col h-full '>
            <div className=" sm:-translate-y-0 [width:700px] [height:400px] bg-white border-black border-2 rounded-xl lg:-translate-y-10 ">
              <LoginButton />
            </div>
            <div className='font-size text-[20px] '>
              <Link href="/create">新規登録</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
