import { useState } from "react"

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleUser = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleForm = (e)=>{
        // e.preventDefault();

        console.log("hello");
    }

    return <>
        <div className="grid grid-cols-12 mt-9">
            <div className="col-span-8 col-start-3 flex shadow-lg">
                <div className="left p-4 w-1/2 m-1 mt-9">
                    <img className="w-4/5" src="registration.svg" alt="error in loading " srcset="" />
                </div>

                <div className="right flex flex-col  m-1 top-4 w-1/2 h-auto">
                    <h2 className="font-bold mx-28 first-letter:text-2xl">Registration Form</h2>
                    <form onSubmit={handleForm}>
                        <div className="useranme m-3">
                            <label htmlFor="useranme" class="block mb-2 text-sm font-medium">Your username</label>
                            <input type="text" name="username" id="useranme" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="eg. nick120" required 
                                value={user.username}
                                onChange={handleUser}
                            />
                        </div>
                        <div className="email m-3">
                            <label htmlFor="email" class="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" name="email" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="name@flowbite.com" required 
                                value={user.email}
                                onChange={handleUser}
                            />
                        </div>
                        <div className="phone m-3">
                            <label htmlFor="phone" class="block mb-2 text-sm font-medium">Your phone number</label>
                            <input type="number" name="phone" id="phone" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="xx-xxxx-xxxx" required 
                                value={user.phone}
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
                            register now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </>
}