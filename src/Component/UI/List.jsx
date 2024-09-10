import React, { useState } from 'react'
import UseFlukStore from '../../Store/FlukStore'
import { toast } from "react-toastify";

const List = (props) => {
    const{item,index} = props
    // console.log(props)
    const [title,setTitle] = useState(item.title)
    const [edit,setEdit] = useState(false)

    const{delTodo,editTodo,changedStatus} = UseFlukStore((state)=>({
      delTodo:state.delTodo,
      editTodo:state.editTodo,
      changedStatus:state.changedStatus
    }))

    const hdlChangeTitle = (e)=>{
        setTitle(e.target.value)
    }
    const hdlEdit = () =>{
      setEdit(!edit)

    }
    const hdlDel = (id,title) =>{
      delTodo(id)
      toast.success(`Deleted ${title} ok`);
    }
    const hdlConfirm =()=>{
      setEdit(!edit)
      editTodo(id,title)
      toast.success(`Edit ${title} Success!!`);
    }
    const hdlChangeStatus =(id,status)=>{
      changedStatus(id,status)
      toast.info(`Update status Ok`);
    }







  return (
    <div>
      {/* <div><input type="text" onChange={hdlChangeTitle} defaultValue={item.Title} /></div> */}
      <div className='flex gap-3 mt-5'>
      <div className={`bg-${
          item.status ? "red" : "blue"
        }-100 border border-blue-900  py-4 p-6 
      rounded-md w-full text-left hover:scale-105 
      hover:duration-200 hover:shadow hover:cursor-pointer`}>
        {edit? (<input type="text" defaultValue={item.title} onChange={hdlChangeTitle}/>):
        (<div className="relative"
          onClick={() => hdlChangeStatus(item.id, !item.status)}>
            <p className={`${item.status? "line-through":""}`}>{index+1}.{title}</p>
        </div>) }
      </div>
      
      <div>
        {edit? ( <button className="py-4 p-6  h-full
          rounded-md  text-left hover:scale-105 
          hover:shadow-md hover:duration-200 hover:cursor-pointer 
          hover:-translate-y-1 bg-green-500" onClick={()=>hdlConfirm(item.id)}>CONFIRM</button> ):
        ( <button disabled={item.status}
          className={`bg-${
            item.status ? "gray" : "yellow"
          }-100 py-4 p-6  h-full
        rounded-md  text-left hover:scale-105 
        hover:shadow-md hover:duration-200 hover:cursor-pointer 
        hover:-translate-y-1 bg-yellow-500`} onClick={()=>hdlEdit(item.id,'fuck')}>EDIT</button> )}
      </div>
      <div>
        <button className="py-4 p-6  h-full
      rounded-md  text-left hover:scale-105 
      hover:shadow-md hover:duration-200 hover:cursor-pointer 
      hover:-translate-y-1 bg-red-600" onClick={()=>hdlDel(item.id,item.title)}> DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default List
