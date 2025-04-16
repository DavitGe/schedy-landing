"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "./components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="flex flex-col items-center justify-center">
      <motion.div
        className="text-center max-w-2xl mx-auto py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl font-bold text-slate-800 dark:text-slate-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 dark:text-slate-400 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Back to Homepage
          </Link>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
