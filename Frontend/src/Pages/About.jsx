import { useState } from 'react';
import { MapPin, Users, Award, Compass, Globe, MessageCircle } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'story', label: 'Our Story' },
    { id: 'team', label: 'Our Team' }
  ];

  const tabContent = {
    mission: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-800">Exploring the World Together</h3>
        <p className="text-lg text-gray-700">
          At Wanderlust Travel, our mission is to make memorable travel experiences accessible to everyone. 
          We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.
        </p>
        <p className="text-lg text-gray-700">
          We are committed to sustainable tourism practices, supporting local communities, and preserving 
          the natural and cultural treasures that make our world so diverse and beautiful.
        </p>
      </div>
    ),
    story: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-800">From Backpackers to Travel Experts</h3>
        <p className="text-lg text-gray-700">
          Adventour Travel began 2025  when, Pratham singh, turned their passion for 
          exploration into a business. After backpacking across 30 countries, they recognized the need for 
          authentic, immersive travel experiences that went beyond typical tourist attractions.
        </p>
        <p className="text-lg text-gray-700">
          What started as a small blog sharing travel tips has grown into a full-service travel company 
          with over 50 team members across the globe. Despite our growth, we've stayed true to our roots: 
          creating meaningful connections between travelers and the destinations they visit.
        </p>
      </div>
    ),
    team: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-800">Passionate Travel Enthusiasts</h3>
        <p className="text-lg text-gray-700">
          Our team consists of seasoned travelers, local experts, and hospitality professionals who share 
          a common love for adventure and cultural exchange. Every team member has lived or traveled extensively 
          in the regions they specialize in, ensuring authentic recommendations and insider knowledge.
        </p>
        <p className="text-lg text-gray-700">
          From our tour guides to our customer service representatives, everyone at Wanderlust Travel is 
          dedicated to crafting unforgettable journeys that align with your travel dreams.
        </p>
      </div>
    )
  };

  const teamMembers = [
    {
      name: "Emma Johnson",
      role: "Co-Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "Former journalist who has visited over 70 countries across 7 continents."
    },
    {
      name: "Jake Williams",
      role: "Co-Founder & Head of Experiences",
      image: "/api/placeholder/300/300",
      bio: "Adventure sports enthusiast specialized in creating unique off-the-beaten-path experiences."
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Sustainable Tourism",
      image: "/api/placeholder/300/300",
      bio: "Environmental scientist ensuring our trips are eco-friendly and support local communities."
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-white-800 opacity-90"></div>
        <img 
          src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=sea-landscape-nature-307008.jpg&fm=jpg" 
          alt="Travel landscapes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Adventour</h1>
            <p className="text-xl max-w-2xl mx-auto">Transforming travel dreams into unforgettable journeys since 2025</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience crafting personalized travel experiences, we combine passion,
              expertise, and attention to detail in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Global Expertise",
                description: "Our team has explored over 100 countries, providing insider knowledge and authentic experiences."
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: "Award-Winning Service",
                description: "Recognized as Top Travel Company by Travel Magazine for 5 consecutive years."
              },
              {
                icon: <Users className="h-10 w-10 text-blue-600" />,
                title: "Personal Attention",
                description: "Customized itineraries that cater to your preferences, interests, and travel style."
              },
              {
                icon: <Compass className="h-10 w-10 text-blue-600" />,
                title: "Off-the-beaten-path",
                description: "Unique destinations and experiences that go beyond typical tourist attractions."
              },
              {
                icon: <MapPin className="h-10 w-10 text-blue-600" />,
                title: "Local Connections",
                description: "Strong relationships with local guides and businesses in every destination we offer."
              },
              {
                icon: <MessageCircle className="h-10 w-10 text-blue-600" />,
                title: "24/7 Support",
                description: "Our team is always available to assist you before, during, and after your journey."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission/Story/Team Section */}
      <div className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-6 py-3 ${
                  activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {tabContent[activeTab]}
        </div>

        {activeTab === 'team' && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">What Our Travelers Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Wanderlust Travel created an itinerary that perfectly balanced adventure and relaxation. Every detail was handled professionally, and the local guides were exceptional.",
                author: "Sarah T.",
                location: "Bali Adventure Tour"
              },
              {
                quote: "As solo travelers, safety was our top concern. The team at Wanderlust went above and beyond to ensure we felt secure while still having an authentic experience.",
                author: "Michael & Lisa R.",
                location: "Peru Cultural Experience"
              },
              {
                quote: "I've traveled with many companies over the years, but none compare to the personalized service and unique experiences that Wanderlust provides.",
                author: "James D.",
                location: "Japan Heritage Tour"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col h-full">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-blue-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let us help you create unforgettable travel memories. Contact our team today for a personalized travel consultation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}