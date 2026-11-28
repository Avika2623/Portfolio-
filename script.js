/**
 * PORTFOLIO GAME — JAVASCRIPT ENGINE
 * Fully interactive pixel-world portfolio inspired by block-building games.
 * 
 * Features:
 * - Title screen with classic game menu feel & bouncing splash texts
 * - 4 distinct locations with verified portfolio copy
 * - Alex-inspired block character with jumping & distinct location poses
 * - Procedural SVG character rendering & props
 * - Web Audio API synthesized 8-bit sound effects (zero external files)
 * - Ambient canvas particle system (embers, snow, leaves, magic runes)
 * - Full keyboard, on-screen arrow, and mobile touch swipe controls
 * - Reduced motion & accessibility support
 */

'use strict';

/* ==========================================================================
   1. PORTFOLIO DATA (Easily edit your content, badges, and titles here)
   ========================================================================== */
const PORTFOLIO_DATA = {
  creatorName: "Avika Kalraiya",
  
  locations: [
    {
      id: "about",
      badge: "PANEL 01",
      title: "About Me",
      subtitle: "First-Year B.Tech CSE (AI & ML) | NST, ADYPU Pune",
      themeClass: "loc-mine",
      pose: "mine",
      reaction: "⛏ Welcome to My Journey!",
      tags: ["B.Tech CSE (AI & ML)", "Competitive Programming", "Problem Solving", "Engineering Aspirant"],
      body: `
        <p>Hi, I’m Avika Kalraiya, a first-year B.Tech student in Computer Science with an AI and Machine Learning specialization at Newton School of Technology, ADYPU Pune. My technical interests include competitive programming and problem-solving, where I practice breaking challenges into clear, logical steps. I’m building my foundations across programming languages through hands-on projects. My professional goal is to secure an internship at a well-established technology company and contribute to practical engineering work.</p>
      `,
      props: [
        { type: "torch", x: "12%", y: "45px" },
        { type: "torch", x: "85%", y: "45px" },
        { type: "ore-cluster", x: "24%", y: "15px" },
        { type: "minecart-track", x: "50%", y: "0px" }
      ]
    },
    {
      id: "skills",
      badge: "PANEL 02",
      title: "Skills & Project Demos",
      subtitle: "Technical Stack & Interactive Deployments",
      themeClass: "loc-summit",
      pose: "summit",
      reaction: "⭐ Technical Foundations!",
      tags: ["Python", "HTML", "CSS", "JavaScript", "Project Demos"],
      body: `
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming:</strong> Python</li>
          <li><strong>Web development:</strong> HTML, CSS, JavaScript</li>
        </ul>

        <h3>Project Demos &amp; Source Repositories</h3>
        <ul>
          <li>
            <strong>AI Chatbot:</strong>
            <br>
            Demo: <a href="https://chat-bot-avika2623.vercel.app/" target="_blank" rel="noopener noreferrer">https://chat-bot-avika2623.vercel.app/</a>
            <br>
            Repository: <a href="https://github.com/Avika2623/Chat-Bot" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623/Chat-Bot</a>
          </li>
          <li>
            <strong>LLM Pipeline Explorer:</strong>
            <br>
            Demo: <a href="https://llm-pipeline-explorer-iota.vercel.app/" target="_blank" rel="noopener noreferrer">https://llm-pipeline-explorer-iota.vercel.app/</a>
            <br>
            Repository: <a href="https://github.com/Avika2623/LLM-Pipeline-Explorer" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623/LLM-Pipeline-Explorer</a>
          </li>
          <li>
            <strong>Streetwear Shopping Website:</strong>
            <br>
            Demo: <a href="https://streetwear-brand-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">https://streetwear-brand-sooty.vercel.app/</a>
            <br>
            Repository: <a href="https://github.com/Avika2623/streetwear-brand" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623/streetwear-brand</a>
          </li>
        </ul>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Verified Skills Mapping</span>
          <p><em>Programming skills in Python and web development in HTML, CSS, and JavaScript are directly verified through the connected source code repositories above.</em></p>
        </div>
      `,
      props: [
        { type: "gold-pedestal", x: "78%", y: "10px" },
        { type: "beacon-beam", x: "20%", y: "0px" },
        { type: "snow-drift", x: "35%", y: "5px" }
      ]
    },
    {
      id: "contributions",
      badge: "PANEL 03",
      title: "S&AI Open-Source Contributions",
      subtitle: "10 Verified Pull Requests on ohmyzsh",
      themeClass: "loc-trail",
      pose: "trail",
      reaction: "🌿 10 Verified PRs!",
      tags: ["Open Source", "10 Verified PRs", "ohmyzsh", "Zsh & Python Tests"],
      body: `
        <p><strong>Repository:</strong> <a href="https://github.com/Avika2623/ohmyzsh" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623/ohmyzsh</a></p>
        <p>I completed ten pull requests for this repository. Below is each verified pull request authored by <strong>Avika2623</strong>, showing the Task ID, pull-request title and direct URL, concise description of code changes, and technical reason for the change:</p>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T001</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/82" target="_blank" rel="noopener noreferrer">PR #82: test(rails): preserve command arguments</a></h4>
          <p><strong>Code Changes:</strong> Quoted forwarded arguments in <code>_rails_command</code> and <code>_rake_command</code>, added isolated zsh tests using temporary directories and command stubs, and added a Python check runner under <code>work/R14-T001/</code>.</p>
          <p><strong>Technical Reason:</strong> Fixes argument splitting in the Rails and Rake wrappers so command arguments, including values with spaces, are passed through intact without word-splitting bugs.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T002</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/83" target="_blank" rel="noopener noreferrer">PR #83: test(nvm): cover lazy initialization contract</a></h4>
          <p><strong>Code Changes:</strong> Added isolated zsh tests for the default <code>nvm</code> trigger with no arguments, optional custom lazy command forwarding, and documented that <code>lazy-cmd</code> has no effect without enabling lazy startup.</p>
          <p><strong>Technical Reason:</strong> Validates the NVM plugin's lazy initialization contract and prevents regressions where lazy loading fails or drops arguments when invoking custom commands.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T003</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/84" target="_blank" rel="noopener noreferrer">PR #84: test(ant): cover ANT_ARGS state transitions</a></h4>
          <p><strong>Code Changes:</strong> Modified the Ant plugin to set its colored logger argument only when <code>ANT_ARGS</code> is unset or empty, documented behavior in the plugin README, and added isolated Zsh state-transition checks.</p>
          <p><strong>Technical Reason:</strong> Ensures user-provided non-empty <code>ANT_ARGS</code> are preserved rather than overwritten by the colored logger default.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T004</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/85" target="_blank" rel="noopener noreferrer">PR #85: test(man): preserve quoted wildcard arguments</a></h4>
          <p><strong>Code Changes:</strong> Parsed <code>BUFFER</code> into shell words without splitting quoted spaces or expanding wildcards, escaped parsed arguments when inserting <code>man</code> into <code>BUFFER</code>, and added test fixtures.</p>
          <p><strong>Technical Reason:</strong> Preserves quoted argument boundaries in the Man plugin's command-line widget so paths containing spaces and wildcard characters remain single literal arguments.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T005</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/86" target="_blank" rel="noopener noreferrer">PR #86: test(asdf): isolate initialization branches</a></h4>
          <p><strong>Code Changes:</strong> Documented and tested <code>ASDF_DATA_DIR</code>, shims, completion, and missing-dependency behavior using deterministic Zsh fixtures with isolated temporary directories and environment variables.</p>
          <p><strong>Technical Reason:</strong> Verifies both clean initialization and graceful error handling when dependencies are absent, preventing shell startup hangs or unhandled errors.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T006</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/87" target="_blank" rel="noopener noreferrer">PR #87: test(autopep8): characterize and group option aliases</a></h4>
          <p><strong>Code Changes:</strong> Grouped matching short and long option spellings into single brace expansions across 22 normalized completion specs, verifying status code 37 propagates unchanged.</p>
          <p><strong>Technical Reason:</strong> Reduces code duplication in autopep8 completion definitions while strictly preserving all completion specs and error status codes.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T007</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/88" target="_blank" rel="noopener noreferrer">PR #88: docs(zoxide): add tested project jump example</a></h4>
          <p><strong>Code Changes:</strong> Added a complete project setup and jump walkthrough in <code>plugins/zoxide/README.md</code> and added isolated Zsh test cases covering space-separated paths and missing command handling.</p>
          <p><strong>Technical Reason:</strong> Clarifies setup and syntax for paths with spaces while providing automated regression tests verifying shell directory navigation via <code>pwd</code>.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T008</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/89" target="_blank" rel="noopener noreferrer">PR #89: docs(brew): explain missing cask argument failure</a></h4>
          <p><strong>Code Changes:</strong> Documented the failure caused by invoking the <code>bci</code> alias without a cask argument, showed <code>bci firefox</code> as corrected invocation in the README, and added focused Zsh fixtures verifying both branches.</p>
          <p><strong>Technical Reason:</strong> Prevents developer confusion by documenting mandatory cask arguments and ensures the alias failure branch is covered by regression tests.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T009</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/90" target="_blank" rel="noopener noreferrer">PR #90: test(jfrog): add isolated completion check runner</a></h4>
          <p><strong>Code Changes:</strong> Created a service-independent check runner that stubs <code>compdef</code>, <code>_describe</code>, <code>_files</code>, and the JFrog CLI, testing returned completions and fallback handling.</p>
          <p><strong>Technical Reason:</strong> Enables repeatable, automated testing of JFrog completions without requiring an active external JFrog server or credentials.</p>
        </div>

        <div class="dialog-entry-card">
          <span class="dialog-badge-tag">Task ID: R14-T010</span>
          <h4><a href="https://github.com/S-AI-Projects/ohmyzsh/pull/91" target="_blank" rel="noopener noreferrer">PR #91: test(tldr): reject broad prefix condition mutant</a></h4>
          <p><strong>Code Changes:</strong> Added a Zsh regression fixture that tests the <code>tldr</code> widget prefix condition using <code>tldrish</code> (a valid command beginning with <code>tldr</code> but lacking a separating space), asserting mutant rejection.</p>
          <p><strong>Technical Reason:</strong> Kills conditional mutants where <code>tldr*</code> is accepted instead of <code>tldr\\ *</code>, preventing false-positive widget activations on similarly named commands.</p>
        </div>
      `,
      props: [
        { type: "easel", x: "75%", y: "10px" },
        { type: "poppies", x: "22%", y: "12px" },
        { type: "trail-sign", x: "15%", y: "10px" }
      ]
    },
    {
      id: "projects",
      badge: "PANEL 04",
      title: "Featured Projects",
      subtitle: "Open Source AI & Web Applications",
      themeClass: "loc-tower",
      pose: "tower",
      reaction: "🏰 Featured Projects!",
      tags: ["ContriFit", "AI Chatbot", "Open Source", "React 19", "TypeScript", "Groq AI"],
      body: `
        <h3>Featured Projects</h3>

        <div class="dialog-entry-card">
          <h4>Project 1: ContriFit</h4>
          <p><strong>Demo:</strong> <a href="https://contrifit.ai.studio/" target="_blank" rel="noopener noreferrer">https://contrifit.ai.studio/</a></p>
          <p><strong>Repository:</strong> <a href="https://github.com/whoPeterpan/ContriFit" target="_blank" rel="noopener noreferrer">https://github.com/whoPeterpan/ContriFit</a></p>
          <p><strong>Documentation:</strong> <a href="docs/contrifit-documentation.pdf" target="_blank" rel="noopener noreferrer">ContriFit System Documentation (PDF)</a> &bull; <a href="docs/contrifit-documentation.html" target="_blank" rel="noopener noreferrer">Web Documentation (HTML)</a> &bull; <a href="https://docs.google.com/presentation/d/1GH1p8EY-AyV15zC9_U6jPn5h2Bp0PWdtMz0MoaIsAVQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation Slides</a></p>
          <p>“ContriFit is a team project designed to help beginners get started with open-source contributions. Users choose their skills, receive GitHub repository recommendations matched to those skills, and get an AI-generated report outlining relevant technologies and a starting contribution plan. I led the team and contributed to the creative direction, frontend, and project documentation.”</p>
          <p><strong>Problem Addressed:</strong> New developers face steep barriers entering open source due to information overload and difficulty finding beginner-friendly issues matching their skills.</p>
          <p><strong>How Solution Works:</strong> Users select comfort levels and languages; the platform searches and filters relevant GitHub issues, provides an explainable fit score, and generates a structured contribution checklist.</p>
          <p><strong>Team Placement:</strong> 7th among 300 teams at the Hacktoberfest event at ADYPU Pune (team achievement).</p>
          <p><strong>Individual Contribution:</strong> Led the team; directed creative design, frontend development, and prepared comprehensive project documentation.</p>
          <p><strong>Verified Technologies:</strong> React 19, React Router v8, TypeScript 5.7, Tailwind CSS v4, Lucide React, Vite 8, Vitest, Supabase Edge Functions &amp; GitHub REST API.</p>
        </div>

        <div class="dialog-entry-card">
          <h4>Project 2: AI Chatbot (APOGEE Orbital Console)</h4>
          <p><strong>Demo:</strong> <a href="https://chat-bot-avika2623.vercel.app/" target="_blank" rel="noopener noreferrer">https://chat-bot-avika2623.vercel.app/</a></p>
          <p><strong>Repository:</strong> <a href="https://github.com/Avika2623/Chat-Bot" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623/Chat-Bot</a></p>
          <p><strong>Documentation:</strong> <a href="docs/chatbot-documentation.pdf" target="_blank" rel="noopener noreferrer">AI Chatbot System Documentation (PDF)</a> &bull; <a href="docs/chatbot-documentation.html" target="_blank" rel="noopener noreferrer">Web Documentation (HTML)</a></p>
          <p>“This AI chat assistant is designed to make AI development easier for beginner developers to explore. Its adjustable settings help users understand how different model and prompt parameters affect the assistant’s behavior. I also prepared project documentation.”</p>
          <p><strong>Problem Addressed:</strong> Beginner developers struggle to understand how LLM inference and system prompt parameters alter model behavior.</p>
          <p><strong>How Solution Works:</strong> Provides an interactive chat console connecting to Groq inference APIs with real-time controls for model selection, temperature, token limit, top-p, streaming, and custom system prompts. <em>Does not train models.</em></p>
          <p><strong>Verified Technologies:</strong> React, TypeScript, Vite, Tailwind CSS, Express API proxy, Groq SDK (Llama 3.3 70B Versatile).</p>
          <p><strong>Individual Contribution:</strong> Developed the assistant interface and interactive settings, and prepared project documentation.</p>
        </div>
      `,
      props: [
        { type: "magic-lantern", x: "82%", y: "60px" },
        { type: "ai-spark-crystal", x: "25%", y: "55px" },
        { type: "floating-sparkle", x: "72%", y: "85px" },
        { type: "spellbook-shelf", x: "18%", y: "15px" }
      ]
    },
    {
      id: "education-contact",
      badge: "PANEL 05",
      title: "Education, Achievements & Contact",
      subtitle: "Academic Background, Honors & Contact",
      themeClass: "loc-citadel",
      pose: "academy",
      reaction: "📜 Academic Background & Contact!",
      tags: ["DPS Bhopal", "NST ADYPU Pune", "WorldQuant Gold", "Hacktoberfest 7th", "Contact"],
      body: `
        <h3>Education</h3>
        <ul>
          <li><strong>DPS, Bhopal:</strong> Completed Class 10 and Class 12 in 2026.</li>
          <li><strong>Newton School of Technology, ADYPU Pune:</strong> First-year B.Tech student in Computer Science with an AI and Machine Learning specialization.</li>
          <li><strong>Expected Graduation Year:</strong> 2030</li>
        </ul>

        <h3>Achievements</h3>
        <ul>
          <li>
            <strong>WorldQuant Challenge — Gold Level:</strong> Earned a Gold in WorldQuant through work involving trading algorithms.
            <br>
            <em>Official Certificate:</em> <a href="certificates/worldquant-gold-certificate.pdf" target="_blank" rel="noopener noreferrer">Certificate of Accomplishment — GOLD LEVEL in the WorldQuant Challenge® (PDF)</a>
          </li>
          <li>
            <strong>Hacktoberfest at ADYPU Pune — 7th among 300 teams:</strong> My team placed 7th among 300 teams at the Hacktoberfest event at ADYPU Pune.
            <br>
            <em>Official Certificate:</em> <a href="certificates/hacktoberfest-2026-certificate.pdf" target="_blank" rel="noopener noreferrer">Certificate of Achievement — Participant (Hacktoberfest 26, Oct 24-25, 2026) (PDF)</a>
          </li>
        </ul>

        <h3>Contact</h3>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:avika.k2008@gmail.com">avika.k2008@gmail.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Avika2623" target="_blank" rel="noopener noreferrer">https://github.com/Avika2623</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/avika-kalraiya-2ba337432" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/avika-kalraiya-2ba337432</a></li>
        </ul>
      `,
      props: [
        { type: "gold-pedestal", x: "80%", y: "10px" },
        { type: "torch", x: "16%", y: "45px" },
        { type: "beacon-beam", x: "28%", y: "0px" },
        { type: "spellbook-shelf", x: "70%", y: "15px" }
      ]
    }
  ],

  splashTexts: [
    "Welcome, Avika Kalraiya!",
    "B.Tech CSE (AI & ML) @ NST!",
    "10 Verified Open-Source PRs!",
    "WorldQuant Brain Gold Level!",
    "Hacktoberfest Top 7 Team!",
    "ContriFit & AI Chatbot Demos!",
    "Competitive Programming & Python!",
    "Jump with Spacebar!",
    "Interactive Portfolio Edition!"
  ]
};

