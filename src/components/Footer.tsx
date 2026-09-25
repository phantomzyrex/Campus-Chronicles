import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  perspective: Perspective;
  onTogglePerspective: () => void;
  language: Language;
}

export default function Footer({ perspective, onTogglePerspective, language }: FooterProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const footerTrans = TRANSLATIONS[language]?.footer || TRANSLATIONS.english.footer;

  return (
    <footer className="mt-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-black/5 text-center transition-colors">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* The Joint Universal Slogan */}
        <div
          className={`font-display text-xl sm:text-2xl font-black transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-3xl' : ''}`}
        >
          {footerTrans.slogan}
        </div>

        <p className={`text-xs sm:text-sm text-stone-500 max-w-xl mx-auto leading-relaxed ${isDoctor ? 'font-doctor text-xl' : ''}`}>
          {footerTrans.subtext}
        </p>

        {/* Quiet Perspective Reset / Quick Flip */}
        <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold">
          <button
            onClick={onTogglePerspective}
            className={`underline underline-offset-4 cursor-pointer transition-colors ${
              isStudent ? 'text-purple-700 hover:text-purple-950' : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            {isStudent ? footerTrans.toggleToTeacher : footerTrans.toggleToStudent}
          </button>
          <span className="text-stone-300">·</span>
          <span className="text-stone-400">© 2026 Campus Chronicles</span>
        </div>
      </div>
    </footer>
  );
}
