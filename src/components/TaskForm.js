import React from 'react'
import { useState } from 'react'

export default function TaskForm({ onSubmit }) {

   const [newTask, setNewTask] = useState('')

   const addTask = (e) => {
      e.preventDefault()
      if (newTask == '') return
      onSubmit(newTask)
      setNewTask('')
   }

   
   return (
      <form className="task-form d-flex gap-2 mb-5" action="#" onSubmit={addTask}>
         <div className="form-field flex-grow-1 mb-0">
            <label htmlFor="taskInput" hidden>New task</label>
            <input
               type="text"
               name="todo-input"
               id='taskInput'
               placeholder="Task"
               value={newTask}
               onChange={(e) => setNewTask(e.target.value)} 
            />
         </div>
         <button className="btn btn-cta" type="submit">Add</button>
      </form>
   )
}