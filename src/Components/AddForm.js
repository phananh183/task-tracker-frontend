import { useState } from 'react'

const AddForm = ({ onAdd }) => {

    const [text, setTask] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please key in a task")
            return
        }

        onAdd({text, time, reminder})

        setTask('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add task' 
                    value={text}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                    type='text' 
                    placeholder='Add day and time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}    
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}    
                />
            </div>

            <input 
                type='submit' 
                value='Add Task' 
                className='btn btn-block' 
            />
        </form>
    )
}

export default AddForm
