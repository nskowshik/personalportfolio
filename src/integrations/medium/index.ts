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



const fetchWithRetry = async (url: string, retries = 3, delay = 2000): Promise<any> => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Check if feed is being processed
            if (data.status === 'error' && data.message?.includes('being processed')) {
                console.log(`Feed processing, retry ${i + 1}/${retries}...`);
                if (i < retries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
                throw new Error('Feed is still being processed after retries');
            }
            
            // Check for other errors
            if (data.status === 'error') {
                throw new Error(data.message || 'RSS2JSON API error');
            }
            
            return data;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

export const fetchMediumPosts = async (): Promise<MediumPost[]> => {
    try {
        // Use RSS2JSON API to convert Medium RSS feed to JSON
        // Add retry logic for feed processing errors
        const data = await fetchWithRetry(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aathins5`
        );
        
        if (!data.items || !Array.isArray(data.items)) {
            console.warn('No items found in RSS feed');
            return [];
        }
        
        console.log(`Successfully fetched ${data.items.length} Medium posts`);
        
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