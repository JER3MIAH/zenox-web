import { Link } from 'react-router-dom';
import ZenoxLogo from '../components/ZenoxLogo';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { Sun, Moon, Monitor } from 'lucide-react';

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

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">Last updated: 5 November 2026</p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using any product or service operated by Zenox ("Zenox", "we", "our", or
            "us"), including but not limited to DailyCash, you agree to be bound by these Terms of
            Service ("Terms"). If you do not agree to these Terms, do not use our services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and Zenox. We reserve the
            right to update these Terms at any time. Continued use of our services after any change
            constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="2. Description of Services">
          <p>
            Zenox develops, operates, and maintains web and mobile applications, including
            educational and business management platforms, with related software support and IT
            services. Our current products include DailyCash, a cash flow management platform for
            small businesses.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of our services at any
            time. We will make reasonable efforts to notify users of significant changes.
          </p>
        </Section>

        <Section title="3. User Accounts">
          <p>
            To access certain features of our products, you must create an account. You are
            responsible for maintaining the confidentiality of your account credentials and for all
            activity that occurs under your account.
          </p>
          <p>You agree to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Keep your account information updated</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Not share your account with any third party</li>
          </ul>
          <p>
            Zenox reserves the right to suspend or terminate any account that violates these Terms
            or for any other reason at our discretion.
          </p>
        </Section>

        <Section title="4. Subscriptions and Payments">
          <p>
            Some of our products require a paid subscription. By subscribing, you authorize us to
            charge the applicable subscription fee to your chosen payment method.
          </p>
          <p>
            Subscription fees are charged on a recurring basis (monthly or annually as selected).
            All fees are stated in Nigerian Naira (₦) unless otherwise noted and are non-refundable
            except as required by applicable law.
          </p>
          <p>
            You may cancel your subscription at any time. Cancellation takes effect at the end of
            the current billing period. No refunds are issued for unused portions of a billing
            period.
          </p>
          <p>
            We reserve the right to change subscription pricing at any time. We will notify you at
            least 14 days before any price change takes effect.
          </p>
        </Section>

        <Section title="5. Referral Programme">
          <p>
            Certain products may offer a referral programme that allows users to earn rewards by
            inviting others to register. Referral rewards are credited only when the referred user
            becomes an active, paying subscriber.
          </p>
          <p>
            Zenox reserves the right to modify, suspend, or terminate the referral programme at any
            time. Referral rewards have no cash value outside of the platform and cannot be
            transferred. Abuse of the referral programme (including self-referral or fraudulent
            signups) will result in forfeiture of all rewards and account suspension.
          </p>
        </Section>

        <Section title="6. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Use our services for any unlawful purpose or in violation of any applicable law</li>
            <li>Attempt to gain unauthorized access to any part of our systems</li>
            <li>Transmit any harmful, offensive, or disruptive content</li>
            <li>Reverse engineer, decompile, or disassemble any part of our software</li>
            <li>Resell or redistribute access to our services without prior written consent</li>
            <li>Interfere with the proper functioning of any Zenox product or service</li>
          </ul>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content, software, designs, trademarks, and other materials associated with Zenox
            and its products are the exclusive property of Zenox or its licensors. Nothing in these
            Terms grants you any ownership rights over our intellectual property.
          </p>
          <p>
            You retain ownership of any data you input into our services. By using our services, you
            grant Zenox a limited, non-exclusive licence to process your data solely for the purpose
            of providing the services to you.
          </p>
        </Section>

        <Section title="8. Data and Privacy">
          <p>
            Your use of our services is also governed by our{' '}
            <Link
              to="/privacy"
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-500 dark:text-indigo-400"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. By using our services, you
            consent to the collection and use of your data as described in the Privacy Policy.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>
            Our services are provided "as is" and "as available" without warranties of any kind,
            either express or implied, including but not limited to warranties of merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that our services will be uninterrupted, error-free, or completely
            secure. Use of our services is at your own risk.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Zenox and its directors, employees,
            and affiliates shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising out of or related to your use of our services, even if
            advised of the possibility of such damages.
          </p>
          <p>
            Our total liability to you for any claim arising out of or relating to these Terms or
            our services shall not exceed the amount you paid to us in the 12 months preceding the
            claim.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the Federal
            Republic of Nigeria. Any dispute arising from these Terms shall be subject to the
            exclusive jurisdiction of the courts of Nigeria.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. We will notify you of material changes by
            posting a notice within our products or by sending an email to the address associated
            with your account. Your continued use of our services after any changes constitutes your
            acceptance of the new Terms.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:support@zenox.app"
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-500 dark:text-indigo-400"
            >
              support@zenox.app
            </a>
            .
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 dark:border-white/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 lg:px-10">
          <p className="text-xs text-slate-400">© 2026 Zenox Digital Solutions</p>
          <Link
            to="/privacy"
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