/* ==========================================================================
   2. APPLICATION STATE
   ========================================================================== */
const state = {
  currentScreen: "title", // Opens from the Title Screen by default
  currentLocationIndex: 0,
  isJumping: false,
  soundEnabled: false,
  reducedMotion: false,
  fontScale: 100, // percentage
  touchStartX: 0,
  touchStartY: 0
};

/* ==========================================================================
   3. WEB AUDIO API SYNTHESIZER (8-Bit Retro Chimes & Jumps)
   ========================================================================== */
class RetroSoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playJump() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
  }

  playLand() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.14);
  }

  playLocationChime(index) {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Distinct retro arpeggio notes for each location
    const chords = [
      [261.63, 329.63, 392.00], // C Major (Mine)
      [329.63, 415.30, 493.88], // E Major (Summit)
      [293.66, 369.99, 440.00], // D Major (Trail)
      [349.23, 440.00, 523.25], // F Major (Tower)
      [392.00, 493.88, 587.33]  // G Major (Citadel / Education & Contact)
    ];

    const notes = chords[index % chords.length];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.07, this.ctx.currentTime + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }

  playStartGame() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.07);

      gain.gain.setValueAtTime(0.09, this.ctx.currentTime + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.07 + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.07);
      osc.stop(this.ctx.currentTime + i * 0.07 + 0.2);
    });
  }
}

