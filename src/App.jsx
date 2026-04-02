import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart3, Users, Layers, TrendingUp, BriefcaseConveyorBelt, FolderKanban, ClipboardList} from "lucide-react";

// ---------------- DESIGN TOKENS ----------------
const tokens = {
  colors: {
    primary: "#0B0B0C",
    secondary: "#6B7280",
    accent: "#111827",
    border: "#E5E7EB",
    bg: "#FFFFFF",
    muted: "#F9FAFB",
  },
  spacing: {
    section: "py-24 px-6",
    container: "max-w-6xl mx-auto",
  },
  typography: {
    h1: "text-5xl md:text-6xl font-semibold tracking-tight",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight",
    body: "text-lg text-gray-600 leading-relaxed",
    small: "text-sm text-gray-500",
  },
};

// ---------------- REUSABLE COMPONENTS ----------------
const Section = ({ children, className = "" }) => (
  <section className={`${tokens.spacing.section} ${className}`}>
    <div className={tokens.spacing.container}>{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className={`${tokens.typography.h2} mb-10 text-center`}>{children}</h2>
);

const MetricCard = ({ value, label }) => (
  <Card className="p-6 border border-gray-200 shadow-sm rounded-2xl">
    <CardContent>
      <p className="text-3xl font-semibold">{value}</p>
      <p className={tokens.typography.small + " mt-2"}>{label}</p>
    </CardContent>
  </Card>
);

const FeatureCard = ({ icon, text }) => (
  <Card className="p-6 border border-gray-200 rounded-2xl text-center">
    <CardContent>
      <div className="flex justify-center mb-4 text-gray-700">{icon}</div>
      <p className="font-medium">{text}</p>
    </CardContent>
  </Card>
);

export default function DesignXInvestorLanding() {
  return (
    <div className="bg-white text-gray-900 font-[Inter]">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <motion.h1 className={tokens.typography.h1 + " mb-6"}>
            DesignX
          </motion.h1>

          <p className="text-xl mb-6 opacity-90">
            The Operating System for Interior Material Sourcing
          </p>

          <p className="text-lg opacity-80 mb-8">
            Helping designers and contractors discover, procure, and manage projects seamlessly.
          </p>

          <div className="flex justify-center gap-4">
            <Button className="px-6 py-4 text-lg bg-white text-black hover:opacity-90">
              Book Investor Demo
            </Button>
            <Button
              variant="outline"
              className="px-6 py-4 text-lg text-white border-white backdrop-blur-md bg-white/10 hover:bg-white hover:text-black"
            >
              View Product
            </Button>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <MetricCard value="500+" label="Designers" />
          <MetricCard value="120+" label="Suppliers" />
          <MetricCard value="18%" label="Cost Savings" />
          <MetricCard value="2,000+" label="Monthly Orders" />
        </div>
      </Section>

      {/* PROBLEM */}
      <Section>
        <SectionTitle>The Problem</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
        {[
            {
              title: 'Fragmented Supplier Network',
              img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0',
            },
            {
              title: 'No Project Management',
              img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
            },
            {
              title: 'Manual Procurement',
              img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
            },
          ].map((t, i) => (
            <Card key={i} className="overflow-hidden rounded-2xl">
              <img src={t.img} className="h-48 w-full object-cover" />
              <CardContent className="p-6">
                <p className="font-medium">{t.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={tokens.typography.h2 + " mb-6"}>Our Solution</h2>
            <p className={tokens.typography.body + " mb-6"}>
              A unified workflow for discovery, comparison, and procurement.
            </p>
            <div className="space-y-3">
              {["Compare prices", "Discover materials", "Track orders", "Project Management"].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle /> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="font-semibold mb-4">Price Comparison</p>
            {["Greenply", "CenturyPly", "Local Supplier"].map((b, i) => (
              <div key={i} className="flex justify-between border p-3 rounded-lg mb-2">
                <span>{b}</span>
                <span className="font-medium">₹{180 + i * 20}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTRACTOR DISCOVERY */}
      <Section>
        <SectionTitle>Contractor Discoverability</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {["Verified Profiles", "Smart Matching", "Direct Engagement"].map((t, i) => (
            <FeatureCard key={i} text={t} icon={<Users />} />
          ))}
        </div>
      </Section>

      {/* CONTRACTOR DASHBOARD */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={tokens.typography.h2 + " mb-6"}>Contractor Dashboard</h2>
            <p className={tokens.typography.body + " mb-6"}>
              Manage projects, materials, and execution from one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="border p-4 rounded-lg mb-3">
              <p className="font-medium">Villa Project</p>
              <p className="text-sm text-gray-500">In Progress</p>
            </div>
            <div className="border p-4 rounded-lg">
              <p className="font-medium">Apartment Reno</p>
              <p className="text-sm text-gray-500">Materials Pending</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section>
        <SectionTitle>Platform Capabilities</SectionTitle>
        <div className="grid md:grid-cols-4 gap-6">
          <FeatureCard icon={<Layers />} text="Discovery" />
          <FeatureCard icon={<BarChart3 />} text="Comparison" />
          <FeatureCard icon={<Users />} text="Network" />
          <FeatureCard icon={<TrendingUp />} text="Optimization" />
          <FeatureCard icon={<ClipboardList />} text="Project Management" />
          
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 text-center">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-white">
          <h2 className={tokens.typography.h2 + " mb-6"}>
            Build the Future of Interior Commerce
          </h2>
          <Button className="px-8 py-4 text-lg bg-white text-black">
            Schedule a Demo
          </Button>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DesignX
      </footer>
    </div>
  );
}
