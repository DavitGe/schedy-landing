"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "../animations/MotionVariants";
import SectionTitle from "../ui/SectionTitle";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "1",
      question: "How does Schedy compare to other scheduling tools?",
      answer:
        "Schedy differentiates itself with AI-powered smart scheduling, seamless calendar integrations, and advanced team features. Our platform is designed to be intuitive yet powerful, with a focus on automation and productivity.",
      isOpen: true,
    },
    {
      id: "2",
      question: "Can I use Schedy with my existing calendar app?",
      answer:
        "Absolutely! Schedy integrates seamlessly with Google Calendar, Microsoft Outlook, Apple Calendar, and most other popular calendar applications. Simply connect your existing calendars during setup, and Schedy will automatically sync all your events and appointments.",
      isOpen: false,
    },
    {
      id: "3",
      question: "Is there a limit to how many meetings I can schedule?",
      answer:
        "Our Free plan allows for up to 5 calendars and basic scheduling. The Pro and Team plans offer unlimited scheduling and more advanced features to support higher volumes of meetings and more complex scheduling requirements.",
      isOpen: false,
    },
    {
      id: "4",
      question: "What kind of support does Schedy offer?",
      answer:
        "All plans include access to our comprehensive knowledge base and community forums. The Pro plan adds priority email support with responses within 24 hours, while Team plans include dedicated account management and phone support during business hours.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (id: string) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))
    );
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto mb-24">
      <SectionTitle
        title="Frequently asked questions"
        description="Everything you need to know about Schedy."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            custom={index}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleFAQ(faq.id)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="font-medium text-lg text-slate-900 dark:text-white">
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-slate-500 transition-transform ${
                  faq.isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
            {faq.isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-slate-600 dark:text-slate-300"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQSection;
