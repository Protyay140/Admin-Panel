import { useAuth } from "../store/auth"
export const About = () => {

    const { user } = useAuth();

    return <>
        <div className="grid grid-cols-12">
            <div className="col-span-8 col-start-3">
                <div className="username text-center">Hey <span className="font-bold text-green-600">{user.username}🤙🏻</span></div>
            </div>
        </div>
    </>
}