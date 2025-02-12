import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact (){
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2">Ecofy — Contact Us</p>
      </div>

      {/* Contact Info */}
      <div className="flex justify-center mt-10 space-x-6">
        <div className="bg-green-600 text-white p-6 rounded-lg w-1/3 text-center">
          <FaMapMarkerAlt size={30} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">Office Address</h3>
          <p>200 Navana St, Santiago, USA</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg w-1/3 text-center">
          <FaPhoneAlt size={30} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">Make A Call</h3>
          <p>+123 4567 890</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg w-1/3 text-center">
          <FaEnvelope size={30} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">24/7 Support</h3>
          <p>example@gmail.com</p>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="flex mt-10 px-20">
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?YOUR_MAP_URL"
            className="w-full h-96 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Write us Something</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-3 border rounded" />
              <input type="email" placeholder="Your Email" className="p-3 border rounded" />
              <input type="text" placeholder="Phone Number" className="p-3 border rounded" />
              <input type="text" placeholder="Subject" className="p-3 border rounded" />
            </div>
            <textarea placeholder="Write Message" className="p-3 border rounded w-full mt-4 h-32"></textarea>
            <div className="mt-4">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="ml-2">I agree with the Terms & Conditions</label>
            </div>
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded">Submit Message</button>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 text-white text-center py-10 mt-10">
        <h2 className="text-2xl font-bold">Join Team As A Volunteer</h2>
        <button className="mt-4 bg-white text-green-700 px-6 py-3 rounded">Join Us Now</button>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-10 px-20 mt-10">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Meet Our Team</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Latest Blog</h3>
            <p>Top 10 Recycling Tips - Nov 16, 2024</p>
            <p>How Every Individual Can Make a Change - Nov 16, 2024</p>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p>200 Philosophy Market Road, California, USA</p>
            <p>Call Us: +123 4567 890</p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

