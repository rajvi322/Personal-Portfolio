import { ChevronsRight } from "lucide-react"
import { Button } from "../../ui/Button"
import data from "./data.json"

export const About = () => {
    return (
        <div className="">
            <div className="container mx-auto px-22 py-28">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="relative w-72 md:w-[420px] group">
                        {/* Background Accent */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-blush-dark/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2"></div>

                        {/* Image */}
                        <img
                            src="/my_img.jpeg"
                            alt="Rajvi"
                            className="relative z-10 rounded-3xl shadow-2xl object-cover transition duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2"
                        />
                    </div>
                    <div className="relative max-w-xl z-10 text-center md:text-left">

                        {/* Blush Glow Background */}
                        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blush rounded-full blur-[120px] opacity-50 -z-10"></div>

                        {/* Optional Soft Accent Shape */}
                        <div className="absolute bottom-0 -right-16 w-[200px] h-[200px] bg-blush rounded-full blur-[80px] opacity-40 -z-10"></div>

                        <div className="relative inline-block">
                            <h1 className="text-4xl md:text-6xl font-semibold text-brown-dark leading-tight relative z-10">
                                {data.title}
                            </h1>

                            <span className="absolute left-0 bottom-2 w-full h-3 bg-blush-dark opacity-70 rounded-md -z-0"></span>
                        </div>

                        {data.description.map((item, index) => (
                            <p
                                key={index}
                                className="mt-6 text-md md:text-lg text-brown font-normal leading-relaxed"
                            >
                                {item}
                            </p>
                        ))}

                        <Button varient="primary" className="mt-6">View more <ChevronsRight className="ml-2" /></Button>
                    </div>

                </div>
            </div>
        </div>
    )
}