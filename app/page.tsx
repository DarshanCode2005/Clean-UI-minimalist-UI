import React from 'react'
import {Heart, Smartphone, CloudLightning} from 'lucide-react'

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12ss">
      <div className='text-center my-16'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>Welcome to MyWebsite</h1>
        <p className='text-lg md:text-xl text-gray-700'>Your go-to platform for awesome content and resources.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-2 px-2 rounded-lg mt-8 hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-gray-300 text-gray-800 py-2 px-2 rounded-lg mt-8 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-8 mb-16'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='flex flex-col items-center rounded bg-red-200 w-12 h-12 justify-center mx-auto mb-4'>
            <Heart className='text-red-500' size={24}/>
          </div>
          <h2 className='text-2xl font-semibold mb-4 text-center'>Feature One</h2>
          <p className='text-gray-600'>Description of the first feature highlighting its benefits and uses.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='flex flex-col items-center rounded bg-blue-200 w-12 h-12 justify-center mx-auto mb-4'>
            <Smartphone className='text-blue-500' size={24}/>
          </div>
          <h2 className='text-2xl font-semibold mb-4 text-center'>Feature Two</h2>
          <p className='text-gray-600 text-justify'>Description of the second feature highlighting its benefits and uses.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='flex flex-col items-center rounded bg-yellow-200 w-12 h-12 justify-center mx-auto mb-4'>
            <CloudLightning className='text-yellow-500' size={24}/>
          </div>
          <h2 className='text-2xl font-semibold mb-4 text-center'>Feature Three</h2>
          <p className='text-gray-600 text-justify'>Description of the third feature highlighting its benefits and uses.</p>
        </div>
      </div>
    </div>
  )
}

export default page
