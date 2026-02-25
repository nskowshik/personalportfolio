interface MediumPost {
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



export const fetchMediumPosts = async (): Promise<MediumPost[]> => {
    try {
        // Use RSS2JSON API to convert Medium RSS feed to JSON
        const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aathins5`
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.items || !Array.isArray(data.items)) {
            return [];
        }
        
        // Transform Medium posts to match BlogPost interface
        return data.items.map((item: any, index: number) => {
            // Extract slug from guid or link
            // Medium URLs format: https://medium.com/@username/post-title-hash
            const urlParts = item.link.split('/').filter(part => part);
            let slug = urlParts[urlParts.length - 1] || `post-${index}`;
            // Remove query parameters if any
            slug = slug.split('?')[0];
            
            // Extract first image from content if available
            const coverImage =  item.thumbnail || null;
            
            // Strip HTML tags from content for excerpt
            const plainText = item.description?.replace(/<[^>]*>/g, '') || '';
            const excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
            
            // Estimate reading time (average 200 words per minute)
            const wordCount = plainText.split(/\s+/).length;
            const readingTime = Math.ceil(wordCount / 150);
            
            return {
                id: item.guid || `medium-${index}`,
                title: item.title,
                slug: slug,
                content: item.content || item.description || '',
                excerpt: excerpt,
                cover_image_url: coverImage,
                category: item.categories?.[0] || 'Article',
                tags: item.categories || null,
                reading_time: readingTime,
                likes_count: 0,
                published_at: item.pubDate,
                created_at: item.pubDate
            };
        });
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        return [];
    }
}