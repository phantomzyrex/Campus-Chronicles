import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini on server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Perspective-aware fallbacks in case API key is missing or quota/rate limit occurs
const FALLBACK_THOUGHTS = {
  student: [
    {
      thought: "If sleep is a biological necessity, then my degree program is officially defying the laws of vertebrate physiology.",
      subtext: "Currently operating on 4% willpower and a half-eaten granola bar from Tuesday.",
      author: "Nocturnal Scholar in Library Corner",
      vibeRating: "Caffeine Toxicity: 8.5/10",
      category: "Existential Survival"
    },
    {
      thought: "I have 87 tabs open, and 84 of them are Wikipedia pages explaining concepts that should have been covered in prerequisite courses.",
      subtext: "RAM usage: 99.8%. Mental RAM usage: 0.2%.",
      author: "Senior with 12 Days Until Graduation",
      vibeRating: "Browser Tabs: Critical",
      category: "Cognitive Overload"
    },
    {
      thought: "Due at 11:59 PM means my creative genius does not awaken until 11:14 PM.",
      subtext: "The adrenaline rush produces prose that Shakespeare could only weep at in horror.",
      author: "Adrenaline-Fueled Undergrad",
      vibeRating: "Heart Rate: 142 BPM",
      category: "Time Management"
    }
  ],
  teacher: [
    {
      thought: "I spent three hours updating the syllabus font, margins, and late policies, knowing in my heart that zero humans will read beyond the course code.",
      subtext: "Page 4 literally contained a coupon for free coffee that expired unclaimed in 2024.",
      author: "Tenured Associate Professor",
      vibeRating: "Patience Level: 0.4%",
      category: "Curriculum Zen"
    },
    {
      thought: "To whoever began their 5-page research paper with 'Since the dawn of human civilization': civilization was peaceful until this opening sentence.",
      subtext: "Taking a deep sip of lukewarm hazelnut roast and staring blankly into the middle distance.",
      author: "Faculty Grader in Row 304",
      vibeRating: "Red Pens Consumed: 3",
      category: "Literary Tribulations"
    },
    {
      thought: "Office hours remain an acoustic vacuum of total silence until 48 hours before the final exam, at which point 60 people discover my physical office exists.",
      subtext: "I was halfway through a complex New York Times crossword puzzle before being interrupted.",
      author: "Office Hours Ghost",
      vibeRating: "Isolation Index: 92%",
      category: "Faculty Solitude"
    }
  ]
};

// API Endpoint for Perspective-Aware Daily Campus Thought
app.post('/api/daily-thought', async (req, res) => {
  const { perspective = 'student', language = 'english', seed } = req.body;
  const isStudent = perspective === 'student';

  try {
    if (!process.env.GEMINI_API_KEY) {
      // Return realistic fallback if API key is not configured
      const fallbacks = isStudent ? FALLBACK_THOUGHTS.student : FALLBACK_THOUGHTS.teacher;
      const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      return res.json({
        ...fallback,
        generatedWithAi: false,
        perspective,
        language,
      });
    }

    let languageDirective = 'Respond in English.';
    if (language === 'hinglish') {
      languageDirective = 'Respond in hilarious desi Hinglish (Hindi + English campus slang like "bhai", "jugaad", "attendance proxy", "viva", "chai", "raat ko 3 baje").';
    } else if (language === 'hindi') {
      languageDirective = 'Respond in pure humorous, dramatic Hindi in Devanagari script (e.g. "महाविद्यालय", "अस्तित्वगत संकट", "पाठ्यक्रम", "निद्रा").';
    } else if (language === 'doctor') {
      languageDirective = 'Respond as an exhausted doctor writing an illegible medical prescription (use "Rx Tab.", "650mg TDS", "IV stat", "Dx: Terminal Syllabus Phobia", and wavy scribble symbols like 〰∿∿).';
    }

    const systemInstruction = isStudent
      ? `You are an exhausted, cynical, caffeine-fueled college undergraduate student.
Generate a hilarious, dry, sarcastic "Daily Campus Thought" (1-2 sentences) about surviving college life (e.g. 8 AM lectures, group projects, energy drink dependencies, syllabus denial, broken campus Wi-Fi, 11:59 PM submissions, eating instant noodles for the 5th time this week, or pretending to understand differential equations).
${languageDirective}
Style: Sharp, punchy, self-deprecating, dry humor, no slapstick.
You must return a valid JSON object matching the requested schema.`
      : `You are a weary, deadpan, tenured college professor or adjunct instructor who has seen every student trick, excuse, and 11:59 PM email in existence.
Generate a hilarious, dry, deadpan "Daily Campus Thought" (1-2 sentences) from the faculty perspective (e.g. attendance illusions, students never reading the syllabus, essays starting with "Since the dawn of human civilization", faculty committee meetings that could have been an email, the tragic state of the department coffee machine, grading 80 identical essays on a Sunday night).
${languageDirective}
Style: Weary wit, dry academic sarcasm, deadpan exhaustion, sophisticated resignation.
You must return a valid JSON object matching the requested schema.`;

    const promptText = `Generate a fresh, original, sarcastic quote/thought of the day for a ${
      isStudent ? 'college student' : 'college professor'
    } in dialect/language "${language}" with timestamp seed ${seed || Date.now()}.`;

    // 7-second timeout to guarantee snappy response
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Generation timeout: falling back to library archives')), 7000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 1.0,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            thought: {
              type: Type.STRING,
              description: 'The sarcastic 1-2 sentence core quote of the day.',
            },
            subtext: {
              type: Type.STRING,
              description: 'A witty internal subtext or reality check footnote.',
            },
            author: {
              type: Type.STRING,
              description: 'A satirical author pseudonym, e.g. "Senior with 84 Chrome Tabs" or "Weary Faculty in Rm 302".',
            },
            vibeRating: {
              type: Type.STRING,
              description: 'A satirical gauge or meter status, e.g. "Caffeine Index: 9.4/10" or "Patience: 1.2%".',
            },
            category: {
              type: Type.STRING,
              description: 'A short satirical category label, e.g. "Syllabus Amnesia" or "11:59 PM Tactics".',
            },
          },
          required: ['thought', 'subtext', 'author', 'vibeRating', 'category'],
        },
      },
    });

    const response = (await Promise.race([generatePromise, timeoutPromise])) as any;

    const parsed = JSON.parse(response.text?.trim() || '{}');

    if (!parsed.thought) {
      throw new Error('Empty response from model');
    }

    return res.json({
      ...parsed,
      generatedWithAi: true,
      perspective,
    });
  } catch (err: unknown) {
    console.error('Gemini generation failed:', err);
    // Graceful fallback to rich pre-written quote
    const fallbacks = isStudent ? FALLBACK_THOUGHTS.student : FALLBACK_THOUGHTS.teacher;
    const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    return res.json({
      ...fallback,
      generatedWithAi: false,
      perspective,
      errorNotice: err instanceof Error ? err.message : 'Fallback loaded',
    });
  }
});

// Setup Vite in Dev or Static files in Prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
