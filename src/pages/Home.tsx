import React from 'react'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Complete Restaurant Digitization Platform
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
              QR Ordering + Management Dashboard
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The only restaurant platform with separate customer and management apps, real-time order processing, 
              and enterprise-grade Firebase infrastructure. Trusted by thousands of restaurants worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://barcode-food-seller.web.app', '_blank')}
                className="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Try Restaurant Dashboard →
              </button>
              <button 
                onClick={() => window.open('https://barcode-food-order.web.app', '_blank')}
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Try Customer App →
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
              Why Restaurants Choose Our Complete Platform
            </h2>
            <p className="text-lg text-gray-600">
              Unlike single-app competitors, we built a comprehensive system with purpose-designed applications for each user type
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dual-App System</h3>
              <p className="text-gray-600">Customer ordering + restaurant management apps, each optimized for its users</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-600">Live order tracking through 7 stages: pending → confirmed → preparing → ready → completed</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Infrastructure</h3>
              <p className="text-gray-600">Firebase-powered with 99.9% uptime, global CDN, and automatic scaling</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Menu Management</h3>
              <p className="text-gray-600">Category-based organization, drag-and-drop reordering, photo uploads, search functionality</p>
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
              Our dual-app system provides optimized experiences for both restaurants and customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Restaurant Dashboard Setup</h3>
              <p className="text-gray-600 mb-4">
                Restaurant owners access the management dashboard, upload menu items with photos, organize into categories with drag-and-drop, and generate table-specific QR codes.
              </p>
              <a 
                href="https://barcode-food-seller.web.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                → Try Restaurant Dashboard
              </a>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer QR Experience</h3>
              <p className="text-gray-600 mb-4">
                Customers scan QR codes to access their table-specific ordering page, browse categorized menus with search, add items to cart, and checkout with integrated payments.
              </p>
              <a 
                href="https://barcode-food-order.web.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                → Try Customer App
              </a>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Order Management</h3>
              <p className="text-gray-600 mb-4">
                Orders appear instantly in the restaurant dashboard. Staff can confirm, update preparation status, communicate with customers, and track orders through completion.
              </p>
              <div className="text-sm text-gray-500 space-x-1">
                <span className="bg-yellow-100 px-2 py-1 rounded">Pending</span>
                <span>→</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Confirmed</span>
                <span>→</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Ready</span>
                <span>→</span>
                <span className="bg-green-100 px-2 py-1 rounded">Complete</span>
              </div>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrated Communication</h3>
              <p className="text-gray-600 mb-4">
                Built-in messaging system allows customers to contact restaurants, leave feedback, and access Google/Yelp review links directly from the order confirmation.
              </p>
              <div className="text-sm text-gray-500">
                Customer ↔ Restaurant messaging
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Built with modern technologies and best practices for reliability, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🏗️ Monorepo Architecture</h3>
              <p className="text-gray-600">Shared components and utilities across customer and restaurant apps</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔥 Firebase Integration</h3>
              <p className="text-gray-600">Real-time database, cloud functions, hosting, and authentication</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">⚛️ React + TypeScript</h3>
              <p className="text-gray-600">Type-safe development with modern frameworks and comprehensive testing</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🧪 Quality Assurance</h3>
              <p className="text-gray-600">Automated testing, linting, and type checking with Vitest coverage</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🌐 Global Deployment</h3>
              <p className="text-gray-600">Multi-language support, CDN distribution, mobile-first responsive design</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔐 Enterprise Security</h3>
              <p className="text-gray-600">PCI compliance, data encryption, secure authentication, privacy controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Why We Outperform Single-App Competitors
            </h2>
            <p className="text-lg text-gray-600">
              Technical advantages that matter for modern restaurants
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Dinelogy</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">MenuSifu</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">MenuPo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Architecture</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">✅ Dual-app system</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Single app for all users</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Basic single interface</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Real-time Processing</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">✅ Firebase real-time updates</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Batch processing</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Basic polling</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Menu Management</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">✅ Advanced categorization</td>
                  <td className="px-6 py-4 text-center text-yellow-500">⚠️ Basic categories</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Simple lists</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Infrastructure</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">✅ Enterprise Firebase</td>
                  <td className="px-6 py-4 text-center text-yellow-500">⚠️ Standard hosting</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Basic shared servers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Customer Communication</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">✅ Built-in messaging</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ Email only</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ No communication</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the Complete Restaurant Platform
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Test both customer and restaurant apps. See real-time order processing, advanced menu management, 
            and enterprise infrastructure in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://barcode-food-seller.web.app', '_blank')}
              className="bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Try Restaurant Dashboard
            </button>
            <button 
              onClick={() => window.open('https://barcode-food-order.web.app', '_blank')}
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Try Customer App
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-4">
            No credit card required • Full platform access • Setup in minutes
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home