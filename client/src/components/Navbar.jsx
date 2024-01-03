import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"

export const Navbar = () => {

    const { isLoggedIn } = useAuth();

    return <>
        <div className="outer p-2">
            <div className="main_container bg-slate-700 flex justify-around p-2 text-white">
                <div className="logo w-12 ">
                    <div className="w-fit">
                        <img className="rounded-md" src="https://thumbs.dreamstime.com/b/initial-letter-p-logo-design-vector-king-crown-icon-luxury-monogram-290626679.jpg" alt="" />
                    </div>
                </div>
                <div className="nav_links">
                    <ul className="flex gap-5">
                        <li className="">
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/service'}>Service</NavLink>
                        </li>
                        
                        {isLoggedIn ? (<li className="">
                            <NavLink to={'/logout'}>Logout</NavLink>
                        </li>) :
                            <>
                                <li className="">
                                    <NavLink to={'/register'}>Register</NavLink>
                                </li>
                                <li className="">
                                    <NavLink to={'/login'}>Login</NavLink>
                                </li>
                            </>}
                        {/* <li className="">
                            <NavLink to={'/register'}>Register</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/login'}>Login</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/logout'}>Logout</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>

    </>
}