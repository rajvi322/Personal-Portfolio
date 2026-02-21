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

    // Reset scroll on children (page) change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [children]);

    // Measure total content height using ResizeObserver
    useEffect(() => {
        const calculateHeight = () => {
            if (scrollRef.current) {
                setHeight(scrollRef.current.scrollHeight);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            calculateHeight();
        });

        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current);
        }

        // Also recalculate on initial mount and window resize
        calculateHeight();
        window.addEventListener("resize", calculateHeight);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", calculateHeight);
        };
    }, []);

    // Translate content smoothly - only if height > window height
    const y = useTransform(
        smoothProgress,
        (value) => value * -(Math.max(0, height - window.innerHeight))
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
            <div style={{ height: Math.max(height, window.innerHeight) }} />

            {/* Smooth scroll container */}
            <motion.div
                ref={scrollRef}
                style={{ y }}
                className="fixed top-0 left-0 right-0 flex flex-col min-h-screen"
            >
                <Header />
                <main className="flex-grow flex flex-col">{children}</main>
                <Footer />
            </motion.div>
        </>
    );
};

export default Layout;