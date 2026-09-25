import { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Perspective, Language } from '../types';
import { playSwitchSlide, toggleSound, isSoundEnabled } from '../utils/audio';
import { TRANSLATIONS } from '../data/translations';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  perspective: Perspective;
  onTogglePerspective: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({
  perspective,
  onTogglePerspective,
  language,
  onLanguageChange,
}: NavbarProps) {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const isStudent = perspective === 'student';
  const navText = TRANSLATIONS[language]?.nav || TRANSLATIONS.english.nav;

  const handleToggle = () => {
    const next = isStudent ? 'teacher' : 'student';
    playSwitchSlide(next);
    onTogglePerspective();
  };

  const handleSoundToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleSound();
    setSoundOn(updated);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Zone 1: Brand Zone (Single text element wordmark) */}
        <a
          href="#"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors flex items-center gap-2 select-none group shrink-0"
        >
          <span
            className={`w-9 h-9 rounded-2xl flex items-center justify-center text-lg font-black transition-all duration-300 shadow-inner ${
              isStudent
                ? 'bg-purple-200 text-purple-800 shadow-purple-300/60 group-hover:rotate-6'
                : 'bg-stone-300 text-stone-800 shadow-stone-400/60 group-hover:-rotate-6'
            }`}
          >
            {isStudent ? '🎓' : '🧑‍🏫'}
          </span>
          <span className={`truncate max-w-[160px] sm:max-w-none ${isStudent ? 'text-purple-950' : 'text-stone-900'} ${language === 'doctor' ? 'font-doctor text-2xl tracking-wide' : ''}`}>
            {navText.brand}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold">
          <a
            href="#thought"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950 font-bold'
                : 'text-stone-700/80 hover:text-stone-950 font-bold'
            }`}
          >
            {navText.thought}
          </a>
          <a
            href="#schedule"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950'
                : 'text-stone-700/80 hover:text-stone-950'
            }`}
          >
            {navText.schedule}
          </a>
          <a
            href="#excuses"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950'
                : 'text-stone-700/80 hover:text-stone-950'
            }`}
          >
            {navText.excuses}
          </a>
          <a
            href="#groupproject"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950'
                : 'text-stone-700/80 hover:text-stone-950'
            }`}
          >
            {navText.group}
          </a>
          <a
            href="#moodmeter"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950'
                : 'text-stone-700/80 hover:text-stone-950'
            }`}
          >
            {navText.mood}
          </a>
          <a
            href="#confessional"
            className={`transition-colors whitespace-nowrap ${
              isStudent
                ? 'text-purple-800/80 hover:text-purple-950'
                : 'text-stone-700/80 hover:text-stone-950'
            }`}
          >
            {navText.confessional}
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Language Toggle Hover + Perspective Switcher + Audio) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Hover Toggle */}
          <LanguageToggle
            language={language}
            onLanguageChange={onLanguageChange}
            perspective={perspective}
          />

          {/* Audio toggle button */}
          <button
            onClick={handleSoundToggle}
            type="button"
            aria-label={soundOn ? 'Mute clay sounds' : 'Enable clay sounds'}
            className={`p-2 sm:p-2.5 rounded-2xl transition-all duration-200 cursor-pointer ${
              isStudent
                ? 'text-purple-700 bg-purple-100/80 hover:bg-purple-200 active:scale-95'
                : 'text-stone-700 bg-stone-200/80 hover:bg-stone-300 active:scale-95'
            }`}
            title={soundOn ? 'Clay sounds active' : 'Clay sounds muted'}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-50" />}
          </button>

          {/* Squishy Clay Switch Pill */}
          <button
            onClick={handleToggle}
            type="button"
            className={`group relative flex items-center p-1 sm:p-1.5 rounded-full cursor-pointer select-none transition-all duration-300 active:scale-95 ${
              isStudent ? 'clay-switch-track-student' : 'clay-switch-track-teacher'
            }`}
            title="Click or press 'T' to flip perspective between Student & Teacher"
            aria-label="Switch Perspective: Student to Teacher"
          >
            {/* Perspective Label inside switch */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 font-display font-semibold text-xs sm:text-sm">
              <span
                className={`transition-opacity duration-300 flex items-center gap-1 whitespace-nowrap ${
                  isStudent
                    ? 'opacity-100 text-purple-950 font-bold'
                    : 'opacity-40 text-stone-600'
                }`}
              >
                {navText.flipBadgeStudent}
              </span>
              <span className="text-black/30 font-bold">⇄</span>
              <span
                className={`transition-opacity duration-300 flex items-center gap-1 whitespace-nowrap ${
                  !isStudent
                    ? 'opacity-100 text-stone-900 font-bold'
                    : 'opacity-40 text-purple-600'
                }`}
              >
                {navText.flipBadgeTeacher}
              </span>
            </div>

            {/* Sliding Clay Knob */}
            <div
              className={`absolute top-1 bottom-1 w-[46%] rounded-full flex items-center justify-center transition-all duration-300 ease-out transform ${
                isStudent
                  ? 'left-1 clay-knob-student'
                  : 'left-[52%] clay-knob-teacher'
              }`}
            >
              <span className="text-xs font-bold flex items-center gap-1 tracking-tight text-slate-700">
                <Sparkles className="w-3 h-3 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="hidden md:inline">{navText.flipKnob}</span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
