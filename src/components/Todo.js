import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodoForm}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
      <div>
      <i class="fa-solid fa-pen-to-square" onClick={()=> editTodoForm(task.id)}></i>
      <i class="fa-solid fa-trash" onClick={()=>deleteTodo(task.id)}></i>
      </div>
    </div>
  )
}


