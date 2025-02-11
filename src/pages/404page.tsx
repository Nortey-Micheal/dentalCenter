import { Link } from "react-router";

export default function NoPageFound() {
    return (
        <div className=" flex flex-col items-center h-[100vh] justify-center">
            <p className="text-6xl font-bold text-slate-700">Error 404</p>
            <p className="text-3xl font-semibold text-slate-600">No Page Found</p>
            <Link className="hover:underline hover:text-cyan-500 text-2xl text-blue-400" to={'/'}>Go to Home</Link>
        </div>
    )
}