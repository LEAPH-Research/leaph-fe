import { Leaf } from "lucide-react";
import React, { useState, useEffect } from "react";
import newsData from "../utils/news.json";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData?.news || []);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Link to="/">
            <Leaf className="w-16 h-16 text-green-600" />
          </Link>
        </div>
        <h1 className="cursor-default text-5xl font-bold text-green-900 mb-4 font-josefin">
          News
        </h1>
      </header>

      <main className="flex w-4/5 md:w-2/5 mx-auto items-center justify-center pb-12">
        <div className="relative border-l-4 border-green-400 pl-4 w-full">
          {news.map((item) => (
            <div key={item.id} className="mb-6 relative cursor-default">
              <div className="absolute -left-8 w-6 h-6 bg-green-700 rounded-full border-4 border-green-300"></div>
              <p className="text-green-600 font-bold text-2xl font-josefin">
                {item.date}
              </p>

              <div
                className={`bg-white p-3 rounded-lg shadow-md text-lg mt-2 font-comfortaa font-extrabold transition-all duration-300 ease-in-out group hover:shadow-lg ${
                  item.image ? "underline underline-offset-4" : ""
                }`}
              >
                {/* Wrap the description with a Link if a URL is provided */}
                {item.url ? (
                  <Link
                    to={item.url}
                    className="text-inherit hover:text-green-700 transition duration-300 ease-in-out"
                  >
                    {item.description}
                  </Link>
                ) : (
                  <p>{item.description}</p>
                )}

                {item.image && (
                  <div className="w-full h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-96 mt-2">
                    <img
                      src={require(`../assets/news/${item.image}`)}
                      alt={item.description || "News Image"}
                      className="w-full h-full rounded-xl shadow-md object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
