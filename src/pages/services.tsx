import Navbar from "../components/navbar";

export default function Services() {
    const services = [
        {
            type: "Teeth Whitening",
            description: "Brighten your smile with our professional teeth whitening services.",
            icon: "fa-tooth"
        },
        {
            type: "Dental Implants",
            description: "Replace missing teeth with durable and natural-looking dental implants.",
            icon: "fa-teeth-open"
        },
        {
            type: "Orthodontics",
            description: "Straighten your teeth with our advanced orthodontic treatments.",
            icon: "fa-teeth"
        },
        {
            type: "Root Canal Therapy",
            description: "Save your infected tooth with our effective root canal treatments.",
            icon: "fa-tooth"
        },
        {
            type: "Dental Crowns",
            description: "Restore damaged teeth with our custom-made dental crowns.",
            icon: "fa-crown"
        },
        {
            type: "Dental Bridges",
            description: "Fill gaps in your smile with our high-quality dental bridges.",
            icon: "fa-bridge"
        },
        {
            type: "Dentures",
            description: "Get comfortable and natural-looking dentures to replace missing teeth.",
            icon: "fa-teeth"
        },
        {
            type: "Pediatric Dentistry",
            description: "Comprehensive dental care for children in a friendly environment.",
            icon: "fa-child"
        },
        {
            type: "Periodontal Therapy",
            description: "Treat gum disease and maintain healthy gums with our periodontal services.",
            icon: "fa-tooth"
        },
        {
            type: "Cosmetic Dentistry",
            description: "Enhance your smile with our range of cosmetic dental treatments.",
            icon: "fa-smile"
        }
    ];

    return (
        <>
           <Navbar />
           <section className="w-[90vw] mx-auto max-w-[1200px]">
                <h1 className="text-3xl font-bold my-10 text-center md:text-left lg:text-5xl text-slate-800">We are committed to <br /> providing quality healthcare.</h1>
                <div className="flex flex-wrap gap-10 mx-auto justify-around mb-15">
                    {services.map((service,index) => (
                        <div key={index} className={`h-[300px] flex flex-col justify-center border w-full ${(index % 2) === 0 ? 'text-cyan-800 bg-cyan-100 hover:bg-cyan-800  hover:text-cyan-100' : 'text-cyan-100 bg-cyan-800 hover:text-cyan-800 hover:bg-cyan-100'}  hover:text-cyan-50 lg:w-[40%] border-cyan-800 text-center mb-5 p-3 rounded-2xl gap-5`}>
                            <i className={`text-8xl fas ${service.icon}`}></i>
                            <h2 className="text-3xl font-bold text-cyan-90">{service.type}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-x-10 lg:mb-20">
                    <p className="md:max-w-[500px] text-slate-700 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem enim molestias ad voluptatem deserunt ullam tempore in ab alias. Possimus, alias.</p>
                    <div className="stats stats-vertical mt-10 lg:mt-0 mb-20 lg:mb-0 text-cyan-800 lg:stats-horizontal rounded-2xl shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-title"></div>
                            <div className="stat-value">24/7</div>
                            <div className="stat-desc text-[1.1rem]">Online Support</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title"></div>
                            <div className="stat-value">15+</div>
                            <div className="stat-desc text-[1.1rem]">Dentist</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title"></div>
                            <div className="stat-value">10K+</div>
                            <div className="stat-desc text-[1.1rem]" >Active Patients</div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}