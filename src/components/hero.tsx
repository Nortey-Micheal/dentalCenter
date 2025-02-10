export default function Hero() {
    return (
        <section style={{    backgroundImage: "linear-gradient(to bottom, #d3dfe9, #c0d3e3, #aec7dd, #9dbad7, #8baed1)"}} className="">
            <div className="container w-[90vw] text-cente flex flex-col lg:flex-row">
                <div style={{backgroundImage: "url('/assets/images/circle.png')", backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom', backgroundSize: '100%'}} className="lg:w-2/3 "><img  src="/assets/images/dentist.png" alt="Dentist" /></div>
                <div className="lg:w-1/2 flex flex-col gap-[7%] pt-[10%] ">
                    <h1 className="text-6xl font-bold">Crafting <span style={{backgroundImage: "url('/assets/images/underline.svg')", backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom', backgroundSize: '100%'}} className="text-cyan-700 pb-1">beautiful</span> <span style={{backgroundImage: "url('/assets/images/underline.svg')", backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom', backgroundSize: '100%'}} className="text-cyan-700 pb-">smiles</span> with advanced dentistry.</h1>
                    <div className="text-lg">
                        <p>We help you find your favourite dentist. We work for happy teeth, happy smiles.</p>
                        <p>Aiming for favourite smiles.</p>
                    </div>
                    <button className="px-8 py-2 rounded-3xl font-bold text-blue-100 bg-blue-600 w-fit">Book An Appointment</button>
                </div>
            </div>
        </section>
    )
}