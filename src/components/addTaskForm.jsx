

const AddTaskForm = () => {
    return (
        <div className="mt-4">
            <form className="flex items-center">
                <input className="border rounded-l-md py-2 px-4 w-full" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
                    Add Task
                </button>
                <button type="reset" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-2 rounded-md">
                    Reset
                </button>
            </form>
        </div>
    )
}
export default AddTaskForm;