const soundFX = new RetroSoundFX();

/* ==========================================================================
   4. ALEX-INSPIRED PIXEL ART SVG BUILDER
   Creates custom pixel-crisp SVG representations of Alex with location props
   ========================================================================== */
function generateCharacterSVG(pose = "mine") {
  // Color palette matching the Alex reference screenshot
  const c = {
    // Hair
    hairBase: "#e58e37",
    hairLight: "#f5a642",
    hairDark: "#b05b14",
    hairDeep: "#7a3e0d",
    // Skin
    skinBase: "#fcd4b4",
    skinLight: "#ffdfc4",
    skinShadow: "#d4946e",
    skinLip: "#e58b88",
    // Eyes
    eyeWhite: "#ffffff",
    eyeGreen: "#2e7d32",
    eyeGreenLight: "#4caf50",
    // Tunic
    tunicBase: "#5c946e",
    tunicLight: "#72aa84",
    tunicShadow: "#3d6c4c",
    belt: "#261d18",
    beltBuckle: "#423226",
    // Pants
    pantsBase: "#53392a",
    pantsShadow: "#3a251a",
    // Boots
    bootsBase: "#4a5260",
    bootsShadow: "#323843"
  };

  // Base SVG markup with pixelated crispness
  let armContent = "";
  let heldItemContent = "";
  let auraContent = "";

  // Dynamic arms & held items according to the location pose
  if (pose === "mine") {
    // Holding iron/diamond pickaxe ready to mine
    armContent = `
      <!-- Left arm resting -->
      <rect x="22" y="74" width="16" height="48" fill="${c.skinBase}" />
      <rect x="22" y="74" width="16" height="18" fill="${c.tunicBase}" />
      <rect x="22" y="88" width="16" height="4" fill="${c.tunicShadow}" />

      <!-- Right arm bent forward holding pickaxe -->
      <rect x="102" y="74" width="16" height="38" fill="${c.skinBase}" />
      <rect x="102" y="74" width="16" height="18" fill="${c.tunicBase}" />
      <rect x="102" y="88" width="16" height="4" fill="${c.tunicShadow}" />
    `;

    heldItemContent = `
      <!-- Pixel Pickaxe in Right Hand -->
      <g transform="translate(108, 62) rotate(25)">
        <!-- Handle -->
        <rect x="0" y="0" width="6" height="48" fill="#6d4c41" />
        <rect x="2" y="0" width="2" height="48" fill="#8d6e63" />
        <rect x="0" y="44" width="6" height="6" fill="#4e342e" />
        <!-- Pick Head -->
        <rect x="-14" y="-4" width="34" height="8" fill="#80deea" />
        <rect x="-10" y="-8" width="26" height="4" fill="#b2ebf2" />
        <rect x="-16" y="2" width="6" height="8" fill="#4dd0e1" />
        <rect x="16" y="2" width="6" height="8" fill="#00acc1" />
      </g>
      <!-- Mining Sparkles -->
      <circle cx="132" cy="70" r="2" fill="#ffeb3b" />
      <circle cx="125" cy="54" r="1.5" fill="#ffffff" />
      <circle cx="138" cy="62" r="2" fill="#ffd54f" />
    `;
  } else if (pose === "summit") {
    // Celebrating at summit: Both arms raised holding a gleaming gold trophy star/ingot
    armContent = `
      <!-- Left arm raised -->
      <rect x="20" y="52" width="16" height="46" fill="${c.skinBase}" />
      <rect x="20" y="80" width="16" height="18" fill="${c.tunicBase}" />

      <!-- Right arm raised -->
      <rect x="104" y="52" width="16" height="46" fill="${c.skinBase}" />
      <rect x="104" y="80" width="16" height="18" fill="${c.tunicBase}" />
    `;

    auraContent = `
      <!-- Golden Shimmer Aura -->
      <radialGradient id="goldAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff59d" stop-opacity="0.8" />
        <stop offset="60%" stop-color="#fbc02d" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#f57f17" stop-opacity="0" />
      </radialGradient>
      <circle cx="70" cy="30" r="32" fill="url(#goldAura)" />
    `;

    heldItemContent = `
      <!-- Pure Gold Ingot & Star held overhead -->
      <g transform="translate(56, 16)">
        <polygon points="14,0 18,9 28,10 20,18 22,28 14,22 6,28 8,18 0,10 10,9" fill="#ffeb3b" stroke="#f57f17" stroke-width="2" />
        <circle cx="14" cy="14" r="5" fill="#fff9c4" />
        <!-- Gleam rays -->
        <line x1="14" y1="-4" x2="14" y2="-10" stroke="#ffeb3b" stroke-width="3" stroke-linecap="round" />
        <line x1="30" y1="14" x2="36" y2="14" stroke="#ffeb3b" stroke-width="3" stroke-linecap="round" />
        <line x1="-2" y1="14" x2="-8" y2="14" stroke="#ffeb3b" stroke-width="3" stroke-linecap="round" />
      </g>
    `;
  } else if (pose === "trail") {
    // Explorer & artist pose: holding a paintbrush and standing poised
    armContent = `
      <!-- Left arm relaxed holding palette -->
      <rect x="22" y="74" width="16" height="46" fill="${c.skinBase}" />
      <rect x="22" y="74" width="16" height="18" fill="${c.tunicBase}" />

      <!-- Right arm holding paintbrush upward -->
      <rect x="102" y="66" width="16" height="46" fill="${c.skinBase}" />
      <rect x="102" y="74" width="16" height="18" fill="${c.tunicBase}" />
    `;

    heldItemContent = `
      <!-- Artist Wooden Palette in Left Hand -->
      <g transform="translate(14, 102)">
        <ellipse cx="14" cy="12" rx="14" ry="10" fill="#a1887f" stroke="#5d4037" stroke-width="2" />
        <circle cx="7" cy="8" r="2.5" fill="#e53935" />
        <circle cx="14" cy="6" r="2.5" fill="#ffeb3b" />
        <circle cx="21" cy="9" r="2.5" fill="#1e88e5" />
        <circle cx="16" cy="15" r="2.5" fill="#43a047" />
      </g>

      <!-- Paintbrush in Right Hand -->
      <g transform="translate(108, 48) rotate(-15)">
        <rect x="0" y="10" width="5" height="34" fill="#8d6e63" />
        <rect x="-1" y="4" width="7" height="6" fill="#b0bec5" />
        <polygon points="1.5,-4 -1,4 6,4" fill="#00bcd4" />
      </g>
      <!-- Colorful creative particles -->
      <circle cx="106" cy="40" r="2" fill="#ff4081" />
      <circle cx="118" cy="38" r="1.5" fill="#7c4dff" />
    `;
  } else if (pose === "tower") {
    // Creative tower pose: holding a glowing enchanted crystal quill with bilingual rune aura
    armContent = `
      <!-- Left arm with open hand casting -->
      <rect x="22" y="68" width="16" height="46" fill="${c.skinBase}" />
      <rect x="22" y="74" width="16" height="18" fill="${c.tunicBase}" />

      <!-- Right arm holding magical quill -->
      <rect x="102" y="60" width="16" height="48" fill="${c.skinBase}" />
      <rect x="102" y="74" width="16" height="18" fill="${c.tunicBase}" />
    `;

    auraContent = `
      <!-- Mystical purple/cyan aura -->
      <radialGradient id="towerAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#e040fb" stop-opacity="0.5" />
        <stop offset="60%" stop-color="#00e5ff" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#7c4dff" stop-opacity="0" />
      </radialGradient>
      <circle cx="115" cy="50" r="28" fill="url(#towerAura)" />
    `;

    heldItemContent = `
      <!-- Enchanted Crystal Quill -->
      <g transform="translate(112, 40) rotate(15)">
        <path d="M0,0 Q-8,-20 8,-35 Q8,-10 3,10 Z" fill="#e040fb" stroke="#00e5ff" stroke-width="1.5" />
        <line x1="2" y1="-30" x2="2" y2="15" stroke="#ffffff" stroke-width="1.5" />
      </g>
      <!-- Floating AI Spark Crystals -->
      <g transform="translate(12, 54)">
        <polygon points="7,0 14,7 7,14 0,7" fill="#64ffda" stroke="#00e5ff" stroke-width="1" />
        <circle cx="7" cy="7" r="2" fill="#ffffff" />
      </g>
      <g transform="translate(118, 92)">
        <polygon points="7,0 14,7 7,14 0,7" fill="#ea80fc" stroke="#e040fb" stroke-width="1" />
        <circle cx="7" cy="7" r="2" fill="#ffffff" />
      </g>
    `;
  } else if (pose === "academy") {
    // Academic & Achievement pose: holding an honor scroll in one hand and a golden medal in the other
    armContent = `
      <!-- Left arm holding scroll -->
      <rect x="22" y="66" width="16" height="46" fill="${c.skinBase}" />
      <rect x="22" y="74" width="16" height="18" fill="${c.tunicBase}" />

      <!-- Right arm raised proudly holding golden medal -->
      <rect x="102" y="58" width="16" height="48" fill="${c.skinBase}" />
      <rect x="102" y="74" width="16" height="18" fill="${c.tunicBase}" />
    `;

    auraContent = `
      <radialGradient id="acadAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff9c4" stop-opacity="0.6" />
        <stop offset="60%" stop-color="#ffd54f" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#ffb300" stop-opacity="0" />
      </radialGradient>
      <circle cx="70" cy="40" r="34" fill="url(#acadAura)" />
    `;

    heldItemContent = `
      <!-- Certificate Scroll in Left Hand -->
      <g transform="translate(14, 82) rotate(-10)">
        <rect x="0" y="0" width="18" height="26" fill="#fff9c4" stroke="#d7ccc8" stroke-width="1.5" />
        <line x1="3" y1="6" x2="15" y2="6" stroke="#8d6e63" stroke-width="1.5" />
        <line x1="3" y1="12" x2="15" y2="12" stroke="#8d6e63" stroke-width="1.5" />
        <line x1="3" y1="18" x2="11" y2="18" stroke="#8d6e63" stroke-width="1.5" />
        <!-- Red ribbon seal -->
        <circle cx="9" cy="22" r="3" fill="#e53935" />
      </g>

      <!-- Golden Medallion in Right Hand -->
      <g transform="translate(108, 38)">
        <circle cx="10" cy="10" r="10" fill="#ffeb3b" stroke="#f57f17" stroke-width="2" />
        <circle cx="10" cy="10" r="6" fill="#fff9c4" />
        <line x1="10" y1="-2" x2="10" y2="2" stroke="#e53935" stroke-width="2" />
        <line x1="5" y1="0" x2="15" y2="0" stroke="#e53935" stroke-width="2" />
      </g>
    `;
  }

  // Complete SVG assembly matching Alex proportions
  return `
    <svg viewBox="0 0 140 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      ${auraContent}

      <!-- ================= 1. LEGS & BOOTS ================= -->
      <!-- Left Leg (Pants) -->
      <rect x="42" y="132" width="26" height="46" fill="${c.pantsBase}" />
      <rect x="42" y="132" width="6" height="46" fill="${c.pantsShadow}" />
      <!-- Left Boot -->
      <rect x="42" y="178" width="26" height="28" fill="${c.bootsBase}" />
      <rect x="42" y="178" width="6" height="28" fill="${c.bootsShadow}" />
      <rect x="42" y="202" width="26" height="4" fill="#21252d" />

      <!-- Right Leg (Pants) -->
      <rect x="72" y="132" width="26" height="46" fill="${c.pantsBase}" />
      <rect x="92" y="132" width="6" height="46" fill="${c.pantsShadow}" />
      <!-- Right Boot -->
      <rect x="72" y="178" width="26" height="28" fill="${c.bootsBase}" />
      <rect x="92" y="178" width="6" height="28" fill="${c.bootsShadow}" />
      <rect x="72" y="202" width="26" height="4" fill="#21252d" />

      <!-- ================= 2. TORSO & BELT ================= -->
      <!-- Green Tunic Body -->
      <rect x="38" y="74" width="64" height="58" fill="${c.tunicBase}" />
      <!-- Shading & Highlights on Tunic -->
      <rect x="38" y="74" width="8" height="58" fill="${c.tunicShadow}" />
      <rect x="94" y="74" width="8" height="58" fill="${c.tunicShadow}" />
      <!-- V-Neck pale skin opening -->
      <polygon points="62,74 78,74 70,86" fill="${c.skinBase}" />
      
      <!-- Dark Waist Belt -->
      <rect x="38" y="118" width="64" height="10" fill="${c.belt}" />
      <rect x="66" y="118" width="8" height="10" fill="${c.beltBuckle}" />
      <!-- Tunic bottom fold -->
      <rect x="38" y="128" width="64" height="4" fill="${c.tunicShadow}" />

      <!-- ================= 3. ARMS & HELD ITEMS ================= -->
      ${armContent}
      ${heldItemContent}

      <!-- ================= 4. HEAD & ALEX HAIR ================= -->
      <!-- Base Head Cube -->
      <rect x="42" y="18" width="56" height="56" fill="${c.skinBase}" />
      <!-- Jaw shading -->
      <rect x="42" y="68" width="56" height="6" fill="${c.skinShadow}" />
      <!-- Soft mouth/lip -->
      <rect x="66" y="58" width="8" height="4" fill="${c.skinLip}" />
      <!-- Nose nuance -->
      <rect x="68" y="52" width="4" height="4" fill="${c.skinShadow}" />

      <!-- Eyes (Green pixel eyes with white outer) -->
      <!-- Left Eye -->
      <rect x="48" y="44" width="6" height="6" fill="${c.eyeWhite}" />
      <rect x="54" y="44" width="6" height="6" fill="${c.eyeGreen}" />
      <rect x="56" y="44" width="4" height="3" fill="${c.eyeGreenLight}" />

      <!-- Right Eye -->
      <rect x="80" y="44" width="6" height="6" fill="${c.eyeGreen}" />
      <rect x="86" y="44" width="6" height="6" fill="${c.eyeWhite}" />
      <rect x="80" y="44" width="4" height="3" fill="${c.eyeGreenLight}" />

      <!-- ORANGE HAIR (Alex's signature blocky hairstyle with side fall) -->
      <!-- Top hair slab -->
      <rect x="38" y="10" width="64" height="16" fill="${c.hairBase}" />
      <rect x="42" y="10" width="16" height="10" fill="${c.hairLight}" />
      <rect x="82" y="10" width="20" height="16" fill="${c.hairDark}" />
      <!-- Forehead Fringe / Bangs -->
      <rect x="40" y="24" width="20" height="14" fill="${c.hairBase}" />
      <rect x="38" y="24" width="10" height="24" fill="${c.hairDark}" />
      <rect x="60" y="24" width="12" height="6" fill="${c.hairBase}" />
      
      <!-- Right Hair Fringe / Iconic Side Ponytail falling over shoulder -->
      <rect x="86" y="24" width="16" height="20" fill="${c.hairBase}" />
      <rect x="82" y="40" width="18" height="36" fill="${c.hairBase}" />
      <rect x="84" y="74" width="14" height="28" fill="${c.hairDark}" />
      <rect x="86" y="74" width="8" height="24" fill="${c.hairBase}" />
      <rect x="88" y="100" width="8" height="6" fill="${c.hairDeep}" />
    </svg>
  `;
}

