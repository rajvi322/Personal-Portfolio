import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import data from "./data.json";

export const ContactMe = () => {
    return (
        <section className="bg-light-yellow py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold text-brown-dark mb-4">
                        {data.title}
                    </h2>

                    <div className="w-16 h-[3px] bg-yellow rounded-full mb-6"></div>

                    <p className="text-brown mb-4">
                        {data.subtitle}
                    </p>

                    <p className="text-brown opacity-80 mb-6">
                        {data.description}
                    </p>

                    {/* Email */}
                    <div className="flex items-center gap-3 mb-3">
                        <Mail className="text-brown-dark" size={18} />
                        <a
                            href={`mailto:${data.email}`}
                            className="text-brown-dark font-medium hover:underline"
                        >
                            {data.email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6">
                        <Phone className="text-brown-dark" size={18} />
                        <span className="text-brown-dark">
                            {data.phone}
                        </span>
                    </div>

                    <p className="text-brown opacity-80 mb-4">
                        You can also reach out to me on social media below.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-4">
                        {data.socials.map((social, index) => {
                            const icons = {
                                LinkedIn: Linkedin,
                                GitHub: Github,
                                Twitter: Twitter,
                                Instagram: Instagram
                            };

                            const Icon = icons[social.name];

                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brown-dark hover:text-blush-dark transition duration-300"
                                >
                                    <Icon size={22} />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <img
                        src="/images/contact-illustration.png"
                        alt="Contact illustration"
                        className="w-full max-w-md object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
};