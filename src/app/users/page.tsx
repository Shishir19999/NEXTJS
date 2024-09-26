import React from 'react'
import UserTable from './UserTable';

interface Props{
  searchParams:{
    color:string,
  }
}

export default function usersPage({searchParams}:Props) {
console.log("searchParams",searchParams)
  return (
    <div>
      usersPage
      <UserTable />
    </div>
  )
}
