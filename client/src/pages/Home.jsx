import { useAuth } from "../store/auth"

export const Home = () => {
    const { user } = useAuth();
    return <>
        <div className="grid grid-cols-12">
            <div className="col-span-8 col-start-3">
                <div className="username text-center">Hey <span className="font-bold text-green-600">{user.username}🤙🏻</span></div>

                <div className="main-part flex  justify-around p-3 shadow-md shadow-slate-300">
                    <div className="left  w-1/2">

                        <div className="flex flex-col">
                            <div className="text-sm">We are the World Best It Company.</div>
                            <div className="font-bold  text-3xl">Welcome to Protyay's Pathshala</div>
                            <div>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further At Protyay's Pathshala .We specialize in providing innovative It services and solutions to meet your unique needs.</div>
                            <div className="buttons flex gap-3 mt-4">
                                <button className="bg-green-600 p-2 rounded-md text-sm text-white hover:bg-green-800">connect now</button>
                                <button className="bg-slate-600 p-2 rounded-md text-sm text-white hover:bg-slate-800">learn more</button>
                            </div>
                        </div>

                    </div>

                    <div className="right picture  w-1/3 p-2">
                        <div className="w-fit ">
                            <img src="/home_page.svg" alt="error in loading...." />
                        </div>
                    </div>

                </div>

                <div className="status-box mt-10 shadow-md shadow-slate-300 rounded-md p-2">
                    <div className="flex justify-around">
                        <div className="flex flex-col">
                            <div className="text-center font-bold">50+</div>
                            <div>Registered Companies</div>
                        </div>
                        <div className="bg-slate-600 w-1 my-1"></div>
                        <div className="flex flex-col">
                            <div className="text-center font-bold">100,000+</div>
                            <div>Happy Clients</div>
                        </div>
                        <div className="bg-slate-600 w-1 my-1"></div>
                        <div className="flex flex-col">
                            <div className="text-center font-bold">500+</div>
                            <div>Well Known Developers</div>
                        </div>
                        <div className="bg-slate-600 w-1 my-1"></div>
                        <div className="flex flex-col">
                            <div className="text-center font-bold">24/7</div>
                            <div>Service</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}