import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Layout = ({ children }) => {
    const scrollRef = useRef(null);
    const [height, setHeight] = useState(0);

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 25,
        mass: 0.3,
    });

    // Measure total content height
    useEffect(() => {
        const calculateHeight = () => {
            if (scrollRef.current) {
                setHeight(scrollRef.current.getBoundingClientRect().height);
            }
        };

        calculateHeight();
        window.addEventListener("resize", calculateHeight);
        return () => window.removeEventListener("resize", calculateHeight);
    }, []);

    // Translate content smoothly
    const y = useTransform(
        smoothProgress,
        [0, 1],
        [0, -(height - window.innerHeight)]
    );

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                style={{
                    scaleX: smoothProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    zIndex: 100,
                    backgroundColor: "#C89A8C",
                }}
            />

            {/* Spacer to allow native scroll */}
            <div style={{ height }} />

            {/* Smooth scroll container */}
            <motion.div
                ref={scrollRef}
                style={{ y }}
                className="fixed top-0 left-0 right-0"
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </motion.div>
        </>
    );
};

export default Layout;