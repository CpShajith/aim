-- Supabase Schema for AIM (Advance Intelligence in Motion)

-- Create custom types for media assets
CREATE TYPE media_type AS ENUM ('video', 'image', 'model');
CREATE TYPE user_role AS ENUM ('USER', 'ADMIN');

-- Note: We assume you will use Supabase Auth for users. 
-- The user_roles table links to auth.users to define custom roles.
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role DEFAULT 'USER'::user_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Hero Content table
CREATE TABLE public.hero_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title_line1 TEXT NOT NULL,
    title_line2 TEXT NOT NULL,
    video_url TEXT NOT NULL,
    screen_texture_url TEXT NOT NULL,
    active BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_hero_content_modtime
    BEFORE UPDATE ON public.hero_content
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

-- Media Assets table
CREATE TABLE public.media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    url TEXT NOT NULL,
    type media_type NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS)
ALTER TABLE public.hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for hero_content
-- Anyone can read the active hero content
CREATE POLICY "Allow public read-only access to active hero content." ON public.hero_content
    FOR SELECT USING (active = true);

-- Only admins can insert/update/delete hero content
CREATE POLICY "Allow admins to modify hero content." ON public.hero_content
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles 
            WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN'
        )
    );

-- RLS Policies for media_assets
-- Anyone can read media assets
CREATE POLICY "Allow public read-only access to media assets." ON public.media_assets
    FOR SELECT USING (true);

-- Only admins can insert/delete media assets
CREATE POLICY "Allow admins to modify media assets." ON public.media_assets
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles 
            WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN'
        )
    );

-- RLS Policies for user_roles
-- Users can read their own role, admins can read all roles
CREATE POLICY "Allow users to read their own role." ON public.user_roles
    FOR SELECT USING (auth.uid() = id);

-- Setup Storage
-- Note: You should create a public bucket named 'aiml_media' in the Supabase Dashboard
-- Alternatively, use this SQL (may require superuser depending on Supabase version):
INSERT INTO storage.buckets (id, name, public) VALUES ('aiml_media', 'aiml_media', true) ON CONFLICT DO NOTHING;

-- Allow public read access on 'aiml_media' bucket
CREATE POLICY "Allow public read access to media" ON storage.objects
    FOR SELECT USING (bucket_id = 'aiml_media');

-- Allow admins to insert/update/delete objects in 'aiml_media'
CREATE POLICY "Allow admins to upload media" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'aiml_media' AND 
        EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN')
    );

CREATE POLICY "Allow admins to update media" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'aiml_media' AND 
        EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN')
    );

CREATE POLICY "Allow admins to delete media" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'aiml_media' AND 
        EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN')
    );

-- Contact Requests table
CREATE TABLE public.contact_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    job_title TEXT,
    company TEXT,
    country TEXT,
    project_context TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a contact request
CREATE POLICY "Allow public insert of contact requests." ON public.contact_requests
    FOR INSERT WITH CHECK (true);

-- Only admins can read contact requests
CREATE POLICY "Allow admins to read contact requests." ON public.contact_requests
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.user_roles 
            WHERE user_roles.id = auth.uid() AND user_roles.role = 'ADMIN'
        )
    );

-- Insert initial dummy data
INSERT INTO public.hero_content (title_line1, title_line2, video_url, screen_texture_url, active)
VALUES (
    'ADVANCED INTELLIGENCE', 
    'IN MOTION', 
    'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4', 
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/uv_grid_opengl.jpg',
    true
) ON CONFLICT DO NOTHING;
