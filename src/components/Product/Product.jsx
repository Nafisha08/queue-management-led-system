import React from 'react'

export default function Product() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Product Variants
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the perfect queue management solution tailored to your business needs
                    </p>
                </div>

                {/* Main Layout - Image and Variants */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                    {/* Left side - Service Center Image */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                            <img
                                src="https://m.electronicqueuingsystem.com/photo/pc36708803-automatic_arabic_french_russia_etc_multiple_language_queue_management_system_machine.jpg"
                                alt="Queue Management Service Center"
                                className="w-full rounded-lg shadow-lg mb-4"
                            />
                            <div className="text-center text-sm text-gray-600">
                                Modern Service Center with Multiple Counters
                            </div>
                        </div>
                    </div>

                    {/* Right side - Product Variants */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {/* Basic QMS */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic QMS</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    1 LED Display
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    1 Counter
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Token Printer
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Perfect for small clinics
                                </li>
                            </ul>
                        </div>

                        {/* Standard QMS */}
                        <div className="bg-green-50 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Standard QMS</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Multiple Counters
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Central LED
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Operator Keypads
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Ideal for banks
                                </li>
                            </ul>
                        </div>

                        {/* Advanced QMS */}
                        <div className="bg-purple-50 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Advanced QMS</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    LED + Voice Announcement
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    Web Dashboard
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    Detailed Reports
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                    For large service centers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Feature Comparison
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-800">Features</th>
                                    <th className="text-center py-4 px-4 font-semibold text-blue-600">Basic QMS</th>
                                    <th className="text-center py-4 px-4 font-semibold text-green-600">Standard QMS</th>
                                    <th className="text-center py-4 px-4 font-semibold text-purple-600">Advanced QMS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">LED Display</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">Token Printer</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">Multiple Counters</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">Voice Announcement</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">Web Dashboard</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 text-gray-700">Detailed Reports</td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-red-500">✗</span>
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        <span className="text-green-600">✓</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Use Cases */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Ideal Use Cases
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Basic QMS Use Cases */}
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Basic QMS</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Small Clinics</li>
                                <li>• Dental Offices</li>
                                <li>• Single Counter Services</li>
                                <li>• Pharmacies</li>
                            </ul>
                        </div>

                        {/* Standard QMS Use Cases */}
                        <div className="text-center p-6 bg-green-50 rounded-xl">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-green-600">Standard QMS</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Banks</li>
                                <li>• Post Offices</li>
                                <li>• Government Offices</li>
                                <li>• Insurance Companies</li>
                            </ul>
                        </div>

                        {/* Advanced QMS Use Cases */}
                        <div className="text-center p-6 bg-purple-50 rounded-xl">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h.75m-.75 3h.75m-.75 3h.75m-3.75-7.5h.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-purple-600">Advanced QMS</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Large Hospitals</li>
                                <li>• Shopping Malls</li>
                                <li>• Airport Terminals</li>
                                <li>• Multi-service Centers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}