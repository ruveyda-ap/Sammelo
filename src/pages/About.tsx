import React from 'react';
import { Coffee, Award, Users, Heart, Truck, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest coffee beans from sustainable farms around the world.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Our love for coffee drives everything we do, from sourcing to customer service.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We believe in building relationships with our customers and coffee communities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every cup and every customer interaction.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Head Roaster',
      image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years in specialty coffee, Sarah founded Sammelo to share her passion for exceptional coffee.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Coffee Sourcing Director',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus travels the world to build relationships with coffee farmers and ensure ethical sourcing.'
    },
    {
      name: 'Elena Vasquez',
      role: 'Head of Customer Experience',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Elena ensures every customer has an exceptional experience with our products and service.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-coffee-dark to-coffee-medium text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 section-padding">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">
              Our Story
            </h1>
            <p className="text-xl text-cream opacity-90 leading-relaxed">
              Founded in 2020 by coffee enthusiasts, Sammelo began as a small roastery 
              with a big dream: to bring exceptional coffee experiences to every home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-coffee-dark">
                Our Mission
              </h2>
              <p className="text-lg text-text-medium leading-relaxed">
                At Sammelo, we believe that great coffee has the power to bring people together, 
                inspire creativity, and create moments of joy in everyday life. Our mission is 
                to source, roast, and deliver the world's finest coffee while supporting 
                sustainable farming practices and building lasting relationships with our community.
              </p>
              <p className="text-lg text-text-medium leading-relaxed">
                Every bean we select tells a story of dedication, craftsmanship, and passion. 
                From the farmers who grow our coffee to the customers who enjoy it, we're 
                committed to creating positive impact at every step of the journey.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coffee roasting process"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-gold text-coffee-dark p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we approach 
              our craft, our relationships, and our community.
            </p>
          </div>
          
          <div className="grid grid-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark">
                  {value.title}
                </h3>
                <p className="text-text-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              The passionate people behind Sammelo who work tirelessly to bring you 
              the perfect cup of coffee.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-coffee-medium font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-text-medium">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-coffee-dark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Sustainability Commitment
              </h2>
              <p className="text-cream opacity-90 leading-relaxed">
                We're committed to ethical sourcing and environmental responsibility. 
                We work directly with coffee farmers to ensure fair prices and sustainable 
                farming practices that protect both the environment and the communities 
                that grow our coffee.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-accent-gold" />
                  <span>Direct trade partnerships with farmers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-accent-gold" />
                  <span>Supporting coffee farming communities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-accent-gold" />
                  <span>Environmentally conscious packaging</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coffee farm"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-coffee-dark">50K+</div>
              <div className="text-text-medium">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-coffee-dark">25+</div>
              <div className="text-text-medium">Coffee Origins</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-coffee-dark">100+</div>
              <div className="text-text-medium">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-coffee-dark">4.8★</div>
              <div className="text-text-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;