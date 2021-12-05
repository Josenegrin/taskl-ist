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

    //     const { name, value } = e.target
    const { name, value } = e.target
    setTask({ [name]: value })
  }

  const checkHandler = (e, id) => {
    // console.log(e.target.checked)
    // const checked = e.target.checked
    // Nunca console.log 
  console.log(id, 'id')
    const findingId = taskList.find((task) => {
      return task.id === id
      })
      findingId.checked = e.target.checked
      const newTaskList = taskList.map(task => {  
        if(task.id === findingId.id) {

          // task.checked = e.target.value
          // return task
          return {...task, checked: e.target.value }

        } else {
          return task
        }
      })
      // setTaskList(newTaskList)
      console.log(taskList)
      // Setear este nuevo array
      // En el .map del template, cuando sea true añadir una clase a donde esta el texto
      // Declaramos en el css que la clase que le añadamos tache el texto
      
      // console.log(findingId)
      // prueba.apellidos = 'Casas'
      // prueba['apellidos'] = 'Casas'
      // const prueba2 = 'apellidos'
      // prueba[prueba2] = 'Casas'
 
      // push, map, filter, find, reduce, sort --> Array


      // const findingId = taskList.find(task => task.id === id)
      // setTaskList()
    // console.log(e.target.checked, taskList.id, "Esta chequeado")
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
        {/* <form className='form' onSubmit={sendTaks}> */}
          <form className='form' onSubmit={sendTaks}>
            <input className='input' name='title' type='text' placeholder='Escribe la nueva tarea' onChange={addHandler}/>
            <button disabled={task.title.length === 0} className='button_submit'> Añadir </button>
            {/* <button disabled={task.title.length === 0}className='button_submit' onClick={sendTaks}>Añadir</button> */}
          </form>
        </div>
        <ul className='list'>
        {taskList.map((itemTask) => {
          return (
            <li key={itemTask.id}className='itemList'>
              <label className={`itemList_label ${itemTask.checked ? 'itemList_label_checked' : ''}`}>
                {/* <input type='checkbox' name='checked' onChange={(e) => checkHandler(e, itemTask.id)} /> */}
                <input type='checkbox' name='checked' onChange={(e) => checkHandler(e, itemTask.id)} />
                {/* <input type='checkbox' name='checked' onChange={checkHandler} /> */}   
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

