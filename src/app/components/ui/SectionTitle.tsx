"use client";

import { motion } from "framer-motion";
import { slideUpFadeIn } from "../animations/MotionVariants";

interface SectionTitleProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

function SectionTitle({
  title,
  description,
  centered = true,
  className = "",
}: SectionTitleProps) {
  const alignment = centered ? "text-center" : "text-left";
  const marginAuto = centered ? "mx-auto" : "";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={slideUpFadeIn}
      className={`mb-12 ${alignment} ${className}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg text-slate-600 dark:text-slate-300 max-w-2xl ${marginAuto}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
