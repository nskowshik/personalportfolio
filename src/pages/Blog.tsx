import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Search, Clock, Heart, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  tags: string[] | null;
  reading_time: number | null;
  likes_count: number | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image_url, category, tags, reading_time, likes_count, published_at, created_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Blog <span className="inline-block animate-wiggle">📝</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about frontend development, React, and more
            </p>
          </motion.div>

          {/* Search and filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category as string)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Posts grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="glass animate-pulse">
                  <div className="h-48 bg-muted rounded-t-lg" />
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full mt-2" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <span className="text-6xl block mb-4">📭</span>
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Check back soon for new content!"}
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="glass hover-lift h-full group overflow-hidden">
                      {/* Cover image or placeholder */}
                      <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center overflow-hidden">
                        {post.cover_image_url ? (
                          <img
                            src={post.cover_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <span className="text-5xl group-hover:scale-110 transition-transform">
                            📄
                          </span>
                        )}
                      </div>
                      <CardHeader>
                        {post.category && (
                          <Badge variant="secondary" className="w-fit mb-2">
                            {post.category}
                          </Badge>
                        )}
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt || "Click to read more..."}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.published_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.reading_time || 1} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes_count || 0}
                          </span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
