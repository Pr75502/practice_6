import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleToggleCompletion = () => {
        dispatch(toggleTaskCompletion(task.id));
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleToggleCompletion}
                    className="mr-2"
                />
                <div>
                    <h4 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</h4>
                    <p className="text-sm text-gray-600">{task.description}</p>
                    <p className="text-xs text-gray-500">Due: {task.dueDate} | Priority: {task.priority}</p>
                </div>
            </div>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-700">Delete</button>
        </div>
    );
};

export default TaskItem;
