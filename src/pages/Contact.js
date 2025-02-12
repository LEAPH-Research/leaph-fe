import { Leaf } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold text-green-900 mb-4 font-mono">
          Contact Us
        </h1>
      </header>

      <main className="flex mx-auto items-center justify-center pb-12">
        
      </main>
    </div>
  );
};

export default Contact;
