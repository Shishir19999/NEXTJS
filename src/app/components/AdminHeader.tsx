import React, { useRef } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

export default function AdminHeader() {
  


  return (
    <div className='group relative h-[50px] flex justify-between items-center px-[30px]'>
      <div>
      <FaBarsStaggered />
      </div>

      <div className='flex gap-3 items-center'>
        <FaRegUser/>
        <span>Admin</span>
      </div>

      <div className='absolute right-0 top-[100%] w-[200px] bg-slate-300 p-[15px] rounded-lg items-center gap-3 hidden group-hover:flex'>
          <CiLogout />
          <span>Logout</span>
        </div>

    </div>
  )
}