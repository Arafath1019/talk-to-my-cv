import { Ollama } from "ollama";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Cache CV content to avoid repeated disk reads
let cvContent = "";

function getCVContent() {
  if (cvContent) return cvContent;
  try {
    const cvPath = path.join(process.cwd(), "Yeasin_Arafath_CUET_CV.md");
    cvContent = fs.readFileSync(cvPath, "utf8");
    return cvContent;
  } catch (error) {
    console.error("Error reading CV file:", error);
    return "CV content not available.";
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OLLAMA_CLOUD_API_KEY;
    const model = process.env.OLLAMA_MODEL || "gemma3:4b-cloud";

    if (!apiKey) {
      return NextResponse.json(
        { error: "OLLAMA_CLOUD_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const ollama = new Ollama({
      host: process.env.OLLAMA_BASE_URL || "https://ollama.com/api",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const context = getCVContent();

    const systemPrompt = `You are an AI assistant for Yeasin Arafath's portfolio website. 
Your goal is to answer questions about Yeasin's professional background, skills, experience, and education based on his CV.

Context (Yeasin's CV):
${context}

Instructions:
1. Use the provided CV context to answer questions accurately.
2. Maintain a professional, helpful, and friendly tone.
3. If the user asks about something not in the CV, politely state that you don't have that information but can discuss his skills in software engineering, backend development, or AI.
4. Keep responses concise and focused on the query.
5. If the user asks common interview questions, answer them as if you are representing Yeasin's professional persona.
6. Suggest relevant sections of the portfolio if applicable (e.g., "You can see more details in the Projects section above").

Respond in Markdown format.`;

    const chatResponse = await ollama.chat({
      model: model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      stream: false, // Start with non-streaming for simplicity, can upgrade later
      options: {
        num_ctx: 4096,
      },
    });

    return NextResponse.json(chatResponse);
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred during the chat request" },
      { status: 500 },
    );
  }
}
