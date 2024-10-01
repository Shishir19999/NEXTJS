"use client"
import { usePathname } from 'next/navigation'
import React,{ReactNode} from 'react'


export default function layout({children}:{children:ReactNode}) {
  usePathname()
  return (
    <div className='flex justify-center h-screen bg-blue-[400]'>
         <div className='bg-white mon-w-[600px] min-h-[400px] p-[50px] rounded-[10px]'>

      <h1 className='bg-white mon-w-[600px] min-h-[400px] p-[50px] rounded-[10px]'></h1>

      {children}
      </div>
    </div>
  )
}
