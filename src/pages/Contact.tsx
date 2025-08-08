import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/Layout'

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    setFormStatus('sending');
    
    try {
      // EmailJS configuration from your screenshots
      const serviceID = 'service_jt58xcc';
      const templateID = 'template_7ubacbu';  
      const publicKey = 'HuSbZhTdJFEUjaY2k';
      
      const formData = new FormData(form);
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        time: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      };
      
      console.log('Sending email with:', templateParams);
      
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setFormStatus('success');
      form.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to learn more about our QR code ordering system
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-600 text-xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@dinelogy.com</p>
                    <p className="text-gray-600">support@dinelogy.com</p>
                  </div>
                </div>
                
                
                <div className="flex items-start">
                  <div className="text-primary-600 text-xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Dinelogy LLC</p>
                    <p className="text-gray-600">2108 N ST STE N</p>
                    <p className="text-gray-600">Sacramento, CA 95816</p>
                    <p className="text-gray-600">USA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form 
                className="bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                      formStatus === 'sending' 
                        ? 'bg-gray-400 text-white cursor-not-allowed' 
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {/* Loading Message */}
                {formStatus === 'sending' && (
                  <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
                    <p className="font-semibold">Sending your message...</p>
                    <p className="text-sm mt-1">Please wait while we process your request.</p>
                  </div>
                )}
                
                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    <p className="font-semibold">Message sent successfully! ✅</p>
                    <p className="text-sm mt-1">Your message has been sent to seashore.real@gmail.com. We'll get back to you soon!</p>
                  </div>
                )}
                
                {/* Error Message */}
                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    <p className="font-semibold mb-2">Failed to send message ❌</p>
                    <p className="text-sm mb-3">Please try again or contact us directly at:</p>
                    <p className="text-sm font-mono bg-white p-2 rounded border">
                      seashore.real@gmail.com
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact