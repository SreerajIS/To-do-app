import React, {useState} from 'react'

export const EditTodoForm = ({editTodoForm, task}) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = e =>{
    e.preventDefault();

    editTodoForm(value, task.id);

    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}


