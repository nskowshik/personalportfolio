import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, Heart, Share2, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fetchMediumPosts } from "@/integrations/medium";
import Navigation from "@/components/portfolio/Navigation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  tags: string[] | null;
  reading_time: number | null;
  likes_count: number | null;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
      fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const posts = await fetchMediumPosts();
      const post = posts.find((post) => post.slug === slug);
      setPost(post);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    if (!post || hasLiked) return;

    setHasLiked(true);
    setLikesCount((prev) => prev + 1);
    
    if (post) {
      const likedPosts = localStorage.getItem("likedPosts");
      const liked = likedPosts ? JSON.parse(likedPosts) : [];
      liked.push(post.id);
      localStorage.setItem("likedPosts", JSON.stringify(liked));
    }

    toast({
      title: "Thanks for the love! 💜",
      description: "Your appreciation means a lot!",
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post?.title,
        text: post?.excerpt || "Check out this blog post!",
        url: window.location.href,
      });
    } catch {
      // Fallback to copy link
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied! 📋",
        description: "Share it with your friends!",
      });
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mb-4" />
              <div className="h-4 bg-muted rounded w-1/4 mb-8" />
              <div className="h-64 bg-muted rounded mb-8" />
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded" />
                <div className="h-4 bg-muted rounded" />
                <div className="h-4 bg-muted rounded w-5/6" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl block mb-4">😕</span>
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {post.category && (
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.published_at)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.reading_time || 1} min read
              </span>
              <span className="flex items-center gap-1">
                <Heart className={`w-4 h-4 ${hasLiked ? "fill-primary text-primary" : ""}`} />
                {likesCount} likes
              </span>
            </div>
          </motion.header>

          {/* Cover image */}
          {post.cover_image_url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 rounded-xl overflow-hidden"
            >
              <img
                src={post.cover_image_url || '/Blog.png'}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button
              size="lg"
              variant={hasLiked ? "secondary" : "default"}
              onClick={handleLike}
              disabled={hasLiked}
              className="hover-lift"
            >
              <Heart className={`w-5 h-5 mr-2 ${hasLiked ? "fill-current" : ""}`} />
              {hasLiked ? "Liked!" : "Like this post"} ({likesCount})
            </Button>
            <Button size="lg" variant="outline" onClick={handleShare} className="hover-lift">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </motion.div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
