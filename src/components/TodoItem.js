import React from 'react'


function OptionItem({ text, icon, action }) {

   const cta = (e) => {
      e.preventDefault()
      e.target.closest('.option-list.show').classList.remove('show')
      if (action) action()
   }

   return (
      <li className='option-item'>
         <a href="#" className={`option-link flex-row ${action && 'active'}`} onClick={cta}>
            <div className="icon"><i className={icon}></i></div>
            <div className="text">{text}</div>
         </a>
      </li>
   );
}


function TodoItem({ id, title, completed, launchTaskPopup, changeStatus, deleteTask }) {

   const toggleOptions = (e) => {
      let todoOptions = e.target.closest('.todo-options')
      let optionList = todoOptions.querySelector('.option-list')
      let visibleOptionList = document.querySelector('.todo-options .option-list.show')

      if (visibleOptionList && !todoOptions.contains(visibleOptionList)) {
         visibleOptionList.classList.remove('show')
      }

      if (!optionList.classList.contains('show')) {
         optionList.classList.add('show')
         return
         
      } else {
         optionList.classList.remove('show')
         return
      }
   }


   return (
      <li id={id} className="todo-item flex-row align-start">
         <div className="check">
            <input 
               type="checkbox" 
               name="todo-status"
               checked={completed} 
               onChange={() => changeStatus(id)} 
            />
         </div>

         <div className="content flex-grow-1" onClick={() => launchTaskPopup(id, title)}>
            <p>{title}</p>
         </div>

         <div className="todo-options">
            <button className="btn-transparent" data-toggle="options" onClick={toggleOptions}>
               <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <ul className="option-list">
               <OptionItem
                  text={'Update'}
                  icon={'fa-regular fa-pen-to-square'}
                  action={() => launchTaskPopup(id, title)}
               />
               <OptionItem
                  text={'Delete'}
                  icon={'fa-regular fa-trash-can'}
                  action={() => deleteTask(id)}
               />
            </ul>
         </div>
      </li>
   )
}

export default TodoItem
