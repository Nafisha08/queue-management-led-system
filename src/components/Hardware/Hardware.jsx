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
                                src="data:image/jpeg;base64,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"
                                alt="Queue Management Hardware Setup"
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