import React,{ReactNode} from 'react'
import  Link  from 'next/link'

interface Props{
    title:string,
    counter:number,
    icon:ReactNode,
    href:string,
    color:string
}
export default function DashboardPanelCard({title, counter,color, icon, href }: Props) {
    return (
      <div className='flex justify-between border-2 border-slate-300 p-[30px] rounded-[15px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <div className='flex flex-col'>
              <h4 className='text-[24px] font-bold text-black'>{title}</h4>
              <span className={`text-[24px] font-bold text-[${color}] my-5`}>{counter}</span>
              <Link href={href} className={`bg-[${color}] px-5 py-3 rounded-[5px] text-white`}>View Details</Link>
          </div>
          <div>
              <div className={`w-[50px] h-[50px] bg-[${color}] rounded-full flex justify-center items-center text-white`}>{icon}</div>
          </div>
  
      </div>
    )
  }
