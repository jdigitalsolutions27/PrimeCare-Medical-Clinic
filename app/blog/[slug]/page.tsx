import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "Requested article was not found.",
      path: "/blog",
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="container mt-12 max-w-4xl space-y-8">
      <div className="space-y-4">
        <Badge variant="secondary">{post.category}</Badge>
        <h1 className="text-4xl font-semibold text-balance">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString()} • {post.readTime}
        </p>
      </div>
      <div className="relative h-[360px] overflow-hidden rounded-3xl border">
        <ImageWithFallback src={post.image} alt={post.title} fill className="object-cover" fallbackLabel={post.title} />
      </div>
      <Card>
        <CardContent className="space-y-4 p-8 text-base leading-relaxed text-muted-foreground">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground">
            Educational content only. This article is not medical advice or diagnosis. Please consult a licensed physician for personalized care.
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
