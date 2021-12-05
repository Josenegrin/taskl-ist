import { useState } from 'react'
import './App.css'

const App = () => {
  const [task, setTask] = useState({
    title: '',
    cheked: false,
    id : '',
  })
  
  const [taskList, setTaskList] = useState([])

  const addHandler = e => { 
    const { name, value } = e.target
    setTask({ [name]: value })
  }

  const checkHandler = (e, id) => {
    const findingId = taskList.find((task) => {
      return task.id === id
      })
      findingId.checked = e.target.checked
      const newTaskList = taskList.map(task => {  
        if(task.id === findingId.id) {

          return {...task, checked: e.target.value }

        } else {
          return task
        }
      })
      console.log(taskList)

  }

  const sendTaks = (e) => {
    e.preventDefault()
    const allTasks = [...taskList]
    allTasks.push({...task, id: Date.now()})
    setTaskList(allTasks)

  }

  const deleteCompletedTasks = (checked) => {
    setTaskList([...taskList.filter(task => task.checked !== true)])
  }
  console.log(task)
  console.log(taskList)
  return (
    <div className='container'>
      <div className='container_form_list'>
        <div className='container_form'>
          <form className='form' onSubmit={sendTaks}>
            <input className='input' name='title' type='text' placeholder='Escribe la nueva tarea' onChange={addHandler}/>
            <button disabled={task.title.length === 0} className='button_submit'> Añadir </button>
          </form>
        </div>
        <ul className='list'>
        {taskList.map((itemTask) => {
          return (
            <li key={itemTask.id}className='itemList'>
              <label className={`itemList_label ${itemTask.checked ? 'itemList_label_checked' : ''}`}>
                <input type='checkbox' name='checked' onChange={(e) => checkHandler(e, itemTask.id)} />
                <span className='checkbox-custom check-style'></span>
                {itemTask.title}
              </label>
            </li>
          )
        })}
        <button onClick={deleteCompletedTasks} className='buton_delete_completed'>Eliminar completados</button>
        </ul>
      </div>
    </div>
  )
}

export default App

