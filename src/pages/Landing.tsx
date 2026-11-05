import { useTheme } from '../lib/theme';
import ZenoxLogo from '../components/ZenoxLogo';
import {
  Sun,
  Moon,
  Monitor,
  ArrowRight,
  Globe,
  Smartphone,
  BarChart3,
  Wrench,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

type ThemeMode = 'light' | 'dark' | 'system';
const CYCLE: Record<ThemeMode, ThemeMode> = { system: 'light', light: 'dark', dark: 'system' };
const ICON: Record<ThemeMode, React.ReactNode> = {
  system: <Monitor size={15} />,
  light: <Sun size={15} />,
  dark: <Moon size={15} />,
};

// ─── DailyCash mini icon ──────────────────────────────────────────────────────

const DailyCashIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dc-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#dc-g)" />
    <path d="M10 16h12M16 10v12" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// ─── What we build cards ──────────────────────────────────────────────────────

const capabilities = [
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Fast, responsive web apps that work on any device and browser — from simple tools to complex platforms.',
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Native-feeling mobile experiences built for iOS and Android — apps people actually enjoy using.',
    color: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
  },
  {
    icon: BarChart3,
    title: 'Business Platforms',
    desc: 'Management tools, dashboards, and analytics platforms that help businesses make better decisions.',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
  },
  {
    icon: Wrench,
    title: 'Software Support & IT',
    desc: 'Ongoing maintenance, performance improvements, and IT services to keep your software healthy.',
    color: 'bg-slate-200 text-slate-600 dark:bg-slate-700/50 dark:text-slate-300',
  },
];

// ─── Landing ──────────────────────────────────────────────────────────────────

export default function Landing() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white font-sans dark:bg-slate-950">
      {/* Nav */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/8 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-2.5">
            <ZenoxLogo size="sm" />
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              Zenox
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="hidden text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 sm:block dark:text-slate-400 dark:hover:text-white"
            >
              Products
            </a>
            <a
              href="#about"
              className="hidden text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 sm:block dark:text-slate-400 dark:hover:text-white"
            >
              About
            </a>
            <button
              onClick={() => setTheme(CYCLE[theme])}
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/8"
              title={`Theme: ${theme}`}
            >
              {ICON[theme]}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50/50 pt-20 pb-16 dark:from-indigo-950/60 dark:via-slate-900 dark:to-violet-950/30">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow blobs */}
        <div className="pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-500/10" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-500/8" />

        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 uppercase dark:border-indigo-800/60 dark:bg-indigo-950/60 dark:text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Software & IT Services
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl leading-[1.05] font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Software that
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                moves people
              </span>
              <br />
              forward.
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
              Zenox builds web and mobile applications for businesses and everyday users — tools
              that simplify work, improve decisions, and create new opportunities.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
              >
                See our products
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Learn more
                <ChevronDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
              Products
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
              What we've built.
            </h2>
            <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
              Every product we build solves a real problem for real people.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* DailyCash */}
            <a
              href="https://dailycash.zenox.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 transition-shadow hover:shadow-lg hover:shadow-emerald-100/50 dark:border-emerald-800/30 dark:from-emerald-950/40 dark:to-slate-900 dark:hover:shadow-emerald-900/20"
            >
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <DailyCashIcon />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">DailyCash</h3>
                    <p className="text-xs text-slate-400">dailycash.zenox.app</p>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A cash flow tracker for small business owners — POS operators, shops, and service
                  businesses in Nigeria. Track income, expenses, debts, and profit in real time.
                  Works offline. Starts at ₦1,000/month.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Business', 'Finance', 'Nigeria'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Visit product
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </a>

            {/* Coming soon */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-8 text-center dark:border-slate-700 dark:bg-slate-900/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
                <span className="text-xl">🚧</span>
              </div>
              <h3 className="mb-2 font-bold text-slate-500 dark:text-slate-400">
                More in development
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                New products are on the way. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="about" className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
              What we do
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
              Built to last,
              <br />
              designed to work.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/8 dark:bg-slate-900"
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${cap.color}`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-slate-200 bg-gradient-to-r from-indigo-600 to-violet-600 py-20 dark:border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-200 uppercase">
            Our mission
          </p>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Great software for everyone.
          </h2>
          <p className="text-indigo-200">
            We believe great software shouldn't be reserved for big companies with big budgets. We
            build tools that give everyday businesses and people a real competitive edge.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-white/5 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-10">
          <div className="flex items-center gap-2.5">
            <ZenoxLogo size="xs" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Zenox</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500 dark:text-slate-500">
            <a
              href="#products"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Products
            </a>
            <a
              href="https://dailycash.zenox.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              DailyCash
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Privacy
            </a>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © 2026 Zenox Digital Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
