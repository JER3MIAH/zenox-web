import { Link } from 'react-router-dom';
import ZenoxLogo from '../components/ZenoxLogo';
import { ArrowLeft, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../lib/theme';

type ThemeMode = 'light' | 'dark' | 'system';
const CYCLE: Record<ThemeMode, ThemeMode> = { system: 'light', light: 'dark', dark: 'system' };
const ICON: Record<ThemeMode, React.ReactNode> = {
  system: <Monitor size={15} />,
  light: <Sun size={15} />,
  dark: <Moon size={15} />,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-white/8 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <ZenoxLogo size="xs" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Zenox</span>
          </Link>
          <button
            onClick={() => setTheme(CYCLE[theme])}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/8"
          >
            {ICON[theme]}
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-black text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">Last updated: 5 November 2026</p>
        </div>

        <Section title="1. Introduction">
          <p>
            Zenox ("Zenox", "we", "our", or "us") is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, store, and share
            information when you use our products and services, including DailyCash and any other
            applications we operate.
          </p>
          <p>
            By using our services, you agree to the collection and use of your information as
            described in this policy. If you do not agree, please do not use our services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following types of information:</p>
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Information you provide directly:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Name, email address, and phone number when you create an account</li>
            <li>Business name and details when setting up your profile</li>
            <li>Financial transaction data you enter into our products</li>
            <li>Bank account details when you request a withdrawal (processed via Paystack)</li>
            <li>Support communications and feedback you send us</li>
          </ul>
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Information collected automatically:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Device type, operating system, and browser information</li>
            <li>IP address and approximate location</li>
            <li>Usage data such as features accessed and session duration</li>
            <li>Error logs and performance data to help us improve our products</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your information to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Provide, maintain, and improve our products and services</li>
            <li>Process payments and manage your subscription</li>
            <li>Send you service-related notifications and updates</li>
            <li>Respond to your support requests and enquiries</li>
            <li>Detect and prevent fraud, abuse, or violations of our Terms of Service</li>
            <li>Comply with legal obligations</li>
            <li>Analyse usage patterns to improve user experience</li>
          </ul>
          <p>
            We do not sell your personal information to third parties. We do not use your data for
            advertising purposes.
          </p>
        </Section>

        <Section title="4. Data Storage and Security">
          <p>
            Your data is stored on secure servers. We use industry-standard encryption for data in
            transit (TLS/SSL) and at rest. Access to personal data is restricted to authorised
            personnel who need it to perform their work.
          </p>
          <p>
            While we implement appropriate technical and organisational measures to protect your
            data, no method of transmission over the internet is 100% secure. We cannot guarantee
            absolute security.
          </p>
          <p>
            We retain your data for as long as your account is active or as needed to provide our
            services. If you delete your account, we will delete or anonymise your personal data
            within 30 days, except where we are required to retain it by law.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use the following trusted third-party services to operate our products:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Paystack</span> —
              Payment processing, subscription billing, and bank account verification. Paystack is
              PCI DSS compliant. Your payment information is handled directly by Paystack and is not
              stored on our servers.
            </li>
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Cloud hosting providers
              </span>{' '}
              — For server infrastructure and data storage. All providers are contractually bound to
              protect your data.
            </li>
          </ul>
          <p>
            These third parties have their own privacy policies and we encourage you to review them.
          </p>
        </Section>

        <Section title="6. Data Sharing">
          <p>We do not share your personal information with third parties except:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>
              With service providers who assist us in operating our products (as described above)
            </li>
            <li>When required by law, court order, or governmental authority</li>
            <li>To protect the rights, property, or safety of Zenox, our users, or the public</li>
            <li>
              In connection with a merger, acquisition, or sale of assets, where your data may be
              transferred to the acquiring entity
            </li>
          </ul>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the following rights with respect to your personal data:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Access</span> —
              Request a copy of the personal information we hold about you
            </li>
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Correction</span> —
              Request that we correct inaccurate or incomplete information
            </li>
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Deletion</span> —
              Request that we delete your personal information
            </li>
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Portability</span> —
              Request a copy of your data in a structured, machine-readable format
            </li>
            <li>
              <span className="font-medium text-slate-700 dark:text-slate-200">Objection</span> —
              Object to certain types of processing of your data
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a
              href="mailto:support@zenox.app"
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-500 dark:text-indigo-400"
            >
              support@zenox.app
            </a>
            . We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Our web products use cookies and similar technologies to maintain your session, store
            your preferences (such as theme), and improve your experience. We do not use tracking or
            advertising cookies.
          </p>
          <p>
            You can control cookies through your browser settings, but disabling them may affect the
            functionality of our products.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our services are not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you believe we have inadvertently
            collected information from a child, please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by posting a notice within our products or by sending an email to the address
            associated with your account. We encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we
            handle your data, please contact us at:
          </p>
          <p>
            <strong className="font-semibold text-slate-700 dark:text-slate-200">
              Zenox Digital Solutions
            </strong>
            <br />
            Email:{' '}
            <a
              href="mailto:support@zenox.app"
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-500 dark:text-indigo-400"
            >
              support@zenox.app
            </a>
            <br />
            Nigeria
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 dark:border-white/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 lg:px-10">
          <p className="text-xs text-slate-400">© 2026 Zenox Digital Solutions</p>
          <Link
            to="/terms"
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
