import useAuth from "../context/contextCreator"
import ProjectDetails from "./projectsDeails"
import { Link } from "react-router-dom"
const Projects = () => {
    const { state } = useAuth()
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {state && state.length > 0 ? (
                    state.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 shadow-md">
                            <p className="text-sm text-gray-500">{item.id}</p>
                            <h3 className="text-xl font-bold mb-2">{item.task}</h3>
                            <Link to={`/projects/${item.id}`} className="text-blue-500 hover:underline">View Details</Link>
                        </div>
                    ))
                ) : (<p>no Project found</p>)}
            </div>
        </div>
    )
}
export default Projects