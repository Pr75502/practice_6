import TaskItem from './taskItem';

const TaskList = () => {
    // Sample task data
    const tasks = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
    ];

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
