export const Button = ({ varient, children, className, onClick }) => {

    const varients = {
        primary: "bg-blush-dark text-white hover:bg-blush-dark-hover transition-all duration-300",
        secondary: "bg-white text-blush-dark",
        transparent: "bg-transparent text-blush-dark",
    }

    return (
        <button onClick={onClick} className={`px-5 py-3 rounded-md flex justify-center items-center cursor-pointer ${varients[varient]} ${className}`}>{children}</button>
    )
}