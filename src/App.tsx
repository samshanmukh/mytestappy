import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from 'react';

function App() {
    var title: string = 'Task Tracker';

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        }
    ])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            
            if(tasksFromServer !== undefined) {
                setTasks(tasksFromServer)
            }
        }

        getTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const res = await fetch('http://localhost:5000/tasks')
    
            const data = await res.json()
    
            return data
        } catch(e) {
            console.log(`Server not running...`, e)
        }

    }

    const addTask = (task :any) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([ ...tasks, newTask ])
    }

    const deleteTask = (id :number) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id :number) => {
        console.log("toggled");
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

    return (
        <div className="container">
            <Header title={title} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {
                showAddTask 
                &&
                <AddTask onAdd={addTask} />
            }

            {
                tasks.length ?
                    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                    :
                    <h3>No tasks to show..</h3>
            }
        </div>
    );
}

export default App;
