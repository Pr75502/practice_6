import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProject, updateProject } from "../redux/projectSlice";

const Form = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const projectToEdit = id ? projects.find(item => item.id === +id) : null;

    useEffect(() => {
        if (projectToEdit) {
            setTitle(projectToEdit.name);
            setDescription(projectToEdit.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [projectToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id && projectToEdit) {
            dispatch(updateProject({ ...projectToEdit, name: title, description: description }));
        } else {
            const newId = Date.now();
            dispatch(addProject({ id: newId, name: title, description: description }));
        }

        setTitle('');
        setDescription('');
        navigate("/projects");
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto">
                <input
                    type="text"
                    placeholder={id ? "Edit Project Title" : "Project Title"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded-md py-2 px-4 mb-4"
                    required
                />
                <textarea
                    placeholder={id ? "Edit Project Description" : "Project Description"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded-md py-2 px-4 mb-4 h-24"
                ></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    {id ? "Update Project" : "Add Project"}
                </button>
            </form>
        </div>
    );
};

export default Form;
