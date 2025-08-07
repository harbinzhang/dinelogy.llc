import React from 'react'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Restaurant Digitization Platform
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
              QR Ordering + Management System
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your restaurant experience with our innovative mobile QR code ordering system. Fast, contactless, and easy for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://dinelogy.app', '_blank')}
                className="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Try Restaurant Dashboard →
              </button>
              <button
                onClick={() => window.open('https://barcode-food-order.web.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0', '_blank')}
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Try Customer App(Example) →
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Experience both apps live • No signup required • See real-time order processing
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Restaurants Choose Dinelogy
            </h2>
            <p className="text-lg text-gray-600">
              We help restaurants serve faster, operate smarter, and delight guests — all through a system built for real-world use, with dedicated apps for both customers and staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Setup in 5 Minutes</h3>
              <p className="text-gray-600">Get started fast — add tables, upload your menu, and you're live.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Cloud Infrastructure</h3>
              <p className="text-gray-600">Fast, secure, and always on — built on trusted global cloud providers.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">Need help? Our team is here anytime, day or night.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💲</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free QR Code Plan</h3>
              <p className="text-gray-600">Enjoy full access at no cost for everyday use — no signup required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the Complete Platform in Action
            </h2>
            <p className="text-lg text-gray-600">
              Dinelogy delivers a seamless dual-app experience — one for restaurants, one for customers — each packed with highly customizable features and designed to be simple for anyone to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Restaurant Dashboard Setup</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Restaurant owners access the management dashboard, upload menu items with photos, organize into categories with drag-and-drop, and generate table-specific QR codes.
              </p>
              <a
                href="https://dinelogy.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-block"
              >
                → Try Restaurant Dashboard
              </a>
            </div>

            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer QR Experience</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Customers scan QR codes to access their table-specific ordering page, browse categorized menus with search, add items to cart, and checkout with integrated payments.
              </p>
              <a
                href="https://barcode-food-order.web.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-block"
              >
                → Try Customer App(Example)
              </a>
            </div>

            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Order Management</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Orders appear instantly in the restaurant dashboard. Staff can confirm, update preparation status, communicate with customers, and track orders through completion.
              </p>
              <div className="text-sm text-gray-500 space-x-1 flex flex-wrap justify-center items-center gap-1">
                <span className="bg-yellow-100 px-2 py-1 rounded whitespace-nowrap">Pending</span>
                <span>→</span>
                <span className="bg-blue-100 px-2 py-1 rounded whitespace-nowrap">Confirmed</span>
                <span>→</span>
                <span className="bg-purple-100 px-2 py-1 rounded whitespace-nowrap">Ready</span>
                <span>→</span>
                <span className="bg-green-100 px-2 py-1 rounded whitespace-nowrap">Complete</span>
              </div>
            </div>

            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrated Communication</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Built-in messaging system allows customers to contact restaurants, leave feedback, and access Google/Yelp review links directly from the order confirmation.
              </p>
              <div className="text-sm text-gray-500 font-medium">
                Customer ↔ Restaurant messaging
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Reliability and Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Reliability and Security
            </h2>
            <p className="text-lg text-gray-600">
              Behind the scenes, Dinelogy runs on secure, global infrastructure with continuous testing to ensure smooth performance every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable by Design</h3>
              <p className="text-gray-600 flex-grow">
                Every feature is tested automatically to prevent bugs and ensure smooth, stable performance.
              </p>
            </div>

            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast, Anywhere</h3>
              <p className="text-gray-600 flex-grow">
                Optimized for all devices and languages — with global delivery and mobile-first design.
              </p>
            </div>

            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-600 flex-grow">
                Your data is protected with encryption, authentication, and industry-grade compliance controls.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Try the Full Dinelogy Platform — No Setup, No Commitment
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Explore both customer and restaurant apps — with real-time ordering, live dashboards, and intuitive menu tools, all running on secure global infrastructure.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => window.open('https://dinelogy.app', '_blank')}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-200 min-w-[200px]"
            >
              Try Restaurant Dashboard
            </button>
            <button
              onClick={() => window.open('https://barcode-food-order.web.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 min-w-[200px]"
            >
              Try Customer App(Example)
            </button>
          </div>
          <p className="text-white text-sm opacity-90">
            <em>Full access • No credit card needed • Setup in minutes</em>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home