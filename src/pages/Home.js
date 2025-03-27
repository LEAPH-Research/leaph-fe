import React from "react";
import { Leaf, BookOpen, Mail, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationBlock = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => (
  <div
    className={`p-8 rounded-lg transition-all duration-300 hover:scale-105 ${className}`}
  >
    <Icon className="w-20 h-20 mb-4" />
    <h3 className="text-3xl mb-2 font-josefin font-extrabold">{title}</h3>
    <p className="text-lg opacity-90 font-comfortaa font-bold">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-5xl text-green-900 mb-4 font-josefin font-extrabold cursor-default">LEAPH</h1>
        <p className="text-xl text-green-700 max-w-2xl mx-auto font-comfortaa font-bold cursor-default">
          We are the Laboratory for Environmental Assessment and Population
          Health at the George Washington University
        </p>
      </header>

      <main className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
          <Link to="/about">
            <NavigationBlock
              icon={Leaf}
              title="About Us"
              description="Learn about our team"
              className="bg-green-300 hover:bg-green-400 text-green-900 h-72 w-72"
            />
          </Link>
          <Link to="/research">
            <NavigationBlock
              icon={GraduationCap}
              title="Research"
              description="Read about our work"
              className="bg-green-400 hover:bg-green-500 text-green-900 h-72 w-72"
            />
          </Link>

          <Link to="/newsletter">
            <NavigationBlock
              icon={BookOpen}
              title="News"
              description="Updates from our team"
              className="bg-green-500 hover:bg-green-600 text-green-900 h-72 w-72"
            />
          </Link>
          <Link to="/contact">
            <NavigationBlock
              icon={Mail}
              title="Contact"
              description="Send a message to us"
              className="bg-green-700 hover:bg-green-800 text-white h-72 w-72"
            />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
