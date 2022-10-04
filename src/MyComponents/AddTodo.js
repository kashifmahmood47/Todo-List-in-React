import React, { useState } from 'react';

export default function AddTodo(props) {

  let inputFStyle = {
    borderRadius: "10px",
    width: "100%",
    borderColor: "#e2e2e28f",
    padding: " 12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
  }

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function submit(e) {
    e.preventDefault(); //prevent refresh
    if (!title) {
      alert("title cannot be empty");
    }
    else if (!desc) {
      alert("description cannot be empty");
    }
    else {
      props.addTodo(title, desc);
  setTitle("");
  setDesc("");
    }


  }

  return (

    <div className="container my-5">
      <h2> Add Todo </h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="title" >Todo Title</label>
          <input style={inputFStyle} type="text" id="title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
        </div>
        <div>
          <label htmlFor="desc" > Todo Descrition</label>
          <input style={inputFStyle} type="text" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
        </div>
        <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
    </div>

  )
}
