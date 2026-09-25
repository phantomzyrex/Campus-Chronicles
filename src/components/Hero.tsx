import { useState } from 'react';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';

interface HeroProps {
  perspective: Perspective;
  onTogglePerspective: () => void;
  language: Language;
}

export default function Hero({ perspective, onTogglePerspective, language }: HeroProps) {
  const isStudent = perspective === 'student';
  const heroTranslations = TRANSLATIONS[language]?.hero || TRANSLATIONS.english.hero;
  const data = isStudent ? heroTranslations.student : heroTranslations.teacher;
  const isDoctor = language === 'doctor';

  const [pokeCount, setPokeCount] = useState(0);
  const [squished, setSquished] = useState(false);

  const handlePoke = () => {
    playClaySquish(perspective);
    setPokeCount((prev) => prev + 1);
    setSquished(true);
    setTimeout(() => setSquished(false), 260);
  };

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Perspective Badge Indicator */}
      <div className="inline-flex items-center gap-2 mb-6">
        <span
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm ${
            isStudent
              ? 'bg-purple-100 text-purple-900 border border-purple-200'
              : 'bg-stone-200 text-stone-900 border border-stone-300'
          }`}
        >
          {data.badge}
        </span>
        <button
          onClick={onTogglePerspective}
          className={`text-xs font-semibold underline underline-offset-4 cursor-pointer transition-colors ${
            isStudent
              ? 'text-purple-700 hover:text-purple-950'
              : 'text-stone-700 hover:text-stone-950'
          }`}
        >
          {isStudent ? heroTranslations.flipPromptStudent : heroTranslations.flipPromptTeacher}
        </button>
      </div>

      {/* Main Clay-Molded Display Headline */}
      <div className="relative mb-6">
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-balance transition-all duration-500 ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-5xl sm:text-6xl md:text-7xl tracking-wide' : ''}`}
        >
          {data.headline}
        </h1>
      </div>

      {/* Sarcastic Subtitle */}
      <p
        className={`max-w-3xl mx-auto text-lg sm:text-xl font-medium leading-relaxed mb-10 transition-colors duration-500 text-pretty ${
          isStudent ? 'text-purple-800/80' : 'text-stone-700/85'
        } ${isDoctor ? 'font-doctor text-2xl sm:text-3xl' : ''}`}
      >
        {data.subheadline}
      </p>

      {/* 3 Puffy Clay Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
        {data.pills.map((pill, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-3xl transition-all duration-300 ${
              isStudent ? 'clay-card-student' : 'clay-card-teacher'
            } ${isDoctor ? 'doctor-rx-seal border border-rose-200/50' : ''}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isStudent ? 'text-purple-600' : 'text-stone-600'
                }`}
              >
                {pill.label}
              </span>
              <span className="text-base">
                {idx === 0 ? (isStudent ? '🙏' : '📬') : idx === 1 ? (isStudent ? '💻' : '⏳') : '☕'}
              </span>
            </div>
            <div
              className={`font-display text-xl sm:text-2xl font-black ${
                isStudent ? 'text-purple-950' : 'text-stone-900'
              } ${isDoctor ? 'font-doctor text-3xl' : ''}`}
            >
              {pill.value}
            </div>
          </div>
        ))}
      </div>

      {/* Motto Banner & Interactive Clay Poke Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Clay Banner Motto */}
        <div
          className={`px-6 py-3 rounded-2xl font-display font-semibold text-sm sm:text-base italic transition-all duration-300 ${
            isStudent
              ? 'bg-pink-100/90 text-pink-900 border border-pink-200'
              : 'bg-amber-100/90 text-amber-950 border border-amber-200'
          } ${isDoctor ? 'font-doctor text-2xl not-italic' : ''}`}
        >
          {data.motto}
        </div>

        {/* Interactive "Poke the Clay" Squish Button */}
        <button
          onClick={handlePoke}
          type="button"
          className={`cursor-pointer px-5 py-3 font-display font-bold text-sm flex items-center gap-2 transition-all duration-150 select-none ${
            isStudent
              ? 'clay-btn-student bg-gradient-to-r from-purple-200 to-pink-200 text-purple-950'
              : 'clay-btn-teacher bg-gradient-to-r from-stone-200 to-amber-200 text-stone-900'
          } ${squished ? 'scale-90 translate-y-1' : 'hover:-translate-y-0.5'}`}
          title="Tactile clay test"
        >
          <span>{heroTranslations.squishBtn}</span>
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              isStudent ? 'bg-purple-300 text-purple-950' : 'bg-stone-300 text-stone-900'
            }`}
          >
            {pokeCount}
          </span>
        </button>
      </div>
    </section>
  );
}
