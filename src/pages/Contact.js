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
        <h1 className="text-5xl font-bold text-green-900 mb-4 font-josefin">
          Contact Us
        </h1>
      </header>
      <main className="flex items-center justify-center w-full px-4 pb-12">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-4 font-josefin">Send your Query</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 text-xl font-semibold mb-2 font-josefin">Your Name</label>
              <input
              required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400 font-comfortaa font-bold"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xl font-semibold font-josefin mb-2">Email</label>
              <input
              required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400 font-comfortaa font-bold"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xl font-josefin font-semibold mb-2">Subject</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value="research"
                    className="scale-125"
                    checked={subject === "research"}
                    onChange={() => setSubject("research")}
                  />
                  <span className="font-comfortaa font-bold">Research</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value="team"
                    className="scale-125"
                    checked={subject === "team"}
                    onChange={() => setSubject("team")}
                  />
                  <span className="font-comfortaa font-bold">Join our team</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="other"
                    value="other"
                    className="scale-125"
                    checked={subject === "other"}
                    onChange={() => setSubject("other")}
                  />
                  <span className="font-comfortaa font-bold">Other</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-xl font-josefin font-semibold mb-2">Message</label>
              <textarea
              required
                name="message"
                placeholder="Enter your message"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400 font-comfortaa font-bold"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-josefin font-bold text-xl"
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
