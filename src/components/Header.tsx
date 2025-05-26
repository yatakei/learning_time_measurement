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
        <div>
          headerlflflf
          <ul>
            {user ? (
              <>
                <li>記録一覧</li>
                <li>記録登録</li>
                <li>記録計測</li>
                <SignOutButton />
              </>
            ) : (
              ''
            )}
          </ul>
        </div>
        {children}
      </MyContext.Provider>
    </>
  );
}
