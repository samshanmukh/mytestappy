import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }: any) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} style={{ cursor: 'default' }} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task