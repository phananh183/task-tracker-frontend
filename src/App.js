import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddForm from './Components/AddForm';

function App() {

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "Clean yo room",
          time: "Today at 11pm",
          reminder: true

      },
      {
          id: 2,
          text: "Call yo mom",
          time: "Tmr at 7pm",
          reminder: true

      },
      {
          id: 3,
          text: "Learn yo code",
          time: "Friday at 8pm",
          reminder: false

      },
    ])
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    console.log("Deleted task ", id)
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))

    console.log('Double click', id)
  }

  return (
  <div className='container'>
    <Header />
    <AddForm />
    {
    tasks.length === 0 
    ? 'There is no tasks' 
    : <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/>
    }
  </div>
  );
}

export default App;
