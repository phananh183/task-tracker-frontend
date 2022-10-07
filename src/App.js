import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddForm from './Components/AddForm';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const fetchTaskByID = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToChange = await fetchTaskByID(id)
    const updatedTask = {...taskToChange, reminder: !taskToChange.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) =>  
      task.id === id ? {...task, reminder: data.reminder} : task
    ))
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
  <div className='container'>
    <Header onShowAddTask={toggleShowAddTask} showAddTask={showAddTask}/>
    {showAddTask && <AddForm onAdd={addTask}/>}
    {
    tasks.length === 0 
    ? 'There is no tasks' 
    : <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/>
    }
  </div>
  );
}

export default App;
