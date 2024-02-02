import { useState } from "react";
import { useAuth } from "../store/auth"
import { loadStripe } from "@stripe/stripe-js";
import { toast } from 'react-toastify';
export const Service = () => {

    const { services } = useAuth();
    // const [product, setProduct] = useState({
    //     name: "",
    //     price: "",
    // })
    const handlePayment = async (props) => {
        const { service, price } = props;
        const product = {
            name: service,
            price: price
        }
        console.log(product);
        const promise = await loadStripe("pk_test_51N2tLuSCOYgnTAbAxd4N6gXx5JgINYAptMHOojpb6L9SKiWw8LDORGU9wdL2Jb5oK3SU3mldBIL6RBFuiQDUJrVv00VGiWUZwe");
        try {
            const response = await fetch("http://localhost:5000/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                   name : product.name,
                   price : product.price
                })
            })

           const session = await response.json();
           const result = promise.redirectToCheckout({
            sessionId : session.id
           })

        } catch (e) {
            console.log("error in payment : ", e);
        }

    }
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
                                                <button onClick={() => handlePayment({ service, price })} className="bg-green-700 text-white rounded-md p-1 mx-16 mt-2 font-bold hover:bg-green-500 text-sm">payment now</button>
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