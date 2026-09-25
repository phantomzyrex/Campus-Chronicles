import { useState, useEffect, useRef } from 'react';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';
import { Sparkles, RefreshCw, Quote, Bot } from 'lucide-react';

interface DailyCampusThoughtProps {
  perspective: Perspective;
  language: Language;
}

interface ThoughtData {
  thought: string;
  subtext: string;
  author: string;
  vibeRating: string;
  category: string;
  generatedWithAi?: boolean;
}

export default function DailyCampusThought({ perspective, language }: DailyCampusThoughtProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const thoughtTranslations = TRANSLATIONS[language]?.thought || TRANSLATIONS.english.thought;

  const [data, setData] = useState<ThoughtData | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshSeed, setRefreshSeed] = useState(0);

  // Fetch from Gemini via server API whenever perspective, language, or seed changes
  useEffect(() => {
    let isCancelled = false;

    async function fetchThought() {
      setLoading(true);
      try {
        const response = await fetch('/api/daily-thought', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            perspective,
            language,
            seed: Date.now() + refreshSeed,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = (await response.json()) as ThoughtData;
        if (!isCancelled) {
          setData(result);
        }
      } catch (err) {
        console.warn('Failed to load campus thought from server:', err);
        // Fallback safety based on language
        if (!isCancelled) {
          let fallbackThought = 'I have calculated that if I sleep for exactly 4 minutes right now, I will be legally conscious for my 9 AM exam.';
          let fallbackSubtext = 'Reality: Woke up at 1:15 PM with keyboard marks on face.';
          let fallbackAuthor = 'Undergrad on Library Floor 3';
          let fallbackVibe = 'Caffeine Index: 9.8/10';
          let fallbackCat = 'Survival Math';

          if (language === 'hinglish') {
            fallbackThought = isStudent
              ? 'Bhai maine calculate kiya hai agar abhi 4 minute so jaaun toh 9 AM viva mein aatma wapas aa jayegi.'
              : 'Pehle socha tha is batch ko research paper likhna sikhaunga, ab bas dua hai ki ye font size 12 me submit kar dein.';
            fallbackSubtext = isStudent
              ? 'Subtext: Neend 1:15 baje khuli, chehre pe laptop ke marks ke saath.'
              : 'Subtext: Kripya Calibri 11pt bold me Wikipedia mat chepo.';
            fallbackAuthor = isStudent ? 'Backbencher with Maggi' : 'Tired Faculty HOD';
            fallbackVibe = isStudent ? 'Chai Level: 4 Cups' : 'Sabr: 0.1%';
            fallbackCat = 'Hostel Life';
          } else if (language === 'hindi') {
            fallbackThought = isStudent
              ? 'यदि निद्रा जैविक आवश्यकता है, तो महाविद्यालय का पाठ्यक्रम कशेरुकी जीवों के शरीर विज्ञान को चुनौती दे रहा है।'
              : 'कार्यालय परामर्श का कक्ष तब तक शून्य रहता है जब तक परीक्षा में केवल 48 घंटे शेष न रह जाएँ।';
            fallbackSubtext = isStudent
              ? 'अंतर्निहित यथार्थ: 4% ऊर्जा एवं असीम अंधकार।'
              : 'अंतर्निहित यथार्थ: क्या यह विषय परीक्षा में आएगा?';
            fallbackAuthor = isStudent ? 'पुस्तकालय का तपस्वी' : 'अनुभवी आचार्य';
            fallbackVibe = isStudent ? 'कैफीन सूचकांक: 9.9/10' : 'धैर्य अवशेष: 1.0%';
            fallbackCat = 'परिसर चिंतन';
          } else if (language === 'doctor') {
            fallbackThought = isStudent
              ? '℞ Tab. Paracetamol 650mg TDS + 400ml IV Red Bull stat for Acute Pre-Exam Sepsis 〰∿∿∿'
              : '℞ Clinical Post-Mortem: 94% of student lab reports lack diagnostic heartbeat. Adv: High-flow Merlot ∿〰﹏';
            fallbackSubtext = isStudent
              ? 'Clinical Subtext: Patient comatose in Row 4 with severe tachycardia.'
              : 'Clinical Subtext: Patient presented with 84 open browser charts.';
            fallbackAuthor = isStudent ? 'Resident Intern on 36hr Call' : 'Tired Clinical Consultant';
            fallbackVibe = isStudent ? 'GCS Score: 4/15' : 'Code Red Ink';
            fallbackCat = 'Acute Rx';
          }

          setData({
            thought: fallbackThought,
            subtext: fallbackSubtext,
            author: fallbackAuthor,
            vibeRating: fallbackVibe,
            category: fallbackCat,
            generatedWithAi: false,
          });
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchThought();

    return () => {
      isCancelled = true;
    };
  }, [perspective, language, refreshSeed]);

  const handleRethink = () => {
    playClaySquish(perspective);
    setRefreshSeed((prev) => prev + 1);
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 text-stone-500 bg-black/5">
          <Bot className="w-3.5 h-3.5 text-purple-600" />
          <span>{thoughtTranslations.badge}</span>
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {isStudent ? thoughtTranslations.titleStudent : thoughtTranslations.titleTeacher}
        </h2>
        <p
          className={`text-sm sm:text-base transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? thoughtTranslations.descStudent : thoughtTranslations.descTeacher}
        </p>
      </div>

      {/* Main Puffy Clay Thought Box */}
      <div
        className={`p-8 sm:p-10 rounded-[38px] relative overflow-hidden transition-all duration-500 select-none ${
          isStudent ? 'clay-card-student' : 'clay-card-teacher'
        } ${isDoctor ? 'doctor-rx-seal border border-rose-200/60' : ''}`}
      >
        {/* Background decorative clay quote icon */}
        <div
          className={`absolute -right-4 -bottom-6 w-36 h-36 opacity-10 pointer-events-none transition-colors ${
            isStudent ? 'text-purple-600' : 'text-stone-800'
          }`}
        >
          <Quote className="w-full h-full transform rotate-12" />
        </div>

        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                isStudent
                  ? 'bg-purple-100 text-purple-900 border border-purple-200'
                  : 'bg-stone-200 text-stone-900 border border-stone-300'
              }`}
            >
              {data?.category || (isStudent ? 'Survival Math' : 'Faculty Zen')}
            </span>

            {data?.generatedWithAi && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Live Gemini 3.8
              </span>
            )}
          </div>

          {/* Regenerate Clay Button */}
          <button
            onClick={handleRethink}
            disabled={loading}
            type="button"
            className={`cursor-pointer px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all duration-150 select-none active:scale-95 disabled:opacity-50 ${
              isStudent
                ? 'clay-btn-student bg-gradient-to-r from-purple-100 to-pink-100 text-purple-950'
                : 'clay-btn-teacher bg-gradient-to-r from-stone-200 to-amber-100 text-stone-900'
            }`}
            title="Generate a fresh quote using Gemini"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? thoughtTranslations.pondering : thoughtTranslations.rollBtn}</span>
          </button>
        </div>

        {/* The Quote Content */}
        {loading ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-block p-4 rounded-full bg-black/5 animate-pulse">
              <Sparkles className="w-8 h-8 text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="font-display font-bold text-lg text-stone-600">
              {thoughtTranslations.pondering}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <blockquote
              className={`font-display text-2xl sm:text-3xl md:text-4xl font-black leading-snug tracking-tight transition-colors ${
                isStudent ? 'text-purple-950' : 'text-stone-900'
              } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl md:text-6xl text-rose-950 tracking-wide' : ''}`}
            >
              "{data?.thought}"
            </blockquote>

            {/* Subtext / Reality Check */}
            {data?.subtext && (
              <div
                className={`p-4 rounded-2xl text-sm sm:text-base font-semibold italic border transition-colors ${
                  isStudent
                    ? 'bg-pink-50/80 text-pink-950 border-pink-200'
                    : 'bg-amber-50/80 text-amber-950 border-amber-200'
                } ${isDoctor ? 'font-doctor text-2xl not-italic' : ''}`}
              >
                <span>{thoughtTranslations.subtextLabel} </span>
                <span>{data.subtext}</span>
              </div>
            )}

            {/* Bottom Credits & Metric Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-black/5">
              <div className="flex items-center gap-2">
                <span className="text-xl">{isStudent ? '🎓' : '🧑‍🏫'}</span>
                <div>
                  <div
                    className={`font-display font-bold text-sm ${
                      isStudent ? 'text-purple-950' : 'text-stone-900'
                    } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
                  >
                    {data?.author || (isStudent ? thoughtTranslations.authorStudent : thoughtTranslations.authorTeacher)}
                  </div>
                  <div className="text-xs text-stone-500">Campus Chronicles Daily Reflection</div>
                </div>
              </div>

              {data?.vibeRating && (
                <div
                  className={`self-start sm:self-auto px-3.5 py-1.5 rounded-xl text-xs font-black ${
                    isStudent
                      ? 'bg-purple-100 text-purple-900'
                      : 'bg-stone-200 text-stone-900'
                  } ${isDoctor ? 'font-doctor text-xl' : ''}`}
                >
                  ⚡ {data.vibeRating}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
