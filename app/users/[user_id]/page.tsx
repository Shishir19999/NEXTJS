import React from 'react'
interface Props{
  params:{
    user_id:string
  }
}

export default function userDetailPage({params:{user_id}}:Props) {
  console.log("props",user_id);

  return (
    <div>
      <div>user detail page </div>
    </div>
  )
}
