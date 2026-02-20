import { ChevronsRight } from "lucide-react";
import data from "./data.json";
import { Button } from "../../ui/Button";

// A simple Check icon component, themed appropriately
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blush-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const Projects = () => {
    return (
        <section className="bg-light-yellow pt-20 pb-32 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Heading */}
                <div className="relative mb-28 text-center">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-6xl font-semibold text-brown-dark leading-tight relative z-10">
                            {data.title}
                        </h1>

                        <span className="absolute left-0 bottom-2 w-full h-3 bg-yellow opacity-70 rounded-md -z-0"></span>
                    </div>
                    <p className="text-brown mt-6 max-w-2xl mx-auto text-lg leading-relaxed opacity-80">
                        {data.description}
                    </p>
                </div>


                <div className="space-y-40">
                    {data.projects.map((project, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
                            >
                                {/* IMAGE SECTION */}
                                <div className="relative w-full lg:w-[58%] shrink-0">

                                    {/* Layer 1 — blush offset block */}
                                    <div
                                        className={`absolute inset-0 rounded-[36px] bg-yellow transform ${isReversed
                                            ? "-translate-x-4 translate-y-4"
                                            : "translate-x-4 translate-y-4"
                                            }`}
                                    />

                                    {/* Layer 2 — yellow offset block, further back */}
                                    <div
                                        className={`absolute inset-0 rounded-[36px] bg-blush opacity-70 transform ${isReversed
                                            ? "-translate-x-8 translate-y-8"
                                            : "translate-x-8 translate-y-8"
                                            }`}
                                    />

                                    {/* Image */}
                                    <div className="relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="relative rounded-[36px] max-w-[800px] min-h-[500px] h-auto shadow-xl w-full transition duration-500 group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute inset-0 rounded-[36px] max-w-[800px] h-auto bg-gradient-to-b from-yellow to-blush-dark opacity-25 group-hover:opacity-0 transition duration-500" />
                                    </div>
                                </div>

                                {/* DESCRIPTION CARD */}
                                <div
                                    className={`relative bg-white p-10 rounded-[28px] shadow-lg w-full lg:w-[46%] mt-10 lg:mt-0 z-10 ${isReversed
                                        ? "lg:-mr-16"
                                        : "lg:-ml-20"
                                        }`}
                                >
                                    <h3 className="text-2xl md:text-3xl font-semibold text-brown-dark mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-brown text-base leading-relaxed mb-6 opacity-85">
                                        {project.description}
                                    </p>


                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3.5 py-1.5 text-xs font-medium bg-light-yellow text-brown-dark rounded-full border border-blush-dark/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Button varient="primary" className="mt-6 text-sm">View more <ChevronsRight className="ml-2" size={20} /></Button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
