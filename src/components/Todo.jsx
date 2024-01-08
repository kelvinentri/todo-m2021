import React from 'react'
import './css/todo.css'

function Todo({data, slno}) {
  return (
    <div className={`todo ${data.done?'strike ': null}`} strike >{slno}. {data.text}</div>
  )
}

export default Todo