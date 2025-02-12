import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Banner from './assets/ecophyimage1.jpeg'
import Image1 from './assets/blog-1.jpg.png'
import Image2 from './assets/footer-widget-2.png.png'
import Image3 from './assets/blog-post-2.png.png'
import Image4 from './assets/recent-post-3.png.png'
import Image5 from './assets/recent-post-2.png.png'
import Image6 from './assets/recent-post-1.png.png'
import { Link } from "react-router-dom";

export default function Blog (){
  const blogs = [
    { title: "Top 10 Recycling tips for Environment", author: "John D. Alexon", image: Image1, },
    { title: "How Every Individual Can Make a Difference", author: "Anjelina Watson", image: Image2 },
    { title: "Innovations in Renewable Energy Technology", author: "David Watson", image: Image3 },
    { title: "Completely Leverage Existing Customer Directed", author: "Masraf", image: Image4  },
    { title: "Progressively Syndicate Vista Seamless Natural", author: "Hasan Kaku", image: Image5 },
    { title: "Dramatically Architect new model before flexible", author: "Alex Song", image: Image6 },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="relative text-white w-full h-80" style={{backgroundImage:  `url(${Banner})`}}>
      <header className="flex w-4/5  m-auto items-center justify-between">
          <h1>logo</h1>
          <ul className="flex gap-3">
            <li className="capitalize"><Link  to={'/about'}>About us</Link></li>
            <li className="capitalize"><Link  to={'/contact'}>contact</Link></li>
            <li className="capitalize"><Link  to={'/service'}>service</Link></li>
            <li className="capitalize"><Link  to={'/blog'}>blog</Link></li>
          </ul>
        </header>
        <h1 className="text-center mt-20 font-bold">Blog</h1>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-5">
            <img src={blog.image} className=" w-full bg-gray-300 mb-4"/> {/* Placeholder for Image */}
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

      {/* Footer */}
      <div className="bg-green-600 text-white text-center py-12 mt-12" >
        <h2 className="text-2xl font-bold">Join Team As A Volunteer</h2>
        <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold">Join Us Now</button>
      </div>
      <footer className="bg-gray-900 text-white py-12" style={{backgroundImage: `url(${Banner})`}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About us</Link></li>
              <li><Link to={'/service'}>Our Services</Link></li>
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

