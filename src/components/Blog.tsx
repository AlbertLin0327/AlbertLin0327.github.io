import { useEffect, useState } from 'react';
import { BlogList } from './BlogList';
import { BlogPost } from './BlogPost';
import { getBlogPosts, getBlogPost, BlogPost as BlogPostType } from '../utils/blog';

export function Blog() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPostType | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getBlogPosts();
      setPosts(allPosts);
    }
    loadPosts();
  }, []);

  useEffect(() => {
    async function loadPost() {
      if (slug) {
        const post = await getBlogPost(slug);
        if (post) {
          setCurrentPost(post);
        } else {
          setCurrentPost(null);
        }
      } else {
        setCurrentPost(null);
      }
    }
    loadPost();
  }, [slug]);

  return (
    <section className="blog">
      <h2>Blog</h2>
      {currentPost ? (
        <BlogPost post={currentPost} setSlug={setSlug} />
      ) : (
        <BlogList posts={posts} setSlug={setSlug} />
      )}
    </section>
  );
}