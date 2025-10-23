import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content - Image */}
                    <div className="lg:w-1/2 flex justify-center h-72">
                        <div className="relative">
                            {/* Main waiting area image */}
                            <img
                                src="https://dokodemo-kerja.com/blog/wp-content/uploads/2022/06/272727.jpg"
                                alt="Queue Management"
                                className="rounded-2xl shadow-2xl w-96 max-w-lg h-64    "
                            />
                            {/* LED Display Overlay */}
                            <div className="absolute m-12 bg-blue-600 text-white rounded-lg p-3 shadow-lg">
                                <div className="text-center">
                                    <div className="text-xs opacity-90 mb-1">Current Token</div>
                                    <div className="text-2xl font-bold">A-110320</div>
                                    <div className="text-xs opacity-90 mt-1">Counter 1</div>
                                </div>
                            </div>

                           
                        </div>
                    </div>

                    {/* Right Content - Text */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Smart Queue Management System with LED Display
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Organize queues, enhance customer experience, and improve service
                            efficiency with our comprehensive queue management solution designed
                            for banks, hospitals, government offices, and service centers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link
                                to="/demo"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg text-center"
                            >
                                View Demo
                            </Link>
                            <Link
                                to="/features"
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Additional info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Real-time Updates</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>LED Display Integration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Real-time Queue Status</h3>
                            <p className="text-gray-600">Live updates with LED display showing current token numbers and wait times</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Easy Token Management</h3>
                            <p className="text-gray-600">Simple interface for generating and managing customer tokens</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Improved Efficiency</h3>
                            <p className="text-gray-600">Reduce wait times and enhance customer satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Active Locations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
                            <div className="text-gray-600">Daily Tokens</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                            <div className="text-gray-600">Customer Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                            <div className="text-gray-600">System Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}