import React from 'react'

export default function TodoItem({passTodo, onDelete}) {
  return (
      
    <div className="my-4">
    
      <h4>{passTodo.title}</h4>
      <p>{passTodo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(passTodo)} } key={passTodo.sno}>Delete</button>
      
     
      
    </div>
  )
}
