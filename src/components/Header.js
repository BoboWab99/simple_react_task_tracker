import React from 'react'

const Header = () => {
   return (
      <header id="header" className="header">
         <div className="container">
            <div className="flex-row justify-between align-center">
               <a href="." className="logo">
                  MyTodos
               </a>

               <nav className="nav">
                  <div className="flex-row">
                     <button className="btn-transparent text-uppercase">Logout</button>
                  </div>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
