import Navbar from "../components/navbar";
import { services } from "./services";

type missionType = {
    title: string,
    description: string,
    icon: string
}

const missions: missionType[] = [
    {
        title: 'Our Mission',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, magni.',
        icon: 'fa-bullseye'
    },
    {
        title: 'Our Vision',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint molestiae vel?',
        icon: 'fa-eye'
    },
    {
        title: 'Our Goal',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, officia. Exercitationem, neque delectus!',
        icon: 'fa-flag-checkered'
    }
];

type review = {
    name: string,
    ratingF: number,
    ratingH: number,
    date: string,
    description: string
}

const reviews: review[] = [
    {
        name: "John Doe",
        ratingF: 4.5,
        ratingH: 4.0,
        date: "2025-01-15",
        description: "Great service and friendly staff. Highly recommend! The staff was very professional and made me feel comfortable throughout the entire process. I will definitely be coming back for future dental needs."
    },
    {
        name: "Jane Smith",
        ratingF: 5.0,
        ratingH: 4.5,
        date: "2025-01-10",
        description: "Excellent care and attention to detail. Very satisfied. The dentist took the time to explain everything and answered all my questions. The clinic is clean and well-maintained. I highly recommend their services."
    },
    {
        name: "Alice Johnson",
        ratingF: 4.0,
        ratingH: 4.0,
        date: "2025-01-05",
        description: "Good experience overall. Will come back again. The appointment was on time, and the staff was courteous. The treatment was effective, and I am happy with the results. Thank you for the great service."
    },
    {
        name: "Bob Brown",
        ratingF: 3.5,
        ratingH: 4.0,
        date: "2025-01-01",
        description: "Decent service but room for improvement. The waiting time was a bit long, but the treatment was satisfactory. The staff could be more attentive to patient needs. Overall, it was an okay experience."
    },
    {
        name: "Charlie Davis",
        ratingF: 4.5,
        ratingH: 5.0,
        date: "2024-12-25",
        description: "Outstanding service and very professional. The dentist was knowledgeable and provided excellent care. The clinic has a welcoming atmosphere, and the staff is friendly. I am very pleased with the treatment I received."
    },
    {
        name: "Diana Evans",
        ratingF: 5.0,
        ratingH: 4.5,
        date: "2024-12-20",
        description: "Top-notch care and very friendly staff. The entire team was accommodating and made sure I was comfortable. The treatment was thorough, and I am extremely satisfied with the results. Highly recommended."
    },
    {
        name: "Frank Green",
        ratingF: 4.0,
        ratingH: 3.5,
        date: "2024-12-15",
        description: "Good service but a bit pricey. The quality of care was good, but the cost was higher than expected. The staff was professional, and the clinic was clean. Overall, a positive experience despite the cost."
    },
    {
        name: "Grace Harris",
        ratingF: 4.5,
        ratingH: 4.0,
        date: "2024-12-10",
        description: "Very satisfied with the treatment. The dentist was gentle and explained the procedure clearly. The clinic is modern and well-equipped. I appreciate the care and attention provided by the staff."
    },
    {
        name: "Henry Lee",
        ratingF: 5.0,
        ratingH: 5.0,
        date: "2024-12-05",
        description: "Exceptional service and highly skilled staff. The treatment was painless, and the results are fantastic. The staff is knowledgeable and courteous. I highly recommend this dental center for anyone seeking quality care."
    },
    {
        name: "Ivy Martinez",
        ratingF: 4.0,
        ratingH: 4.5,
        date: "2024-12-01",
        description: "Great experience and very professional. The appointment was easy to schedule, and the staff was efficient. The dentist provided excellent care, and I am happy with the outcome. I will definitely return for future treatments."
    }
];

export default function About() {
    return (
        <>
            <Navbar />
            <section style={{backgroundImage: "linear-gradient(to bottom, #d3dfe9, #c0d3e3, #aec7dd, #9dbad7, #8baed1)"}} className="min-h-dvh py-10 mx-auto ">
                <div className="w-[80vw] max-w-[1300px] mx-auto">
                    <div>
                        <p className="text-2xl font-bold">Empowering Your Success</p>
                        <p className="text-2xl font-bold text-orange-400">Our Mission, Vision and Goal</p>
                        <div className="mt-15 flex flex-wrap justify-center lg:justify-start gap-5">
                            {missions.map((mission, index) => (
                                <div key={index} className="flex flex-col justify-around items-center lg:items-start w-[75vw] lg:w-[30%] h-[300px] bg-cyan-100 text-cyan-950 hover:bg-cyan-700 hover:text-cyan-50 rounded-2xl px-5 ">
                                    <i className={`fas ${mission.icon} text-8xl text-cyan-600`}></i>
                                    <h3 className="text-2xl font-bold ">{mission.title}</h3>
                                    <p className="text-lg text-center lg:text-start">{mission.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-start">Our Work</h3>
                        <div className="flex flex-col lg:flex-row flex-wrap gap-10 mt-10">
                            {services.map((service, index) => (
                                <div key={index} className=" bg-cyan-10 py-5 rounded-2xl lg:w-1/4">
                                    <i className={`fas ${service.icon} text-8xl text-cyan-50 mb-5 bg-cyan-600 p-5 rounded-4xl`}></i>
                                    <p className="text-lg font-semibold">{service.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-15">
                            <h3 className="text-xl font-bold ">All Reviews <span className="text-slate-600">(456)</span></h3>
                            <div>
                            <div className="dropdown dropdown-start">
                                <div tabIndex={0} role="button" className="btn m-1 rounded-3xl border-cyan-800 font-bold text-lg">Latest </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <button className="hidden md:block px-2 py-1 rounded-2xl bg-black text-white font-bold">Write a Review</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            {reviews.map((review, index) => (
                                <div key={index} className="w-full border p-3 mb-10 gap-">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="rating rating-lg lg:rating-xl rating-half  ">
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-1 bg-orange-300" aria-label="0.5 star" checked={review.ratingF === 0.5} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-2 bg-orange-300" aria-label="1 star" checked={review.ratingF === 1.0} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-1 bg-orange-300" aria-label="1.5 star" checked={review.ratingF === 1.5} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-2 bg-orange-300" aria-label="2 star" checked={review.ratingF === 2.0} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-1 bg-orange-300" aria-label="2.5 star" checked={review.ratingF === 2.5} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-2 bg-orange-300" aria-label="3 star" checked={review.ratingF === 3.0} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-1 bg-orange-300" aria-label="3.5 star" checked={review.ratingF === 3.5} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-2 bg-orange-300" aria-label="4 star" checked={review.ratingF === 4.0} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-1 bg-orange-300" aria-label="4.5 star" checked={review.ratingF === 4.5} />
                                            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 mask-half-2 bg-orange-300" aria-label="5 star" checked={review.ratingF === 5.0} />
                                        </div>
                                        <p className="text-2xl">...</p>
                                    </div>
                                    <p className="font-bold my-3">{review.name}<i className="fas fa-check-circle text-cyan-900 ml-2"></i></p>
                                    <p className="mb-3">{review.description}</p>
                                    <p className="text-slate-700 font-bold">Posted on {review.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}