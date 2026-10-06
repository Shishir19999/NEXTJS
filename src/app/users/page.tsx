import React from 'react'
import UserTable from './UserTable';

interface Props {
  searchParams: Promise<{
    color?: string,
  }>
}

export default async function UsersPage({ searchParams }: Props) {
  const { color } = await searchParams;
  return (
    <div className="p-6" style={color ? { color } : undefined}>
      <h1 className="text-2xl font-bold">Users</h1>
      <UserTable />
    </div>
  )
}
