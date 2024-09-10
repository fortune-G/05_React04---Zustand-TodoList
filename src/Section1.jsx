import React from 'react'
import AddInput from './Component/UI/AddInput'
import UseFlukStore from './Store/FlukStore'
import List from './Component/UI/List'


const Section1 = () => {
  const{todoList} = UseFlukStore((state)=>({
    // addTodo: state.addTodo,
    todoList: state.todoList
  }))
  console.log(todoList)
  return (
    <div className='bg-blue-300 font-sans'>
      <h1 className='drop-shadow-md text-4xl text-center font-extrabold py-5 text-white'>To Do List. . .</h1>
      <AddInput/>
      
      {todoList.map((item,index)=>(
        <List key={index} item={item} index={index}/>
      ))}
    </div>
  )
}
export default Section1
