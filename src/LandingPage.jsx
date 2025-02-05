import { FaArrowRight, FaLeaf, FaRecycle, FaStar, FaTree, FaUsers, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPhone, FaEnvelope, } from "react-icons/fa"

export default function LandingPage() {
  const testimonials = [
    {
      name: "Angelina Warren",
      company: "Company",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "John D. Aaron",
      company: "Company",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ];

  const teamMembers = [
    { name: "Connie Diai", role: "Team", image: "/placeholder.svg?height=120&width=120" },
    { name: "James E.", role: "Head", image: "/placeholder.svg?height=120&width=120" },
    { name: "Jane D.", role: "Manager", image: "/placeholder.svg?height=120&width=120" },
  ];

  const blogPosts = [
    { title: "Top 10 Recycling Tips for Environment", image: "/placeholder.svg?height=200&width=300" },
    { title: "How Every Individual Can Make a Difference", image: "/placeholder.svg?height=200&width=300" },
    { title: "Sustainable & Renewable Energy Technology", image: "/placeholder.svg?height=200&width=300" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/90 to-lime-600/90" />
        <img
          src="/placeholder.svg?height=600&width=1920"
          alt="Nature background"
          width={1920}
          height={600}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Be Safe Controls Environment
              </h1>
              <p className="mb-8 text-lg text-white/90">Taking care of our planet for a sustainable future</p>
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-lime-600 transition hover:bg-lime-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative rounded-2xl bg-lime-50 p-6">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Environmental sustainability"
                width={500}
                height={400}
                className="rounded-xl object-cover"
              />
              <div className="absolute -right-4 -top-4 rounded-full bg-lime-500 p-4">
                <FaLeaf className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Environmental Sustainable Forever Green Future</h2>
              <p className="mb-8 text-gray-600">
                Discover how we're building a sustainable future through innovative environmental solutions and green
                initiatives.
              </p>
              <button className="inline-flex items-center rounded-full bg-lime-500 px-6 py-3 font-semibold text-white transition hover:bg-lime-600">
                See Environment
                <FaArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-lime-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 border-b-2 border-gray-300 p-8">
            Echofy Provide Environment Best Leading Services
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tree Plantation",
                icon: <FaTree className="h-8 w-8 text-lime-500" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Plant Recycling",
                icon: <FaRecycle className="h-8 w-8 text-lime-500" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Growing Green",
                icon: <FaLeaf className="h-8 w-8 text-lime-500" />,
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <button className="mt-4 inline-flex items-center text-lime-500 hover:text-lime-600">
                    Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Getting A Greener Future Safe Environment</h2>
              <div className="space-y-4">
                {[
                  { label: "Best Environment", value: "90%" },
                  { label: "Pure Energy", value: "85%" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="mb-2 flex justify-between">
                      <span className="font-medium text-gray-700">{stat.label}</span>
                      <span className="text-lime-500">{stat.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-lime-500" style={{ width: stat.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Growing future"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-lime-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {[
              { icon: <FaLeaf className="mx-auto h-6 w-6" />, label: "Plant" },
              { icon: <FaUsers className="mx-auto h-6 w-6" />, label: "Team" },
              {
                icon: <FaTree className="mx-auto h-6 w-6" />,
                label: "Growth",
              },
              {
                icon: <FaRecycle className="mx-auto h-6 w-6" />,
                label: "Recycle",
              },
            ].map((item, index) => (
              <div key={index} className="text-white">
                {item.icon}
                <p className="mt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        
      </footer>

      <section className="bg-gray-100 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green-700 text-sm font-semibold uppercase flex items-center gap-2">
          <FaLeaf /> Our Projects
        </h2>
        <h1 className="text-3xl font-bold mt-2">Finished the Latest Leading Environmental Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/tree-plantation.jpg" alt="Tree Plantation" className="w-full h-48 object-cover rounded" />
            <h3 className="text-green-600 font-semibold mt-3">Environment</h3>
            <p className="font-bold">Tree Plantation</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/plastic-recycling.jpg" alt="Plastic Recycling" className="w-full h-48 object-cover rounded" />
            <h3 className="text-green-600 font-semibold mt-3">Recycling</h3>
            <p className="font-bold">Plastic Recycling</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/cleaning-forest.jpg" alt="Cleaning Forest" className="w-full h-48 object-cover rounded" />
            <h3 className="text-green-600 font-semibold mt-3">Climate</h3>
            <p className="font-bold">Cleaning Forest</p>
          </div>
        </div>

        <h2 className="text-green-700 text-sm font-semibold uppercase flex items-center gap-2 mt-16">
          <FaRecycle /> Working Process
        </h2>
        <h1 className="text-3xl font-bold mt-2">Process To Safe Environment</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-4">
            <div className="flex justify-center">
              <FaRecycle className="text-green-500 text-4xl" />
            </div>
            <h3 className="font-bold mt-3">Collection Dust</h3>
            <p className="text-gray-600 text-sm mt-2">Proactively drive maintainable value next mission-critical infrastructures against new environmental nature</p>
          </div>
          <div className="p-4">
            <div className="flex justify-center">
              <FaRecycle className="text-green-500 text-4xl" />
            </div>
            <h3 className="font-bold mt-3">Dust Recycling</h3>
            <p className="text-gray-600 text-sm mt-2">Proactively drive maintainable value next mission-critical infrastructures against new environmental nature</p>
          </div>
          <div className="p-4">
            <div className="flex justify-center">
              <FaTree className="text-green-500 text-4xl" />
            </div>
            <h3 className="font-bold mt-3">Cleaning Environment</h3>
            <p className="text-gray-600 text-sm mt-2">Proactively drive maintainable value next mission-critical infrastructures against new environmental nature</p>
          </div>
        </div>
      </div>
    </section>

            {/* Testimonials Section */}
            <section className="relative py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold">Clients Best Feedback</h2>
          <p className="text-gray-600">About Echofy Profession</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
              <div className="flex justify-between ">

                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-10 h-10 bg-gray-400" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

                <p className="mt-4 text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
                </p>
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-full bg-lime-500 px-8 py-3 text-white transition hover:bg-lime-600">
            See more INSIGHTS Customers →
          </button>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold">Meet Our Dedicated</h2>
          <p className="text-gray-600">Members</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative text-center">
                <img src={member.image} alt={member.name}  className="mx-auto border-4 w-20 h-20 border-white shadow-lg transition group-hover:border-lime-500 rounded-full mb-3" />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Building a Greener Future Together</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
                <img src={post.image} alt={post.title} width={300} height={200} className="object-cover transition group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">{post.title}</h3>
                  <button className="inline-flex items-center text-lime-500 transition hover:text-lime-600">
                    Read More <FaArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-green-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-light-green text-dark-green py-5 px-8 rounded-md flex justify-between items-center">
          <h2 className="text-xl font-semibold">Stay With Us On Social</h2>
          <div className="flex gap-4">
            <FaFacebookF className="text-lg cursor-pointer hover:text-green-600" />
            <FaTwitter className="text-lg cursor-pointer hover:text-green-600" />
            <FaLinkedinIn className="text-lg cursor-pointer hover:text-green-600" />
            <FaPinterestP className="text-lg cursor-pointer hover:text-green-600" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div>
            <p className="mb-3">Proactively restore timely alignments after client environments</p>
            <p className="flex items-center gap-2"><span className="text-green-400"><FaPhone/></span> +123 (4567) 890</p>
            <p className="flex items-center gap-2"><span className="text-green-400"><FaEnvelope/></span> example@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Our Services</a></li>
              <li><a href="#" className="hover:text-green-400">Meet Our Team</a></li>
              <li><a href="#" className="hover:text-green-400">Latest Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400">Donations</a></li>
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="mb-3">Subscribe Our Newsletter</p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="px-4 py-2 rounded-md border border-gray-300 text-black"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Subscribe</button>
          </div>
        </div>
        
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>© Copyright 2024 Echofy All rights reserved by <span className="text-green-400">Dream-IT Solution</span></p>
        </div>
      </div>
    </footer>
    </div>
  )
}

