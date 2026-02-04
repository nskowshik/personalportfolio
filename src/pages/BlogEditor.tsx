import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Eye, X } from "lucide-react";
import type { User } from "@supabase/supabase-js";

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    // Check auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      } else if (isEditing) {
        fetchPost();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, id, isEditing]);

  const fetchPost = async () => {
    if (!id) return;
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setTitle(data.title);
      setSlug(data.slug);
      setContent(data.content);
      setExcerpt(data.excerpt || "");
      setCategory(data.category || "");
      setTags(data.tags || []);
      setCoverImageUrl(data.cover_image_url || "");
      setIsPublished(data.is_published);
    } catch (error) {
      console.error("Error fetching post:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load post.",
      });
      navigate("/admin");
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing || !slug) {
      setSlug(generateSlug(value));
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagsInput.trim()) {
      e.preventDefault();
      const newTag = tagsInput.trim().toLowerCase();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagsInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = async (publish: boolean = false) => {
    if (!user) return;

    if (!title.trim() || !content.trim()) {
      toast({
        variant: "destructive",
        title: "Missing required fields",
        description: "Please fill in the title and content.",
      });
      return;
    }

    setIsSaving(true);

    try {
      const postData = {
        title: title.trim(),
        slug: slug.trim() || generateSlug(title),
        content: content.trim(),
        excerpt: excerpt.trim() || null,
        category: category.trim() || null,
        tags: tags.length > 0 ? tags : null,
        cover_image_url: coverImageUrl.trim() || null,
        is_published: publish || isPublished,
        published_at: (publish || isPublished) ? new Date().toISOString() : null,
        author_id: user.id,
      };

      if (isEditing && id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id);

        if (error) throw error;

        toast({
          title: "Post updated! ✨",
          description: publish ? "Your post is now live!" : "Changes saved successfully.",
        });
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert(postData);

        if (error) {
          if (error.code === "23505") {
            toast({
              variant: "destructive",
              title: "Slug already exists",
              description: "Please use a different slug for your post.",
            });
            return;
          }
          throw error;
        }

        toast({
          title: "Post created! 🎉",
          description: publish ? "Your post is now live!" : "Draft saved successfully.",
        });
      }

      navigate("/admin");
    } catch (error) {
      console.error("Error saving post:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save post. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/admin" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold">
              {isEditing ? "Edit Post" : "New Post"} ✍️
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => handleSave(false)}
              disabled={isSaving}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              onClick={() => handleSave(true)}
              disabled={isSaving}
            >
              <Eye className="w-4 h-4 mr-2" />
              {isPublished ? "Update" : "Publish"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter your post title..."
                  className="text-lg"
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(generateSlug(e.target.value))}
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input
                  id="coverImage"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                {coverImageUrl && (
                  <div className="mt-2 rounded-lg overflow-hidden border border-border">
                    <img
                      src={coverImageUrl}
                      alt="Cover preview"
                      className="w-full h-48 object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A brief summary of your post..."
                  rows={2}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Content * (supports HTML)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your post content here... You can use HTML for formatting."
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., React, JavaScript, Career"
                />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (press Enter to add)</Label>
                <Input
                  id="tags"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder="Add tags..."
                />
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-destructive/20"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        #{tag}
                        <X className="w-3 h-3 ml-1" />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Publish toggle */}
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <Label htmlFor="publish" className="text-base font-medium">
                    Published
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {isPublished 
                      ? "This post is visible to everyone" 
                      : "This post is saved as a draft"}
                  </p>
                </div>
                <Switch
                  id="publish"
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogEditor;
