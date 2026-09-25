import { useState, useEffect } from 'react';
import { Perspective, Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailySchedule from './components/DailySchedule';
import ExcusesLeaderboard from './components/ExcusesLeaderboard';
import GroupProject from './components/GroupProject';
import MoodMeter from './components/MoodMeter';
import Confessional from './components/Confessional';
import DailyCampusThought from './components/DailyCampusThought';
import Footer from './components/Footer';
import BackgroundClay from './components/BackgroundClay';
import { CLAY_STICKY_NOTES } from './data/perspectiveData';
import { playSwitchSlide, playClaySquish } from './utils/audio';

export default function App() {
  const [perspective, setPerspective] = useState<Perspective>('student');
  const [language, setLanguage] = useState<Language>('english');
  const [transitioning, setTransitioning] = useState(false);

  const togglePerspective = () => {
    const next = perspective === 'student' ? 'teacher' : 'student';
    playSwitchSlide(next);
    setTransitioning(true);
    setPerspective(next);
    setTimeout(() => {
      setTransitioning(false);
    }, 350);
  };

  // Keyboard shortcut: Press 'T' or 'Space' (when not in input) to flip perspective!
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        togglePerspective();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [perspective]);

  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const stickyNotes = CLAY_STICKY_NOTES[perspective];

  return (
    <div
      className={`min-h-screen relative selection:bg-pink-300 selection:text-slate-900 transition-colors duration-700 ease-out font-sans ${
        isStudent ? 'text-purple-950' : 'text-stone-900'
      } ${isDoctor ? 'doctor-mode' : ''}`}
    >
      {/* Dynamic 3D Clay Background */}
      <BackgroundClay perspective={perspective} />

      {/* Top Navigation Bar with squishy clay toggle & language hover switcher */}
      <Navbar
        perspective={perspective}
        onTogglePerspective={togglePerspective}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Doctor Mode Prescription Notice Banner */}
      {isDoctor && (
        <div className="bg-rose-100/90 border-b border-rose-300/60 px-4 py-2 text-center text-xs sm:text-sm font-bold text-rose-950 flex items-center justify-center gap-2 animate-pulse">
          <span>🩺 ℞ CLINICAL DOCTOR HANDWRITING MODE ACTIVE:</span>
          <span className="font-doctor text-xl">All illegible prescriptions are legally non-binding 〰∿</span>
          <button
            onClick={() => setLanguage('english')}
            className="underline text-xs ml-2 cursor-pointer font-sans"
          >
            (Back to English)
          </button>
        </div>
      )}

      {/* Main Content with Perspective Transition Effect */}
      <main
        className={`transition-all duration-300 transform ${
          transitioning ? 'opacity-80 scale-[0.99] translate-y-1' : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        {/* Hero Section */}
        <Hero
          perspective={perspective}
          onTogglePerspective={togglePerspective}
          language={language}
        />

        {/* Floating Clay Memo Bar (Interactive quick tips) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stickyNotes.map((note, idx) => (
              <div
                key={idx}
                onClick={() => playClaySquish(perspective)}
                className={`p-4 rounded-2xl cursor-pointer border text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 select-none shadow-xs ${note.color} ${
                  isDoctor ? 'font-doctor text-xl' : ''
                }`}
              >
                <div className={`font-display font-bold text-sm mb-1 ${isDoctor ? 'font-doctor text-2xl' : ''}`}>
                  {isDoctor ? `℞ Case Note #${idx + 1}` : note.title}
                </div>
                <div className="whitespace-pre-line leading-relaxed opacity-90">{note.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gemini-Powered Perspective-Aware Daily Campus Thought */}
        <div id="thought">
          <DailyCampusThought perspective={perspective} language={language} />
        </div>

        {/* Section 1: Daily Schedule */}
        <DailySchedule perspective={perspective} language={language} />

        {/* Section 2: Common Excuses Leaderboard */}
        <ExcusesLeaderboard perspective={perspective} language={language} />

        {/* Section 3: Group Project Experience */}
        <GroupProject perspective={perspective} language={language} />

        {/* Section 4: End of Semester Mood Meter */}
        <MoodMeter perspective={perspective} language={language} />

        {/* Section 5: Office Hours Confessional */}
        <Confessional perspective={perspective} language={language} />
      </main>

      {/* Joint Slogan Footer */}
      <Footer
        perspective={perspective}
        onTogglePerspective={togglePerspective}
        language={language}
      />

      {/* Sticky Bottom Floating Squishy Toggle Pill (convenient when scrolling down) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={togglePerspective}
          type="button"
          className={`cursor-pointer px-4 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm flex items-center gap-2.5 select-none transition-all duration-300 shadow-lg active:scale-95 ${
            isStudent
              ? 'clay-btn-student bg-white/90 backdrop-blur-md text-purple-950 border border-purple-200'
              : 'clay-btn-teacher bg-[#fdfbf7]/90 backdrop-blur-md text-stone-900 border border-stone-300'
          }`}
          title="Press 'T' key or click to switch perspective"
        >
          <span className="text-base">{isStudent ? '🧑‍🏫' : '🎓'}</span>
          <span>Switch to {isStudent ? 'Professor' : 'Student'}</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-black/5 text-[10px] font-mono">
            Key: T
          </span>
        </button>
      </div>
    </div>
  );
}
