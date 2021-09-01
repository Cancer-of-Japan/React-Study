import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './componets/Header'
import Button from './componets/Button'
import Tasks from './componets/Tasks'
import AddTask from './componets/AddTask'
import Footer from './componets/Footer'
import About from './componets/About'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },
[])

//Fetach Tasks
const fetchTasks = async () => { 
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)
    return data 
}

//Fetch Task
const fetchTask = async (id) => { 
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  console.log(data)
  return data 
}


//Add task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])

  // const id = Math.floor(Math.random()*10000)+1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    }
  )
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: data.reminder}:task
    )
  )
}


  return (
    <Router>
      <div className="container">
        <Header　onAdd={() => setShowAddTask
          (!showAddTask)}
          showAdd = {showAddTask}/>
        <Route path='/' exact render={(props) => (
          <>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (
            <Tasks 
              tasks = {tasks} 
              onDelete={deleteTask} 
              onToggle = {toggleReminder}
              />
          ) :( 'No Tasks to Show' )}
          </>
        )} />
        <Route path='/about'component={About}/>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App 
