import React from 'react'
import Moviescard from './Moviescard'
import Moviesmodal from './Moviesmodal'

const Movieslist = ({movies,search}) => {
    
  return (
    <div className='list'>
   {movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase())).map(el=><Moviescard el={el}/>)}
   
    </div>
  )
}

export default Movieslist
