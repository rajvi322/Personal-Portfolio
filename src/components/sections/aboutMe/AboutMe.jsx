import { motion } from "framer-motion";
import data from "./data.json";

export const AboutMe = () => {
    return (
        <section className="flex-1 py-24 bg-gradient-to-b from-light-yellow via-blush to-blush px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <img
                            src={data.image}
                            alt="Profile"
                            className=" w-full max-w-sm object-cover"
                        />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold text-brown-dark mb-6">
                        {data.title}
                    </h2>

                    {data.paragraphs.map((para, index) => (
                        <p
                            key={index}
                            className="text-brown leading-relaxed mb-4"
                        >
                            {para}
                        </p>
                    ))}

                    <a
                        href={data.resumeLink}
                        download
                        className="inline-block mt-6 bg-blush-dark hover:bg-blush-dark-hover text-white px-6 py-3 rounded-lg transition duration-300 shadow-md"
                    >
                        {data.resumeButtonText}
                    </a>
                </motion.div>

            </div>
        </section>
    );
};