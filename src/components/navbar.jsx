import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <Link to="/" className="text-white mr-4">Home</Link> |{"  "}
            <Link to="/form" className="text-white mr-4">Add Project</Link> |{"  "}
            <Link to="/projects" className="text-white mr-4">Projects</Link> |{"  "}
            <Link to="/projectsDetails" className="text-white mr-4">Project Details</Link> |{"  "}

        </div>
    )
}
export default Navbar;