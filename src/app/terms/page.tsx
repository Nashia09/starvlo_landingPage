import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Starvlo",
  description: "Terms of Service for Starvlo.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-4 text-center">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed max-w-none">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service. If you 
                disagree with any part of the terms, then you may not access our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Service Description</h2>
              <p>
                Starvlo provides an AI-powered lead generation platform. We reserve the right to modify, 
                suspend, or discontinue the service at any time without notice. We are not liable to you or 
                any third party for any modification, suspension, or discontinuation of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, 
                and current. Failure to do so constitutes a breach of the Terms, which may result in 
                immediate termination of your account on our service.
              </p>
              <p className="mt-3">
                You are responsible for safeguarding the password that you use to access the service and 
                for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Acceptable Use</h2>
              <p>
                You agree not to use the service to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Violate any local, state, national, or international law.</li>
                <li>Infringe on the intellectual property rights of others.</li>
                <li>Distribute unsolicited material or spam.</li>
                <li>Attempt to bypass or break any security mechanism on the service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain the 
                exclusive property of Starvlo and its licensors. Our trademarks and trade dress may not be 
                used in connection with any product or service without the prior written consent of Starvlo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2>
              <p>
                In no event shall Starvlo, nor its directors, employees, partners, agents, suppliers, or 
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@starvlohq.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
