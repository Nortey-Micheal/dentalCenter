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
           <section className="w-[90vw] mx-auto ">
                <h1 className="text-3xl font-bold my-10 text-center">We are committed to <br /> providing quality healthcare.</h1>
                <div className="flex flex-wrap gap-10 mx-auto justify-around">
                    {services.map((service,index) => (
                        <div key={index} className="h-[300px] flex flex-col justify-center border w-full hover:bg-cyan-800 hover:text-cyan-50 lg:w-[40%] border-cyan-800 text-center mb-5 p-3 rounded-2xl gap-5">
                            <i className={`text-8xl text-cyan-600 fas ${service.icon}`}></i>
                            <h2 className="text-3xl font-bold text-cyan-90">{service.type}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row">
                    <p className="md:max-w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem enim molestias ad voluptatem deserunt ullam tempore in ab alias. Possimus, alias. Blanditiis vel quidem nostrum, adipisci totam, nihil nesciunt veniam tempora voluptates, laudantium excepturi. Nihil veniam consectetur dolore unde perspiciatis molestiae dolor est sunt id. Illum repellendus dicta deleniti quasi?</p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full text-center">
                        <div className="stat">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}