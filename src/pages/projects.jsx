import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = useSelector((state) => state.projects.projects);

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects && projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id} className="border rounded-lg p-4 shadow-md">
                            <p className="text-sm text-gray-500">{project.id}</p>
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">View Details</Link>
                        </div>
                    ))
                ) : (<p>No projects found</p>)}
            </div>
        </div>
    );
};

export default Projects;