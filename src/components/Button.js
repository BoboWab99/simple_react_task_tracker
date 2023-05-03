import React from 'react'
import PropTypes from 'prop-types'

const Button = (
   {
      type,
      btn,
      sm,
      lg,
      cl,
      text,
      disabled,
      icType,
      icBfr,
      icAft,
      bsToggle,
      bsTarget,
      onClick
   }) => {

   // state, effect, context

   return (
      <button
         type={type}
         className={`btn btn-${btn}${cl ? cl : ''}${sm ? 'btn-sm' : ''}${lg ? 'btn-lg' : ''}`}
         data-bs-toggle={bsToggle}
         data-bs-target={bsTarget}
         onClick={onClick}
         disabled={disabled}
      >
         {icBfr && (
            <span className='icon d-inline-block pe-2'>
               <i className={`fa-${icType} fa-${icBfr}`}></i>
            </span>
         )}
         <span className='text'>{text}</span>
         {icAft && (
            <span className='icon d-inline-block ps-2'>
               <i className={`fa-${icType} fa-${icAft}`}></i>
            </span>
         )}
      </button>
   )
}

Button.defaultProps = {
   type: 'button',
   btn: 'btn-primary',
   icType: 'solid'
}

Button.propTypes = {
   type: PropTypes.string,
   btn: PropTypes.string,
   sm: PropTypes.bool,
   lg: PropTypes.bool,
   cl: PropTypes.string,
   text: PropTypes.string,
   disabled: PropTypes.bool,
   icType: PropTypes.string,
   icBfr: PropTypes.string,
   icAft: PropTypes.string,
   bsToggle: PropTypes.string,
   bsTarget: PropTypes.string,
   onClick: PropTypes.func,
}

export default Button
