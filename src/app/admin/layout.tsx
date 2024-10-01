import React, { ReactNode } from 'react'
import AdminSidebar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'

export default function AdminLayout({ children}: { children: ReactNode}) {
  return (
    <div className='relative w-screen h-screen'>
        <div className='w-[270px] bg-black absolute h-full'>
            <AdminSidebar/>
        </div>
        <div className='absolute w-[calc(100%-270px)] left-[270px] bg-slate-200 h-[50px]'>
            <AdminHeader/>
        </div>
        <main className='absolute top-[50px w-[calc(100%-270px)] left-[270px] bg-slate-200 h-[calc(100%-50px)]'>
            { children}
        </main>
    </div>
  )
}