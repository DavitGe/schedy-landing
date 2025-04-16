"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 md:p-12 pt-24 md:pt-32 ${className}`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageContainer;
