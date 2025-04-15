"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../animations/MotionVariants";
import FeatureCard from "../ui/FeatureCard";
import Icon from "../ui/Icon";
import SectionTitle from "../ui/SectionTitle";

interface IntegrationApp {
  name: string;
  key: string;
}

function FeaturesSection() {
  const integrationApps: IntegrationApp[] = [
    { name: "Google", key: "google" },
    { name: "Outlook", key: "outlook" },
    { name: "Zoom", key: "zoom" },
    { name: "Slack", key: "slack" },
    { name: "Teams", key: "teams" },
    { name: "Notion", key: "notion" },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto mb-24">
      <SectionTitle
        title="Everything you need to stay organized"
        description="Powerful features designed to simplify your scheduling workflow and boost productivity."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Feature 1 - Smart Calendar */}
        <FeatureCard
          title="Smart Calendar"
          description="Intelligent calendar that learns your preferences and suggests optimal meeting times."
          icon={
            <Icon
              type="calendar"
              className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
            />
          }
          linkUrl="/features/calendar"
          customIndex={0}
          badge={{ text: "", color: "indigo" }}
        />

        {/* Feature 2 - AI Assistant */}
        <FeatureCard
          title="AI Assistant"
          description="Our AI assistant helps manage your meetings, suggests optimal scheduling times based on your habits, and even provides smart reminders."
          icon={
            <Icon
              type="ai"
              className="w-6 h-6 text-violet-600 dark:text-violet-400"
            />
          }
          linkUrl="/features/ai"
          customIndex={1}
          className="md:row-span-2"
          badge={{ text: "Premium", color: "violet" }}
          testimonial="70% of users report saving over 5 hours per week with our AI scheduling assistance."
        />

        {/* Feature 3 - Team Coordination */}
        <FeatureCard
          title="Team Coordination"
          description="Effortlessly coordinate meetings across time zones and with multiple team members."
          icon={
            <Icon
              type="team"
              className="w-6 h-6 text-blue-600 dark:text-blue-400"
            />
          }
          linkUrl="/features/teams"
          customIndex={2}
          badge={{ text: "", color: "blue" }}
        />

        {/* Feature 4 - Booking Page */}
        <FeatureCard
          title="Booking Page"
          description="Create a personalized booking page to share with clients and colleagues for hassle-free scheduling."
          icon={
            <Icon
              type="booking"
              className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
            />
          }
          linkUrl="/features/booking"
          customIndex={3}
          badge={{ text: "", color: "emerald" }}
        />

        {/* Feature 5 - Integrations Ecosystem */}
        <FeatureCard
          title="Integrations Ecosystem"
          description="Connect with all your favorite tools. Schedy integrates seamlessly with Google Calendar, Outlook, Zoom, Teams, Slack, and dozens more apps."
          icon={
            <Icon
              type="integrations"
              className="w-6 h-6 text-amber-600 dark:text-amber-400"
            />
          }
          linkUrl="/features/integrations"
          customIndex={4}
          className="md:col-span-2"
          badge={{ text: "New Feature", color: "amber" }}
          additionalContent={
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
              {integrationApps.map((app) => (
                <div
                  key={app.key}
                  className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-2 flex items-center justify-center"
                >
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
          }
        />
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
