import GoToBack from '@/components/GoToBack'
import React from 'react'

export default function page() {
  return (
    <div>
        <GoToBack/>
        <h1>Users List</h1>
        <table className='table table-zebra'>
          <thead>
            <tr className='text-[20px] bg-black text-white'>
              <th>SN</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
            <td>SN</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Address</td>
              <td>Gender</td>
              <td>Role</td>
              <td>Date of Birtd</td>
              <td>Actions</td>
            </tr>
            
          </tbody>
        </table>
    </div>
  )
}