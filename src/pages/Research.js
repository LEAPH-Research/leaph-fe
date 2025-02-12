import { Leaf } from "lucide-react";
import React, { useState, useEffect } from "react";
import paperData from "../utils/research.json";

const PaperCard = ({ title, description, authors, citation, link }) => (
  <div className="px-5 py-7 text-center items-center flex flex-col rounded-lg transition-all duration-300 hover:scale-105 bg-white text-green-900 h-96 w-96 hover:shadow-2xl">
    <h1 className="text-lg font-bold">{title}</h1>
    <h2 className="text-base mt-2">{description}</h2>
    <h3 className="mt-5">
        {authors}
    </h3>
    <h1 className="mt-8 hover:underline">
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700"> {citation}</a>
    </h1>
  </div>
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
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold text-green-900 mb-4 font-mono">
          Research
        </h1>
        <p className="text-2xl font-semibold font-mono mt-6">Our Selected Publications</p>
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
