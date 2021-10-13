import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

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

  return (
  <div className='container'>
    <Header />
    <Tasks tasks={tasks}/>
  </div>
  );
}

export default App;
