import { NavLink } from "react-router-dom";

export const Header = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-light-yellow sticky top-0 z-50">
            <div className="px-4 py-4 container mx-auto">
                <nav className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="max-w-[40px]">
                        <img src="/R-logo.png" alt="Logo" />
                    </div>

                    {/* Nav Links */}
                    <ul className="flex gap-10 items-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-brown transition-all duration-300 ${isActive
                                            ? "text-brown-dark font-medium"
                                            : "hover:text-brown-dark"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                {/* Animated underline */}
                                <span className="
                  absolute left-0 -bottom-1 h-[2px] bg-caramel 
                  w-0 group-hover:w-full 
                  transition-all duration-300
                "></span>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
        </header>
    );
};