import React from 'react';
import DashboardPanelCard from '@/components/DashboardPanelCard'
import { FaUsers,FaGuitar, FaMusic } from "react-icons/fa";


export default function DashboardPage() {

  const panelItems = [
    { color: "#27ae60", href: "/admin/user", title: "Users", counter: 6, icon :  <FaUsers /> },
    { color: "#27ae60", href: "/admin/artist", title: "Artists", counter: 16, icon :  <FaGuitar /> },
    { color: "#27ae60", href: "/admin/music", title: "Musics", counter: 206, icon :  < FaMusic/> },
  ]

  return (
    <div className='grid grid-cols-12'>
        
        {
          panelItems.map((item, index) =>{
            return(
              <div key={index} className='col-span-4'>
                <DashboardPanelCard color={item.color} title={item.title} counter={item.counter} href={item.href} icon={item.icon} />
            </div>
            )
          })
        }

    </div>
  )
}