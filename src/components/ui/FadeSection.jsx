import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FadeSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};