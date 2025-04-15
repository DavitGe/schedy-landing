"use client";

import { motion } from "framer-motion";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns: FooterColumn[] = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "API", href: "/api" },
        { name: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/documentation" },
        { name: "Guides", href: "/guides" },
        { name: "Support", href: "/support" },
        { name: "Community", href: "/community" },
        { name: "Webinars", href: "/webinars" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Media", href: "/media" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/schedyapp", initial: "T" },
    { name: "Facebook", href: "https://facebook.com/schedyapp", initial: "F" },
    {
      name: "Instagram",
      href: "https://instagram.com/schedyapp",
      initial: "I",
    },
    { name: "LinkedIn", href: "https://linkedin.com/schedyapp", initial: "L" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-700 pt-12 pb-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-lg flex items-center justify-center"
            >
              {Logo}
            </motion.div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
              Schedy
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-xs">
            Simplifying scheduling for individuals and teams around the world
            since 2022.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.1, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  delay: 0.1 * index,
                  duration: 0.3,
                }}
                href={social.href}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-xs">{social.initial}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {footerColumns.map((column, columnIndex) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + columnIndex * 0.1 }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link, linkIndex) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + linkIndex * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
          &copy; {currentYear} Schedy, Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ y: -2 }}
              href={link.href}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}

const Logo = (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 266.71 278.78"
    className="w-5 h-5 text-white"
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

export default Footer;
