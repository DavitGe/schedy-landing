"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  staggerContainer,
  popIn,
  fadeInScaleUp,
} from "../animations/MotionVariants";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  popular?: boolean;
}

function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const pricingPlans: PricingPlan[] = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description:
        "Perfect for individuals just getting started with scheduling.",
      features: [
        "Up to 5 calendars",
        "Basic scheduling tools",
        "Email notifications",
        "Google Calendar integration",
        "Limited booking page",
      ],
      buttonText: "Get Started",
    },
    {
      id: "pro",
      name: "Pro",
      price: "$12",
      description: "For professionals who need advanced scheduling features.",
      features: [
        "Unlimited calendars",
        "AI scheduling assistant",
        "Advanced notifications",
        "All integrations",
        "Custom booking page",
        "Team coordination",
        "Priority support",
      ],
      buttonText: "Try Free for 14 Days",
      highlighted: true,
      popular: true,
    },
    {
      id: "team",
      name: "Team",
      price: "$49",
      description: "Perfect for teams and organizations with multiple members.",
      features: [
        "Everything in Pro plan",
        "Up to 20 team members",
        "Team analytics dashboard",
        "Advanced permissions",
        "Admin controls",
        "Custom branding",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto mb-24 relative"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          title="Simple, transparent pricing"
          description="Choose the plan that's right for you and start organizing your schedule today."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            variants={fadeInScaleUp}
            custom={index}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className={`
              ${
                plan.highlighted
                  ? "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-100 dark:border-indigo-700/50 shadow-md"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm"
              } 
              rounded-2xl p-8 border flex flex-col relative overflow-hidden
            `}
          >
            {/* Sparkle effect for highlighted plan */}
            {plan.highlighted && (
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={
                  hasAnimated ? { opacity: [0, 0.7, 0.5] } : { opacity: 0 }
                }
                transition={{ duration: 2, times: [0, 0.7, 1], delay: 0.5 }}
              />
            )}

            {plan.popular && (
              <div className="absolute top-0 right-0">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={
                    hasAnimated ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-xs font-bold uppercase tracking-wider bg-indigo-600 text-white py-1 px-3 rounded-bl-lg"
                >
                  Most Popular
                </motion.div>
              </div>
            )}
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {plan.name}
            </h3>
            <div className="mb-4">
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  hasAnimated
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-4xl font-bold text-slate-900 dark:text-white"
              >
                {plan.price}
              </motion.span>
              <span className="text-slate-600 dark:text-slate-300 ml-2">
                / month
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {plan.description}
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-start"
                  initial={{ x: -10, opacity: 0 }}
                  animate={
                    hasAnimated ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.1 + featureIndex * 0.05,
                  }}
                >
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={
                hasAnimated ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                isFullWidth={true}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PricingSection;
