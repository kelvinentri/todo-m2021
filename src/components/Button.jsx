import React from 'react'
import './css/Button.css'

function Button({label,color}) {
  return (
<button  style={{backgroundColor:color}} className='btn'>{label} </button>
  )
}

export default Button