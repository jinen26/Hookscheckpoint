import React from 'react'
import App from './App'
const Addmodal = ({setmovies,setadd,movies,newmovie,setnewmovie}) => {

const addmovie=()=>setmovies([...movies,newmovie])
        return (
          <div className='addmodal'>
            <div className='modalisa'>
          <button onClick={()=>setadd(false)}>x</button>
              <input onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} type='text' placeholder='title'/>
              <input  onChange={(e)=>setnewmovie({...newmovie,genre:e.target.value})} type='text' placeholder='genre'/>
              <input   onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} type='text' placeholder='description'/>
              <input  onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})} type='text' placeholder='image'/>
              <button onClick={()=>{setadd(false);addmovie()}}>Add</button>
            </div>
          </div>
  )
}

export default Addmodal
