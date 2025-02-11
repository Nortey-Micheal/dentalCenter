export default function Hero() {
    return (
        <section style={{backgroundImage: "linear-gradient(to bottom, #d3dfe9, #c0d3e3, #aec7dd, #9dbad7, #8baed1)"}} className="min-h-[100vh] ">
            <div className="container w-[90vw] h-full flex flex-col lg:flex-row">
                <div style={{backgroundImage: "url('/assets/images/circle2.png')", backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: '85%'}} className="lg:w-2/3 max-w-[700px]"><img className="w-full "  src="/assets/images/dentist.png" alt="Dentist" /></div>
                <div className="lg:w-2/3 gap-7 flex justify-around flex-col  pt-[10%] ">
                    <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold">Crafting <span style={{backgroundImage: "url('/assets/images/underline.svg')", backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom', backgroundSize: '100%'}} className="text-cyan-700 pb-1">beautiful</span> <span style={{backgroundImage: "url('/assets/images/underline.svg')", backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom', backgroundSize: '100%'}} className="text-cyan-700 pb-">smiles</span> with advanced dentistry.</h1>
                    <div className=" text-lg md:text-2xl">
                        <p>We help you find your favourite dentist. We work for happy teeth, happy smiles.</p>
                        <p>Aiming for favourite smiles.</p>
                    </div>
                    <button className="px-8 py-2 mb-15 self-center md:self-start rounded-3xl md:text-2xl font-bold text-blue-100 bg-blue-600 w-fit">Book An Appointment</button>
                </div>
            </div>
        </section>
    )
}