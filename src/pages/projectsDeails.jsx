
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProject, updateProject } from "../redux/projectSlice";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects);

    const project = projects.find((item) => item.id === +id);

    if (!project) {
        return <p className="text-red-500">No Project found with ID: {id}</p>;
    }

    const handleDelete = () => {
        dispatch(removeProject(project.id));
        navigate("/projects"); // Navigate back to projects list after deletion
    };

    const handleToggleStatus = () => {
        dispatch(updateProject({ ...project, status: !project.status }));
    };

    const handleNavigateToUpdate = () => {
        navigate(`/form/${project.id}`);
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4">Project Details</h1>
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-gray-600 mb-2">ID: {project.id}</p>
                <p className={`text-lg ${project.status ? 'text-green-600' : 'text-yellow-600'}`}>
                    Status: {project.status ? "Completed" : "Pending"}
                </p>

                <div className="mt-6 flex space-x-4">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleToggleStatus}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        {project.status ? "Mark as Pending" : "Mark as Completed"}
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