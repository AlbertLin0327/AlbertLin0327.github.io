import { format } from 'date-fns';
import matter from 'gray-matter';
import { blog_posts } from '../blog/posts';
import { Buffer } from 'buffer';
import { sleep } from 'bun';

if (!window.Buffer) {
  window.Buffer = Buffer
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

async function fetchPostContent(): Promise<BlogPost[]> {
  const result = blog_posts.map(async (post) => {
    const response = await fetch(post);
    const markdown = await response.text();
    const { data, content } = matter(markdown);

    const title = data.title;
    const date = data.date || new Date().toISOString();
    const excerpt = data.excerpt || content.split('\n').slice(0, 2).join(' ');
    const formattedDate = format(new Date(date), 'MMMM d, yyyy');
    const formattedContent = content.replace(/<[^>]+>/g, '');
    const formattedExcerpt = excerpt.replace(/<[^>]+>/g, '');
    return {
      slug: post,
      title,
      date: formattedDate,
      excerpt: formattedExcerpt,
      content: formattedContent,
    };
  });

  return Promise.all(result);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return await fetchPostContent();
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchPostContent();
  const post = posts.find(p => p.slug === slug);
  if (!post) return null;
  return post;
}