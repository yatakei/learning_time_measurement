'use client';
import { auth } from '@/lib/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { MyContext } from './Header';

const LoginButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setUser } = useContext(MyContext);

  const signInWithPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, user.uid);

        return user.uid;
        // ...
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        router.push(`/user/${user}`);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert('失敗');
      });
  };
  return (
    <form action="" onSubmit={signInWithPassword}>
      <span>メールアドレス</span>
      <div>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <span>パスワード</span>
      <div>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button>ログイン</button>
    </form>
  );
};

export default LoginButton;
