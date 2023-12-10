import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const storeToken = useAuth();

    const handleUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleForm = async (e) => {
        e.preventDefault();

        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setUser({
                    email: "",
                    password: ""
                })

                // window.alert("Login successful..");
                // toast("Login successful..");
                toast.success("Login successful...", {
                    position: "top-center"
                  });
                navigate("/");
                const data = await response.json();
                // console.log("response from server : ",data);
                storeToken(data.token);
            }else{
                window.alert("invalid credential...");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <div className="grid grid-cols-12 mt-9">
            <div className="col-span-8 col-start-3 flex shadow-lg">
                <div className="left p-4 w-1/2 m-1 mt-9">
                    <img className="w-4/5" src="login.svg" alt="error in loading " srcset="" />
                </div>

                <div className="right flex flex-col  m-1 top-4 w-1/2 h-auto">
                    <h2 className="font-bold mx-28 first-letter:text-2xl">Login Form</h2>
                    <form onSubmit={handleForm}>
                        <div className="email m-3">
                            <label htmlFor="email" class="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" name="email" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="name@flowbite.com" required
                                value={user.email}
                                onChange={handleUser}
                            />
                        </div>
                        <div className="password m-3">
                            <label htmlFor="password" class="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" name="password" id="email" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="•••••••••••" required
                                value={user.password}
                                onChange={handleUser}
                            />
                        </div>
                        <button type="submit" className="bg-slate-700 text-white p-2 rounded-md mx-28 mb-3 hover:bg-slate-900">
                            Login now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </>
}