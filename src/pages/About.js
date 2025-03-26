import { Leaf } from "lucide-react";
import React, { useState, useEffect } from "react";
import teamData from "../utils/team.json";

const TeamCard = ({ img, name, role, linkedin, website, description }) => (
  <div className="px-5 py-3 text-center items-center flex flex-col rounded-lg transition-all duration-300 hover:scale-105 bg-white text-green-900 h-96 w-96 hover:shadow-2xl">
    <img src={require(`../assets/team/${img}`)} alt={name} className="h-32 w-32 rounded-full" />
    <h3 className="text-2xl mt-2 mb-1 font-josefin font-extrabold">{name}</h3>
    <p className="text-xl font-semibold text-justify opacity-90 italic font-josefin">{role}</p>
    <div className="flex gap-3 mt-2">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={require("../assets/icons/linkedin.png")} className="h-7 cursor-pointer" alt="LinkedIn" />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img src={require("../assets/icons/web.png")} className="h-7 cursor-pointer" alt="Website" />
        </a>
      )}
    </div>
    <ul className="list-disc text-start pl-2 mt-1 font-comfortaa font-bold text-[15px]">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const ATeamCard = ({ img, name, role, linkedin, website, description }) => (
  <div className="px-5 py-3 text-center items-center flex flex-col rounded-lg transition-all duration-300 hover:scale-105 bg-white text-green-900 h-80 w-80 hover:shadow-2xl">
    <img src={require(`../assets/team/${img}`)} alt={name} className="h-32 w-32 rounded-full" />
    <h3 className="text-2xl mt-2 mb-1 font-josefin font-extrabold">{name}</h3>
    <p className="text-lg font-semibold text-center opacity-90 italic font-josefin">{role}</p>
    <div className="flex gap-3 mt-2">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={require("../assets/icons/linkedin.png")} className="h-7 cursor-pointer" alt="LinkedIn" />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img src={require("../assets/icons/web.png")} className="h-7 cursor-pointer" alt="Website" />
        </a>
      )}
    </div>
    <ul className="list-disc text-start w-11/12 mt-1 font-comfortaa font-extrabold">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const [team, setTeam] = useState([]);
  const [ateam, setATeam] = useState([]);

  useEffect(() => {
    setTeam(teamData?.team?.current || []);
    setATeam(teamData?.team?.alumni || []);
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl text-green-900 mb-4 font-josefin font-extrabold">
          About Us
        </h1>
        <p className="text-xl text-green-700 leading-8 max-w-3xl mx-auto text-justify font-comfortaa font-extrabold">
          We aim to understand how health disparities arise from environmental
          conditions. To do this, we specialize in 1) environmental assessment
          and 2) epidemiology. Ultimately, we seek to inform decision-making to
          improve health and well-being, and to promote environmental justice.
        </p>
      </header>

      <main className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>

        
      </main>
     <main className="flex flex-col items-center justify-center pb-24">
      <h1 className="text-4xl font-extrabold text-green-900 mb-4 font-josefin">
        Alumni
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center mt-7">
          {ateam.map((member, index) => (
            <ATeamCard key={index} {...member} />
          ))}
        </div>
     </main>
    </div>
  );
};

export default About;