/* ==========================================================================
   5. PROCEDURAL THEMATIC PROPS IN ENVIRONMENT
   Renders blocks, ores, torches, flowers, and magic props on the stage
   ========================================================================== */
function renderEnvironmentProps(location) {
  const container = document.getElementById("env-props");
  if (!container) return;

  container.innerHTML = "";

  location.props.forEach(prop => {
    const el = document.createElement("div");
    el.className = `env-prop prop-${prop.type}`;
    el.style.position = "absolute";
    el.style.left = prop.x;
    el.style.bottom = prop.y;

    if (prop.type === "torch") {
      el.innerHTML = `
        <div style="width:8px; height:24px; background:#6d4c41; border:1px solid #3e2723; position:relative;">
          <div style="width:8px; height:8px; background:#ffeb3b; box-shadow:0 0 12px #ff9800; position:absolute; top:-6px; animation: torchFlicker 0.4s infinite alternate;"></div>
        </div>
      `;
    } else if (prop.type === "ore-cluster") {
      el.innerHTML = `
        <div style="display:flex; gap:4px;">
          <div style="width:24px; height:24px; background:#424242; border:2px solid #212121; position:relative;">
            <div style="width:6px; height:6px; background:#f44336; position:absolute; top:4px; left:4px; box-shadow:0 0 6px #f44336;"></div>
            <div style="width:6px; height:6px; background:#00e5ff; position:absolute; bottom:4px; right:4px; box-shadow:0 0 6px #00e5ff;"></div>
          </div>
          <div style="width:24px; height:24px; background:#424242; border:2px solid #212121; position:relative;">
            <div style="width:8px; height:8px; background:#ffeb3b; position:absolute; top:6px; left:6px; box-shadow:0 0 6px #ffd54f;"></div>
          </div>
        </div>
      `;
    } else if (prop.type === "minecart-track") {
      el.innerHTML = `
        <div style="width:240px; height:8px; border-top:2px solid #9e9e9e; border-bottom:2px solid #9e9e9e; background:repeating-linear-gradient(90deg, #5d4037 0px, #5d4037 6px, transparent 6px, transparent 24px); transform:translateX(-50%);"></div>
      `;
    } else if (prop.type === "gold-pedestal") {
      el.innerHTML = `
        <div style="width:36px; height:36px; background:linear-gradient(180deg,#fff59d,#fbc02d); border:3px solid #f57f17; box-shadow:0 0 20px rgba(255,215,0,0.6); position:relative;">
          <div style="position:absolute; top:-14px; left:6px; font-size:18px;">🏆</div>
        </div>
      `;
    } else if (prop.type === "beacon-beam") {
      el.innerHTML = `
        <div style="width:16px; height:320px; background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(100,255,218,0.4), transparent); filter:blur(2px); box-shadow:0 0 24px rgba(100,255,218,0.7); animation: beaconPulse 2s infinite alternate;"></div>
      `;
    } else if (prop.type === "easel") {
      el.innerHTML = `
        <div style="width:36px; height:48px; border-left:4px solid #8d6e63; border-right:4px solid #8d6e63; position:relative;">
          <!-- Canvas board on easel -->
          <div style="width:34px; height:26px; background:#ffffff; border:2px solid #5d4037; position:absolute; top:8px; left:-3px; box-shadow:0 4px 6px rgba(0,0,0,0.4);">
            <div style="width:100%; height:100%; background:linear-gradient(135deg, #81d4fa 40%, #81c784 40%);"></div>
          </div>
        </div>
      `;
    } else if (prop.type === "poppies") {
      el.innerHTML = `
        <div style="display:flex; gap:8px;">
          <div style="color:#e53935; font-size:14px; transform:translateY(-2px);">🌷</div>
          <div style="color:#fbc02d; font-size:16px;">🌼</div>
          <div style="color:#e53935; font-size:13px;">🌹</div>
        </div>
      `;
    } else if (prop.type === "trail-sign") {
      el.innerHTML = `
        <div style="width:28px; height:20px; background:#a1887f; border:2px solid #4e342e; font-family:'Press Start 2P'; font-size:6px; color:#212121; display:flex; align-items:center; justify-content:center;">
          ➔
        </div>
        <div style="width:4px; height:18px; background:#5d4037; margin:0 auto;"></div>
      `;
    } else if (prop.type === "magic-lantern") {
      el.innerHTML = `
        <div style="width:14px; height:22px; background:#212121; border:2px solid #78909c; border-radius:2px; position:relative; box-shadow:0 0 16px #64ffda;">
          <div style="width:8px; height:12px; background:#64ffda; margin:3px auto; opacity:0.9; animation: torchFlicker 0.8s infinite alternate;"></div>
        </div>
      `;
    } else if (prop.type === "ai-spark-crystal") {
      el.innerHTML = `
        <div style="width:16px; height:16px; background:#00e5ff; transform:rotate(45deg); box-shadow:0 0 16px #00e5ff; animation: torchFlicker 1.2s infinite alternate;"></div>
      `;
    } else if (prop.type === "floating-sparkle") {
      el.innerHTML = `
        <div style="width:14px; height:14px; background:#ea80fc; transform:rotate(45deg); box-shadow:0 0 16px #e040fb; animation: torchFlicker 0.9s infinite alternate;"></div>
      `;
    } else if (prop.type === "spellbook-shelf") {
      el.innerHTML = `
        <div style="width:54px; height:40px; background:#4e342e; border:3px solid #2e1c14; padding:3px; display:flex; gap:3px; align-items:flex-end;">
          <div style="width:8px; height:28px; background:#c62828;"></div>
          <div style="width:9px; height:32px; background:#1565c0;"></div>
          <div style="width:7px; height:24px; background:#2e7d32;"></div>
          <div style="width:10px; height:30px; background:#6a1b9a;"></div>
        </div>
      `;
    }

    container.appendChild(el);
  });
}

