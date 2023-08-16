import React from 'react'

const Moviesmodal = ({setShow,el}) => {
  return (
    <div className='moviemodal'>
      <div className='modalisa'>
        <button onClick={()=>setShow(false)}>X</button>
        <h1>{el.name}</h1>
        <h2>{el.genre}</h2>
        <p>{el.description}</p>
      </div>
    </div>
  )
}

export default Moviesmodal
