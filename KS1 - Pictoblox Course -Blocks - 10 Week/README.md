# Coding Master — KS1 PictoBlox 10-Week Course
**Curriculum Creator:** Shazia Alam  
**Target Audience:** Key Stage 1 (Years 1–2, Ages 5–7)  
**Platform:** PictoBlox (STEMpedia / Tobi the Bear)

---

## 🌟 Overview
**Coding Master** is a playful, kid-friendly interactive web application designed to teach block-coding in PictoBlox to absolute primary school beginners.

### Key Features:
- **10 Curtailed Weekly Quests:** Bite-sized step cards featuring **Tobi the Bear**, progressing from simple green-flag animations to speech synthesis, camera vision, and arcade game design.
- **"Read to Me 🔊" Audio Narration:** Browser-native speech synthesis on every step to assist early readers.
- **Authentic PictoBlox Code Blocks:** Visual block preview matching official block shapes and colors.
- **Interactive "Oopsie Detective":** Beginner-friendly debugging puzzles with clues and instant fixes.
- **"Super Star Challenges":** Extra missions for fast learners.
- **Teacher & Parent Guide:** 35–45 minute session pacing, mouse/trackpad tips, and UK National Curriculum KS1 Computing links.
- **Printable Graduation Certificate:** Customizable with student name, school name, date, and "Curriculum Creator: Shazia Alam".

---

## 🚀 Running Locally

1. Open a terminal in this directory:
   ```bash
   cd "C:\Coding Club\KS1 - Pictoblox Course - 10 Week"
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5174/`.

---

## 🌐 Deploying to GitHub Pages

The application is pre-configured with `base: './'` in `vite.config.ts`, making it completely ready for GitHub Pages:

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This compiles everything into a self-contained `dist/` folder.

2. **Publish to GitHub:**
   - Initialize git and push to your GitHub repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Coding Master by Shazia Alam"
     git branch -M main
     git remote add origin https://github.com/<your-username>/coding-master.git
     git push -u origin main
     ```
   - In your GitHub repo settings under **Pages**, select **Deploy from a branch** and pick `gh-pages` or use GitHub Actions to deploy the `dist/` directory.