/* ==========================================================================
   6. AMBIENT PARTICLES SYSTEM (Canvas)
   Draws embers in the mine, snow at summit, leaves on trail, runes at tower
   ========================================================================== */
class AmbientParticles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.animationFrame = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    const count = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.floor(Math.random() * 4) + 2,
      vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.8 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      color: "#ffffff"
    };
  }

  update() {
    if (state.reducedMotion) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const locId = PORTFOLIO_DATA.locations[state.currentLocationIndex]?.id || "mine";

    this.particles.forEach(p => {
      // Color and movement dynamics per location
      if (locId === "mine") {
        // Red/Orange/Yellow rising embers
        p.color = Math.random() > 0.5 ? "#ff9800" : "#ff5722";
        p.y -= p.vy * 0.8;
        p.x += Math.sin(p.y * 0.05) * 0.4;
        if (p.y < 0) { p.y = this.canvas.height; p.x = Math.random() * this.canvas.width; }
      } else if (locId === "summit") {
        // Falling crisp snow and gold specks
        p.color = Math.random() > 0.3 ? "#ffffff" : "#ffd700";
        p.y += p.vy * 1.2;
        p.x += Math.cos(p.y * 0.02) * 0.6;
        if (p.y > this.canvas.height) { p.y = 0; p.x = Math.random() * this.canvas.width; }
      } else if (locId === "trail") {
        // Drifting green leaves and sunny pollen
        p.color = Math.random() > 0.4 ? "#81c784" : "#fff59d";
        p.x += p.vx + 0.8;
        p.y += Math.sin(p.x * 0.03) * 0.5;
        if (p.x > this.canvas.width) { p.x = 0; p.y = Math.random() * this.canvas.height; }
      } else if (locId === "tower") {
        // Mystic purple/cyan ascending stardust
        p.color = Math.random() > 0.5 ? "#e040fb" : "#00e5ff";
        p.y -= p.vy * 0.6;
        p.x += Math.sin(p.y * 0.04) * 0.8;
        if (p.y < 0) { p.y = this.canvas.height; p.x = Math.random() * this.canvas.width; }
      }

      // Draw crisp pixel block particle
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
    });

    this.ctx.globalAlpha = 1.0;
  }

  start() {
    const loop = () => {
      this.update();
      this.animationFrame = requestAnimationFrame(loop);
    };
    loop();
  }
}

