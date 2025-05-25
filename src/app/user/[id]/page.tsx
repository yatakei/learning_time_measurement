'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const User = () => {
  const params = useParams();
  const id = params.id;
  return <div>{id}</div>;
};

export default User;
