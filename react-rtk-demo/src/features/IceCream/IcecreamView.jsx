import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordered,restocked } from './icecreamSlice'

 const IcecreamView = () => {
  const [value,setValue]=useState(1)
  const dispatch=useDispatch()
 const numOfcreams = useSelector((state) => state.icecream.numOfIcecreams)
  return (
    <div>
        <h2>Number of Icecreams:{numOfcreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
        <input type='number' onChange={(e)=>{
          setValue(parseInt(e.target.value))
        }}/>
        <button onClick={()=>dispatch(restocked(value))}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView 