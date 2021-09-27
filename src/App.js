import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form'

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStaus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  const [checkText , setCheckText] = useState([]);


  useEffect(() => {


    const filteredHandler = () => {
      switch (status) {
        case 'completed':
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;

        case 'uncompleted':
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;

        default:
          setFilterTodos(todos);
          break;


      }

    }

    filteredHandler();
  }, [todos, status]);



  return (
    <div className="App">

      <header>
        <h1>AV's ToDo List</h1>
      </header>


      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStaus={setStaus}
        checkText={checkText}
        setCheckText={setCheckText}

      />

      <TodoList todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}

      />

    </div>
  );
}

export default App;
