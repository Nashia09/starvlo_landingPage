import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Starvlo",
  description: "Privacy Policy for Starvlo.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-4 text-center">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed max-w-none">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
              <p>
                Welcome to Starvlo. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our 
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-slate-700">Identity Data:</strong> First name, last name, username or similar identifier.</li>
                <li><strong className="text-slate-700">Contact Data:</strong> Email address and telephone numbers.</li>
                <li><strong className="text-slate-700">Technical Data:</strong> Internet protocol (IP) address, your login data, browser type and version.</li>
                <li><strong className="text-slate-700">Usage Data:</strong> Information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, 
                we limit access to your personal data to those employees, agents, contractors and other third 
                parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we 
                collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your 
                personal data. These include the right to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us 
                at privacy@starvlohq.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
