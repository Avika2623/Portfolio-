# APOGEE Orbital AI Chat Console — System Documentation & Technical Specification

**Interactive Deep-Space LLM Inference & Parameter Playground**  
*Built with React 19, TypeScript, Vite, Express 5, and Groq API (Llama 3.3 70B Versatile)*

---

## 1. Project Overview

- **Project Name:** APOGEE Orbital AI Console (`apogee-chat`)
- **Live Deployment:** [https://chat-bot-avika2623.vercel.app/](https://chat-bot-avika2623.vercel.app/)
- **Source Code Repository:** [https://github.com/Avika2623/Chat-Bot](https://github.com/Avika2623/Chat-Bot)
- **Author & Developer:** **Avika Kalraiya** (B.Tech Computer Science with AI & ML specialization, Newton School of Technology, ADYPU Pune)
- **Core Technology:** Groq Llama 3.3 70B Versatile inference engine with Server-Sent Events (SSE) token streaming

---

## 2. Problem Statement & Educational Purpose

While large language models (LLMs) are ubiquitous, beginner developers and learners often interact with them as opaque "black boxes." Key inference mechanics—such as how temperature affects randomness, how nucleus sampling (top-p) shapes vocabulary probability, how system prompts override conversational tone, and how token limits trigger truncated outputs—are rarely visible in consumer chat interfaces.

**APOGEE Orbital Console** was engineered to solve this by providing:
1. **Interactive Parameter Exploration:** Immediate visual controls for model temperature, top-p, token caps, and system instructions.
2. **Deep-Space Telemetry Aesthetics:** An original astronomy-inspired user interface designed for high focus and developer ergonomics.
3. **Transparent Execution:** Clear status bars showing the active model, temperature, token limit, and streaming state for every message.
4. **Safety & Clarity:** Pure inference and prompt exploration; *does not train models or alter model weights*.

---

## 3. System Architecture & Component Design

The application employs a decoupled client-server architecture designed for zero client-side credential exposure and low-latency token streaming:

```
[ Client: React 19 + TypeScript + Vite ]
   │
   ├─► Parameter Controls (Temperature, Top-p, Max Tokens, Stream Toggle)
   ├─► System Prompt Presets (Balanced, Astrophysics, Code Copilot, JSON Only)
   ├─► Markdown Renderer with DOMPurify sanitization
   │
   ▼ HTTP / Server-Sent Events (SSE)
[ Backend Proxy: Express 5 + Node.js (server/groq.ts) ]
   │
   ├─► Server-side GROQ_API_KEY resolution (environment isolation)
   ├─► Payload validation & parameter clamping
   │
   ▼ HTTPS
[ Groq Cloud Inference Engine ] ──► Llama 3.3 70B Versatile
```

### Key Architectural Layers:
- **Frontend Layer:** Built with React 19 and TypeScript, powered by Vite for instant Hot Module Replacement (HMR). State management handles multi-chat sessions, real-time token streaming buffers, and parameter panels.
- **Backend Proxy Layer (`server/groq.ts`):** A lightweight Express 5 server that acts as a secure intermediary. The Groq API key is read exclusively on the server from `process.env.GROQ_API_KEY` and is never exposed in client bundles or network responses.
- **Token Streaming Engine:** Leverages HTTP chunked transfer / Server-Sent Events to render response tokens incrementally as they arrive from Groq hardware accelerators.

---

## 4. Parameter Controls & Exploration Features

| Parameter | Range / Options | Default | Functional Description |
|:---|:---|:---|:---|
| **System Prompt** | Textarea (up to 4,096 chars) + 4 Presets | "You are a helpful..." | Guiding instructions prepended to every turn in the session. |
| **System Presets** | `Balanced`, `Astrophysics`, `Code Copilot`, `JSON Only` | `Balanced` | Instant prompt archetypes demonstrating behavioral steering. |
| **Temperature** | `0.00` – `1.00` (Slider) | `0.70` | Controls randomness. Lower values yield deterministic logic; higher values promote creative variation. |
| **Max Response Tokens** | `1` – `32,768` (Input & Slider) | `2048` | Caps response length to prevent runaway generation and test token truncation. |
| **Top-p (Nucleus)** | `0.00` – `1.00` (Slider) | `1.00` | Restricts candidate tokens to the top cumulative probability mass. |
| **Stream Responses** | `ON` / `OFF` (Toggle) | `ON` | Displays tokens incrementally in real time instead of waiting for full generation. |

---

## 5. Security & Verification

1. **Zero Credential Leakage:**
   - Client bundles contain zero API keys or secrets.
   - All external API calls route through the Express server proxy.
2. **Input & Output Sanitization:**
   - Model outputs are parsed with `marked` and sanitized with `dompurify` to prevent XSS (Cross-Site Scripting) vulnerabilities when rendering markdown, code snippets, or tables.
3. **Verification Suite (`server/verify.ts`):**
   - Automated test suite validating API handshake, model parameter acceptance, and token streaming contracts without breaking client state.
4. **Scope Clarification for Academic Rubric:**
   - **Inference Only:** The platform is a prompt engineering and inference exploration console. It connects to hosted Llama 3.3 70B weights; it does not train, fine-tune, or modify foundation model weights.

---

## 6. Individual Contribution (Avika Kalraiya)

- **UI & UX Engineering:** Conceived and implemented the complete orbital/astronomy console interface, including the telemetry status bar, prompt suggestion matrix, and responsive parameters drawer.
- **Frontend Development:** Programmed parameter reactivity, markdown rendering pipeline with DOMPurify sanitization, and multi-session chat state.
- **Backend Proxy Implementation:** Developed the Express 5 server proxy, secure environment variable key handling, and streaming endpoints.
- **Technical Documentation:** Created technical setup guides, API verification scripts, and architectural documentation.

---

## 7. Links & Project Artifacts

- **Live Demo:** [https://chat-bot-avika2623.vercel.app/](https://chat-bot-avika2623.vercel.app/)
- **GitHub Repository:** [https://github.com/Avika2623/Chat-Bot](https://github.com/Avika2623/Chat-Bot)
