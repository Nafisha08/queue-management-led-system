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
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2
                                wCEAAkGBxISEhUSEhMVFRUXFRUVGBgXFxcXFxUVFxUXFhYXFRcYHSggGBolHRUX
                                IjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHyUwLSstLS0tLS0tLi4tNS0tLS0tL
                                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"
                                alt="Queue Management Waiting Area"
                                className="rounded-2xl shadow-2xl w-full max-w-lg h-48  "
                            />

                            {/* LED Display Overlay */}
                            <div className="absolute m-12 bg-blue-600 text-white rounded-lg p-3 shadow-lg">
                                <div className="text-center">
                                    <div className="text-xs opacity-90 mb-1">Current Token</div>
                                    <div className="text-2xl font-bold">A-110320</div>
                                    <div className="text-xs opacity-90 mt-1">Counter 1</div>
                                </div>
                            </div>

                            {/* Stats overlay */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                                    <div>
                                        <div className="font-bold text-green-600">29</div>
                                        <div className="text-gray-600">Served</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-orange-600">30</div>
                                        <div className="text-gray-600">Waiting</div>
                                    </div>
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