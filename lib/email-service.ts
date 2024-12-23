import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

export const sendEmail = async (data: {
  name: string;
  email: string;
  businessName: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        to_email: 'sushiiiv333@gmail.com',
        from_name: data.name,
        from_email: data.email,
        business_name: data.businessName,
        message: data.message,
      }
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};