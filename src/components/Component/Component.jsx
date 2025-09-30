import React from 'react'

export default function OptionalAddons() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Optional Add-ons
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Enhance your queue management system with advanced features and capabilities
                    </p>
                </div>

                {/* Main Layout - Features and Dashboard */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                    {/* Left side - Add-on Features */}
                    <div className="space-y-8">
                        {/* Voice Announcement */}
                        <div className="bg-green-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Voice announcement:</h3>
                                    <p className="text-gray-700">"Token A zero two three... Counter two."</p>
                                </div>
                            </div>
                        </div>

                        {/* SMS/WhatsApp Updates */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-600 mb-2">SMS/WhatsApp updates:</h3>
                                    <p className="text-gray-700">Token created / next in queue notifications</p>
                                </div>
                            </div>
                        </div>

                        {/* Web Dashboard */}
                        <div className="bg-purple-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-purple-600 mb-2">Web dashboard:</h3>
                                    <p className="text-gray-700">Live queue view for managers</p>
                                </div>
                            </div>
                        </div>

                        {/* Multi-service Queues */}
                        <div className="bg-orange-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-orange-600 mb-2">Multi-service queues:</h3>
                                    <p className="text-gray-700">A-General, B-Billing, C-Support, with routing</p>
                                </div>
                            </div>
                        </div>

                        {/* Multilingual Support */}
                        <div className="bg-teal-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-3 h-3 bg-teal-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-teal-600 mb-2">Multilingual display/voice:</h3>
                                    <p className="text-gray-700">Support for multiple languages</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Dashboard Illustration */}
                    <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
                                <div className="bg-blue-600 text-white rounded-t-lg p-4 -m-6 mb-4">
                                    <h4 className="font-semibold text-center">Queue Management Dashboard</h4>
                                </div>

                                {/* Dashboard Content */}
                                <div className="space-y-4">
                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-green-100 rounded p-2 text-center">
                                            <div className="text-lg font-bold text-green-600">23</div>
                                            <div className="text-xs text-gray-600">Served</div>
                                        </div>
                                        <div className="bg-orange-100 rounded p-2 text-center">
                                            <div className="text-lg font-bold text-orange-600">12</div>
                                            <div className="text-xs text-gray-600">Waiting</div>
                                        </div>
                                        <div className="bg-blue-100 rounded p-2 text-center">
                                            <div className="text-lg font-bold text-blue-600">15m</div>
                                            <div className="text-xs text-gray-600">Avg Wait</div>
                                        </div>
                                    </div>

                                    {/* Current Token Display */}
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <div className="text-sm text-gray-600 mb-1">Current Token</div>
                                        <div className="text-2xl font-bold text-gray-800">A-023</div>
                                        <div className="text-sm text-gray-600">Counter 2</div>
                                    </div>

                                    {/* Queue List */}
                                    <div className="space-y-2">
                                        <div className="text-sm font-semibold text-gray-700">Queue Status</div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-xs">
                                                <span>A-024</span>
                                                <span className="text-orange-600">Next</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span>B-015</span>
                                                <span className="text-blue-600">Billing</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span>C-008</span>
                                                <span className="text-green-600">Support</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="bg-gray-100 rounded h-16 flex items-center justify-center">
                                        <div className="text-xs text-gray-500">Analytics Chart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Benefits
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Reduced Waiting Time */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Reduced Waiting Time</h3>
                                <p className="text-gray-600">Streamlined process minimizes customer wait times and improves satisfaction.</p>
                            </div>
                        </div>

                        {/* Improved Staff Productivity */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Improved Staff Productivity</h3>
                                <p className="text-gray-600">Staff can focus on service rather than managing crowds.</p>
                            </div>
                        </div>

                        {/* Enhanced Customer Experience */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Enhanced Customer Experience</h3>
                                <p className="text-gray-600">Professional, transparent, and fair service order creates positive impressions.</p>
                            </div>
                        </div>

                        {/* Business Insights */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Business Insights</h3>
                                <p className="text-gray-600">Analytics on service times, peak hours, and staff performance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Information */}
                <div className="text-center bg-blue-600 text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Upgrade Your System Today
                    </h2>
                    <p className="text-blue-100 mb-6">
                        Contact us to learn about add-on pricing and implementation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Request Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}