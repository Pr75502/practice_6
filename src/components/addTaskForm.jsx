

import React, { useState } from 'react';

const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description, dueDate, priority });
        // Reset form
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('Low');
    };

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded-md py-2 px-4 w-full"
                    required
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded-md py-2 px-4 w-full h-24"
                ></textarea>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border rounded-md py-2 px-4 w-full"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border rounded-md py-2 px-4 w-full"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <div className="flex justify-end space-x-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Add Task
                    </button>
                    <button type="reset" onClick={() => { setTitle(''); setDescription(''); setDueDate(''); setPriority('Low'); }} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTaskForm;