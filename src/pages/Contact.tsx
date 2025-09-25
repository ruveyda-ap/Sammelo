import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['123 Coffee Street', 'Bean City, BC 12345', 'United States'],
      color: 'text-coffee-medium'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 8AM-6PM', 'Sat-Sun: 9AM-5PM'],
      color: 'text-coffee-medium'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@sammelo.com', 'support@sammelo.com', 'We reply within 24 hours'],
      color: 'text-coffee-medium'
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: ['Monday - Friday: 7AM - 8PM', 'Saturday: 8AM - 9PM', 'Sunday: 8AM - 7PM'],
      color: 'text-coffee-medium'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Product Question',
    'Order Support',
    'Wholesale Inquiry',
    'Partnership',
    'Feedback',
    'Other'
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-beige py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-coffee-dark mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-coffee-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-text-medium mb-8">
                Whether you have questions about our products, need brewing advice, 
                or want to explore wholesale opportunities, we're here to help.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <div className={`w-12 h-12 rounded-full bg-beige flex items-center justify-center flex-shrink-0`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-dark mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-text-medium text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-8 border-t border-border-light">
              <h3 className="font-semibold text-coffee-dark mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-coffee-dark text-white rounded-full flex items-center justify-center hover:bg-coffee-medium transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-coffee-dark text-white rounded-full flex items-center justify-center hover:bg-coffee-medium transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-coffee-dark text-white rounded-full flex items-center justify-center hover:bg-coffee-medium transition-colors">
                  <span className="text-sm font-bold">tw</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-6 h-6 text-coffee-medium" />
                <h2 className="text-2xl font-bold text-coffee-dark">
                  Send us a Message
                </h2>
              </div>

              {submitted && (
                <div className="bg-success text-white p-4 rounded-lg mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coffee-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-16 border-t border-border-light">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  How fresh is your coffee?
                </h3>
                <p className="text-text-medium">
                  All our coffee is roasted to order and shipped within 24-48 hours of roasting. 
                  We recommend consuming within 2-4 weeks of the roast date for optimal flavor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  Do you offer wholesale pricing?
                </h3>
                <p className="text-text-medium">
                  Yes! We offer competitive wholesale pricing for cafes, restaurants, and offices. 
                  Contact us for a custom quote based on your needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  What's your return policy?
                </h3>
                <p className="text-text-medium">
                  We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, 
                  contact us for a full refund or exchange.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  How should I store my coffee?
                </h3>
                <p className="text-text-medium">
                  Store your coffee in a cool, dry place away from light and air. 
                  Use an airtight container and avoid refrigerating or freezing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-text-medium">
                  Currently, we ship within the United States and Canada. 
                  We're working on expanding to more countries soon.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">
                  Can I visit your roastery?
                </h3>
                <p className="text-text-medium">
                  Absolutely! We offer roastery tours and cupping sessions. 
                  Contact us to schedule a visit and learn about our roasting process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;