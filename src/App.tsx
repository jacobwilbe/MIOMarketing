import React from 'react';
import background from '/fabio-alves-MyDBrmO9VN4-unsplash.jpg';
import { 
  Play, 
  TrendingUp, 
  Users, 
  Radio, 
  Award, 
  ChevronRight,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PricingCard } from './components/PricingCard';

const artists = [
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=400&h=400",
    growth: "2.5M+ streams in 6 months"
  },
  {
    name: "Marcus Rivera",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400&h=400",
    growth: "Featured on Billboard Hot 100"
  },
  {
    name: "Luna Collective",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=400&h=400",
    growth: "1M+ TikTok followers"
  }
];

const pricingPlans = [
  {
    title: "Gold",
    price: "199",
    features: [
      "Social Media Strategy",
      "Basic Playlist Pitching",
      "Monthly Strategy Call",
      "Content Calendar",
      "Basic Analytics"
    ]
  },
  {
    title: "Platinum",
    price: "299",
    features: [
      "Advanced Playlist Pitching",
      "PR Campaign",
      "Weekly Strategy Calls",
      "Content Creation",
      "Advanced Analytics",
      "Brand Development"
    ],
    isPopular: true
  },
  {
    title: "Diamond",
    price: "399",
    features: [
      "Full-Service Management",
      "Major Playlist Campaign",
      "Press Coverage",
      "Radio Promotion",
      "Tour Support",
      "24/7 Priority Support"
    ]
  }
];

export function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={background}
            alt="Background" 
            className="w-full h-full object-cover opacity-450"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black"></div>
        </div>
        
        <Navbar />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            TURN YOUR SOUND INTO SUCCESS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto font-light">
            We transform talented artists into industry sensations through strategic promotion and brand development
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center tracking-wider">
              START YOUR JOURNEY <ChevronRight className="ml-2" />
            </button>
            <button className="border border-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition flex items-center justify-center tracking-wider">
              WATCH SUCCESS STORIES <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">OUR SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: "Growth Strategy", desc: "Custom-tailored promotion plans" },
              { icon: <Users className="w-8 h-8" />, title: "Analytics Tracking", desc: "Targeted fan base expansion" },
              { icon: <Radio className="w-8 h-8" />, title: "Playlist Placement", desc: "Strategic music placement" },
              { icon: <Award className="w-8 h-8" />, title: "1-1 Established Mentorship", desc: "Unique artist identity creation" }
            ].map((service, index) => (
              <div key={index} className="bg-purple-900/20 p-6 rounded-xl hover:bg-purple-900/30 transition backdrop-blur-sm">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 tracking-wider">{service.title}</h3>
                <p className="text-gray-400 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-gradient">Choose the right plan for you</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto font-light">
            Choose the perfect plan to accelerate your music career and reach new heights in the industry. Schedule a consultation to learn more.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">SUCCESS STORIES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-[400px] object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 tracking-wider">{artist.name}</h3>
                  <p className="text-purple-400 font-light">{artist.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-gradient">READY TO MAKE IT OUT?</h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Join the ranks of successful artists who've transformed their careers with us
          </p>
          <button className="bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition tracking-wider">
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}