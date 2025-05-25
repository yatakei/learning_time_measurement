'use client'
import { auth } from '@/lib/firebase/firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import Link from 'next/link';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';


const CreateButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signInWithGoogle = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up

        const user = userCredential.user;
        return user.uid
        window.alert("成功")
        // ...
      }).then((user) => {
        router.push(`/user/${user}`);
      })
      .catch((error) => {
        console.log(error);
        window.alert("失敗")
        // ..
      });
  };

  return (
    <form action="" onSubmit={signInWithGoogle}>
      <span>メールアドレス</span>
      <div>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <span>パスワード</span>
      <div>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button>登録</button>

      <Link href="/">
      <div>
        <button>ログインページに戻る</button>
      </div>
      </Link>
    </form>
  );
};

export default CreateButton;
