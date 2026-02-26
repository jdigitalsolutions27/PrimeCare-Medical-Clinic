import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Health tips and educational articles from PrimeCare clinicians.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Health Tips & Blog"
        description="Evidence-informed patient education for better daily health decisions."
        image={images.clinicInterior}
      />
      <section className="container mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <div className="relative h-48">
              <ImageWithFallback src={post.image} alt={post.title} fill className="object-cover" fallbackLabel={post.title} />
            </div>
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{post.excerpt}</CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/blog/${post.slug}`}>Read article</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}
