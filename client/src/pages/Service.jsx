export const Service = () => {
    return <>
        <div className="grid grid-cols-12">
            <div className="col-span-8 col-start-3">
                <div className="main-section border border-red-600">
                    <div className="header">
                        <div className="mx-auto py-2 px-4 font-bold first-letter:text-3xl w-fit bg-green-700 text-white rounded-md">services</div>
                        <div className="cards-section">
                            <div className="card border border-slate-600 w-fit">
                                <div className="card-image">
                                    <img src="web.jpg" alt="error_loading" />
                                </div>
                                <div className="card-provider">
                                    <p>provider</p>
                                </div>
                                <div className="card-price">
                                    <p>provider</p>
                                </div>
                                <div className="card-service">
                                    <p>service</p>
                                </div>
                                <div className="card-description">
                                    <p>description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}