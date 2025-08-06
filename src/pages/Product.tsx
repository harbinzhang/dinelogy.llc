import React from 'react'
import Layout from '../components/Layout'

const Product: React.FC = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the features and capabilities of our QR code ordering system
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Features & Benefits
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">QR Code Integration</h3>
                    <p className="text-gray-600">Easy-to-scan QR codes for instant menu access</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Real-time Orders</h3>
                    <p className="text-gray-600">Orders sent directly to kitchen with live updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Payment Integration</h3>
                    <p className="text-gray-600">Secure payment processing with multiple options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold">Analytics Dashboard</h3>
                    <p className="text-gray-600">Comprehensive insights and reporting tools</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Product Demo Placeholder
              </h3>
              <p className="text-gray-600 mt-2">
                Interactive demo would be displayed here
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of restaurants already using our system
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product