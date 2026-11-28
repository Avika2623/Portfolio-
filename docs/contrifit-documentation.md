# ContriFit — Project Documentation & Technical Overview

**Open-Source, But Make It Fit.**  
*AI-Assisted Open-Source Contribution Discovery & Readiness Platform*

---

## 1. Project Overview

- **Project Name:** ContriFit (ContributionFit)
- **Live Demo:** [https://contrifit.ai.studio/](https://contrifit.ai.studio/)
- **Source Repository:** [https://github.com/whoPeterpan/ContriFit](https://github.com/whoPeterpan/ContriFit)
- **Presentation Deck:** [ContriFit Presentation Slides](https://docs.google.com/presentation/d/1GH1p8EY-AyV15zC9_U6jPn5h2Bp0PWdtMz0MoaIsAVQ/edit?usp=sharing)
- **Team Placement:** **7th Place among 300 Teams** at Hacktoberfest (Newton School of Technology, ADYPU Pune)
- **Individual Role:** **Team Lead, Creative Director, Frontend Developer & Documentation Lead** (Avika Kalraiya)

---

## 2. Problem Statement & Motivation

Finding an issue is only the first hurdle in contributing to open source. Beginners and aspiring developers consistently face:

1. **Information Overload:** Thousands of repositories with hundreds of open issues, making discovery daunting.
2. **Ambiguous Skill Requirements:** Issues labeled `good first issue` often conceal complex codebase dependencies or domain knowledge prerequisites.
3. **Uncertainty & Stale Issues:** Unassigned vs. claimed issues, dormant discussions, and missing maintainer responsiveness frequently lead to wasted effort and abandoned pull requests.

**ContriFit** solves this by converting developer skills and experience into curated, explainable GitHub issue recommendations paired with actionable, step-by-step contribution plans.

---

## 3. Core User Experience & Product Workflow

The application operates across three fundamental phases:

```
[ 01: Profile Setup ] ───▶ [ 02: Issue Discovery ] ───▶ [ 03: Actionable Plan ]
 (Skills & Experience)     (GitHub API + Fit Engine)    (Readiness & AI Guidance)
```

### Phase 1: Tell Us What You Know (Profile Builder)
- **Guest Mode Storage:** Local browser storage ensures immediate exploration without mandatory authentication.
- **GitHub Account Sync:** Direct sync for languages, tools, and repository activity via GitHub username.
- **Skill Inventory:**
  - *Programming Languages:* TypeScript, JavaScript, Python, Rust, Go, Java, C#, C++
  - *Frameworks & Tools:* React, Next.js, Vue, Svelte, Node.js, Express, Django, FastAPI
  - *Experience Levels:* Beginner, Intermediate, Advanced

### Phase 2: Discover Relevant GitHub Issues
- **Live GitHub REST API Integration:** Fetches real, public issues in real time.
- **Explainable Fit Scoring:** Calculates a 0–100 match score based on declared competencies and issue metadata.
- **Dynamic Filtering:** Search by keyword, technology, and readiness label.

### Phase 3: Get Your Contribution Plan
- **Readiness Breakdown:** Evaluates issue description clarity, prerequisites, and freshness.
- **AI-Powered Explanations:** Natural-language contextual breakdown of why the issue matches and what code files to examine.
- **Actionable Checklist:** Step-by-step checklist guiding the developer from cloning and reading `CONTRIBUTING.md` to opening a clean, focused pull request.

---

## 4. Product Principles

1. **Real Data First:** Live recommendations originate directly from official GitHub API responses. No synthetic, mocked, or fabricated issues.
2. **Scores Are Explainable:** Scoring is deterministic, testable, and transparent—every point is traceable to explicit criteria.
3. **AI Explains; It Does Not Rank:** Language models provide narrative explanations and guidance, but do not override the deterministic ranking engine.
4. **Absence Is Not Evidence of Success:** Missing metadata is explicitly surfaced with warnings rather than counted as positive readiness.
5. **Fail Honestly:** Transparent error handling when external APIs or services hit rate limits or downtime.

---

## 5. Technology Stack & Architecture

| Layer | Technologies | Key Responsibility |
|:---|:---|:---|
| **Frontend Framework** | React 19, React Router v8, Vite 8 | Highly responsive, component-driven client application |
| **Language & Typings** | TypeScript 5.7 | End-to-end type safety for issue schemas and user profiles |
| **Styling & Design** | Tailwind CSS v4, Lucide React Icons | Modern, accessible dark-mode UI based on Figma design system |
| **Backend Orchestration** | Supabase Edge Functions (Deno / TypeScript) | API proxying, GitHub rate-limit caching, and auth validation |
| **Database & Cache** | Supabase PostgreSQL | User preferences, saved issues, and short-lived query cache |
| **Data Provider** | GitHub REST API | Verified public issue metadata, tags, and timestamps |
| **AI Explanation Layer** | Gemma 4 API Provider | Structured explanation generation and step-by-step contribution plans |
| **Testing** | Vitest, oxfmt | Unit testing for scoring logic and codebase formatting |

---

## 6. Individual Contribution (Avika Kalraiya)

As the **Team Lead**:
- **Team Leadership & Direction:** Guided a 4-member cross-functional engineering team, coordinating feature milestones, task distribution, and timeline execution during the hackathon.
- **Creative Direction & UI Architecture:** Designed the user experience and visual layout, translating product wireframes into accessible, high-performance React components with Tailwind CSS.
- **Frontend Development:** Built core interface views including profile configuration, issue card feeds, and interactive fit-score indicators.
- **Technical Documentation & Pitch:** Authored the architectural documentation and presentation slide deck that secured **7th place out of 300 participating teams** at Hacktoberfest NST | ADYPU Pune.

---

## 7. Verification & Links

- **Live Application:** [https://contrifit.ai.studio/](https://contrifit.ai.studio/)
- **GitHub Repository:** [https://github.com/whoPeterpan/ContriFit](https://github.com/whoPeterpan/ContriFit)
- **Slide Deck:** [ContriFit Architecture & Presentation Slides](https://docs.google.com/presentation/d/1GH1p8EY-AyV15zC9_U6jPn5h2Bp0PWdtMz0MoaIsAVQ/edit?usp=sharing)
