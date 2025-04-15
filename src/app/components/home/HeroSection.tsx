"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
  slideUpFadeIn,
  popIn,
} from "../animations/MotionVariants";
import Button from "../ui/Button";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Calendar mockup image embedded as base64 data URL for reliability
  const calendarImageSrc =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNWY3ZmEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNGVhZjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9InVybCgjYSkiIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiByeD0iOCIvPjxwYXRoIGQ9Ik01MCAxMDBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMGg0ODBjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHYyNjBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMEg2MGMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMFYxMDB6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTUwIDgwYzAtNS41MjMgNC40NzctMTAgMTAtMTBoNDgwYzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2NDBINTBWODB6IiBmaWxsPSIjNjM2NkYxIi8+PHRleHQgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMTA1IiB5PSIxMDAiPlN1bjwvdGV4dD48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIxODUiIHk9IjEwMCI+TW9uPC90ZXh0Pjx0ZXh0IGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjI2NSIgeT0iMTAwIj5UdWU8L3RleHQ+PHRleHQgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzQ1IiB5PSIxMDAiPldlZDwvdGV4dD48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MjUiIHk9IjEwMCI+VGh1PC90ZXh0Pjx0ZXh0IGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjUwNSIgeT0iMTAwIj5GcmkgPC90ZXh0Pjx0ZXh0IGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjU4NSIgeT0iMTAwIj5TYXQ8L3RleHQ+PGxpbmUgeDE9IjE0NSIgeTE9IjgwIiB4Mj0iMTQ1IiB5Mj0iMzYwIiBzdHJva2U9IiNlZWYyZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIyMjUiIHkxPSI4MCIgeDI9IjIyNSIgeTI9IjM2MCIgc3Ryb2tlPSIjZWVmMmY5IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMzA1IiB5MT0iODAiIHgyPSIzMDUiIHkyPSIzNjAiIHN0cm9rZT0iI2VlZjJmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjM4NSIgeTE9IjgwIiB4Mj0iMzg1IiB5Mj0iMzYwIiBzdHJva2U9IiNlZWYyZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSI0NjUiIHkxPSI4MCIgeDI9IjQ2NSIgeTI9IjM2MCIgc3Ryb2tlPSIjZWVmMmY5IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iNTQ1IiB5MT0iODAiIHgyPSI1NDUiIHkyPSIzNjAiIHN0cm9rZT0iI2VlZjJmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTQwIiB4Mj0iNTUwIiB5Mj0iMTQwIiBzdHJva2U9IiNlZWYyZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSI1MCIgeTE9IjIwMCIgeDI9IjU1MCIgeTI9IjIwMCIgc3Ryb2tlPSIjZWVmMmY5IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iNTAiIHkxPSIyNjAiIHgyPSI1NTAiIHkyPSIyNjAiIHN0cm9rZT0iI2VlZjJmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzIwIiB4Mj0iNTUwIiB5Mj0iMzIwIiBzdHJva2U9IiNlZWYyZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IGZpbGw9IiM4QkIwRkYiIG9wYWNpdHk9IjAuMiIgeD0iMTUwIiB5PSIxNTUiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgcng9IjQiLz48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0MjU3QjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjE4NSIgeT0iMTc1Ij5UZWF0aW1lPC90ZXh0PjxyZWN0IGZpbGw9IiM3N0QwNzAiIG9wYWNpdHk9IjAuMiIgeD0iMzkwIiB5PSIyMTUiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgcng9IjQiLz48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMyMjk5MjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQyNSIgeT0iMjM1Ij5NeWd5bTwvdGV4dD48cmVjdCBmaWxsPSIjRjg3MTcxIiBvcGFjaXR5PSIwLjIiIHg9IjMxMCIgeT0iMTY1IiB3aWR0aD0iNzAiIGhlaWdodD0iMzAiIHJ4PSI0Ii8+PHRleHQgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjQzk0MTQxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIzNDUiIHk9IjE4NSI+TWVldGluZzwvdGV4dD48cmVjdCBmaWxsPSIjRjJDRDVFIiBvcGFjaXR5PSIwLjIiIHg9IjIzMCIgeT0iMzA1IiB3aWR0aD0iNzAiIGhlaWdodD0iMzAiIHJ4PSI0Ii8+PHRleHQgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjODg2NjMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIyNjUiIHk9IjMyNSI+TGF1bmNoPC90ZXh0PjxyZWN0IGZpbGw9IiNDRUFDRjgiIG9wYWNpdHk9IjAuMiIgeD0iNDcwIiB5PSIxMzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgcng9IjQiLz48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2NjQzQjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjUwNSIgeT0iMTUwIj5Zb2dhPC90ZXh0PjxyZWN0IGZpbGw9IiM2QkE1RUYiIHg9IjcwIiB5PSIyNDAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgcng9IjQiLz48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjEwNSIgeT0iMjYwIj5SdW48L3RleHQ+PHJlY3QgZmlsbD0iIzYzNjZGMSIgeD0iNDcwIiB5PSIyODUiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgcng9IjQiLz48dGV4dCBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjUwNSIgeT0iMzA1Ij5EaW5uZXI8L3RleHQ+PC9nPjwvc3ZnPg==";

  useEffect(() => {
    // Small delay before animations start for smoother experience
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      className="max-w-7xl mx-auto mb-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            variants={slideInLeft}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Schedule your day with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
              confidence
            </span>
          </motion.h2>
          <motion.p
            variants={slideInLeft}
            custom={1}
            className="text-lg text-slate-600 dark:text-slate-300 mb-8"
          >
            Streamline your calendar, boost productivity, and never miss an
            important meeting again with our intelligent scheduling platform.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-4"
          >
            <motion.div variants={slideUpFadeIn} custom={2}>
              <Button href="/signup" variant="primary">
                Start for free
              </Button>
            </motion.div>
            <motion.div variants={slideUpFadeIn} custom={3}>
              <Button href="/demo" variant="secondary">
                Watch demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div variants={slideInRight} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -z-10 w-4/5 h-4/5 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-70 top-10 right-10"
          />
          <motion.div
            variants={popIn}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 backdrop-blur-sm backdrop-filter bg-opacity-70 dark:bg-opacity-70"
          >
            <Image
              src={calendarImageSrc}
              alt="Schedy Calendar Interface"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
