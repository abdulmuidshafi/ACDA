 import React from 'react'
import { Outlet } from 'react-router-dom'
 
const Project = () => {
   return (
     <div>
           <div className="p-2 h-100">
      <Outlet />
    </div>
     </div>
   )
 }
 
 export default Project
 