"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
  isFullWidth?: boolean;
}

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  isFullWidth = false,
}: ButtonProps) {
  // Map of styles for different button variants
  const variantStyles = {
    primary: {
      base: "bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow-lg hover:shadow-xl",
      hover: {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)",
      },
    },
    secondary: {
      base: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow hover:shadow-md",
      hover: {
        scale: 1.05,
        boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)",
      },
    },
    outline: {
      base: "bg-transparent border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
      hover: {
        scale: 1.05,
        boxShadow: "0 0 15px rgba(79, 70, 229, 0.2)",
      },
    },
    white: {
      base: "bg-white text-indigo-600 shadow-lg hover:shadow-xl",
      hover: {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
      },
    },
  };

  const buttonStyle = variantStyles[variant];
  const widthClass = isFullWidth ? "w-full" : "";

  const ComponentType = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <ComponentType
      {...props}
      whileHover={buttonStyle.hover}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 font-medium rounded-full transition ${buttonStyle.base} ${widthClass} ${className}`}
    >
      {children}
    </ComponentType>
  );
}

export default Button;
