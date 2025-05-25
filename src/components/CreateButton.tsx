'use client'
import { auth } from '@/lib/firebase/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';

const CreateButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up

        const user = userCredential.user;
        console.log(user);
        window.alert("成功")
        // ...
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
    </form>
  );
};

export default CreateButton;
