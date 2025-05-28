'use client';
import SignOutButton from '@/components/SignOutButton';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

export const MyContext = createContext<{
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}>({ user: '', setUser: () => {} });

export default function Header({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
      }
    });
  }, []);

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <div className='box-border h-full'>
          <div className="flex px-20 h-20 items-center bg-slate-300 font-semibold border-solid border-b-4 border-gray-400" >
            <div className="w-1/6">
              <div className="">学習記録アプリ</div>
            </div>
            <ul className="flex w-5/6 justify-between ">
              {user ? (
                <>
                  <div className="flex gap-12">
                    <li>記録一覧</li>
                    <li>記録登録</li>
                    <li>記録計測</li>
                  </div>
                  <div className="">
                    <SignOutButton />
                  </div>
                </>
              ) : (
                ''
              )}
            </ul>
          </div>

          <div className='h-[calc(100vh-80px)] bg-slate-100'>
            {children}
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
}
