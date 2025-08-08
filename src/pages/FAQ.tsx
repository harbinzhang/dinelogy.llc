import React, { useState } from 'react'
import Layout from '../components/Layout'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does Dinelogy provide?",
      answer: "Dinelogy provides QR code-based restaurant ordering services including digital menu display, online ordering system, payment integration, and order management solutions. Our goal is to help restaurants improve efficiency, increase revenue, and enhance customer experience through innovative QR technology and comprehensive digital solutions."
    },
    {
      id: 2,
      question: "Which regions does Dinelogy serve?",
      answer: "Dinelogy serves restaurants across North America (United States and Canada) with plans to expand to additional markets. We are committed to providing comprehensive support and services to restaurants in these areas, with localized customer support and region-specific features."
    },
    {
      id: 3,
      question: "What are the advantages of Dinelogy?",
      answer: "Dinelogy's advantages lie in our innovative QR code technology, comprehensive solutions, and excellent customer support. We combine advanced software with user-friendly interfaces to provide restaurants with efficient order management tools and a seamless customer ordering experience. Our solutions are highly customizable to adapt to different types and scales of restaurants. Additionally, our customer support team is available to help with setup, training, and ongoing technical assistance."
    },
    {
      id: 4,
      question: "How can I contact Dinelogy customer service?",
      answer: "To contact Dinelogy's customer service team, you can reach us through the following methods: Email us at info@dinelogy.com for general inquiries and support@dinelogy.com for technical support. You can also contact us through our website's contact form or visit our office at 2108 N ST STE N, Sacramento, CA 95816, USA."
    },
    {
      id: 5,
      question: "How do customers use the QR code ordering system?",
      answer: "Customers simply scan the QR code at their table using their smartphone camera, which opens our digital menu in their web browser. They can browse the menu, customize their order, add items to their cart, and complete payment - all without downloading an app. Orders are sent directly to the restaurant's system for preparation."
    },
    {
      id: 6,
      question: "What do restaurants need to get started with Dinelogy?",
      answer: "Restaurants need a basic internet connection and existing POS system integration capabilities. We provide the QR codes, digital menu setup, and integration support. Our team handles the technical setup and provides training to ensure a smooth transition to QR-based ordering."
    },
    {
      id: 7,
      question: "Is there a setup fee or monthly subscription?",
      answer: "We offer flexible pricing plans to suit different restaurant sizes and needs. Contact our sales team at info@dinelogy.com for detailed pricing information and to discuss which plan would work best for your establishment."
    },
    {
      id: 8,
      question: "Can the digital menu be customized?",
      answer: "Yes! Our digital menus are fully customizable. You can update items, prices, descriptions, and images in real-time. You can also set up special promotions, mark items as unavailable, and organize your menu by categories - all through our easy-to-use management interface."
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our QR code ordering system
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <span className="flex-shrink-0 ml-2">
                    {openItems.includes(item.id) ? (
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </span>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <a
                href="mailto:info@dinelogy.com"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