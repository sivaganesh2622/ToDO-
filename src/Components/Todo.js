import React, { useState } from 'react'
import './Todo.css'
import Todoitems from './Todoitems'

const Todo = () => {
    const [todos, setTodos] = useState([{id:1,text:"mango"}])
    const [ipvalue,setIpvalue] = useState()
    
    const inputText =(e)=>{
        setIpvalue(e.target.value)
    }

    const add=()=>{
        setTodos([...todos,{id:todos.length+1,text:ipvalue}])
    }


    return (
        <div className='todo'>
            <div className='todo-header'> To-Do List</div>
            <div className="todo-add">
                <input onChange={inputText} value={ipvalue} type="text" placeholder='add your task' className='todo-input' />
                <div onClick={add} className="todo-add-btn">ADD</div>
            </div>
            {
                todos.map((item ) => {
                    return (<>
                       <Todoitems setTodos={setTodos} todos={todos} item={item.text} id={item.id}/>
                    </>)
                })
            }
        </div>
    )
}

export default Todo