import React from 'react'

export default function Workflow() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Simple Workflow
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our queue management system follows a streamlined 4-step process for maximum efficiency
                    </p>
                </div>

                {/* Workflow Steps */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Step 1: Token Generation */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Token Generation
                        </h2>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Visitor presses Token button (kiosk/QR) and receives Token A0xx
                        </p>
                    </div>

                    {/* Step 2: Staff Action */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Staff Action
                        </h2>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Staff at Counter presses Next button
                        </p>
                    </div>

                    {/* Step 3: Display Update */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Display Update
                        </h2>
                        <p className="text-gray-600 text-center leading-relaxed">
                            LED shows "A023 → Counter 2" + plays beep/voice
                        </p>
                    </div>

                    {/* Step 4: Service */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            Service
                        </h2>
                        <p className="text-gray-600 text-center leading-relaxed">
                            If visitor not present → Recall. If still absent → Skip
                        </p>
                    </div>
                </div>

                {/* System Auto Reset */}
                <div className="bg-blue-50 rounded-2xl p-8 text-center mb-16">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Automatic System Reset
                    </h3>
                    <p className="text-lg text-gray-600">
                        System automatically resets at the end of day at a set time.
                    </p>
                </div>

                {/* Workflow Visual Flow */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Process Flow
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                        {/* Step indicators with arrows */}
                        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                <span className="text-sm font-medium mt-2">Generate</span>
                            </div>

                            <div className="hidden lg:block text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                <span className="text-sm font-medium mt-2">Call</span>
                            </div>

                            <div className="hidden lg:block text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                <span className="text-sm font-medium mt-2">Display</span>
                            </div>

                            <div className="hidden lg:block text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                <span className="text-sm font-medium mt-2">Serve</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}