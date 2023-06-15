import React from 'react'
import TodoCard from './TodoCard'

function TodoPage({ todoList, handleDeleteTodo, toggleCompleted, handleUpdateTodo, handleDropdown }) {
  return (
    <div>
        <h1>Todos:</h1>
        {todoList.length > 0 &&
        todoList.map((todo) => {
            return (
                <TodoCard 
                    key={todo.date}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    toggleCompleted={toggleCompleted}
                    handleUpdateTodo={handleUpdateTodo}
                    handleDropdown={handleDropdown}
                />
            )
        })}
    </div>
  )
}

export default TodoPage