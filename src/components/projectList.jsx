import { useSelector } from 'react-redux';

const ProjectList = () => {
    const projects = useSelector((state) => state.projects.projects);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-700">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
