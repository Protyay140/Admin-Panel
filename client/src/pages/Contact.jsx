import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    })

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleContact = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleForm = async (e) => {
        e.preventDefault();

        console.log("contact : ", contact);
        toast.success("message sent successfully....", {
            position: "top-center"
        });
        setContact({
            username: "",
            email: "",
            message: ""
        })
    }

    return <>
        <div className="grid grid-cols-12 mt-4">
            <div className="col-span-8 col-start-3 flex shadow-lg">
                <div className="left p-4 w-1/2 m-1 mt-9">
                    <img className="w-4/5" src="contact.svg" alt="error in loading " />
                </div>

                <div className="right flex flex-col  m-1 top-4 w-1/2 h-auto">
                    <h2 className="font-bold mx-28 first-letter:text-2xl">Contact Form</h2>
                    <form onSubmit={handleForm}>
                        <div className="useranme m-3">
                            <label htmlFor="useranme" className="block mb-2 text-sm font-medium">Your username</label>
                            <input type="text" name="username" id="useranme" className="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="eg. nick120" required
                                value={contact.username}
                                onChange={handleContact}
                            />
                        </div>
                        <div className="email m-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" name="email" className="bg-gray-300 rounded-md w-4/5 p-1 focus:outline-blue-950" autoComplete="false" placeholder="name@flowbite.com" required
                                value={contact.email}
                                onChange={handleContact}
                            />
                        </div>
                        <div className="message m-3">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">message</label>
                            <textarea name="message" id="message" cols="38" rows="6" className="bg-slate-400 p-2 rounded-md"
                                value={contact.message}
                                onChange={handleContact}
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-slate-700 text-white py-2 px-3 rounded-md mx-28 mb-3 hover:bg-slate-900">
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </div>

        <div className="map p-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2131415579274!2d88.36993697357629!3d22.49618493576996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713cd2dee061%3A0xf0d0e4f08690838c!2sJadavpur%20University%20Gate%20No.1%2C%201%2C%20Jadavpur%20Station%20Rd%2C%20K%20P%20C%20Medical%20College%20and%20Hospital%20Campus%2C%20Jadavpur%2C%20Kolkata%2C%20West%20Bengal%20700032!5e0!3m2!1sen!2sin!4v1702382300932!5m2!1sen!2sin" width="1250" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
}