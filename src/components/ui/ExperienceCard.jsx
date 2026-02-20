import { ChevronDown, ChevronsRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

export const ExperienceCard = ({ data, align = "left" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const textAlignment = align === "right" ? "text-right" : "text-left";

    return (
        <div
            className={`bg-white p-8 rounded-xl transition duration-300 ${textAlignment}`}
        >
            <h3 className="text-xl font-semibold text-brown-dark">
                {data.title}
            </h3>

            <p className="text-sm text-caramel font-medium mt-1">
                {data.company}
            </p>

            <p className="text-sm text-brown opacity-70 mb-4">
                {data.duration}
            </p>

            <p className="text-brown text-sm mb-4">
                {data.description}
            </p>

            {isOpen && (
                <ul className={`space-y-2 text-sm text-justify text-brown max-w-[400px] mb-4 ${align === "right" ? "ml-auto" : "mr-auto"}`}>
                    {data.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><ChevronsRight color="#C5A083" size={16} className="min-w-[25px]" /> {item}</li>
                    ))}
                </ul>
            )}

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-sm text-caramel font-medium flex items-center gap-1 hover:opacity-80 transition ${align === "right" ? "ml-auto" : "mr-auto"}`}
                varient="transparent"
            >
                {isOpen ? (
                    <>
                        Show Less <ChevronUp size={16} />
                    </>
                ) : (
                    <>
                        Show More <ChevronDown size={16} />
                    </>
                )}
            </Button>
        </div>
    );
};
