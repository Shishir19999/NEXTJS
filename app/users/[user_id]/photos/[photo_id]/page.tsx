import React from 'react'
interface Props{
    params:{
        photo_id:string,
        user_id:string,
    }
}


export default function SinglePhotoPage({params:{user_id,photo_id}}:Props) {
    console.log("params")
    return (
    <div>
        <h1>User ID:{user_id}</h1>
        <p>photos iD:{photo_id}</p>
      single photo
    </div>
  )
}