/* ==========================================================================
   7. LOCATION NAVIGATION & JUMP STATE MACHINE
   ========================================================================== */
function updateLocationUI(locationIndex, direction = 0) {
  const loc = PORTFOLIO_DATA.locations[locationIndex];
  if (!loc) return;

  // 1. Update HUD counters
  const locNumEl = document.getElementById("current-loc-num");
  const totalLocNumEl = document.getElementById("total-loc-num");
  const panelStepEl = document.getElementById("panel-step-indicator");
  if (locNumEl) locNumEl.textContent = locationIndex + 1;
  if (totalLocNumEl) totalLocNumEl.textContent = PORTFOLIO_DATA.locations.length;
  if (panelStepEl) panelStepEl.textContent = `${locationIndex + 1} / ${PORTFOLIO_DATA.locations.length}`;

  // 2. Update Dialog Content (High readability, exact wording)
  const badgeEl = document.getElementById("panel-location-badge");
  const titleEl = document.getElementById("panel-title");
  const subtitleEl = document.getElementById("panel-subtitle");
  const bodyEl = document.getElementById("panel-body");
  const tagsEl = document.getElementById("panel-tags");

  if (badgeEl) badgeEl.textContent = loc.badge;
  if (titleEl) titleEl.textContent = loc.title;
  if (subtitleEl) subtitleEl.textContent = loc.subtitle;
  if (bodyEl) {
    bodyEl.innerHTML = loc.body;
    const scrollContainer = document.querySelector(".dialog-content-body");
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  if (tagsEl) {
    tagsEl.innerHTML = "";
    loc.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag-pill";
      span.textContent = tag;
      tagsEl.appendChild(span);
    });
  }

  // 3. Update Environment Backdrop class
  const envEl = document.getElementById("env-backdrop");
  if (envEl) {
    envEl.className = `environment-backdrop ${loc.themeClass}`;
  }

  // 4. Update Props in Environment
  renderEnvironmentProps(loc);

  // 5. Update Hotbar Active State
  const slots = document.querySelectorAll(".hotbar-slot");
  slots.forEach((slot, idx) => {
    const isActive = idx === locationIndex;
    slot.classList.toggle("active", isActive);
    slot.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  // 6. Character Speech/Reaction Bubble
  const reactionEl = document.getElementById("char-reaction");
  if (reactionEl) {
    reactionEl.textContent = loc.reaction;
    reactionEl.classList.add("visible");
    setTimeout(() => {
      reactionEl.classList.remove("visible");
    }, 2400);
  }
}

/**
 * Changes location with character jump and landing pose swap
 */
function goToLocation(newIndex, isDirect = false) {
  if (state.isJumping) return;
  if (newIndex < 0) newIndex = PORTFOLIO_DATA.locations.length - 1;
  if (newIndex >= PORTFOLIO_DATA.locations.length) newIndex = 0;

  if (newIndex === state.currentLocationIndex && !isDirect) {
    triggerJumpAction();
    return;
  }

  const prevIndex = state.currentLocationIndex;
  const direction = newIndex > prevIndex ? 1 : -1;
  state.currentLocationIndex = newIndex;
  state.isJumping = true;

  const charEl = document.getElementById("player-character");
  const charContainer = document.getElementById("char-svg-container");
  const anchorEl = document.getElementById("character-anchor");

  // Play Jump Sound
  soundFX.playJump();

  if (!state.reducedMotion) {
    // Normal Mode: Full jump arc animation
    if (charEl) {
      charEl.classList.remove("idle");
      charEl.classList.add("jumping");
    }
    if (anchorEl) anchorEl.classList.add("jumping");

    // At apex of jump (300ms), switch character pose and scenery
    setTimeout(() => {
      const loc = PORTFOLIO_DATA.locations[newIndex];
      if (charContainer) {
        charContainer.innerHTML = generateCharacterSVG(loc.pose);
      }
      updateLocationUI(newIndex, direction);
    }, 300);

    // On landing (650ms)
    setTimeout(() => {
      if (charEl) {
        charEl.classList.remove("jumping");
        charEl.classList.add("idle");
      }
      if (anchorEl) anchorEl.classList.remove("jumping");
      
      soundFX.playLand();
      soundFX.playLocationChime(newIndex);
      state.isJumping = false;
    }, 650);

  } else {
    // Reduced Motion Mode: Immediate gentle pose swap, no jumping arc
    const loc = PORTFOLIO_DATA.locations[newIndex];
    if (charContainer) {
      charContainer.innerHTML = generateCharacterSVG(loc.pose);
    }
    updateLocationUI(newIndex, direction);
    soundFX.playLocationChime(newIndex);
    setTimeout(() => {
      state.isJumping = false;
    }, 200);
  }
}

/**
 * Triggers a jump in place when visitor presses Spacebar or clicks character
 */
function triggerJumpAction() {
  if (state.isJumping) return;
  state.isJumping = true;

  const charEl = document.getElementById("player-character");
  const anchorEl = document.getElementById("character-anchor");

  soundFX.playJump();

  if (!state.reducedMotion) {
    if (charEl) {
      charEl.classList.remove("idle");
      charEl.classList.add("jumping");
    }
    if (anchorEl) anchorEl.classList.add("jumping");

    setTimeout(() => {
      if (charEl) {
        charEl.classList.remove("jumping");
        charEl.classList.add("idle");
      }
      if (anchorEl) anchorEl.classList.remove("jumping");
      soundFX.playLand();
      state.isJumping = false;
    }, 650);
  } else {
    // Subtle pulse for reduced motion
    if (charEl) {
      charEl.style.transform = "scale(1.05)";
      setTimeout(() => {
        charEl.style.transform = "";
        state.isJumping = false;
      }, 200);
    } else {
      state.isJumping = false;
    }
  }
}

/* ==========================================================================
   8. SCREEN MANAGEMENT (Title Screen <-> Explore Screen)
   ========================================================================== */
function showExploreScreen(playSound = true) {
  const titleScreen = document.getElementById("title-screen");
  const exploreScreen = document.getElementById("explore-screen");

  if (playSound) {
    try {
      soundFX.playStartGame();
    } catch (e) {
      console.warn("Sound error:", e);
    }
  }

  if (titleScreen) {
    titleScreen.hidden = true;
    titleScreen.style.display = "none";
    titleScreen.classList.remove("active");
  }
  
  if (exploreScreen) {
    exploreScreen.hidden = false;
    exploreScreen.style.display = "flex";
    exploreScreen.classList.add("active");
  }

  state.currentScreen = "explore";

  // Render initial character SVG and location
  const charContainer = document.getElementById("char-svg-container");
  const initialLoc = PORTFOLIO_DATA.locations[state.currentLocationIndex] || PORTFOLIO_DATA.locations[0];
  if (charContainer) {
    charContainer.innerHTML = generateCharacterSVG(initialLoc.pose);
  }

  const charEl = document.getElementById("player-character");
  if (charEl) {
    charEl.classList.remove("jumping");
    charEl.classList.add("idle");
  }

  updateLocationUI(state.currentLocationIndex);

  // Set focus to the Next Location button for instant keyboard/accessibility navigation
  setTimeout(() => {
    const nextBtn = document.getElementById("btn-next-loc");
    if (nextBtn && typeof nextBtn.focus === "function") nextBtn.focus();
  }, 50);
}

function showTitleScreen(playClick = false) {
  const titleScreen = document.getElementById("title-screen");
  const exploreScreen = document.getElementById("explore-screen");

  if (playClick) {
    try {
      soundFX.playClick();
    } catch (e) {
      console.warn("Sound error:", e);
    }
  }

  if (exploreScreen) {
    exploreScreen.hidden = true;
    exploreScreen.style.display = "none";
    exploreScreen.classList.remove("active");
  }

  if (titleScreen) {
    titleScreen.hidden = false;
    titleScreen.style.display = "flex";
    titleScreen.classList.add("active");
    const startBtn = document.getElementById("btn-start");
    if (startBtn) startBtn.focus();
  }

  state.currentScreen = "title";
}

/* ==========================================================================
   9. MODALS & ACCESSIBILITY CONTROLS
   ========================================================================== */
function openModal(modalId) {
  soundFX.playClick();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.hidden = false;
    const firstBtn = modal.querySelector("button, [tabindex='0']");
    if (firstBtn) firstBtn.focus();
  }
}

