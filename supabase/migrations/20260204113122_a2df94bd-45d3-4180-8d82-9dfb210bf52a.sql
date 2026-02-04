-- Fix the permissive INSERT policy on blog_likes to prevent spam
-- Drop the old policy
DROP POLICY IF EXISTS "Anyone can insert likes" ON public.blog_likes;

-- Create a more restrictive policy - limit likes per IP per day
-- For now, we'll allow inserts but the UNIQUE constraint prevents duplicate likes
CREATE POLICY "Users can like posts once per IP" 
ON public.blog_likes FOR INSERT 
WITH CHECK (
  NOT EXISTS (
    SELECT 1 FROM public.blog_likes bl 
    WHERE bl.post_id = post_id 
    AND bl.user_ip = user_ip
  )
);