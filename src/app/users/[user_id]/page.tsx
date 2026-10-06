import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: Promise<{
    user_id: string,
  }>
}

export default async function UserDetailPage({ params }: Props) {
  const { user_id } = await params;
  const id = Number(user_id);

  if (!Number.isInteger(id) || id < 1 || id > 10) {
    return notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Detail Page</h1>
      <p>User ID: {id}</p>
    </div>
  )
}
