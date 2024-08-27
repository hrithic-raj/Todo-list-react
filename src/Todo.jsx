import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button } from 'react-bootstrap'


function Todo(){
    const [todo,setTodo]=useState('');
    const [todos,setTodos]=useState([]);
        const addTodo=()=>{
            if(todo.trim()){
                setTodos([...todos,{text:todo,isChecked:false}]);
                setTodo('');
            }
        }
        const delTodo=(index)=>{
            const newTodo=todos.filter((item,i)=> i!==index)
            setTodos(newTodo);
        }
        const checkTodo=(index)=>{
            const newTodo=todos.map((item,i)=>(
                i===index?{...item,isChecked:!item.isChecked}:item
            ));
            setTodos(newTodo);
        }
    return (
            <div className='tododiv'>
                <br />
                <h1>ToDo List</h1>
                <div className='todo-top'>
                    <Form.Control type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter the ToDo item here'/>
                    <button onClick={addTodo}>Add</button>
                </div>
                <div className='todo-list'>
                    {todos.map((item,index)=>{
                        return <div key={index} className="todo-items" style={{backgroundColor: item.isChecked ?"rgba(24, 126, 117, 0.607)":"rgb(24, 126, 117)"}}>
                            <Form.Check checked={item.isChecked} onChange={()=>checkTodo(index)}/>
                            <span style={{color: item.isChecked ?"#fffff066":"#fffff0"}}>{item.text}</span>
                            <Button style={{opacity: '0.93'}} variant='danger' onClick={()=>delTodo(index)}>Delete</Button>
                        </div>
                    })}
                    
              </div>
            </div>
    )
}

export default Todo
