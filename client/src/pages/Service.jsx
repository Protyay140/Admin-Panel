import { useAuth } from "../store/auth"

export const Service = () => {

    const { services } = useAuth();

    return <>
        <div className="grid grid-cols-12 mt-5">
            <div className="col-span-8 col-start-3">
                <div className="main-section shadow-lg pb-1 px-2">
                    <div className="header mt-3">
                        <div className="mx-auto py-2 px-4 font-bold first-letter:text-3xl w-fit bg-green-700 text-white rounded-md">services</div>
                        <div className="cards-section flex justify-around my-5">
                            {
                                services && services.map((currElement, index) => {
                                    const { service, description, price, provider } = currElement;

                                    return (
                                            <div className="card border shadow-md shadow-slate-500 rounded-md p-2 m-2 w-fit" key={index}>
                                                <div className="card-image">
                                                    <img src="https://qph.cf2.quoracdn.net/main-qimg-c483d9cde25ecd6c4cfe7314394efc60-lq" alt="error_loading" />
                                                </div>
                                                <div className="card-provider">
                                                    <p className="text-center font-bold">{provider}</p>
                                                </div>
                                                <div className="card-price">
                                                    <p className=""><span className="text-sm font-bold">Price</span> : {price}</p>
                                                </div>
                                                <div className="card-service">
                                                    <p className="text-green-700 font-bold">✨{service}✨</p>
                                                </div>
                                                <div className="card-description">
                                                    <p>{description}</p>
                                                </div>
                                                <div className="payment">
                                                    <button className="bg-green-700 text-white rounded-md p-1 mx-16 mt-2 font-bold hover:bg-green-500 text-sm">payment now</button>
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