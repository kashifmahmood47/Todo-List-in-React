import './App.css';
import Header from './MyComponents/Header';
import Slider from './MyComponents/Slider';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todoEl") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoEl"))
  }


  const onDelete = (todo) => {
    console.log("I am onDelete", todo);

    setTodoEl(todoEl.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todoEl', JSON.stringify(todoEl));
  }

  const [todoEl, setTodoEl] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todoEl', JSON.stringify(todoEl));
  }, [todoEl])
  const addTodo = (title, desc) => {
    console.log("i'm adding", title, desc);
    let sno;
    if (todoEl.length === 0) {
      sno = 1;
    } else {
      sno = todoEl[todoEl.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    console.log("i'm adding", sno, title, desc);
    setTodoEl([...todoEl, newTodo]);

  }


  return (
    <div>
    <Router>

      
        <Header siteTitle="React TodoList" />
        
        <Routes>
{/* 
          <Route exact path="/" render={() => {
            return (
              <div>
                <Slider />
                <AddTodo addTodo={addTodo} />
                <Todos todoEl={todoEl} onDelete={onDelete} />
              </div>
            )
          }}>


          </Route> */}
           <Route exact path="/"
          element={<div>
            <Slider />
            <AddTodo addTodo={addTodo} />
            <Todos todoEl={todoEl} onDelete={onDelete} />
          </div>}/>
          <Route exact path="/about"
          element={<About />}/>
         


        </Routes>

        <Footer />

      

    </Router></div>
  );
}



export default App;
