import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView
import { skils } from '@/utils/skils';

const Skills = () => {
  const ref = useRef(null); // Create a ref for the component
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when visible

  return (
    <div
      ref={ref} // Attach the ref to the container
      className="lg:col-span-2 px-4 flex flex-wrap text-[18px]"
    >
      {skils.map((skil) => (
        <motion.div
          key={skil.id}
          className="bg-white border-2 m-1 lg:m-2 rounded-xl px-3 py-1 lg:px-5 lg:py-3 dark:bg-white/5 dark:text-white/80"
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.5, delay: skil.id * 0.1 }} // Animation timing
        >
          {skil.name}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;