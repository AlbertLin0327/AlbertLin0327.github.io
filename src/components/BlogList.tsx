import { BlogPost } from '../utils/blog';

interface BlogListProps {
  posts: BlogPost[];
  setSlug: (slug: string) => void;
}

export function BlogList({ posts, setSlug }: BlogListProps) {
  return (
    <div className="blog-posts">
      {posts.map((post) => (
        <article key={post.slug} className="blog-post">
          <h3>{post.title}</h3>
          <p className="date">{post.date}</p>
          <p className="excerpt">{post.excerpt}</p>
          <button onClick={() => setSlug(post.slug)} className="read-more">
            Read More
          </button>
        </article>
      ))}
    </div>
  );
}