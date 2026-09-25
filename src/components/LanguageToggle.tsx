import { useState, useRef, useEffect } from 'react';
import { Language, Perspective } from '../types';
import { LANGUAGE_OPTIONS, LanguageOption } from '../data/translations';
import { playClaySquish } from '../utils/audio';
import { Globe, ChevronDown, Check, Sparkles } from 'lucide-react';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  perspective: Perspective;
}

export default function LanguageToggle({
  language,
  onLanguageChange,
  perspective,
}: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const isStudent = perspective === 'student';
  const currentLang = LANGUAGE_OPTIONS.find((l) => l.id === language) || LANGUAGE_OPTIONS[0];

  // Hover handlers for smooth toggle on hover
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 280);
  };

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langId: Language) => {
    playClaySquish(perspective);
    onLanguageChange(langId);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block text-left"
    >
      {/* Puffy Clay Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`px-3 py-2 sm:px-3.5 sm:py-2 rounded-2xl flex items-center gap-2 cursor-pointer transition-all duration-200 select-none active:scale-95 ${
          isStudent ? 'clay-btn-student bg-white/90 text-purple-950' : 'clay-btn-teacher bg-[#fdfbf7]/90 text-stone-900'
        } ${isOpen ? 'ring-2 ring-purple-400/40' : ''}`}
        title="Hover to switch language: English, Hinglish, Hindi, Doctor (Handwriting)"
      >
        <span className="text-base">{currentLang.flag}</span>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-black leading-tight flex items-center gap-1 font-display">
            <span>{currentLang.label}</span>
            {currentLang.id === 'doctor' && (
              <span className="text-[10px] text-rose-500 font-bold animate-pulse">Rx</span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Squishy Clay Hover Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 rounded-3xl p-2.5 z-50 transition-all duration-200 transform origin-top-right shadow-2xl ${
            isStudent
              ? 'clay-card-student bg-white border border-purple-100'
              : 'clay-card-teacher bg-[#fcf9f2] border border-stone-200'
          }`}
        >
          {/* Dropdown Header */}
          <div className="px-3 py-1.5 mb-1.5 flex items-center justify-between border-b border-black/5">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-purple-500" /> Select Dialect
            </span>
            <span className="text-[10px] text-stone-400">Hover / Click</span>
          </div>

          {/* Language Options */}
          <div className="space-y-1">
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = opt.id === language;

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  type="button"
                  className={`w-full p-2.5 rounded-2xl flex items-center justify-between text-left cursor-pointer transition-all duration-150 select-none ${
                    isSelected
                      ? isStudent
                        ? 'bg-purple-100/90 text-purple-950 font-bold shadow-xs'
                        : 'bg-stone-200/90 text-stone-950 font-bold shadow-xs'
                      : isStudent
                      ? 'hover:bg-purple-50/80 text-purple-900/80'
                      : 'hover:bg-stone-100/80 text-stone-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl shrink-0">{opt.flag}</span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                        <span className={opt.id === 'doctor' ? 'font-doctor text-base tracking-wide text-rose-700' : ''}>
                          {opt.label}
                        </span>
                        {opt.id === 'doctor' && (
                          <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded-md font-mono">
                            Rx 🤣
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-stone-500 font-medium">
                        {opt.sublabel}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isStudent ? 'bg-purple-600 text-white' : 'bg-stone-800 text-white'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Doctor Mode Easter Egg Hint */}
          <div className="mt-2 pt-2 border-t border-black/5 px-2 text-[10px] text-stone-400 text-center italic">
            🩺 Doctor mode applies illegible prescription cursive font & medical diagnosis satire!
          </div>
        </div>
      )}
    </div>
  );
}
