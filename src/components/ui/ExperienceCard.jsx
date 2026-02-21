import { ChevronDown, ChevronsRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

            {/* Animated List */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`overflow-hidden space-y-2 text-sm text-justify text-brown max-w-[400px] mb-4 ${align === "right" ? "ml-auto" : "mr-auto"
                            }`}
                    >
                        {data.responsibilities.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2"
                            >
                                <ChevronsRight
                                    color="#C5A083"
                                    size={16}
                                    className="min-w-[20px]"
                                />
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-sm !px-0 text-caramel font-medium flex items-center gap-1 hover:opacity-80 transition ${align === "right" ? "ml-auto" : "mr-auto"
                    }`}
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