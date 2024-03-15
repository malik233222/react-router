import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className=" text-center flex flex-col items-center  text-[red]">
        <h3 className="text-7xl mt-16 ">Error</h3>
        <span>404</span>
        <Link to='/' type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-30 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</Link>
    </div>
  )
}
