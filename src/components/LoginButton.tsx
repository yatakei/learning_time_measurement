'use client'
import { auth } from '@/lib/firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const LoginButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        window.alert("成功")
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert('失敗')
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
