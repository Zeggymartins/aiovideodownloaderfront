import React from 'react';
import './home.css';
import { blogPosts, blogDetailsContent } from '../data/blogPosts';

const BlogDetails = ({ slug, onBack }) => {
  const post = blogDetailsContent[slug];
  const summary = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="blog-details">
        <div className="info-card">
          <h1>Story not found</h1>
          <p>The article you are looking for has been archived.</p>
          <button className="blog-card__cta" onClick={onBack}>Return to blog</button>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-details">
      <button className="blog-back" onClick={onBack}>← Back to blog</button>
      <p className="info-eyebrow">{summary?.tag}</p>
      <h1 className="info-title">{post.title}</h1>
      <p className="blog-card__meta">{summary?.date}</p>

      <div className="blog-details-body">
        {post.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default BlogDetails;
