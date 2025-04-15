"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { popIn } from "../animations/MotionVariants";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkText?: string;
  linkUrl?: string;
  customIndex?: number;
  badge?: {
    text: string;
    color: "indigo" | "violet" | "blue" | "emerald" | "amber";
  };
  className?: string;
  testimonial?: string;
  additionalContent?: ReactNode;
}

function FeatureCard({
  title,
  description,
  icon,
  linkText = "Learn more",
  linkUrl = "#",
  customIndex = 0,
  badge,
  className = "",
  testimonial,
  additionalContent,
}: FeatureCardProps) {
  // Map of colors for different badge types
  const badgeColors = {
    indigo:
      "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    violet:
      "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    blue: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    amber:
      "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
  };

  // Map of colors for different icon backgrounds and link colors
  const colorScheme = {
    indigo: {
      bgColor:
        "bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50",
      textColor: "text-indigo-600 dark:text-indigo-400",
      hoverGlow:
        "group-hover:shadow-indigo-500/20 dark:group-hover:shadow-indigo-400/10",
    },
    violet: {
      bgColor:
        "bg-violet-100 dark:bg-violet-900/30 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50",
      textColor: "text-violet-600 dark:text-violet-400",
      hoverGlow:
        "group-hover:shadow-violet-500/20 dark:group-hover:shadow-violet-400/10",
    },
    blue: {
      bgColor:
        "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
      textColor: "text-blue-600 dark:text-blue-400",
      hoverGlow:
        "group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/10",
    },
    emerald: {
      bgColor:
        "bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50",
      textColor: "text-emerald-600 dark:text-emerald-400",
      hoverGlow:
        "group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-400/10",
    },
    amber: {
      bgColor:
        "bg-amber-100 dark:bg-amber-900/30 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50",
      textColor: "text-amber-600 dark:text-amber-400",
      hoverGlow:
        "group-hover:shadow-amber-500/20 dark:group-hover:shadow-amber-400/10",
    },
  };

  // Default to indigo if badge color is not specified
  const badgeColor = badge?.color || "indigo";
  const iconBgColor = colorScheme[badgeColor].bgColor;
  const linkColor = colorScheme[badgeColor].textColor;
  const hoverGlowEffect = colorScheme[badgeColor].hoverGlow;

  // Define glow colors for each badge type
  const glowColorMap = {
    indigo: {
      light: "from-indigo-400/20 via-indigo-300/10 to-transparent",
      dark: "from-indigo-500/15 via-indigo-400/5 to-transparent dark:from-indigo-400/10 dark:via-indigo-300/5",
    },
    violet: {
      light: "from-violet-400/20 via-violet-300/10 to-transparent",
      dark: "from-violet-500/15 via-violet-400/5 to-transparent dark:from-violet-400/10 dark:via-violet-300/5",
    },
    blue: {
      light: "from-blue-400/20 via-blue-300/10 to-transparent",
      dark: "from-blue-500/15 via-blue-400/5 to-transparent dark:from-blue-400/10 dark:via-blue-300/5",
    },
    emerald: {
      light: "from-emerald-400/20 via-emerald-300/10 to-transparent",
      dark: "from-emerald-500/15 via-emerald-400/5 to-transparent dark:from-emerald-400/10 dark:via-emerald-300/5",
    },
    amber: {
      light: "from-amber-400/20 via-amber-300/10 to-transparent",
      dark: "from-amber-500/15 via-amber-400/5 to-transparent dark:from-amber-400/10 dark:via-amber-300/5",
    },
  };

  const glowColor = glowColorMap[badgeColor];

  return (
    <motion.div
      variants={popIn}
      custom={customIndex}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full group ${className} relative overflow-hidden ${hoverGlowEffect}`}
    >
      {/* Blurred light background effect */}
      <div
        className={`absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl 
        bg-gradient-to-br ${glowColor.light} ${glowColor.dark} pointer-events-none`}
        aria-hidden="true"
      />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center mb-4 transition`}
          >
            {icon}
          </div>
          {badge && (
            <span
              className={`${
                badgeColors[badge.color]
              } text-xs font-medium px-2 py-1 rounded-full`}
            >
              {badge.text}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
          {description}
        </p>

        {testimonial && (
          <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4 mb-4">
            <p className="text-sm text-slate-600 dark:text-slate-300 italic">
              {testimonial}
            </p>
          </div>
        )}

        {additionalContent && additionalContent}

        <div className="flex justify-between items-center">
          <a
            href={linkUrl}
            className={`${linkColor} font-medium inline-flex items-center group-hover:underline`}
          >
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
