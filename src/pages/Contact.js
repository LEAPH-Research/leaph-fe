import { Leaf } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_API_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message could not be sent, Please try again");
        }
      );
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold text-green-900 mb-4 font-mono">
          Contact Us
        </h1>
      </header>
      <main className="flex items-center justify-center w-full px-4 pb-12">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-4">Send your Query</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value="research"
                    checked={subject === "research"}
                    onChange={() => setSubject("research")}
                  />
                  <span>Research</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value="support"
                    checked={subject === "support"}
                    onChange={() => setSubject("support")}
                  />
                  <span>Support</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value="team"
                    checked={subject === "team"}
                    onChange={() => setSubject("team")}
                  />
                  <span>Join our team</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;
