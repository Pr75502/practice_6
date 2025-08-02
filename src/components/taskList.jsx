import { useSelector } from 'react-redux';
import TaskItem from './taskItem';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Tasks</h3>
            <div className="border rounded-lg p-4">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
