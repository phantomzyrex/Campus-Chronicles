import { useState } from 'react';
import { CONFESSION_SCENARIOS } from '../data/perspectiveData';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';

interface ConfessionalProps {
  perspective: Perspective;
  language: Language;
}

export default function Confessional({ perspective, language }: ConfessionalProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const confTrans = TRANSLATIONS[language]?.confessional || TRANSLATIONS.english.confessional;
  const [selectedId, setSelectedId] = useState(CONFESSION_SCENARIOS[0].id);

  const activeScenario =
    CONFESSION_SCENARIOS.find((s) => s.id === selectedId) || CONFESSION_SCENARIOS[0];

  const handleSelect = (id: string) => {
    playClaySquish(perspective);
    setSelectedId(id);
  };

  return (
    <section id="confessional" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">
          {confTrans.tag}
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {confTrans.title}
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? confTrans.descStudent : confTrans.descTeacher}
        </p>
      </div>

      {/* Interactive Scenario Selection Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {CONFESSION_SCENARIOS.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              type="button"
              className={`px-4 py-2.5 rounded-2xl cursor-pointer text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
                isSelected
                  ? isStudent
                    ? 'clay-btn-student bg-purple-200 text-purple-950 scale-105'
                    : 'clay-btn-teacher bg-stone-300 text-stone-900 scale-105'
                  : isStudent
                  ? 'bg-purple-100/60 text-purple-900/70 hover:bg-purple-100'
                  : 'bg-stone-200/60 text-stone-800/70 hover:bg-stone-200'
              }`}
            >
              {item.question}
            </button>
          );
        })}
      </div>

      {/* Clay Speech Bubble Card */}
      <div
        className={`p-8 sm:p-10 rounded-[36px] transition-all duration-500 ${
          isStudent ? 'clay-card-student' : 'clay-card-teacher'
        }`}
      >
        {/* The Spoken Line */}
        <div className="mb-8 text-center pb-6 border-b border-black/5">
          <span className="text-xs uppercase font-bold text-stone-400 block mb-1">
            Spoken in Person
          </span>
          <h3
            className={`font-display text-2xl sm:text-3xl font-black ${
              isStudent ? 'text-purple-950' : 'text-stone-900'
            }`}
          >
            {activeScenario.question}
          </h3>
        </div>

        {/* Dual Perspective Translations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Angle */}
          <div
            className={`p-6 rounded-3xl transition-all duration-300 ${
              isStudent
                ? 'bg-purple-100/70 border-2 border-purple-300/60 shadow-sm'
                : 'bg-purple-50/50 border border-purple-100 opacity-70'
            }`}
          >
            <div className="flex items-center gap-2 mb-3 font-display font-bold text-sm text-purple-900">
              <span className="text-lg">🎓</span>
              <span>Student Mindset</span>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-[11px] font-bold uppercase text-purple-700/80 mb-0.5">
                  Intended Tone
                </div>
                <div className="font-medium text-purple-950 italic">
                  {activeScenario.student.intendedTone}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase text-purple-700/80 mb-0.5">
                  Actual Subtext
                </div>
                <div className="font-semibold text-purple-900">
                  {activeScenario.student.actualSubtext}
                </div>
              </div>

              <div className="pt-2 border-t border-purple-200/60 text-xs text-purple-800">
                <span className="font-bold">Secret Terror:</span> {activeScenario.student.secretFear}
              </div>
            </div>
          </div>

          {/* Teacher Angle */}
          <div
            className={`p-6 rounded-3xl transition-all duration-300 ${
              !isStudent
                ? 'bg-stone-200/70 border-2 border-stone-400/60 shadow-sm'
                : 'bg-stone-100/50 border border-stone-200 opacity-70'
            }`}
          >
            <div className="flex items-center justify-between mb-3 font-display font-bold text-sm text-stone-900">
              <div className="flex items-center gap-2">
                <span className="text-lg">🧑‍🏫</span>
                <span>Faculty Reality</span>
              </div>
              <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-lg">
                {activeScenario.teacher.energyDepleted}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-[11px] font-bold uppercase text-stone-600 mb-0.5">
                  Polite Spoken Answer
                </div>
                <div className="font-medium text-stone-900 italic">
                  {activeScenario.teacher.politeResponse}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase text-stone-600 mb-0.5">
                  Internal Monologue
                </div>
                <div className="font-semibold text-stone-900">
                  {activeScenario.teacher.internalMonologue}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-300/60 text-xs text-stone-600">
                <span className="font-bold">Faculty Coping Mechanism:</span> Staring out the window counting down to tenure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
