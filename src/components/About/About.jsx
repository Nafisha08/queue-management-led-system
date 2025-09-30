import React from 'react'

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Core Functions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our Smart Queue Management System provides comprehensive features designed to streamline operations and enhance customer experience.
                    </p>
                </div>

                {/* Core Functions Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    {/* Token Generation */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Token Generation
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Touch/QR/web button creates sequential tokens (A001, A002...) with optional priority series (P001) for elderly/disabled.
                        </p>
                    </div>

                    {/* Counter Calling */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Counter Calling
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Staff press "Next" to call next token with re-call and skip options for efficient queue management.
                        </p>
                    </div>

                    {/* LED Display */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            LED Display
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Shows Token No. and Counter No. (e.g., "A023 → C2") with optional audio alerts when called.
                        </p>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Advanced Analytics
                    </h3>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        System tracks daily token count, average wait time, and peak hours for analytics.
                    </p>
                </div>

                {/* Additional Features */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Our System?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Real-time Updates</h4>
                            <p className="text-gray-600 text-sm">Live queue status with instant synchronization</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Flexible Integration</h4>
                            <p className="text-gray-600 text-sm">Works with existing hardware and systems</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Data Analytics</h4>
                            <p className="text-gray-600 text-sm">Comprehensive reporting and insights</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Easy Setup</h4>
                            <p className="text-gray-600 text-sm">Quick installation and configuration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}