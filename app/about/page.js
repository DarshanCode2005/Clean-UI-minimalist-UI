import React from 'react'

const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">Learn more about our mission and values.</p>
      </div>
      <div className="space-y-6 text-gray-700 leading-relaxed mx-2 text-center">
        <p>
            Welcome to our About Page! We are dedicated to providing the best service possible. Our team works tirelessly to ensure customer satisfaction and continuous improvement.
        </p>
        <p>
            Our mission is to innovate and lead in our industry, setting standards for quality and integrity. We believe in transparency, collaboration, and making a positive impact in our community.
        </p>
        <p>
            Thank you for taking the time to learn more about us. We look forward to serving you and building a lasting relationship.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-8 mb-8 mt-4'>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
            <p className='text-gray-600'>To deliver high-quality products that bring value to our customers and foster innovation in our field.</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Our Values</h2>
            <p className='text-gray-600'>Integrity, Customer Focus, Innovation, Teamwork, and Excellence in everything we do.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
