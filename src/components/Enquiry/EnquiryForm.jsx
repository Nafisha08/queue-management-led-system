// components/EnquiryForm.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { createEnquiry, emailConfig } from '../../appwrite/config.js';


export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [enquiryId, setEnquiryId] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Validate EmailJS configuration
            console.log('🔧 EmailJS Config Check:', {
                serviceId: emailConfig.serviceId,
                adminTemplateId: emailConfig.adminTemplateId,
                userTemplateId: emailConfig.userTemplateId,
                publicKey: emailConfig.publicKey ? '***' + emailConfig.publicKey.slice(-4) : 'MISSING',
                adminEmail: emailConfig.adminEmail
            });

            if (!emailConfig.serviceId || !emailConfig.adminTemplateId || !emailConfig.userTemplateId || !emailConfig.publicKey || !emailConfig.adminEmail) {
                throw new Error('EmailJS configuration is incomplete. Please check appwrite/config.js and ensure all EmailJS credentials are set.');
            }

            // Step 1: Save to Appwrite Database
            console.log('📝 Saving to Appwrite...');
            const result = await createEnquiry(formData);
            console.log('✅ Saved to Appwrite:', result);

            const formattedDate = new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'long'
            });

            // Step 2: Send Admin Notification Email
            try {
                console.log('📧 Sending admin notification...');
                await emailjs.send(
                    emailConfig.serviceId,
                    emailConfig.adminTemplateId,
                    {
                        to_email: emailConfig.adminEmail,
                        enquiryId: result.enquiryId,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone || 'N/A',
                        message: formData.message,
                        createdDate: formattedDate
                    },
                    emailConfig.publicKey
                );
                console.log('✅ Admin notification sent');
            } catch (emailErr) {
                console.error('❌ Admin notification failed:', emailErr);
                throw new Error(`Admin notification failed: ${emailErr.text || emailErr.message}`);
            }

            // Step 3: Send User Confirmation Email
            try {
                console.log('📧 Sending user confirmation...');
                await emailjs.send(
                    emailConfig.serviceId,
                    emailConfig.userTemplateId,
                    {
                        to_email: formData.email,
                        to_name: formData.name,
                        enquiryId: result.enquiryId,
                        message: formData.message,
                        createdDate: formattedDate
                    },
                    emailConfig.publicKey
                );
                console.log('✅ User confirmation sent');
            } catch (emailErr) {
                console.error('❌ User confirmation failed:', emailErr);
                throw new Error(`User confirmation failed: ${emailErr.text || emailErr.message}`);
            }

            // Success!
            setEnquiryId(result.enquiryId);
            setSuccess(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            // Auto-hide success message after 10 seconds
            setTimeout(() => {
                setSuccess(false);
                setEnquiryId(null);
            }, 10000);

        } catch (err) {
            console.error('❌ Submission failed:', err);
            setError(err.message || 'Failed to submit enquiry. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                            Get In Touch
                        </h2>
                        <p className="text-gray-600">
                            Submit your inquiry and receive instant email confirmation
                        </p>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 p-5 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg animate-pulse">
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-3 flex-1">
                                    <h3 className="text-emerald-800 font-semibold">✅ Success! Enquiry Submitted</h3>
                                    <p className="text-emerald-700 text-sm mt-1">Your enquiry has been received successfully.</p>
                                    <div className="mt-3 p-3 bg-white rounded-lg border border-emerald-200">
                                        <p className="text-xs text-gray-600 font-medium">Enquiry ID:</p>
                                        <p className="font-mono text-base text-emerald-700 font-bold mt-1">{enquiryId}</p>
                                    </div>
                                    <p className="text-xs text-emerald-600 mt-2 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Email confirmation sent to your inbox
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-3">
                                    <h3 className="text-red-800 font-semibold">❌ Submission Failed</h3>
                                    <p className="text-red-700 text-sm mt-1">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={loading}
                                placeholder="+91"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                rows={5}
                                placeholder="Describe your inquiry in detail..."
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span>Submit Inquiry</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Setup Instructions */}
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <div className="text-sm text-blue-800">
                                <p className="font-semibold mb-2">📧 Email Setup Required:</p>
                                <ol className="list-decimal list-inside space-y-1 text-xs text-blue-700">
                                    <li>Create free account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 font-medium">emailjs.com</a></li>
                                    <li>Add email service (Gmail recommended)</li>
                                    <li>Create 2 templates: Admin Notification & User Confirmation</li>
                                    <li>Get Service ID, Template IDs & Public Key</li>
                                    <li>Update <code className="bg-blue-100 px-1.5 py-0.5 rounded font-mono text-blue-900">appwrite/config.js</code> with your credentials</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}