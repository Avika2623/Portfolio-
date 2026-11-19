# 🎮 Avika Kalraiya — Interactive Game Portfolio

A responsive, pixelated personal portfolio website inspired by retro block-building sandbox games. Built using pure **HTML5, CSS3, and Vanilla JavaScript** with zero external dependencies.

---

## 🌟 Features

- **Classic Title Screen**: Recreates the game's iconic main menu with a blurred blocky forest background, 3D stone-beveled **PORTFOLIO** title, animated bouncing yellow splash text, and a prominent **Start Journey** button.
- **Alex-Inspired Pixel Character**: Fully crafted scalable SVG character matching the reference aesthetic (orange hair, green tunic, belt, brown pants, and boots).
- **Jump & Landing Animations**: Smooth jump arc when switching locations, landing in a distinct pose tailored to each environment:
  - ⛏ **Innovation Mine**: Wielding a pixel pickaxe with mining sparks (SIH & Hacktoberfest).
  - ⭐ **Quantum Summit**: Celebrating with arms raised holding a gold star & shimmer aura (World Quant Gold).
  - 🎨 **Explorer's Trail**: Holding a fine paintbrush beside an easel and field poppies (Trekking & Painting).
  - ✨ **Creative Tower**: Channeling an enchanted crystal quill with glowing AI sparks (Prompting Essentials Certification & Generative AI workflows).
- **4 Distinct Scenic Realms**:
  1. **Innovation Mine**: Cavern arches, wall torches with animated flames, redstone/diamond ore chunks, and minecart tracks.
  2. **Quantum Summit**: Lofty snow peak, shining golden pedestal, cloud sea, and beacon beam.
  3. **Explorer's Trail**: Forest ridge, birch trees, poppy flowers, and painting easel.
  4. **Creative Tower**: Twilight aurora sky, floating spellbook shelves, lanterns, and rune tablets.
- **Dual Controls**:
  - Visible on-screen Left/Right arrow buttons (touch-friendly for mobile and tablets).
  - Keyboard navigation: `Left Arrow` / `A` and `Right Arrow` / `D`.
  - Quick-travel inventory Hotbar (`1`, `2`, `3`, `4`).
  - Fun Jump action on `Spacebar` or tapping the character.
  - Touch swipe gestures on mobile devices.
- **Accessibility & Motion Options**:
  - Built-in **Reduced Motion** toggle (also auto-detects `prefers-reduced-motion: reduce`) which replaces jump arcs with smooth, gentle pose transitions.
  - Adjustable reading font scale (85% to 135%).
  - Visible keyboard focus rings and semantic HTML.
- **Synthesized 8-Bit Audio (Web Audio API)**:
  - Retro bleeps, jump slides, landing thuds, and location arpeggio chords without any external audio file dependencies. Muted by default, toggleable via `M` key or UI buttons.

---

## 🚀 Quick Start / How to Run

No build tools, npm packages, or compilers required!

### Option 1: Direct File Open
Simply double-click `index.html` in your file manager to open it directly in any modern browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local HTTP Server (Recommended)
Using Python (available on Mac/Linux/Windows):
```bash
# In the project directory:
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## ✏️ Customization & Details

### 1. Name & Identity
The portfolio is personalized for **Avika Kalraiya**:
- **`index.html`**:
  - `<title>Avika Kalraiya — Interactive Game Portfolio</title>`
  - `<strong class="highlight-name">Avika Kalraiya</strong>` (Title screen greeting)
  - `<h2 class="modal-title">About Avika Kalraiya</h2>` (About modal)
- **`script.js`**:
  - `creatorName: "Avika Kalraiya"` in `PORTFOLIO_DATA`.

### 2. Editing Portfolio Content & Copy
All location text, badges, and tags are cleanly organized in `script.js` inside the `PORTFOLIO_DATA` object at the top of the file:
```javascript
const PORTFOLIO_DATA = {
  creatorName: "Avika Kalraiya",
  locations: [
    {
      id: "mine",
      badge: "AREA 01",
      title: "Innovation Mine",
      subtitle: "SIH & Hacktoberfest",
      tags: ["Hackathons", "Open Source", "Problem Solving", "Team Collaboration"],
      body: "I’ve participated in SIH and Hacktoberfest, exploring problem-solving through hackathons and open-source collaboration. I enjoy turning ideas into practical solutions, learning from a team, and improving through hands-on challenges."
    },
    ...
  ]
};
```
Edit the `title`, `subtitle`, `tags`, and `body` strings directly to update what appears on the game dialogue card.

### 3. Editing Colors and Theme
All game colors, dimensions, and typography settings are defined as CSS variables at the top of `styles.css`:
```css
:root {
  /* Palette: Grass, Earth, Sky, Stone, Gold */
  --c-grass-light: #7cb342;
  --c-grass-main: #558b2f;
  --c-dirt-main: #6d4c41;
  --c-gold-bright: #ffeb3b;
  --c-gold-main: #fbc02d;
  
  /* Dialog panel background and borders */
  --c-panel-bg: rgba(24, 24, 28, 0.88);
  --c-panel-border-mid: #525252;
  
  /* Fonts */
  --font-pixel: 'Press Start 2P', 'Courier New', monospace;
  --font-reading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 4. Updating Social & Contact Links
Open `index.html` and scroll to the About Modal (`#modal-about`):
```html
<div class="contact-links">
  <a href="mailto:your.email@example.com" class="game-btn game-btn-compact">✉ Email Me</a>
  <a href="https://github.com/yourusername" class="game-btn game-btn-compact">💻 GitHub</a>
  <a href="https://linkedin.com/in/yourusername" class="game-btn game-btn-compact">🔗 LinkedIn</a>
</div>
```

---

## ⌨️ Controls Reference

| Control | Action |
| :--- | :--- |
| **`←` / `A`** | Travel to Previous Location |
| **`→` / `D`** | Travel to Next Location |
| **`1` - `4`** | Quick-travel directly to Location 1, 2, 3, or 4 |
| **`Spacebar`** | Character Jump / Action in place |
| **`Esc`** | Return to Title Screen or close active dialog modal |
| **`M`** | Toggle retro 8-bit sound effects on/off |
| **Touch Swipe** | Swipe left or right on mobile to change locations |

---

## 📁 File Structure

```
portfoliogame/
├── index.html        # Semantic HTML5 layout (Title screen, HUD, World stage, Dialog, Modals)
├── styles.css        # CSS styling (Block-world themes, 3D buttons, scenery parallax, responsive queries)
├── script.js         # JavaScript engine (State machine, SVG character builder, sound synthesizer, controls)
└── README.md         # Documentation, setup & customization instructions
```