function closeModal(modalId) {
  soundFX.playClick();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.hidden = true;
  }
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem("portfolio_sound", state.soundEnabled ? "1" : "0");
  updateSoundUI();
  if (state.soundEnabled) {
    soundFX.playClick();
  }
}

function updateSoundUI() {
  const statusTexts = document.querySelectorAll(".sound-status, #sound-val-text");
  statusTexts.forEach(el => {
    el.textContent = state.soundEnabled ? "On" : "Off";
  });

  const icons = document.querySelectorAll(".sound-icon, #btn-hud-sound");
  icons.forEach(el => {
    el.textContent = state.soundEnabled ? "🔊" : "🔇";
  });
}

function toggleReducedMotion() {
  state.reducedMotion = !state.reducedMotion;
  document.body.classList.toggle("reduced-motion-active", state.reducedMotion);
  localStorage.setItem("portfolio_motion", state.reducedMotion ? "reduced" : "normal");
  updateMotionUI();
  soundFX.playClick();
}

function updateMotionUI() {
  const statusTexts = document.querySelectorAll(".motion-status, #motion-val-text");
  statusTexts.forEach(el => {
    el.textContent = state.reducedMotion ? "Reduced" : "Normal";
  });
}

function changeFontScale(delta) {
  state.fontScale = Math.max(85, Math.min(135, state.fontScale + delta));
  document.documentElement.style.setProperty("--reading-font-scale", state.fontScale / 100);
  const display = document.getElementById("font-scale-display");
  if (display) display.textContent = `${state.fontScale}%`;
  soundFX.playClick();
}

/* ==========================================================================
   10. EVENT LISTENERS SETUP
   ========================================================================== */
