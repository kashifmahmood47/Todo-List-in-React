import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container my-5">
            <h2> Task List </h2>
            {
            
            /* <h2>Todo List</h2>
      <p>All the Todos are shown below</p>
      <p>{props.todoEl[0].desc}</p> */
      
      //props.todoEl is the array here
//
            props.todoEl.length===0? "No Todos to display" : 
            props.todoEl.map((pTodo) => {
                    return <TodoItem passTodo={pTodo} onDelete={props.onDelete} key={pTodo.sno}/>
                })
            }


        </div>
    )
}
