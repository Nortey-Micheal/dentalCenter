import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar z-10 p-3 bg-cyan-50 shadow-sm sticky top-0">
            <div className="container flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost hover:border-cyan-600 rounded-2xl lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content rounded-2xl font-bold text-cyan-50 bg-cyan-600  z-1 mt-3 w-52 p-2 shadow">
                        <li className="hover:bg-cyan-50 rounded-xl hover:text-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-100' : ''} to={'/'}>Home</NavLink></li>
                        <li className="hover:bg-cyan-50 rounded-lg hover:text-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-100' : ''} to={'/service'}>Services</NavLink></li>
                        <li className="hover:bg-cyan-50 rounded-lg hover:text-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-100' : ''} to={'/about'}>About us</NavLink></li>
                        <li className="hover:bg-cyan-50 rounded-xl hover:text-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-100' : ''} to={'/contact'}>Contact us</NavLink></li>
                    </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-cyan-600 text-xl rounded-2xl lg:text-2xl" to={'/'}>Dental Center</NavLink>
                </div>
                <div className="navbar-center text-slate-800 font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        <li className="hover:underline decoration-2 underline-offset-5 decoration-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-700' : ''} to={'/'}>Home</NavLink></li>
                        <li className="hover:underline decoration-2 underline-offset-5 decoration-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-700' : ''} to={'/service'}>Services</NavLink></li>
                        <li className="hover:underline decoration-2 underline-offset-5 decoration-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-700' : ''} to={'/about'}>About us</NavLink></li>
                        <li className="hover:underline decoration-2 underline-offset-5 decoration-cyan-600"><NavLink className={({isActive}) => isActive ? 'underline decoration-2 decoration-cyan-700' : ''} to={'/contact'}>Contact us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <nav className="md:w-1/2 flex">
                        <div className="hidden w-4/5 md:grid grid-flow-col gap-4 items-center">
                            <a className="hover:border-b-3 border-cyan-600">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a className="hover:border-b-3 border-cyan-600">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a className="hover:border-b-3 border-cyan-600">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                
                        </div>
                        <button className="btn btn-ghost hover:border-cyan-600 btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </nav>
    )
}