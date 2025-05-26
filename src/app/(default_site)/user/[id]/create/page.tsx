'use client';
import { MyContext } from '@/components/Header';
import { db } from '@/lib/firebase/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';

interface FormData {
  date: Timestamp;
  title: string;
  description: string;
  hour: number;
  min: number;
  user_id: string;
}

const Page = () => {
  const { user } = useContext(MyContext);
  const [data, setData] = useState<FormData>({
    date: Timestamp.now(),
    title: '',
    description: '',
    hour: 0,
    min: 0,
    user_id: '',
  });

  useEffect(() => {
    if (user) {
      setData((prev) => ({
        ...prev,
        user_id: user,
      }));
    }
  }, [user]);

  console.log(data);

  const dataCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'learnings'), {
        ...data,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <form action="" onSubmit={dataCreate}>
        <div>
          <div>日付</div>
          <input
            type="date"
            name="date"
            placeholder="日付"
            onChange={(e) =>
              setData({
                ...data,
                date: Timestamp.fromDate(new Date(e.target.value)),
              })
            }
          />
        </div>
        <div>
          <div>タイトル</div>
          <input
            type="text"
            name="title"
            placeholder="タイトル"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div>
          <div>学習内容</div>
          <input
            type="text"
            name="description"
            placeholder="説明"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div>
          <div>時間</div>
          <input
            type="number"
            name="hour"
            placeholder="時間"
            onChange={(e) => setData({ ...data, hour: Number(e.target.value) })}
          />
        </div>
        <div>
          <div>分</div>
          <input
            type="number"
            name="min"
            placeholder="分"
            onChange={(e) => setData({ ...data, min: Number(e.target.value) })}
          />
        </div>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default Page;
