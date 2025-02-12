import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function AboutUs() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <header className="bg-green-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>
      
      {/* Introduction Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/path-to-image.jpg" alt="About Us" className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-green-700">Environmental Sustainable Future</h2>
            <p className="mt-4 text-gray-600">
              We’ve 10+ years of experience in fostering sustainability...
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg">More About</button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="container mx-auto flex justify-around text-center">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p>Team Members</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">960+</h3>
            <p>Completed Works</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">38</h3>
            <p>Award Winning</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">4.7</h3>
            <p>Avg Ratings</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700">Meet Our Dedicated Members</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {["Connie Diaz", "James E. Huey", "June D. Vargas"].map((name, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg w-64 text-center">
              <img src="/profile-placeholder.jpg" alt={name} className="w-24 h-24 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-bold text-green-700">{name}</h3>
              <p className="text-gray-500">Role Here</p>
              <div className="flex justify-center gap-4 mt-4 text-green-600">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join Team As A Volunteer</h2>
        <button className="mt-4 bg-white text-green-700 py-2 px-6 rounded-lg font-bold">Join Us Now</button>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <FiMail /> example@gmail.com
          <FiPhone /> +123 456 7890
        </div>
        <p>&copy; 2024 EchoHaven. All rights reserved.</p>
      </footer>
    </div>
  );
}
