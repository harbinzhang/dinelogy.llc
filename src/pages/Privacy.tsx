import React from 'react'
import Layout from '../components/Layout'

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: August 8, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>
                At Dinelogy LLC ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose information when you use our QR code restaurant ordering system and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Delivery or pickup address</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type and version</li>
                <li>Order history and preferences</li>
                <li>Restaurant visit patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
              <p>
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>Process and fulfill your restaurant orders</li>
                <li>Provide customer support and communication</li>
                <li>Improve our QR ordering system and services</li>
                <li>Send promotional offers and marketing communications (with your consent)</li>
                <li>Analyze usage patterns and generate analytics</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6">
                <li>Restaurant partners to fulfill your orders</li>
                <li>Payment processors for transaction processing</li>
                <li>Service providers who assist with our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Geographic Protections</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR (European Union)</h3>
              <p className="mb-4">
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">CCPA/CPRA (California)</h3>
              <p>
                California residents have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected and the right to opt-out of the sale of personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information. Parents can contact us to review or delete their child's information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

export default Privacy