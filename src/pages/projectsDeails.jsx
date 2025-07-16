import useAuth from "../context/contextCreator";
import { remove, update, toggle } from "../context/actions";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const { state, dispatch } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    // Find project by ID
    const project = state.find((item) => item.id === +id);

    if (!project) {
        return <p className="text-red-500">No Project found with ID: {id}</p>;
    }

    // Function to handle navigation to the update form
    const handleNavigateToUpdate = () => {
        navigate(`/edit_task/${project.id}`); // Navigate to your edit form route
    };
    const handleToggle = () => {

       
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4">Project Details</h1>
                <h2 className="text-2xl font-semibold mb-2">{project.task}</h2>
                <p className="text-gray-600 mb-2">ID: {project.id}</p>
                <p className={`text-lg ${project.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                    Status: { project.status ? "Completed" : "Pending" }
                </p>

                <div className="mt-6 flex space-x-4">
                    <button 
                        onClick={() => dispatch(remove(project.id))}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => dispatch(toggle(project.id))}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        {project.status ? "Completed" : "Pending"}
                    </button>
                    <button 
                        onClick={handleNavigateToUpdate}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;