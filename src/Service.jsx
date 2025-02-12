import React from "react";
import { FaRecycle, FaLeaf, FaGlobe, FaArrowRight } from "react-icons/fa";

const services = [
  { title: "Cleaning Ocean", icon: <FaRecycle />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" },
  { title: "Dust Recycling", icon: <FaRecycle />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" },
  { title: "Plant Seedlings", icon: <FaLeaf />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" },
  { title: "Carbon Offsetting", icon: <FaGlobe />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" },
  { title: "Renewable Energy", icon: <FaRecycle />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" },
  { title: "Global Warming", icon: <FaLeaf />, img: "", desc: "Alternative innovation to ethical network environmental whiteboard" }
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2">Echofy — Service</p>
      </div>
      
      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-green-600 font-semibold">OUR SERVICES</h2>
        <h3 className="text-3xl font-bold mt-2">Echofy Provides Leading Environmental Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left">
              <div className="h-40 bg-gray-300 mb-4 rounded-lg">{service.img}</div>
              <div className="flex items-center gap-2 text-green-600 text-2xl">{service.icon}</div>
              <h4 className="text-xl font-semibold mt-2">{service.title}</h4>
              <p className="text-gray-600 mt-2">{service.desc}</p>
              <a href="#" className="mt-4 inline-flex items-center text-green-600 font-semibold">Discover More <FaArrowRight className="ml-2" /></a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-green-700 text-white py-12 text-center">
        <h3 className="text-2xl font-bold">Join Team As A Volunteer</h3>
        <button className="bg-green-500 px-6 py-3 mt-4 rounded-lg text-lg font-semibold">Join Us Now</button>
      </div>
      
      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">Latest Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Latest Blog</h4>
            <p className="mt-2">Top 10 Recycling Tips for Environment</p>
            <p className="text-gray-400 text-sm">Nov 16, 2024</p>
            <p className="mt-2">How Every Individual Can Make a Change</p>
            <p className="text-gray-400 text-sm">Nov 16, 2024</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="mt-2">2000 Pennsylvania Market Road, California, USA</p>
            <p className="mt-2">Call Us: +123 (4567) 890</p>
            <p className="mt-2">example@echofy.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
