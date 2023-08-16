import React, { useState } from 'react'
import Moviesmodal from './Moviesmodal'
import Addmodal from './Addmodal'
import Navbar from './Navbar'


const Moviescard = ({el}) => {
    const [show, setShow] = useState(false)
  return (
    <div className='card'>
{show?<Moviesmodal setShow={setShow} el={el}/>:null}
<img onClick={()=>setShow(true)} src={el.image} alt=''/>    </div>
  )
}

export default Moviescard
