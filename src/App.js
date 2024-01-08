import Todo from './components/Todo';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState('HI')
  const [todoList,setTodoList]=useState([])
  const handleChange=(e)=>{
setTodo(e.target.value)
  }
const addNewTodo=()=>{
setTodoList([...todoList,{text:todo,done:false, id:Date.now()}])
}
const handleDone=(index)=>{
const clonedCopy=JSON.parse(JSON.stringify(todoList))
clonedCopy[index].done=true
setTodoList(clonedCopy)
}
const handledelete=(id)=>{
const newData=todoList.filter((ele)=>{
  if(ele.id!==id){
    return ele
  }
})
setTodoList(newData)
}
  return (
<>
<div className='container'>
<div className='todo-box'>
  <div className='todo-list-container'>
  <input type="text" placeholder='add your todo' value={todo} onChange={handleChange}/>
  <span onClick={addNewTodo}><Button label={'ok'} /></span>
  </div>

{ todoList.map((element, index)=><div className='todo-list-container'>
  <Todo data={element} slno={index+1} />
{element.done?null: <span onClick={()=>handleDone(index)}><Button label={'Done'} color={'burlywood'}/></span>}
<span onClick={()=>handledelete(element.id)}><Button label={'Delete'} color={'red'}/></span>
  </div>  
  )  }
</div>
</div>
</>
  );
}

export default App;
