"use client"
import React from 'react';
import Link from 'next/link'

export default function page() {
  
  const handleSubmit=(e:any)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter your email"
        className="w-full border border-[#666] h-[60px] p-[15px] rounded-[50px] text-[18px] mb-[15px]"
      />
      <input
        type="password"
        placeholder="enter your password"
        className="w-full border border-[#666] h-[60px] p-[15px] rounded-[50px] text-[18px] mb-[15px]"
      />
      <p className='text-[#666] text-[18px] '>Don't have an account ?
      <Link href="/auth/register"> Register</Link>
      </p>
      <button type="submit" className=''>Sign In</button>
    </form>
  );
}
