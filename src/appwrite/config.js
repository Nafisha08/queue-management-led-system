// appwrite/config.js
import { Client, Databases, ID } from 'appwrite';

// ========================================
// 🔧 APPWRITE CONFIGURATION
// ========================================
export const appwriteConfig = {
    endpoint: 'https://fra.cloud.appwrite.io/v1',
    projectId: '68e986db00202fd4e800',
    databaseId: '68e9896b002062cc8c50',
    collectionId: 'enquiries'
};

// ========================================
// 📧 EMAILJS CONFIGURATION
// ========================================
export const emailConfig = {
    // Service ID from EmailJS (same for both templates)
    serviceId: 'service_kr3vm1j',  // ✅ Already have this

    // Admin Notification Template (email to YOU)
    adminTemplateId: 'template_xd5pg3j',  // ← Create template & paste ID here

    // User Confirmation Template (email to USER)
    userTemplateId:    'template_uozss0k',    // ← Create template & paste ID here

    // Public Key from EmailJS
    publicKey: '0ccf76hioLWc0tUsZ',               // ← Get from Account settings

    // Your email address (where admin notifications will be sent)
    adminEmail: 'nafishaaslam2@gmail.com'          // ← Your email here
};




// ========================================
// Initialize Appwrite Client
// ========================================
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);

// ========================================
// Generate unique enquiry ID
// ========================================

export const generateEnquiryId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `ENQ${timestamp}${random}`;
};

// ========================================
// Create enquiry in Appwrite Database
// ========================================
export const createEnquiry = async (formData) => {
    try {
        const enquiryId = generateEnquiryId();

        const result = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.collectionId,
            ID.unique(),
            {
                enquiryId,
                name: formData.name,
                email: formData.email,
                phone: formData.phone || '',
                message: formData.message,
                status: 'pending',
                createdAt: new Date().toISOString()
            }
        );

        return {
            success: true,
            data: result,
            enquiryId
        };
    } catch (error) {
        console.error("❌ Error creating enquiry:", error);
        throw new Error(error.message || 'Failed to create enquiry');
    }
};