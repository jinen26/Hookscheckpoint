import React, { useState } from 'react'
import Addmodal from './Addmodal'
import { useNavigate } from 'react-router-dom'


const Navbar = ({setadd,setSearch}) => {
  const navigate = useNavigate()
  return (
    <div className='nav'>
      <h1>Movie App</h1>
      <input onChange={(e)=>setSearch(e.target.value)}type='text' placeholder='search'/>
      <button onClick={()=>setadd(true)}>Add</button>
      <button onClick={()=>navigate("/Login")}>Login</button>
    
   
    </div>
  )
}

export default Navbar

