import { Leaf } from "lucide-react";
import React, { useState, useEffect } from "react";
import paperData from "../utils/research.json";
import { Link } from "react-router-dom";

const PaperCard = ({ title, description, authors, citation, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="px-5 py-7 cursor-pointer text-center items-center flex flex-col rounded-lg transition-all duration-300 hover:scale-105 bg-white text-green-900 h-96 w-96 hover:shadow-2xl">
      <h1 className="text-lg font-bold font-josefin">{title}</h1>
      <h2 className="text-base mt-2 font-comfortaa font-bold">{description}</h2>
      <h3 className="mt-3 font-comfortaa">{authors}</h3>
      <h1 className="mt-4 hover:underline font-bold font-comfortaa">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-bold"
        >
          {" "}
          {citation}
        </a>
      </h1>
    </div>
  </a>
);

const Research = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    setPapers(paperData?.publications || []);
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
          Research
        </h1>
        <p className="cursor-default text-2xl font-semibold mt-6 font-josefin">
          Our Selected Publications
        </p>
        {/* <p className="text-xl text-green-700 font-semibold leading-8 max-w-3xl mx-auto text-justify font-mono">
          We aim to understand how health disparities arise from environmental
          conditions. To do this, we specialize in 1) environmental assessment
          and 2) epidemiology. Ultimately, we seek to inform decision-making to
          improve health and well-being, and to promote environmental justice.
        </p> */}
      </header>

      <main className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
          {papers.map((paper, index) => (
            <PaperCard key={index} {...paper} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Research;