function initEventListeners() {
  // --- Title Screen Buttons ---
  const btnStart = document.getElementById("btn-start");
  if (btnStart) {
    btnStart.addEventListener("click", showExploreScreen);
  }

  const btnOptions = document.getElementById("btn-options");
  if (btnOptions) {
    btnOptions.addEventListener("click", () => openModal("modal-settings"));
  }

  const btnAbout = document.getElementById("btn-about");
  if (btnAbout) {
    btnAbout.addEventListener("click", () => openModal("modal-about"));
  }

  const btnTitleSound = document.getElementById("btn-title-sound");
  if (btnTitleSound) {
    btnTitleSound.addEventListener("click", toggleSound);
  }

  const btnTitleMotion = document.getElementById("btn-title-motion");
  if (btnTitleMotion) {
    btnTitleMotion.addEventListener("click", toggleReducedMotion);
  }

  // --- HUD Navigation & Toggles ---
  const btnReturnMenu = document.getElementById("btn-return-menu");
  if (btnReturnMenu) {
    btnReturnMenu.addEventListener("click", showTitleScreen);
  }

  const btnHudSound = document.getElementById("btn-hud-sound");
  if (btnHudSound) {
    btnHudSound.addEventListener("click", toggleSound);
  }

  const btnHudSettings = document.getElementById("btn-hud-settings");
  if (btnHudSettings) {
    btnHudSettings.addEventListener("click", () => openModal("modal-settings"));
  }

  // --- World Stage Arrow Controls ---
  const btnPrevLoc = document.getElementById("btn-prev-loc");
  if (btnPrevLoc) {
    btnPrevLoc.addEventListener("click", () => goToLocation(state.currentLocationIndex - 1));
  }

  const btnNextLoc = document.getElementById("btn-next-loc");
  if (btnNextLoc) {
    btnNextLoc.addEventListener("click", () => goToLocation(state.currentLocationIndex + 1));
  }

  // Dialog Prev/Next buttons
  const btnPanelPrev = document.getElementById("btn-panel-prev");
  if (btnPanelPrev) {
    btnPanelPrev.addEventListener("click", () => goToLocation(state.currentLocationIndex - 1));
  }

  const btnPanelNext = document.getElementById("btn-panel-next");
  if (btnPanelNext) {
    btnPanelNext.addEventListener("click", () => goToLocation(state.currentLocationIndex + 1));
  }

  // Clicking player character triggers action jump
  const charEl = document.getElementById("player-character");
  if (charEl) {
    charEl.addEventListener("click", triggerJumpAction);
  }

  // --- Hotbar Slots Click ---
  const hotbarSlots = document.querySelectorAll(".hotbar-slot");
  hotbarSlots.forEach(slot => {
    slot.addEventListener("click", () => {
      const targetIdx = parseInt(slot.dataset.locIndex, 10);
      goToLocation(targetIdx, true);
    });
  });

  // --- Modals Close Buttons ---
  const closeSettingsBtn = document.getElementById("btn-close-settings");
  const settingsDoneBtn = document.getElementById("btn-settings-done");
  const settingsBackdrop = document.getElementById("modal-settings-backdrop");

  if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", () => closeModal("modal-settings"));
  if (settingsDoneBtn) settingsDoneBtn.addEventListener("click", () => closeModal("modal-settings"));
  if (settingsBackdrop) settingsBackdrop.addEventListener("click", () => closeModal("modal-settings"));

  const closeAboutBtn = document.getElementById("btn-close-about");
  const aboutDoneBtn = document.getElementById("btn-about-done");
  const aboutBackdrop = document.getElementById("modal-about-backdrop");

  if (closeAboutBtn) closeAboutBtn.addEventListener("click", () => closeModal("modal-about"));
  if (aboutDoneBtn) aboutDoneBtn.addEventListener("click", () => closeModal("modal-about"));
  if (aboutBackdrop) aboutBackdrop.addEventListener("click", () => closeModal("modal-about"));

  // Settings modal controls
  const toggleSoundBtn = document.getElementById("toggle-sound-btn");
  if (toggleSoundBtn) toggleSoundBtn.addEventListener("click", toggleSound);

  const toggleMotionBtn = document.getElementById("toggle-motion-btn");
  if (toggleMotionBtn) toggleMotionBtn.addEventListener("click", toggleReducedMotion);

  const btnFontSmaller = document.getElementById("btn-font-smaller");
  if (btnFontSmaller) btnFontSmaller.addEventListener("click", () => changeFontScale(-5));

  const btnFontLarger = document.getElementById("btn-font-larger");
  if (btnFontLarger) btnFontLarger.addEventListener("click", () => changeFontScale(5));

  // --- KEYBOARD CONTROLS ---
  window.addEventListener("keydown", (e) => {
    // If a modal is open, Escape closes it
    const openModals = document.querySelectorAll(".game-modal:not([hidden])");
    if (openModals.length > 0) {
      if (e.key === "Escape") {
        openModals.forEach(m => m.hidden = true);
        soundFX.playClick();
      }
      return;
    }

    if (state.currentScreen === "title") {
      if (e.key === "Enter" || e.key === " ") {
        // Prevent default space scroll and open explore screen
        if (e.target.tagName !== "BUTTON") {
          e.preventDefault();
          showExploreScreen();
        }
      }
      return;
    }

    // Explore Screen Keyboard Navigation
    switch (e.key) {
      case "ArrowLeft":
      case "a":
      case "A":
        e.preventDefault();
        goToLocation(state.currentLocationIndex - 1);
        break;

      case "ArrowRight":
      case "d":
      case "D":
        e.preventDefault();
        goToLocation(state.currentLocationIndex + 1);
        break;

      case " ":
        // Space triggers action jump
        e.preventDefault();
        triggerJumpAction();
        break;

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        e.preventDefault();
        goToLocation(parseInt(e.key, 10) - 1, true);
        break;

      case "Escape":
        e.preventDefault();
        showTitleScreen();
        break;

      case "m":
      case "M":
        toggleSound();
        break;
    }
  });

  // --- TOUCH SWIPE GESTURES FOR MOBILE ---
  const worldStage = document.getElementById("world-stage");
  if (worldStage) {
    worldStage.addEventListener("touchstart", (e) => {
      state.touchStartX = e.changedTouches[0].screenX;
      state.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    worldStage.addEventListener("touchend", (e) => {
      const deltaX = e.changedTouches[0].screenX - state.touchStartX;
      const deltaY = e.changedTouches[0].screenY - state.touchStartY;

      // Ensure horizontal swipe
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          // Swipe Left -> Next
          goToLocation(state.currentLocationIndex + 1);
        } else {
          // Swipe Right -> Prev
          goToLocation(state.currentLocationIndex - 1);
        }
      } else if (Math.abs(deltaX) < 15 && Math.abs(deltaY) < 15) {
        // Tap on stage triggers jump
        triggerJumpAction();
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   11. GLOBAL WINDOW BINDINGS (Guarantees inline HTML onclick always works)
   ========================================================================== */
window.showExploreScreen = showExploreScreen;
window.showTitleScreen = showTitleScreen;
window.goToLocation = goToLocation;
window.triggerJumpAction = triggerJumpAction;
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleSound = toggleSound;
window.toggleReducedMotion = toggleReducedMotion;
window.changeFontScale = changeFontScale;

/* ==========================================================================
   12. APPLICATION INITIALIZATION (Runs immediately or on DOM ready)
   ========================================================================== */
function initApp() {
  // 1. Detect OS Reduced Motion preference
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches || localStorage.getItem("portfolio_motion") === "reduced") {
    state.reducedMotion = true;
    document.body.classList.add("reduced-motion-active");
  }

  // 2. Load Sound setting from storage
  if (localStorage.getItem("portfolio_sound") === "1") {
    state.soundEnabled = true;
  }
  updateSoundUI();
  updateMotionUI();

  // 3. Randomize title screen splash text
  const splashEl = document.getElementById("splash-text");
  if (splashEl && PORTFOLIO_DATA.splashTexts.length > 0) {
    const randomSplash = PORTFOLIO_DATA.splashTexts[Math.floor(Math.random() * PORTFOLIO_DATA.splashTexts.length)];
    splashEl.textContent = randomSplash;
  }

  // 4. Initialize Ambient Particles Canvas
  const canvas = document.getElementById("ambient-particles");
  if (canvas) {
    const particles = new AmbientParticles(canvas);
    particles.start();
  }

  // 5. Initialize All Event Listeners
  initEventListeners();

  // 6. Open from the Title Screen by default (or directly to explore if #explore is in URL)
  if (window.location.hash === "#explore") {
    showExploreScreen(false);
  } else {
    showTitleScreen();
  }
}

// Trigger initApp whether DOMContentLoaded has already fired or is loading
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
