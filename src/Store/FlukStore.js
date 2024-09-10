import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const FlukStore = (set) => ({
  todoList: [
    { id: 1, title: "work1", status: false },
    { id: 2, title: "work2", status: false },
    { id: 3, title: "work2", status: false },
    { id: 4, title: "work2", status: false },
    { id: 5, title: "work2", status: false },
    { id: 6, title: "work2", status: false },
    { id: 7, title: "work2", status: false },
  ],
  addTodo:(newValue)=>set((state)=>({
    todoList:[{...state.todoList},{id: Date.now(),title:newValue}]
  })),
  delTodo:(id)=>set((state)=>({
    todoList:state.todoList.filter((item,index)=>item.id !==id)
  })), 
  editTodo:(id,newTitle)=>set((state)=>({
    todoList:state.todoList.map((item,index)=> item.id == id?{...item,title:newTitle}:item)
  })),
  changedStatus:(id,newStatus)=>set((state)=>({
    todoList:state.todoList.map((item,index)=>item.id==id ? {...item,status:newStatus}:item)
  }))

})





const usePersist ={
  name: 'FlukStore',
  getStorage : ()=>localStorage
}


const UseFlukStore = create(persist(FlukStore,usePersist))
export default UseFlukStore
