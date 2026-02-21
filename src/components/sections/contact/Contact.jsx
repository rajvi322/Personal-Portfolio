import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import data from "./data.json";

export const Contact = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-20 bg-blush overflow-hidden">

            <div className="relative mx-auto max-w-7xl rounded-[48px] overflow-hidden shadow-2xl">

                <video
                    src="/get-in-touch.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[500px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-blush-dark/50 via-black/30 to-blush-dark/40"></div>

                <div className="absolute inset-0 flex items-center justify-center px-6">

                    <div className="bg-white/90 backdrop-blur-md p-12 rounded-[36px] shadow-xl max-w-lg w-full text-center transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

                        <h2 className="text-4xl md:text-5xl font-semibold text-brown-dark relative inline-block">
                            {data.title}
                            <span className="absolute left-0 right-0 bottom-1 h-3 bg-blush-dark opacity-60 rounded -z-10"></span>
                        </h2>

                        <p className="text-brown mt-6 text-lg opacity-85">
                            {data.description}
                        </p>

                        <Button
                            varient="primary"
                            className="mt-8 px-8 py-3 mx-auto"
                            onClick={() => navigate("/contact")}
                        >
                            {data.buttonText}
                        </Button>

                    </div>
                </div>

            </div>
        </section>
    );
};
