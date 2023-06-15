import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoPage from './Components/TodoPage';

function App() {
  const [todoList, setTodoList] = useState([])
  const [dropdown, setDropdown] = useState('All')

  const handleNewTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: false,
      date: new Date().toISOString()
    }
    setTodoList([...todoList, newTodo])
  }

  const handleDeleteTodo = (id) => {
    const remainingTodos = todoList.filter((todo) => {
      if (id === todo.date) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodoList(remainingTodos)
  }

  const toggleCompleted = (id) => {
    const updatedTodos = todoList.map((todo) => {
      if (id === todo.date) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodoList(updatedTodos)
  }

  const handleUpdateTodo = (id, updateTodo) => {
    const update = todoList.map((todo) => {
      if (id === todo.date) {
        todo.todo = updateTodo
      }
      return todo
    })
    setTodoList(update)
  }
  
  const dropdownMatches = todoList.filter((todo) => {
    if (dropdown === 'Completed') {
      return todo.completed === true
    }
    if (dropdown === 'Incompleted') {
      return todo.completed === false
    }
    return todo
  })
  
    // setTodoList(completed)
    console.log(dropdownMatches)
  

  return (
    <div className="App">
      <Form handleNewTodo={handleNewTodo} />
      <select onChange={(e) => setDropdown(e.target.value)}>
          <option value={'All'}>All</option>
          <option value={'Completed'}>Completed</option>
          <option value={'Incompleted'}>Incompleted</option>
      </select>
      <TodoPage 
        todoList={dropdownMatches}
        handleDeleteTodo={handleDeleteTodo}
        toggleCompleted={toggleCompleted}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
