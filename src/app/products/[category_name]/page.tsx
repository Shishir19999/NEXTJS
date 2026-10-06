import React from 'react'
interface Props{
  params:{
    category_name:string
  }
}
export default async function category({params}:Props) {
  const {category_name} = await params;
  return (
    <div>
      category:{category_name}
    </div>
  )
}
