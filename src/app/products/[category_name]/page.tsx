import React from 'react'
interface Props{
  params:{
    category_name:string
  }
}
export default function category({params:{category_name}}:Props) {
  return (
    <div>
      category:{category_name}
    </div>
  )
}
