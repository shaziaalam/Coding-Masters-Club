# 🚀 Coding Club & Coding Master Applications Suite

A complete suite of 3 interactive, kid-friendly web curriculum applications designed for UK Primary Schools (Key Stage 1 & Key Stage 2), featuring **Cloud Database Sync (Supabase)**, **kid-friendly parallel logins**, and **1-click GitHub Pages deployment**.

Curriculum Creator for KS1 PictoBlox Courses: **Shazia Alam**

---

## 📦 The 3 Applications

| Folder | Application | Target Audience | Curriculum Creator | Default Port |
| :--- | :--- | :--- | :--- | :--- |
| `KS2 - Scratch 10 week Course` | **KS2 Code Club** | KS2 (Ages 7–11) | Coding Club | `http://localhost:5173` |
| `KS1 - Pictoblox Course -Blocks - 10 Week` | **Coding Master** (PictoBlox Standard Blocks) | KS1 (Ages 5–7) | **Shazia Alam** | `http://localhost:5174` |
| `KS1 - Pictoblox Course - Junior Blocks - 10 week` | **Coding Master** (Junior Blocks) | KS1 (Ages 5–7) | **Shazia Alam** | `http://localhost:5175` |

---

## 🌟 Key Features

1. **Multi-Student Parallel Logins**:
   - Students on 30+ separate computers in a school computer lab can log in at the exact same time without data collisions.
   - Kid-friendly credentials: username (e.g. `maya12`) + avatar + 4-digit PIN (no emails required).
2. **Cloud Database (Supabase)**:
   - Uses Supabase Postgres over HTTPS REST API (no server-side Node runtime needed).
   - Works immediately on static hosting like **GitHub Pages**.
   - Built-in **Local Storage fallback** if cloud credentials have not yet been entered.
3. **Teacher / Tutor Dossier & Live Class Roster**:
   - Slide-over Teacher Mode in every app.
   - Live roster table showing all students, current week, % completion, completed steps count, and last active timestamp.
   - **PIN Reset Action**: Teachers can reset any forgotten 4-digit PIN with 1 click.
   - **Export CSV**: One-click download of class progress reports for school records.
4. **Kid-Friendly Pedagogy**:
   - Web Audio chimes, celebratory confetti, interactive block highlights.
   - Web Speech API narration ("Read to Me") for KS1 early readers.
   - Printable Graduation Certificate customized with the student's name and school branding.

---

## 🗄️ Supabase Cloud Database Setup (5 Minutes)

1. Create a free account at [supabase.com](https://supabase.com) and create a new project (e.g. `primary-coding-club`).
2. In your Supabase project dashboard, navigate to the **SQL Editor** tab (left sidebar).
3. Open `C:\Coding Club\supabase_schema.sql`, copy all text, paste it into the SQL Editor, and click **Run**.
4. Navigate to **Project Settings** → **API**:
   - Copy the **Project URL** (e.g. `https://xyzabc.supabase.co`).
   - Copy the **Project API Key** (`anon` public key).
5. Open any of the 3 apps, click **Teacher Mode** (or **Teacher Guide**) → **Class Roster & Cloud DB** → **Configure Cloud DB**, paste the URL and Anon Key, and click **Save Cloud Connection**.
   *(Alternatively, save them into a `.env` file as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` before building).*

---

## 💻 Running Locally

Open terminal in any of the application folders and start Vite:

```bash
# App 1: KS2 Scratch
cd "KS2 - Scratch 10 week Course"
npm run dev

# App 2: KS1 PictoBlox (Standard Blocks)
cd "KS1 - Pictoblox Course -Blocks - 10 Week"
npm run dev

# App 3: KS1 PictoBlox (Junior Blocks)
cd "KS1 - Pictoblox Course - Junior Blocks - 10 week"
npm run dev
```

---

## 🌐 Deploying to GitHub Pages

Each application is pre-configured with relative assets (`base: './'` in `vite.config.ts`), allowing you to deploy each app to GitHub Pages with zero changes:

### Option A: Deploy via GitHub Actions (Recommended)
1. Push the code to a GitHub repository.
2. In GitHub, go to **Settings** → **Pages** → Source: **GitHub Actions**.
3. Use the standard static HTML/Vite GitHub Actions workflow.

### Option B: Deploy `dist` folder to `gh-pages` branch
```bash
# In the desired application folder:
npm run build
npx gh-pages -d dist
```

Now any student at school or at home can visit the URL, enter their username and PIN, and continue right where they left off!
