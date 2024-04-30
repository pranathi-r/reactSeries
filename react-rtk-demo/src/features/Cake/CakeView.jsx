import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import { ordered,restocked } from './cakeSlice'

 const CakeView = () => {
  const dispatch=useDispatch()
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)

    console.log(numOfCakes)
  return (
    <div>
      
        <h2>Number of Cakes:{numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView