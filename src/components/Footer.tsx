import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dinelogy</h3>
            <p className="text-gray-300">
              Revolutionizing restaurant ordering with QR code technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="text-gray-400">About Us</span></li>
              <li><span className="text-gray-400">Features</span></li>
              <li><span className="text-gray-400">Pricing</span></li>
              <li><span className="text-gray-400">Support</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQS</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@dinelogy.com</li>
              <li>Address: 2108 N ST STE N</li>
              <li>Sacramento, CA 95816, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-600 mt-8 pt-8 text-center text-gray-100">
          <p>&copy; Dinelogy LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer