import React from 'react'

interface Props{
    params: {
        user_id: string,
        photo_id: string,
    }
}
  
export default function SinglePhotoPage({ params: { user_id,photo_id } }: Props) {
    console.log("props",user_id,photo_id);



  return (
    <div>
        <h1>User ID: {user_id}</h1>
        <h1>Photo ID: {photo_id}</h1>
        Single Photo Page
    </div>
  )
}