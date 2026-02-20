import { ExperienceCard } from "../../ui/ExperienceCard";
import data from "./data.json"

export const Experience = () => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative mb-28 text-center">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-6xl font-semibold text-brown-dark leading-tight relative z-10">
                            {data.title}
                        </h1>

                        <span className="absolute left-0 bottom-2 w-full h-3 bg-blush-dark opacity-70 rounded-md -z-0"></span>
                    </div>
                    <p className="text-brown mt-6 max-w-2xl mx-auto text-lg leading-relaxed opacity-80">
                        {data.description}
                    </p>
                </div>
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[5px] bg-yellow"></div>

                    <div className="space-y-20">
                        {data.experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="relative flex items-center"
                                >

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-yellow rounded-full z-20"></div>

                                    {/* Left Column */}
                                    <div className={`w-1/2 ${isLeft ? "pr-16" : ""}`}>
                                        {isLeft && <ExperienceCard data={exp} align="right" />}
                                    </div>

                                    {/* Right Column */}
                                    <div className={`w-1/2 ${!isLeft ? "pl-16" : ""}`}>
                                        {!isLeft && <ExperienceCard data={exp} align="left" />}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    )
}