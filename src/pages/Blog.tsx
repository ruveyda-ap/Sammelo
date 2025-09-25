import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-beige py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-coffee-dark mb-4">
              Coffee Blog
            </h1>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Discover brewing techniques, coffee origins, and expert tips to elevate your coffee experience.
            </p>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-coffee-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-text-light mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime} min read
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-coffee-dark mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-text-medium mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-beige text-coffee-dark text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].id}`}
                    className="btn-primary w-fit"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="card group">
              <Link to={`/blog/${post.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center gap-4 text-sm text-text-light mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-coffee-dark mb-3 group-hover:text-coffee-medium transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-text-medium mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-beige text-coffee-dark text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-coffee-medium font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-coffee-dark text-white rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Coffee Tips
          </h2>
          <p className="text-cream opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest brewing guides, coffee news, 
            and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-coffee-dark"
              required
            />
            <button type="submit" className="btn-primary bg-accent-gold text-coffee-dark hover:bg-yellow-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;