const TaskItem = ({ task }) => {
    return (
        <div className="flex items-center justify-between border-b py-2">
            <span className="text-gray-800">{task.name}</span>
            <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
    );
};

export default TaskItem;
