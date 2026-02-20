import data from "./data.json";

export const Education = () => {
    return (
        <section className="py-10 bg-gradient-to-b from-transparent to-blush">
            <div className="container mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-20 relative">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-6xl font-semibold text-brown-dark leading-tight relative z-10">
                            {data.title}
                        </h1>

                        <span className="absolute left-0 bottom-2 w-full h-3 bg-yellow opacity-70 rounded-md -z-0"></span>
                    </div>

                    <p className="text-brown mt-6 max-w-2xl mx-auto text-lg opacity-80">
                        {data.description}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">

                    {data.education.map((edu, index) => (
                        <div key={index} className="relative flex justify-center items-center mb-10">

                            <div className="relative bg-white p-12 rounded-[32px] overflow-hidden shadow-xl w-full max-w-3xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

                                <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-[32px] bg-blush-dark"></div>

                                <div className="pl-6">

                                    <h3 className="text-2xl md:text-3xl font-semibold text-brown-dark tracking-wide">
                                        {edu.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-brown mt-1">
                                        <span className="font-medium text-brown-dark">
                                            {edu.course}
                                        </span>
                                    </p>

                                    <p className="text-base text-caramel font-medium mt-3 leading-snug">
                                        {edu.college}
                                    </p>

                                    <p className="text-sm text-brown opacity-70 mt-1">
                                        {edu.duration} • CGPA <span className="font-semibold text-brown-dark">{edu.cgpa}</span>
                                    </p>

                                    <div className="mt-5">
                                        <div className="flex flex-wrap gap-2">
                                            {edu.highlights?.map((item, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs font-medium bg-light-yellow text-brown-dark rounded-full border border-blush-dark/30"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};
