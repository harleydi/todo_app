import React, { useState } from 'react'

function TodoCard({ todo, handleDeleteTodo, toggleCompleted, handleUpdateTodo }) {
  const [toggleEdit, setToggleEdit] = useState(false)
  const [updateTodo, setUpdateTodo] = useState(todo.todo)
  const [editButton, setEditButton] = useState("Edit")
  const [deleteButton, setDeleteButton] = useState("Delete")

  
  return (
    <div>
        <div>
            {toggleEdit ? (
                <input 
                    type="text" 
                    value={updateTodo} 
                    onChange={(e) => setUpdateTodo(e.target.value)} 
                />
            ) : (
                <span
                    style={{ textDecoration: todo.completed ? "line-through" : "none"}}
                >
                    {todo.todo}
                </span>

            )}
        </div>
        {toggleEdit ? (
            <div>
                <button className='submit' onClick={() => {
                    handleUpdateTodo(todo.date, updateTodo)
                    setToggleEdit(false)
                } }>Submit</button>
                <button className='cancel' onClick={() => setToggleEdit(false)} >Cancel</button>
            </div>
        ) : (
            <div>
                <input 
                    type='checkbox'
                    id='my-check'
                    checked={todo.completed}
                    onChange={() => toggleCompleted(todo.date)}
                />
                <button className="edit" onClick={() => setToggleEdit(true)}>Edit</button>
                <button className='delete' onClick={() => handleDeleteTodo(todo.date)}>Delete</button>
            </div>
        )}
    </div>
  )
}

export default TodoCard