import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="bg-light-yellow">
            <div className="px-4 py-3 container mx-auto">
                <nav className="flex justify-between">
                    <div className="max-w-[40px]">
                        <img src="/R-logo.png" alt="" />
                    </div>
                    <ul className="flex gap-10 items-center justify-end">
                        <Link to="/"><li className="hover:text-brown-dark hover:font-medium cursor-pointer transition-all duration-300">Home</li></Link>
                        <Link to="/about"><li className="hover:text-brown-dark hover:font-medium cursor-pointer transition-all duration-300">About</li></Link>
                        <Link to="/projects"><li className="hover:text-brown-dark hover:font-medium cursor-pointer transition-all duration-300">Projects</li></Link>
                        <Link to="/contact"><li className="hover:text-brown-dark hover:font-medium cursor-pointer transition-all duration-300">Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}