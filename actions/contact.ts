"use server";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  // Validate input
  if (!data.name || !data.email || !data.message) {
    throw new Error("All required fields must be filled");
  }

  // Email validation
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }

  // Here you would integrate with your email service (e.g., Resend, SendGrid, Formspree)
  // Example with fetch to an API endpoint:
  /*
  const response = await fetch('https://api.example.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
  */

  // Simulate delay for demo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Message sent successfully!" };
}
