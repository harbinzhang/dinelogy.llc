import React from 'react'
import Layout from '../components/Layout'

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: August 8, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Dinelogy LLC's QR code restaurant ordering system and related services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="mb-4">
                Dinelogy provides QR code-based restaurant ordering technology that enables customers to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Scan QR codes to access restaurant menus</li>
                <li>Place orders directly through our platform</li>
                <li>Process payments securely</li>
                <li>Track order status and receive notifications</li>
              </ul>
              <p>
                Our Services may require user account registration and are subject to availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="mb-4">
                To use certain features of our Services, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Take responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Permitted and Prohibited Uses</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Uses</h3>
              <p className="mb-4">You may use our Services to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browse restaurant menus and place legitimate orders</li>
                <li>Manage your account and order history</li>
                <li>Communicate with restaurant partners through our platform</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Use the Services for any unlawful purpose or in violation of applicable laws</li>
                <li>Reproduce, modify, sublicense, or distribute our Services without authorization</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Submit false or misleading information</li>
                <li>Engage in any activity that could harm, disable, or impair our Services</li>
                <li>Use automated systems to access our Services without permission</li>
                <li>Post or transmit content that is harmful, threatening, discriminatory, or illegal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and design, are owned by Dinelogy LLC and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Services for their intended purpose. This license does not include any right to:
              </p>
              <ul className="list-disc pl-6">
                <li>Resell or make commercial use of the Services</li>
                <li>Copy, modify, or create derivative works</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Orders and Payments</h2>
              <p className="mb-4">
                When you place an order through our Services:
              </p>
              <ul className="list-disc pl-6">
                <li>You are making an offer to purchase items from the restaurant</li>
                <li>Orders are subject to acceptance by the restaurant</li>
                <li>Prices and availability are subject to change</li>
                <li>Payment processing is handled by secure third-party providers</li>
                <li>You are responsible for all applicable taxes and fees</li>
                <li>Refunds are subject to individual restaurant policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which governs how we collect, use, and protect your information. By using our Services, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability and Modifications</h2>
              <p className="mb-4">
                We strive to provide reliable service, but we do not guarantee that our Services will be:
              </p>
              <ul className="list-disc pl-6">
                <li>Available at all times without interruption</li>
                <li>Free from errors, viruses, or other harmful components</li>
                <li>Compatible with all devices or systems</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our Services at our discretion, with or without notice, for violation of these Terms or for any other reason. You may also terminate your account at any time by contacting us. Upon termination, your right to use the Services will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Disclaimers</h3>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DINELOGY LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Dinelogy LLC, its officers, directors, employees, and agents from any claims, damages, or expenses arising out of your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms are governed by the laws of California, United States, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                Notwithstanding the arbitration requirement, we may seek injunctive relief in any court of competent jurisdiction to protect our intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website with a new "Last updated" date. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2">
                  <li><strong>Email:</strong> info@dinelogy.com</li>
                  <li><strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94102</li>
                  <li><strong>Company:</strong> Dinelogy LLC</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Terms