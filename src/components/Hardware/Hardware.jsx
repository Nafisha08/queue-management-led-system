import React from 'react'

export default function Hardware() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Hardware Components
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete hardware solution for efficient queue management system implementation
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Hardware Image */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                            <img
                                src='https://images.inc.com/uploaded_files/image/1920x1080/getty_480253609_86039.jpg'
                                alt='Hardware'
                                className="w-full rounded-lg shadow-lg"
                            />
                            <div className="mt-4 text-center text-sm text-gray-600">
                                Complete Queue Management Hardware Setup
                            </div>
                        </div>
                    </div>

                    {/* Hardware Specifications */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {/* LED Display */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">LED Display:</h3>
                                <p className="text-gray-600">4-6 digit 7-segment LED (visible 20-30m) or LED dot-matrix/panel</p>
                            </div>
                        </div>

                        {/* Token Printer */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Token Printer:</h3>
                                <p className="text-gray-600">58/80mm thermal printer</p>
                            </div>
                        </div>

                        {/* Operator Controls */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Operator Controls:</h3>
                                <p className="text-gray-600">Keypad/App with "Next / Recall / Skip / Transfer"</p>
                            </div>
                        </div>

                        {/* Controller */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2"></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Controller:</h3>
                                <p className="text-gray-600">Small controller/mini-PC with LAN/Wi-Fi</p>
                            </div>
                        </div>

                        {/* Audio */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Audio:</h3>
                                <p className="text-gray-600">Buzzer/Speaker for beep/voice prompt</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Specifications */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Technical Specifications
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Display Specs */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">LED Display</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 4-6 digit display</li>
                                <li>• 20-30m visibility</li>
                                <li>• 7-segment or dot-matrix</li>
                                <li>• High brightness LEDs</li>
                            </ul>
                        </div>

                        {/* Printer Specs */}
                        <div className="bg-green-50 rounded-xl p-6">
                            <div className="text-green-600 mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Thermal Printer</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 58/80mm paper width</li>
                                <li>• Fast printing speed</li>
                                <li>• Low maintenance</li>
                                <li>• Auto-cut function</li>
                            </ul>
                        </div>

                        {/* Control System */}
                        <div className="bg-purple-50 rounded-xl p-6">
                            <div className="text-purple-600 mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Controller Unit</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Mini-PC/Controller</li>
                                <li>• LAN/Wi-Fi connectivity</li>
                                <li>• Multiple I/O ports</li>
                                <li>• Compact design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Installation & Setup */}
                <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Installation & Setup
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h4 className="font-semibold mb-2">Hardware Setup</h4>
                            <p className="text-gray-600 text-sm">Install and connect all components</p>
                        </div>
                        <div>
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold">2</span>
                            </div>
                            <h4 className="font-semibold mb-2">Software Configuration</h4>
                            <p className="text-gray-600 text-sm">Configure system settings and preferences</p>
                        </div>
                        <div>
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <h4 className="font-semibold mb-2">Testing & Training</h4>
                            <p className="text-gray-600 text-sm">System testing and staff training</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}