export const Hero = () => {
    return (
        <div className="relative h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-b from-light-yellow to-blush">

            {/* Soft Background Glow */}
            {/* <div className="absolute w-[500px] h-[500px] bg-blush rounded-full blur-[120px] opacity-50 -top-32 -right-32"></div> */}

            <div className="container mx-auto h-full px-22">
                <div className="flex flex-col md:flex-row items-center justify-between h-full">

                    {/* Left Content */}
                    <div className="text-center md:text-left max-w-xl z-10">
                        <h1 className="text-4xl md:text-6xl font-semibold text-brown-dark leading-tight">
                            Hello, I'm{" "}
                            <span className="relative inline-block">
                                Rajvi
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-honey-highlight opacity-60 -z-10 rounded"></span>
                            </span>
                            .
                        </h1>

                        <h2 className="mt-4 text-lg md:text-2xl text-brown font-normal">
                            Balancing logic, aesthetics & a little magic ✨
                        </h2>

                        <div className="mt-8">
                            <button className="px-6 py-3 bg-caramel text-white rounded-md font-medium hover:bg-caramel-hover transition duration-300">
                                View Projects
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="mt-12 md:mt-0 z-10">
                        <img
                            src="/hero_img.png"
                            alt="Hero"
                            className="w-72 md:w-[420px] drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}