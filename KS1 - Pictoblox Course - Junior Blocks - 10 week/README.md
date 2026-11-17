# Coding Master — KS1 PictoBlox Junior Blocks 10-Week Course
**Curriculum Creator:** Shazia Alam  
**Target Audience:** Key Stage 1 (Years 1–2, Ages 5–7 / Absolute Beginners)  
**Platform:** PictoBlox Junior Blocks (STEMpedia / Tobi the Bear)

---

## 🌟 Overview
**Coding Master** is a playful, tactile interactive web application specifically tailored for early primary school pupils learning block coding with **Junior Blocks** (horizontal, icon-driven blocks designed for early and pre-readers).

### Key Features:
- **10 Weekly Junior Quests:** Bite-sized step cards featuring **Tobi the Bear**, progressing from simple green-flag starts to hopping, tree climbing, hide-and-seek, loops, character bumping, and race speeds.
- **Authentic Horizontal Junior Blocks:** Blocks connect side-by-side like train carriages (Yellow Triggers, Blue Motion, Purple Looks, Green Sounds, Orange Control, Red Endings) with number badges.
- **Interactive Mini Tobi Simulator:** Children can click "Watch Tobi ▶️" on each card to see Tobi hop, walk, grow, or speak right on screen!
- **"Read to Me 🔊" Audio Narration:** Browser-native speech synthesis on every step to assist early readers.
- **Interactive "Oopsie Detective":** Playful visual debugging puzzles with clues and instant fixes.
- **"Super Star Challenges":** Extra missions for fast learners.
- **Teacher & Parent Guide:** 30–45 minute session pacing, Junior Blocks pedagogy, and UK National Curriculum KS1 Computing links.
- **Printable Graduation Certificate:** Customizable with student name, school name, date, and "Curriculum Creator: Shazia Alam".

---

## 🚀 Running Locally

1. Open a terminal in this directory:
   ```bash
   cd "C:\Coding Club\KS1 - Pictoblox Course - Junior Blocks - 10 week"
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5175/`.

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
     git commit -m "Initial commit of Coding Master Junior Blocks by Shazia Alam"
     git branch -M main
     git remote add origin https://github.com/<your-username>/coding-master-jr.git
     git push -u origin main
     ```
   - In your GitHub repo settings under **Pages**, select **Deploy from a branch** and pick `gh-pages` or use GitHub Actions to deploy the `dist/` directory.
