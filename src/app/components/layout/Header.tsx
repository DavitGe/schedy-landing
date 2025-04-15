"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  slideInLeft,
  popIn,
  fadeIn,
  slideInRight,
} from "../animations/MotionVariants";
import Button from "../ui/Button";

function Header() {
  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto flex justify-between items-center mb-12"
    >
      <motion.div variants={slideInLeft} className="flex items-center gap-2">
        <motion.div
          variants={popIn}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-lg flex items-center justify-center"
        >
          {Logo}
        </motion.div>
        <motion.h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
          Schedy
        </motion.h1>
      </motion.div>
      <motion.nav
        variants={fadeIn}
        className="hidden md:flex gap-6 items-center"
      >
        <a
          href="#features"
          className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Pricing
        </a>
        <a
          href="#testimonials"
          className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Testimonials
        </a>
        <a
          href="#faq"
          className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          FAQ
        </a>
      </motion.nav>
      <motion.div variants={slideInRight} className="flex items-center gap-3">
        <a
          href="/login"
          className="hidden md:block text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Login
        </a>
        <Button href="/signup" variant="secondary" className="px-4 py-2">
          Get Started
        </Button>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </motion.div>
    </motion.header>
  );
}

const Logo = (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 266.71 278.78"
    className="w-6 h-6 text-white"
  >
    <g id="Layer_1-2" data-name="Layer 1">
      <g>
        <path
          fill="#FFF"
          d="M208.5,80.49l-20.71,12.39c-29.26-62.24-137.18-22.99-102.23,41.19,17.2,31.59,47.49,18.61,62.42,30.22,14.46,11.24,1.67,26-16.48,25.01C2.06,182.24,44.8-9.47,168.62,38.82c10.07,3.93,47.57,30.18,39.88,41.67Z"
        />
        <path
          fill="#FFF"
          d="M125.69,100.63c24.4-3.58,67.81,19.55,79.73,41.57,42.74,78.94-69.12,144.1-136.74,85.54-19.98-17.3-21.52-23.44,4.09-35.76,16.88,21.55,37.94,32.79,65.98,30.23,44.29-4.04,68.05-60.06,22.42-83.3-10-5.09-40.77-10.22-44.95-14.78-8.05-8.78-1.57-21.88,9.48-23.5Z"
        />
      </g>
    </g>
  </svg>
);

export default Header;
