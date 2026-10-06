import React from 'react'
interface Props{
    params:{
        product_id:string,
        category_name:string
    }
}


export default async function SingleCategoryPage({params}:Props) {
    const {product_id,category_name} = await params;
    return (
    <div>
      <h2>category Name:{category_name}</h2>
        <p>product iD:{product_id}</p>
      
    </div>
  )
}
