import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { getRandomColor } from "@/utils/getRandomColor";

interface TexTEffectProps {
    word: string;
    className?: string;

}

interface SpanTextProps {
    children: React.ReactNode;
    className?: string;
}

const SpanText = ({ children, className }: SpanTextProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimationControls();
    const scaleEffect = () => {
        controls.start({
            transform: [
                "scaleX(1) scaleY(1)",
                "scaleX(1.4) scaleY(0.5)",
                "scaleX(0.75) scaleY(1.25)",
                "scaleX(1.2) scaleY(0.8)",
                "scaleX(1) scaleY(1)",
            ],
            transition: { duration: 0.9 },
            color: `var(${getRandomColor()})`,
        });

        setIsHovered(true);
    };
    return (
        <motion.span
            className={className}
            animate={controls}
          
            // whileHover={{
            //     color: `var(${getRandomColor()})`,
            //     transition: { duration: 0 },
            // }}
            onMouseOver={() => {
                if (!isHovered) {
                    scaleEffect();
                }
            }}
            onAnimationComplete={() => setIsHovered(false)}
        >
            {children}
        </motion.span>
    );
};

function TextEffect({ word, className }: TexTEffectProps) {
    return (
        <div>
            {word.split("").map((letter, idx: number) => {
                return <SpanText className={className} key={letter + idx}>{letter}</SpanText>;
            })}
        </div>
    );
}

export default TextEffect;
