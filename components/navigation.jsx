"use client"
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
const [isOpen, setIsOpen] = React.useState(false)

return (
    <nav className='bg-white shadow-sm border-b'>
            <div className='max-w-6xl mx-auto px-4'>
                    <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className='flex-shrink-0'>
                                    <Link href="/" className='text-xl font-bold text-gray-800'>
                                            MyApp
                                    </Link>
                            </div>
                            {/* Navigation Links */}
                            <div className='hidden md:flex space-x-4'>
                                    <Link href="/" className='text-gray-600 hover:text-gray-800'>
                                            Home
                                    </Link>
                                    <Link href="/about" className='text-gray-600 hover:text-gray-800'>
                                            About
                                    </Link>
                                    <Link href="/contact" className='text-gray-600 hover:text-gray-800'>
                                            Contact
                                    </Link>
                            </div>
                            <div className='md:hidden'>
                                    <button onClick={() => setIsOpen(!isOpen)} className='text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800'>
                                            <svg className='h-6 w-6 transition-opacity duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                                {/* Hamburger */}
    <path
      d="M4 6h16M4 12h16M4 18h16"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
      }`}
    />

    {/* Close */}
    <path
      d="M6 18L18 6M6 6l12 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
      }`}
    />
                                            </svg>
                                    </button>
                            </div>
                    </div>
                    {isOpen && (
                        <div className='md:hidden pb-4'>
                            <Link href="/" className='block px-2 py-1 text-gray-600 hover:text-gray-800'>
                                    Home
                            </Link>
                            <Link href="/about" className='block px-2 py-1 text-gray-600 hover:text-gray-800'>
                                    About
                            </Link>
                            <Link href="/contact" className='block px-2 py-1 text-gray-600 hover:text-gray-800'>
                                    Contact
                            </Link>
                        </div>
                    )}
            </div>
    </nav>
    )
}

export default Navigation