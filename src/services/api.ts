import { supabase } from '../supabaseClient';

export interface HeroContentResponse {
    titleLine1: string;
    titleLine2: string;
    videoUrl?: string;
    screenTextureUrl?: string;
}

export const getHeroContent = async (): Promise<HeroContentResponse | null> => {
    const { data, error } = await supabase
        .from('hero_content')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

    if (error) {
        console.error('Error fetching hero content:', error);
        return null;
    }

    if (!data) return null;

    return {
        titleLine1: data.title_line1,
        titleLine2: data.title_line2,
        videoUrl: data.video_url,
        screenTextureUrl: data.screen_texture_url,
    };
};
