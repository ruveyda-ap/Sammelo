import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold text-coffee-dark mb-4">Post Not Found</h1>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="fade-in">
      {/* Breadcrumb */}
      <div className="bg-beige py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-text-medium hover:text-coffee-dark">Home</Link>
            <span className="text-text-light">/</span>
            <Link to="/blog" className="text-text-medium hover:text-coffee-dark">Blog</Link>
            <span className="text-text-light">/</span>
            <span className="text-coffee-dark font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-text-light mb-6">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-coffee-dark mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-beige text-coffee-dark text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-beige rounded-lg hover:bg-coffee-light hover:text-white transition-colors">
                <Heart className="w-4 h-4" />
                Like
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-beige rounded-lg hover:bg-coffee-light hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-text-medium mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </div>
            
            <div 
              className="text-text-dark leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, match => {
                  const level = match.trim().length;
                  return `<h${level} class="text-${4-level}xl font-bold text-coffee-dark mt-8 mb-4">`;
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} 
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-beige rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coffee-dark">
                  {post.author}
                </h3>
                <p className="text-text-medium">
                  Coffee expert and brewing enthusiast with over 10 years of experience 
                  in the specialty coffee industry.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border-light">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-beige py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-coffee-dark text-center mb-12">
              Related Articles
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="card group">
                  <Link to={`/blog/${relatedPost.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-text-light mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(relatedPost.publishedAt).toLocaleDateString()}
                    </div>

                    <h3 className="text-xl font-semibold text-coffee-dark mb-2 group-hover:text-coffee-medium transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-text-medium text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;