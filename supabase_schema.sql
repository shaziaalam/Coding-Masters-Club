-- =========================================================================
-- Coding Club / Coding Master - Supabase Cloud Database Schema
-- Run this in your Supabase Dashboard: SQL Editor -> New query -> Run
-- =========================================================================

-- 1. Create the Students Table
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    avatar TEXT NOT NULL DEFAULT '🐻',
    pin TEXT NOT NULL DEFAULT '1234',
    school_name TEXT DEFAULT 'UK Primary School Coding Club',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create the Curriculum Progress Table (Shared across all 3 apps)
-- app_id values: 'ks2_scratch', 'ks1_blocks', 'ks1_junior'
CREATE TABLE IF NOT EXISTS public.curriculum_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    app_id TEXT NOT NULL,
    completed_steps JSONB NOT NULL DEFAULT '{}'::jsonb,
    completed_challenges JSONB NOT NULL DEFAULT '{}'::jsonb,
    completed_extensions JSONB NOT NULL DEFAULT '{}'::jsonb,
    current_week INT NOT NULL DEFAULT 1,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, app_id)
);

-- 3. Create Indexes for High Performance with Concurrent Students
CREATE INDEX IF NOT EXISTS idx_students_username ON public.students(username);
CREATE INDEX IF NOT EXISTS idx_curriculum_progress_student_app ON public.curriculum_progress(student_id, app_id);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_progress ENABLE ROW LEVEL SECURITY;

-- 5. Create Permissive Policies for Static Browser App Access (using Anon Key)
-- Students table policies
CREATE POLICY "Allow public select on students" 
    ON public.students FOR SELECT USING (true);

CREATE POLICY "Allow public insert on students" 
    ON public.students FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on students" 
    ON public.students FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on students" 
    ON public.students FOR DELETE USING (true);

-- Curriculum progress policies
CREATE POLICY "Allow public select on curriculum_progress" 
    ON public.curriculum_progress FOR SELECT USING (true);

CREATE POLICY "Allow public insert on curriculum_progress" 
    ON public.curriculum_progress FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on curriculum_progress" 
    ON public.curriculum_progress FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on curriculum_progress" 
    ON public.curriculum_progress FOR DELETE USING (true);

-- Success message
SELECT 'Coding Club Supabase Database Schema Successfully Installed!' AS status;
