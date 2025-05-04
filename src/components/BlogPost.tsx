import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost as BlogPostType } from '../utils/blog';

interface BlogPostProps {
  post: BlogPostType;
  setSlug: (slug: string | null) => void;
}

export function BlogPost({ post, setSlug }: BlogPostProps) {
  return (
    <article className="blog-post-full">
      <div className="blog-header">
        <button onClick={() => setSlug(null)} className="back-link">
          ← Back to Blog
        </button>
        <h2 className="blog-title">{post.title}</h2>
        <p className="date">{post.date}</p>
      </div>
      <div className="content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}