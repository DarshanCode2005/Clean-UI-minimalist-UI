import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We would love to hear from you! Reach out to us with any questions or feedback.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left column */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            If you have any questions, comments, or concerns, please don't hesitate
            to contact us. Our team is here to assist you.
          </p>

          <p>
            Email us at{" "}
            <a
              href="mailto:darshanthakare05@gmail.com"
              className="text-blue-600 hover:underline"
            >
              darshanthakare05@gmail.com
            </a>
            <br />
            Call us at{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>

          <p>
            Follow us on social media for updates and announcements.
          </p>
        </div>

        {/* Right column (Form) */}
        <form className="border p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
