import { useState } from 'react';
import { MOOD_STAGES } from '../data/perspectiveData';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';
import { Coffee, Flame } from 'lucide-react';

interface MoodMeterProps {
  perspective: Perspective;
  language: Language;
}

export default function MoodMeter({ perspective, language }: MoodMeterProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const moodTrans = TRANSLATIONS[language]?.mood || TRANSLATIONS.english.mood;
  const [selectedStageIndex, setSelectedStageIndex] = useState(3); // Start at finals week for maximum humor!

  const currentStage = MOOD_STAGES[selectedStageIndex];
  const stageData = isStudent ? currentStage.student : currentStage.teacher;

  const handleStageSelect = (idx: number) => {
    playClaySquish(perspective);
    setSelectedStageIndex(idx);
  };

  return (
    <section id="moodmeter" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">
          {moodTrans.tag}
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {moodTrans.title}
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? moodTrans.descStudent : moodTrans.descTeacher}
        </p>
      </div>

      {/* Main Clay Gauge Container */}
      <div
        className={`p-8 sm:p-10 rounded-[38px] mb-8 transition-all duration-500 ${
          isStudent ? 'clay-card-student' : 'clay-card-teacher'
        }`}
      >
        {/* Semester Timeline Step Selector (Squishy Clay Segmented Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {MOOD_STAGES.map((stage, idx) => {
            const isActive = selectedStageIndex === idx;

            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(idx)}
                type="button"
                className={`p-3.5 rounded-2xl cursor-pointer text-center transition-all duration-200 select-none ${
                  isActive
                    ? isStudent
                      ? 'clay-btn-student bg-purple-200 text-purple-950 font-bold scale-[1.03]'
                      : 'clay-btn-teacher bg-stone-300 text-stone-900 font-bold scale-[1.03]'
                    : isStudent
                    ? 'bg-purple-100/50 hover:bg-purple-100 text-purple-800/70 font-semibold'
                    : 'bg-stone-200/50 hover:bg-stone-200 text-stone-700/70 font-semibold'
                }`}
              >
                <div className="text-xs uppercase tracking-wider opacity-70 mb-0.5">
                  {stage.week}
                </div>
                <div className="text-sm font-display truncate">
                  {idx === 0 ? 'Syllabus Week' : idx === 1 ? 'Midterms' : idx === 2 ? 'Nov Slump' : 'Finals Week'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Gauge Centerpiece Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Circular / Curved Meter (Clay Inset with Puffy Needle) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div
              className={`w-56 h-56 rounded-full p-4 flex flex-col items-center justify-center relative transition-all duration-500 ${
                isStudent ? 'clay-inset-student bg-purple-100/50' : 'clay-inset-teacher bg-stone-200/50'
              }`}
            >
              {/* Outer decorative ring */}
              <div className="text-center">
                <span className="text-xs uppercase font-bold text-stone-400 block mb-1">
                  Stress Level
                </span>
                <span
                  className={`font-display font-black text-5xl sm:text-6xl tabular-nums ${
                    stageData.stress >= 100
                      ? 'text-rose-600 animate-pulse'
                      : stageData.stress > 60
                      ? 'text-amber-600'
                      : 'text-emerald-600'
                  }`}
                >
                  {stageData.stress}%
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full mt-2 inline-block ${
                    isStudent
                      ? 'bg-purple-200/80 text-purple-900'
                      : 'bg-stone-300/80 text-stone-900'
                  }`}
                >
                  {stageData.stress >= 100 ? 'Critical Capacity' : 'Rising Panic'}
                </span>
              </div>
            </div>
          </div>

          {/* Diagnosis & Mood Details */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <div className="text-xs uppercase font-bold text-stone-400 mb-1">
                Psychological Status
              </div>
              <h3
                className={`font-display text-2xl sm:text-3xl font-black ${
                  isStudent ? 'text-purple-950' : 'text-stone-900'
                }`}
              >
                {stageData.title}
              </h3>
            </div>

            {/* Vibe Description */}
            <div
              className={`p-4 rounded-2xl text-base font-medium leading-relaxed ${
                isStudent
                  ? 'bg-purple-50 text-purple-900 border border-purple-100'
                  : 'bg-stone-100 text-stone-900 border border-stone-200'
              }`}
            >
              {stageData.vibe}
            </div>

            {/* Fuel Source & Internal Thought */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className={`p-3.5 rounded-2xl text-xs font-semibold ${
                  isStudent ? 'bg-pink-100/70 text-pink-900' : 'bg-amber-100/70 text-amber-950'
                }`}
              >
                <div className="text-[10px] uppercase font-bold opacity-75 mb-1 flex items-center gap-1">
                  <Coffee className="w-3 h-3" /> Primary Fuel Source
                </div>
                <div className="text-sm font-bold">{stageData.fuel}</div>
              </div>

              <div
                className={`p-3.5 rounded-2xl text-xs font-semibold ${
                  isStudent ? 'bg-sky-100/70 text-sky-900' : 'bg-slate-200/70 text-slate-900'
                }`}
              >
                <div className="text-[10px] uppercase font-bold opacity-75 mb-1 flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Recurring Internal Prayer
                </div>
                <div className="text-xs italic font-medium">{stageData.thought}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
