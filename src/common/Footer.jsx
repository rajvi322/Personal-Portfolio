import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-blush-dark text-white py-6">

            <div className="flex flex-col items-center justify-center gap-6">

                {/* Social Icons */}
                <div className="flex items-center gap-6 text-yellow">

                    <a href="#" className="hover:opacity-70 transition">
                        <Linkedin size={18} color="#4A3B32" />
                    </a>

                    <a href="#" className="hover:opacity-70 transition">
                        <Github size={18} color="#4A3B32" />
                    </a>

                    <a href="#" className="hover:opacity-70 transition">
                        <Twitter size={18} color="#4A3B32" />
                    </a>

                    <a href="#" className="hover:opacity-70 transition">
                        <Instagram size={18} color="#4A3B32" />
                    </a>

                </div>

                {/* Copyright */}
                <p className="text-sm opacity-70 text-center text-brown-dark">
                    Rajvi Shastri © {new Date().getFullYear()}
                </p>

            </div>

        </footer>
    );
};
