import { useAuth } from "../store/auth"

export const Service = () => {

    const { services } = useAuth();

    return <>
        <div className="grid grid-cols-12 mt-5">
            <div className="col-span-8 col-start-3">
                <div className="main-section border border-red-600">
                    <div className="header mt-3">
                        <div className="mx-auto py-2 px-4 font-bold first-letter:text-3xl w-fit bg-green-700 text-white rounded-md">services</div>
                        <div className="cards-section flex justify-around my-5">
                            {
                                services && services.map((currElement, index) => {
                                    const { service, description, price, provider } = currElement;

                                    return (
                                            <div className="card border border-slate-600 rounded-md p-2 w-fit" key={index}>
                                                <div className="card-image">
                                                    <img src="web.jpg" alt="error_loading" />
                                                </div>
                                                <div className="card-provider">
                                                    <p>{provider}</p>
                                                </div>
                                                <div className="card-price">
                                                    <p>{price}</p>
                                                </div>
                                                <div className="card-service">
                                                    <p>{service}</p>
                                                </div>
                                                <div className="card-description">
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}