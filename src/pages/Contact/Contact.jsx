import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

     const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_af3c9ck',     // Service ID
      'template_3lmcjdj',    // Template ID
      form.current,
      '9cskqF2G1ZF4Tansl'    // Public Key
    )
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again.');
    });

    e.target.reset(); // optional: clears the form
  };
    return (
        <section id='contact' className='min-h-screen flex flex-col items-center justify-center px-4 py-12'>
            <div>
                Contact
                
            </div>
            <form
  ref={form}
  onSubmit={sendEmail}
  className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full mx-auto space-y-6 border border-gray-100"
>
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    Contact Me
  </h2>

  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <input
      type="text"
      name="from_name"
      required
      placeholder="Your name"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      name="from_email"
      required
      placeholder="Your email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      name="message"
      rows="4"
      required
      placeholder="Write your message..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
  >
    Send Message
  </button>
</form>

        </section>
    );
};

export default Contact;