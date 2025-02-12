import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
impor

export default function Blog (){
  const blogs = [
    { title: "Top 10 Recycling tips for Environment", author: "John D. Alexon" },
    { title: "How Every Individual Can Make a Difference", author: "Anjelina Watson" },
    { title: "Innovations in Renewable Energy Technology", author: "David Watson" },
    { title: "Completely Leverage Existing Customer Directed", author: "Masraf" },
    { title: "Progressively Syndicate Vista Seamless Natural", author: "Hasan Kaku" },
    { title: "Dramatically Architect new model before flexible", author: "Alex Song" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="relative bg-green-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Blog</h1>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-5">
            <div className="h-40 bg-gray-300 mb-4"></div> {/* Placeholder for Image */}
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">Competently cultivate worldwide to e-tailers professionally engineer high</p>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div> {/* Avatar Placeholder */}
              <p className="text-sm font-medium">{blog.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Join Team Section */}
      <div className="bg-green-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Join Team As A Volunteer</h2>
        <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold">Join Us Now</button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Meet Our Team</li>
              <li>Latest Blog</li>
            </ul>
          </div>

          {/* Latest Blog */}
          <div>
            <h3 className="text-lg font-bold mb-3">Latest Blog</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Top 10 Recycling tips for Environment</li>
              <li>How Every Individual Can Make a Difference</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p className="text-gray-400">202B Philosophy Market Road, California, USA</p>
            <p className="text-gray-400">Call Us: +123 (4567) 890</p>
            <p className="text-gray-400">example@email.com</p>
            <div className="flex space-x-3 mt-4">
              <FaFacebookF className="text-gray-400 hover:text-white" />
              <FaTwitter className="text-gray-400 hover:text-white" />
              <FaLinkedinIn className="text-gray-400 hover:text-white" />
              <FaPinterestP className="text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

