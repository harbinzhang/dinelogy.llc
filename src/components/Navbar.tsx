import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Dinelogy
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Platform
            </Link>
            <Link
              to="/product"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/product') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Features
            </Link>
            <a
              href="https://barcode-food-seller.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Restaurant Demo
            </a>
            <a
              href="https://barcode-food-order.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Customer Demo
            </a>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar