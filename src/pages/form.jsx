import { useRef, useEffect, useState } from "react";
import { add, update } from "../context/actions";
import useAuth from "../context/contextCreator";
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
    const taskRef = useRef();
    const { state, dispatch } = useAuth();
    const { id } = useParams()

    const navigate = useNavigate();

    
    const [currentTaskText, setCurrentTaskText] = useState('');

    const projectToEdit = id ? state.find(item => item.id === +id) : null;
    

  
    useEffect(() => {
        if (projectToEdit) {
            setCurrentTaskText(projectToEdit.task)
        } else {
            setCurrentTaskText('');
        }
    }, [projectToEdit]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskText = taskRef.current.value;

        if (id && projectToEdit) {
            
            dispatch(update({ ...projectToEdit, task: newTaskText }));
        } else {
           
            const newId = Date.now();
            dispatch(add({ id: newId, task: newTaskText, status: false }));
        }

        taskRef.current.value = ''
        setCurrentTaskText(''); 
        navigate("/projects")
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto">
                <input
                    type="text"
                    placeholder={id ? "Edit Task" : "Add Task"}
                    ref={taskRef}
                    value={currentTaskText}
                    onChange={(e) => setCurrentTaskText(e.target.value)} 
                    className="border rounded-md py-2 px-4 mb-4"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    {id ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
};

export default Form;
