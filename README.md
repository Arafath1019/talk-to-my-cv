# Talk to my CV - Yeasin Arafath's Portfolio

A modern, interactive portfolio website featuring an AI-powered chatbot that can answer questions about Yeasin's professional background, skills, and experience directly from his CV.

## 🚀 Features

- **AI Chatbot**: Integrated Ollama-powered assistant that knows everything about Yeasin's professional journey.
- **Dynamic CV Integration**: The chatbot reads content directly from `Yeasin_Arafath_CUET_CV.md`.
- **Modern UI/UX**: Built with Next.js 15, Tailwind CSS 4, and Framer Motion for smooth animations and a premium feel.
- **Responsive Design**: Optimized for all devices, from desktop to mobile.
- **Sectioned Content**: Clearly organized Hero, Experience, Skills (Bento grid), Projects, and Education sections.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI/LLM**: [Ollama SDK](https://ollama.com) (Gemma 3 4B Cloud)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Ollama Cloud API Key](https://ollama.com) (for the chatbot functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arafath1019/talk-to-my-cv.git
   cd talk-to-my-cv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add your Ollama API key:
   ```env
   OLLAMA_CLOUD_API_KEY=your_api_key_here
   OLLAMA_MODEL=gemma3:4b-cloud
   OLLAMA_BASE_URL=https://ollama.com
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build

To create an optimized production build:

```bash
npm run build
npm start
```

## 📄 License

This project is for personal portfolio purposes. All rights reserved. &copy; Yeasin Arafath.
