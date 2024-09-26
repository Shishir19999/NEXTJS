import React from 'react'
interface Props{
    params:{
        product_id:string,
    }
}


export default function SingleCategoryPage({params:{product_id}}:Props) {
    console.log("params")
    return (
    <div>
      <h2>category Name:Laptop</h2>
        <p>product iD:{product_id}</p>
      
    </div>
  )
}
