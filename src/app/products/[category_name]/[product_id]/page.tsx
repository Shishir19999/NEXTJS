import React from 'react'
interface Props{
    params:{
        product_id:string,
        category_name:string
    }
}


export default function SingleCategoryPage({params:{product_id,category_name}}:Props) {
    console.log("props",category_name,product_id)
    return (
    <div>
      <h2>category Name:{category_name}</h2>
        <p>product iD:{product_id}</p>
      
    </div>
  )
}
