"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-7xl mx-auto mb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500 opacity-20 rounded-full blur-3xl"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to transform your scheduling?
            </h2>
            <p className="text-indigo-100 max-w-xl">
              Join thousands of users who are saving time and boosting
              productivity with Schedy. Start your 14-day free trial today.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/signup" variant="white">
              Start for free
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Schedule a demo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default CTASection;
