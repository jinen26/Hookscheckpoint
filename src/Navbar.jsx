import React, { useState } from 'react'
import Addmodal from './Addmodal'

const Navbar = ({setadd,setSearch}) => {
  return (
    <div className='nav'>
      <h1>Movie App</h1>
      <input onChange={(e)=>setSearch(e.target.value)}type='text' placeholder='search'/>
      <button onClick={()=>setadd(true)}>Add</button>
   
    </div>
  )
}

export default Navbar

