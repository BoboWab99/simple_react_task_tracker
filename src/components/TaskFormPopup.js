import React from 'react'
import { useState } from 'react'

function TaskFormPopup({ id, title, updateTask, closeTaskPopup }) {

   const [task, setTask] = useState(title)

   return (
      <div className="popup popup-edit-todo" id={`editTaskPopup-${id}`}>
         <div className="popup-shadow">
            <form
               action="#"
               className="popup-content"
               onSubmit={e => {
                  e.preventDefault()
                  updateTask(id, task)
                  closeTaskPopup()
               }}
            >
               <div className="popup-header">
                  Edit task
               </div>
               <div className="popup-body">
                  <input
                     type="text"
                     name="todo-input"
                     placeholder="Task"
                     value={task}
                     onChange={e => setTask(e.target.value)}
                  />
               </div>
               <div className="popup-footer">
                  <button
                     type="reset"
                     data-close="popup"
                     className="btn btn-popup-cancel"
                     onClick={() => closeTaskPopup()}
                  >
                     Cancel
                  </button>
                  <button
                     type="submit"
                     className="btn btn-popup-cta"
                  >
                     Update
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default TaskFormPopup
