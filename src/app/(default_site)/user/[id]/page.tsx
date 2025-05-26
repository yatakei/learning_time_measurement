'use client';
import React, { use, useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { collection, getDocs, query, queryEqual, Timestamp, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { MyContext } from '@/components/Header';

interface Learning {
  date: Timestamp;
  user_id: string;
  title: string;
  description: string;
  hour: number;
  min: number;
}


const User = () => {
  const id = useParams().id;
  const [learnings, setLearnings] = useState<Learning[]>();
  
  useEffect(() => {
  async function fetchData(){
    const data = await collection(db, "learnings")
    const userAlldata = await query(data, where("user_id", "==", id));
    const userData = await getDocs(userAlldata);
    const d = await userData.docs.map((doc) => doc.data()) as Learning[];
    setLearnings(d);
  };
  fetchData();  
  },[]);
  console.log(learnings);

  return <div>
    {learnings?.map((learning) => (
      <div key={learning.date.toDate().toISOString()}>
        <h1>{learning.title}</h1>
        <p>{learning.description}</p>
        <p>{learning.hour}時間{learning.min}分</p>
      </div>
    ))}
  </div>;
};

export default User;
