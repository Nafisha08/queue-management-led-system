import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch with us for queue management system solutions
                    </p>
                </div>

                {/* Main Layout - Contact Info and Image */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                    {/* Left side - Contact Information */}
                    <div className="space-y-8">
                        {/* Company Name */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                AAMASHT Solution Pvt. Ltd.
                            </h2>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-6 h-6 text-gray-600 mt-1">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-700 text-lg">
                                    J-3/41, Plot No. 21, J-Extension, Laxmi Nagar, New Delhi – 110092
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-6 h-6 text-gray-600 mt-1">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Email: </span>
                                    <a href="mailto:info@aqma.in" className="text-blue-600 hover:text-blue-800">info@aqma.in</a>
                                    <span className="text-gray-500">, </span>
                                    <a href="mailto:sales@aqma.in" className="text-blue-600 hover:text-blue-800">sales@aqma.in</a>
                                </p>
                            </div>
                        </div>

                        {/* Support Phone */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-6 h-6 text-gray-600 mt-1">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Support: </span>
                                    <a href="tel:+911234567890" className="text-green-600 hover:text-green-800 font-medium">+91123456790</a>
                                </p>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-6 h-6 text-gray-600 mt-1">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Web: </span>
                                    <a href="https://www.aqma.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.aqma.in</a>
                                </p>
                            </div>
                        </div>

                        {/* Services Description */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Supply, installation, and commissioning of Queue Management System with centralized controller, LED display(s), operator keypads, token printing, audio beep/voice, configuration, training, and 12-month warranty.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Service Center Illustration */}
                    <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Customer Service Center"
                                className="w-full rounded-lg shadow-lg"
                            />
                            <div className="text-center text-sm text-gray-600 mt-4">
                                Professional Customer Service Experience
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Get A Quote
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your phone number"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Organization</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your company/organization name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Requirements</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Please describe your queue management system requirements..."
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center bg-white rounded-xl shadow-lg p-6 border">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                        <p className="text-gray-600">+91123456790</p>
                    </div>

                    <div className="text-center bg-white rounded-xl shadow-lg p-6 border">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                        <p className="text-gray-600">info@aqma.in</p>
                    </div>

                    <div className="text-center bg-white rounded-xl shadow-lg p-6 border">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Visit Website</h3>
                        <p className="text-gray-600">www.aqma.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}