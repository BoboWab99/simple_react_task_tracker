import React from 'react'
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskFormPopup from './components/TaskFormPopup'
import TodoItem from './components/TodoItem'


function AppTest() {

   const [todos, setTodos] = useState(() => {
      const savedTasks = localStorage.getItem('mytodos_app_tasks')
      if (!savedTasks) return []
      const parsed = JSON.parse(savedTasks)
      parsed.sort((a, b) => a.completed - b.completed)
      return parsed
   })

   useEffect(() => {
      localStorage.setItem('mytodos_app_tasks', JSON.stringify(todos))
   }, [todos])

   const addTask = (task) => {
      setTodos(currentTasks => {
         return [
            ...currentTasks,
            {
               id: crypto.randomUUID(),
               title: task,
               completed: false
            },
         ]
      })
   }

   const updateTask = (id, newTitle) => {
      setTodos(currentTasks => {
         return currentTasks.map(todo => {
            if (todo.id === id) {
               return { ...todo, title: newTitle }
            }
            return todo
         })
      })
   }

   const deleteTask = (id) => {
      setTodos(currentTasks => {
         return currentTasks.filter(todo => todo.id !== id)
      })
   }

   const toggleTaskCompletedStatus = (id) => {
      setTodos(currentTasks => {
         return currentTasks.map(todo => {
            if (todo.id === id) {
               let status = !todo.completed
               return { ...todo, completed: status }
            }
            return todo
         })
      })
   }
   
   const handleToggleOptions = (e) => {
      let visibleOptions = document.querySelector('.todo-options .option-list.show')
      if (visibleOptions && !visibleOptions.closest('.todo-options').contains(e.target)) {
         visibleOptions.classList.remove('show')
      }
   }

   useEffect(() => {
      window.addEventListener('click', handleToggleOptions)
      return () => {
         window.removeEventListener('click', handleToggleOptions)
      }
   }, [])

   const launchTaskPopup = (id, title) => {
      const holder = document.getElementById('todoPopupHolder')
      const container = document.createElement('div')
      container.setAttribute('class', 'popup-container')

      const root = ReactDOM.createRoot(container)
      root.render(<TaskFormPopup id={id} title={title} updateTask={updateTask} closeTaskPopup={closeTaskPopup} />)
      holder.appendChild(container)
      setTimeout(() => {
         holder.querySelector('.popup').classList.add('show')
      }, 100);
   }

   const closeTaskPopup = () => {
      const popup = document.getElementById('todoPopupHolder').querySelector('.popup')
      popup.classList.remove('show')
      setTimeout(() => {
         popup.closest('.popup-container').remove()
      }, 500)
   }

   
   return (
      <>
         <Header />

         <main id="main-content" className="main-content">
            <div className="container">
               <h5 className="group-active text-uppercase">
                  Today
               </h5>

               <TaskForm onSubmit={addTask} />

               <ul className="todo-list">
                  {todos.length === 0 && "No tasks!"}
                  {todos.map(todo => {
                     return (
                        <TodoItem 
                           {...todo}
                           key={todo.id}
                           launchTaskPopup={launchTaskPopup}
                           changeStatus={toggleTaskCompletedStatus}
                           deleteTask={deleteTask}
                        />
                     )
                  })}
               </ul>
            </div>
         </main>

         <div id="todoPopupHolder"></div>
      </>
   )
}

export default AppTest
