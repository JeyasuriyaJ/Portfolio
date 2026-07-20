# Jeyasuriya J — Portfolio Website

> **Live Website:** [https://jeyasuriya-portfolio.netlify.app](https://jeyasuriya-portfolio.netlify.app)

A clean, modern, recruiter-focused portfolio website for **Jeyasuriya J** (ECE Undergraduate at Sri Eshwar College of Engineering). Built with **React, Vite, TypeScript, Tailwind CSS v4, and Lucide Icons**.

---

## 🚀 Key Features

*   **Flagship Projects Showcase:** Dedicated routes for technical project deep-dives (`/projects/crime-intelligence`, `/projects/helmet-detection`, `/projects/flight-delay`).
*   **System Architecture Visualizers:** Clean SVG diagrams depicting dual-database graph architectures, ML computer vision streams, and gradient boosting inference pipelines.
*   **Recruiter-Focused UI:** Minimalist light-gray (`bg-gray-50`) & white design system with zero bloat, high contrast, fast navigation, and accurate statistics synced directly with ATS resume credentials.
*   **Full Responsiveness & SEO:** Mobile-optimized, accessible, and equipped with dynamic Open Graph and document title tags.

---

## 🛠️ Technical Stack

*   **Frontend:** React 19, TypeScript, Vite 8, React Router DOM
*   **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`), Lucide Icons
*   **Deployment Target:** Netlify / Vercel

---

## 📁 Project Structure

```text
src/
├── data/                    # Strongly typed data modules (Resume sync)
│   ├── projects.ts          # Flagship & core project specs
│   ├── skills.ts            # 7 categorized skill badge groups
│   ├── experience.ts        # Internship timelines & responsibilities
│   ├── education.ts         # Degree, CGPA (8.14), & institutions
│   ├── certifications.ts    # Verified Oracle, NxtWave, Udemy, HackerRank certs
│   ├── achievements.ts      # Freshathon, Axios, Creatathon, Self-E awards
│   ├── codingProfiles.ts    # Factual CP stats (LeetCode 260+, SkillRack 1,000+)
│   └── currentlyLearning.ts # Active focus topics (Spring Boot, System Design)
├── components/              # Reusable UI components
│   ├── Navbar.tsx           # Sticky header with responsive drawer & smooth scroll
│   ├── Hero.tsx             # Minimal hero section with direct contact CTAs
│   ├── About.tsx            # Concise 120-word summary
│   ├── Skills.tsx           # Simple skill badges
│   ├── ProjectCard.tsx      # Reusable project card
│   ├── ArchitectureDiagram.tsx # SVG system architecture flowcharts
│   ├── Contact.tsx          # Direct action buttons (Email, GitHub, LinkedIn, Resume)
│   └── SEO.tsx              # Dynamic document title & meta manager
└── pages/
    ├── HomePage.tsx         # Main portfolio landing overview
    ├── ProjectDetailPage.tsx# Full technical project spec page
    └── NotFoundPage.tsx     # Clean 404 error page
```

---

## 💻 Getting Started Locally

### Prerequisites
*   Node.js (v18+)
*   npm (v9+)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JeyasuriyaJ/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Social Links

*   **Email:** [jeyasuriya.j2024ece@sece.ac.in](mailto:jeyasuriya.j2024ece@sece.ac.in)
*   **GitHub:** [github.com/JeyasuriyaJ](https://github.com/JeyasuriyaJ)
*   **LinkedIn:** [linkedin.com/in/jeyasuriya-j](https://www.linkedin.com/in/jeyasuriya-j-593937366/)
*   **Live Portfolio:** [jeyasuriya-portfolio.netlify.app](https://jeyasuriya-portfolio.netlify.app)
