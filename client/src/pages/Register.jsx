export const Register = () => {
    return <>
        <div className="grid grid-cols-12 mt-9">
            <div className="col-span-8 col-start-3 flex shadow-lg">
                <div className="left p-4 w-1/2 m-1 mt-9">
                    <img className="w-4/5" src="registration.svg" alt="error in loading " srcset="" />
                </div>

                <div className="right flex flex-col  m-1 top-4 w-1/2 h-auto">
                    <h2 className="font-bold mx-28 first-letter:text-2xl">Registration Form</h2>
                    <form>
                        <div className="email m-3">
                            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="useranme m-3">
                            <label for="useranme" class="block mb-2 text-sm font-medium">Your username</label>
                            <input type="text" id="useranme" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="eg. nick120" required />
                        </div>
                        <div className="phone m-3">
                            <label for="phone" class="block mb-2 text-sm font-medium">Your phone number</label>
                            <input type="number" id="phone" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="xx-xxxx-xxxx" required />
                        </div>
                        <div className="password m-3">
                            <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" id="email" class="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="•••••••••••" required />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </>
}