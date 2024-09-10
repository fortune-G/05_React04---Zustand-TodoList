import React, { useState } from 'react'
import UseFlukStore from '../../Store/FlukStore'


const AddInput = () => {
const [added,setAdded] = useState('')
const{addTodo} = UseFlukStore((state)=>({
addTodo:state.addTodo
}))

const hdlChange = (e)=>{
  setAdded(e.target.value)
}
const hdlClick =()=>{
  addTodo(added)
  setAdded('')
}
  return (
    <div className='flex flex-grow gap-4 justify-center py-4'>
      <input onChange={hdlChange} type="text" className='rounded-md h-8 ' value={added} />
      <button onClick={hdlClick} className='bg-gray-800 px-3 text-white rounded-md '>ADD</button>
    </div>
  )
}

export default AddInput
