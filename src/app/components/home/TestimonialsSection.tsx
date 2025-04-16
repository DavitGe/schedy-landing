"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "../animations/MotionVariants";
import SectionTitle from "../ui/SectionTitle";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  content: string;
  usingSince: string;
  color: "indigo" | "blue" | "violet" | "emerald" | "amber";
  colSpan?: string;
}

function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Lee",
      role: "Marketing Director",
      company: "TechCorp",
      initials: "SL",
      rating: 5,
      content:
        "Schedy has completely transformed how our marketing team coordinates campaigns. The AI suggestions are spot-on, and we've reduced meeting scheduling time by 70%.",
      usingSince: "April 2023",
      color: "indigo",
      colSpan: "md:col-span-5",
    },
    {
      id: "2",
      name: "James Thompson",
      role: "Freelance Designer",
      company: "",
      initials: "JT",
      rating: 5,
      content:
        "As a freelancer juggling multiple clients, Schedy has been a game-changer. The booking page alone has saved me countless back-and-forth emails. The interface is intuitive and the customization options are exactly what I needed.",
      usingSince: "January 2023",
      color: "blue",
      colSpan: "md:col-span-7",
    },
    {
      id: "3",
      name: "Maria Chen",
      role: "VP of Sales",
      company: "GrowthCo",
      initials: "MC",
      rating: 5,
      content:
        "The team coordination features have revolutionized how our sales department works across three time zones. The integration with our CRM system is flawless and the reporting features give us incredible insights.",
      usingSince: "October 2022",
      color: "violet",
      colSpan: "md:col-span-7",
    },
    {
      id: "4",
      name: "Robert Jones",
      role: "Entrepreneur",
      company: "",
      initials: "RJ",
      rating: 5,
      content:
        "Worth every penny! I run three businesses and Schedy keeps me sane. The AI assistant feels like having a personal secretary.",
      usingSince: "May 2023",
      color: "emerald",
      colSpan: "md:col-span-5",
    },
  ];

  const colorMap = {
    indigo:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    violet:
      "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    amber:
      "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  };

  // Define lighting color map to match testimonial colors
  const lightingColorMap = {
    indigo: "before:bg-indigo-400/30 dark:before:bg-indigo-500/20",
    blue: "before:bg-blue-400/30 dark:before:bg-blue-500/20",
    violet: "before:bg-violet-400/30 dark:before:bg-violet-500/20",
    emerald: "before:bg-emerald-400/30 dark:before:bg-emerald-500/20",
    amber: "before:bg-amber-400/30 dark:before:bg-amber-500/20",
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto mb-24">
      <SectionTitle
        title="Loved by thousands"
        description="See what our users have to say about how Schedy has transformed their scheduling experience."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            custom={index}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              // Add lighting effect on hover
              "--glow-x": "calc(var(--x) * 1px - 50%)",
              "--glow-y": "calc(var(--y) * 1px - 50%)",
              "--glow-opacity": "1",
              "--glow-scale": "1.75",
            }}
            // Add before pseudo element for blurred lighting and track mouse position
            className={`${
              testimonial.colSpan
            } bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 group relative overflow-hidden
              before:absolute before:w-40 before:h-40 before:rounded-full before:opacity-0 before:blur-2xl before:pointer-events-none before:transition-all before:duration-500
              before:scale-0 before:left-[var(--glow-x)] before:top-[var(--glow-y)] before:translate-x-[-50%] before:translate-y-[-50%]
              before:opacity-[var(--glow-opacity,0)] before:scale-[var(--glow-scale,0)]
              ${lightingColorMap[testimonial.color]}
            `}
            onMouseMove={(e) => {
              // Get the relative position of the mouse within the element
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--x", String(x));
              e.currentTarget.style.setProperty("--y", String(y));
            }}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 ${
                  colorMap[testimonial.color]
                } rounded-full flex items-center justify-center mr-4`}
              >
                <span className="font-medium">{testimonial.initials}</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </p>
              </div>
              <div className="ml-auto flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Using Schedy since {testimonial.usingSince}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
