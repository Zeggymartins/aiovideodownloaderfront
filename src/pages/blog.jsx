import React from 'react';
import './home.css';
import { Container } from 'react-bootstrap';
import { featureStory, blogPosts } from '../data/blogPosts';

// const insights = [
//   {
//     metric: '92%',
//     label: 'Downloads finish under 2 minutes',
//   },
//   {
//     metric: '65 TB',
//     label: 'Traffic accelerated through MediaVeed last month',
//   },
//   {
//     metric: '4.9/5',
//     label: 'Average user satisfaction across channels',
//   },
// ];

const Blog = ({ onNavigate }) => (
  <section className="blog-page">
    <article className="features-hero">
      <div>
        <p className="info-eyebrow">MediaVeed Blog</p>
        <h1>{featureStory.title}</h1>
        <p className="blog-hero__date">{featureStory.date}</p>
        <p className="blog-hero__summary">{featureStory.excerpt}</p>
        <button className="blog-hero__cta">Read Story →</button>
      </div>
      <div className="blog-hero__art" aria-hidden="true">
        <div className="spark spark-1" />
        <div className="spark spark-2" />
        <div className="spark spark-3" />
      </div>
    </article>
    <Container>
    {/* <div className="blog-insights">
      {insights.map((item) => (
        <div key={item.metric} className="blog-insight-card">
          <span>{item.metric}</span>
          <p>{item.label}</p>
        </div>
      ))}
    </div> */}

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <span className="blog-card__tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p className="blog-card__meta">{post.date}</p>
            <p>{post.summary}</p>
            <button
              className="blog-card__cta"
              onClick={() => onNavigate && onNavigate(post.slug)}
            >
              Continue reading
            </button>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default Blog;
