import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart3, Users, Layers, TrendingUp, ClipboardList, Menu, X } from "lucide-react";

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
    h1: "text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight leading-snug",
    body: "text-base md:text-lg text-slate-600 leading-relaxed",
    small: "text-sm text-slate-500",
  },
};

// ---------------- REUSABLE COMPONENTS ----------------
const Section = ({ children, className = "", ...props }) => (
  <section className={`${tokens.spacing.section} ${className}`} {...props}>
    <div className={tokens.spacing.container}>{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className={`${tokens.typography.h2} mb-10 text-center`}>{children}</h2>
);

const MetricCard = ({ value, label }) => (
  <Card className="p-6 border border-gray-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
    <CardContent>
      <p className="text-3xl font-semibold">{value}</p>
      <p className={tokens.typography.small + " mt-2"}>{label}</p>
    </CardContent>
  </Card>
);

const FeatureCard = ({ icon, text }) => (
  <Card className="p-6 border border-gray-200 rounded-2xl text-center hover:shadow-md transition-shadow">
    <CardContent>
      <div className="flex justify-center mb-4 text-gray-700">{icon}</div>
      <p className="font-medium">{text}</p>
    </CardContent>
  </Card>
);

export default function DesignXInvestorLanding() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* TOP NAV */}
      <header className="sticky top-0 z-50 relative border-b border-gray-200/70 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">
              D
            </div>
            <div>
              <p className="font-semibold leading-tight">DesignX</p>
              <p className="text-xs text-slate-500 -mt-0.5">Investor pitch</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a className="hover:text-slate-900" href="#product">Product</a>
            <a className="hover:text-slate-900 hidden" href="#traction">Traction</a>
            <a className="hover:text-slate-900" href="#why">Why now</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Book Investor Demo
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileNavOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-slate-700 hover:bg-white transition-colors"
            >
              {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div id="mobile-nav" className="md:hidden border-t border-gray-200/70 bg-white/95 backdrop-blur px-6 py-4">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <a
                className="hover:text-slate-900"
                href="#product"
                onClick={() => setMobileNavOpen(false)}
              >
                Product
              </a>
              <a
                className="hover:text-slate-900 hidden"
                href="#traction"
                onClick={() => setMobileNavOpen(false)}
              >
                Traction
              </a>
              <a
                className="hover:text-slate-900"
                href="#why"
                onClick={() => setMobileNavOpen(false)}
              >
                Why now
              </a>
              <a
                className="hover:text-slate-900"
                href="#contact"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                href="#contact"
                onClick={() => setMobileNavOpen(false)}
              >
                Book Investor Demo
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-white/0" />

        {/* Decorative gradient blob */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl"
        />

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <motion.h1
            className={tokens.typography.h1 + " mb-6"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DesignX
          </motion.h1>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 mb-6 text-sm text-white/90 backdrop-blur">
            <span className="font-semibold">Interior commerce</span>
            <span className="text-white/70">operating system</span>
          </div>

          <p className="text-xl mb-6 opacity-90 font-medium">
            The Operating System for Interior Material Sourcing
          </p>

          <p className="text-base md:text-lg opacity-80 mb-8">
            Helping designers and contractors discover, procure, and manage projects seamlessly.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-4 text-lg bg-white text-black hover:opacity-90 rounded-xl font-semibold transition-opacity"
            >
              Book Investor Demo
            </a>
            <a
              href="#product"
              className="px-6 py-4 text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black rounded-xl font-semibold transition-colors"
            >
              View Product
            </a>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <Section id="traction" className="bg-gray-50 hidden">
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
            <Card key={i} className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative">
                <img
                  src={t.img}
                  className="h-48 w-full object-cover"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-semibold text-white">{t.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="product" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={tokens.typography.h2 + " mb-6"}>Our Solution</h2>
            <p className={tokens.typography.body + " mb-6"}>
              A unified workflow for discovery, comparison, and procurement—so projects move forward faster.
            </p>
            <div className="space-y-3">
              {["Compare prices", "Discover materials", "Track orders", "Project Management"].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle /> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <p className="font-semibold mb-4">Example: Price Comparison</p>
            <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
              {["Greenply", "CenturyPly", "Local Supplier"].map((b, i) => (
                <div key={i} className="flex justify-between px-4 py-3 bg-white">
                  <span className="font-medium text-slate-800">{b}</span>
                  <span className="font-semibold text-slate-900">₹{180 + i * 20}</span>
                </div>
              ))}
            </div>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <FeatureCard icon={<Layers />} text="Discovery" />
          <FeatureCard icon={<BarChart3 />} text="Comparison" />
          <FeatureCard icon={<Users />} text="Network" />
          <FeatureCard icon={<TrendingUp />} text="Optimization" />
          <FeatureCard icon={<ClipboardList />} text="Project Management" />
        </div>
      </Section>

      {/* WHY NOW */}
      <Section id="why" className="bg-white">
        <SectionTitle>Why Now</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Procurement is still fragmented",
              body: "Designers and contractors juggle sourcing across systems, suppliers, and spreadsheets.",
            },
            {
              title: "Networks create durable advantage",
              body: "As the supplier + contractor graph grows, matching quality and decision speed improve.",
            },
            {
              title: "Data unlocks compounding efficiency",
              body: "Every order teaches the system where to find better options and execute faster.",
            },
          ].map((x) => (
            <Card key={x.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm">
              <CardContent>
                <p className="font-semibold text-slate-900 mb-2">{x.title}</p>
                <p className={tokens.typography.small + " text-slate-600"}>{x.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-24 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/65 to-slate-950/85" />

        <div className="relative text-white px-6">
          <h2 className={tokens.typography.h2 + " mb-6 max-w-3xl mx-auto"}>
            Build the Future of Interior Commerce
          </h2>
          <p className="text-base md:text-lg opacity-85 max-w-2xl mx-auto mb-8">
            Investors: schedule a short walkthrough for the product plus traction discussion.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              className="px-8 py-4 text-lg bg-white text-black hover:opacity-90 rounded-xl font-semibold transition-opacity"
              href="mailto:investors@designx.com?subject=DesignX%20Investor%20Demo"
            >
              Schedule a Demo
            </a>
            <a
              className="px-8 py-4 text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black rounded-xl font-semibold transition-colors"
              href="#product"
            >
              Review the Product
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DesignX
      </footer>
    </div>
  );
}
