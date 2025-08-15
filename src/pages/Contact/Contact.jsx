import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
const Contact = () => {

     const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6lpx3j7',     // Service ID
      'template_zk2ayr4',    // Template ID
      form.current,
      'DZiwNnnlkYF02g3wL'    // Public Key
    )
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success('Email Sent Successfully!', { position: 'top-right' });
       
    }, (error) => {
        console.error('Error sending email:', error.text);
        toast.error('Failed to send message. Please try again.')
       
    });

    e.target.reset(); // optional: clears the form
  };
    return (
        <>
       

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center  bg-blue-50 px-4 py-12 ">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
    
    {/* Contact Info */}
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
      <p className="text-gray-600">
        Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
      </p>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Phone:</span> 01824369647</p>
        <p><span className="font-semibold">Email:</span> tabassum.anika579@gmail.com</p>
      </div>
    </div>

    {/* Contact Form */}
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-2xl p-8 w-full space-y-6 border border-gray-200"
      >
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Send a Message
        </h3>

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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>

        </>
    );
};

export default Contact;