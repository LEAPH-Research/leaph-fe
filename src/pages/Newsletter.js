import { Leaf } from "lucide-react";
import React, { useState, useEffect } from "react";
import newsData from "../utils/news.json";

const Newsletter = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData?.news || []);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold text-green-900 mb-4 font-mono">
          Newsletter
        </h1>
      </header>

      <main className="flex w-4/5 md:w-2/5 mx-auto items-center justify-center pb-12">
      <div className="relative border-l-4 border-green-400 pl-4">
          {news.map((item, index) => (
            <div key={index} className="mb-6 relative">
              <div className="absolute -left-8 w-6 h-6 bg-green-700 rounded-full border-4 border-green-300"></div>
              <p className="text-green-600 font-bold text-2xl">{item.date}</p>
              <p className="bg-white p-3 rounded-lg shadow-md text-lg mt-2 font-mono">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
