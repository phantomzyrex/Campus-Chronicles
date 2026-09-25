import { useState } from 'react';
import { GROUP_PROJECT_DATA } from '../data/perspectiveData';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';

interface GroupProjectProps {
  perspective: Perspective;
  language: Language;
}

export default function GroupProject({ perspective, language }: GroupProjectProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const groupTrans = TRANSLATIONS[language]?.group || TRANSLATIONS.english.group;
  const [selectedArchetype, setSelectedArchetype] = useState<string>('martyr');

  const currentView = isStudent ? GROUP_PROJECT_DATA.studentView : GROUP_PROJECT_DATA.teacherView;
  const otherView = !isStudent ? GROUP_PROJECT_DATA.studentView : GROUP_PROJECT_DATA.teacherView;

  return (
    <section id="groupproject" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">
          {groupTrans.tag}
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {groupTrans.title}
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? groupTrans.descStudent : groupTrans.descTeacher}
        </p>
      </div>

      {/* Main Two Overlapping Clay Blobs Card */}
      <div className="relative mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Primary View Blob (Takes 7 cols) */}
          <div
            className={`lg:col-span-7 p-8 rounded-[36px] relative z-10 transition-all duration-500 ${
              isStudent ? 'clay-card-student' : 'clay-card-teacher'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  isStudent ? 'bg-purple-100 text-purple-900' : 'bg-stone-200 text-stone-900'
                }`}
              >
                {isStudent ? '🎓 Student Reality' : '🧑‍🏫 Faculty True Motive'}
              </span>
            </div>

            <h3
              className={`font-display text-2xl sm:text-3xl font-black mb-3 ${
                isStudent ? 'text-purple-950' : 'text-stone-900'
              }`}
            >
              {currentView.headline}
            </h3>

            <p
              className={`text-base sm:text-lg mb-6 leading-relaxed font-medium ${
                isStudent ? 'text-purple-900/80' : 'text-stone-700/85'
              }`}
            >
              {currentView.subtext}
            </p>

            <div
              className={`p-4 rounded-2xl italic text-sm font-semibold border ${
                isStudent
                  ? 'bg-pink-50/90 text-pink-950 border-pink-200'
                  : 'bg-amber-50/90 text-amber-950 border-amber-200'
              }`}
            >
              {currentView.realityQuote}
            </div>
          </div>

          {/* Overlapping Counter-Perspective Blob (Takes 5 cols, partially offset) */}
          <div
            className={`lg:col-span-5 p-7 rounded-[32px] lg:-ml-10 relative z-0 transition-all duration-500 opacity-95 ${
              !isStudent ? 'clay-card-student' : 'clay-card-teacher'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-stone-600">
                {!isStudent ? '🎓 What Students Assume' : '🧑‍🏫 What Teachers Pretend'}
              </span>
            </div>

            <h4 className="font-display text-lg font-bold mb-2 text-stone-800">
              {otherView.headline}
            </h4>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              {otherView.subtext}
            </p>

            <div className="text-xs italic text-stone-500 font-medium border-t border-black/5 pt-3">
              {otherView.realityQuote}
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Group Project Archetypes (Interactive Clay Grid) */}
      <div className="text-center mb-6">
        <h3
          className={`font-display text-xl sm:text-2xl font-bold mb-1 ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          }`}
        >
          The Four Permanent Archetypes
        </h3>
        <p className="text-xs sm:text-sm text-stone-500">
          Click any archetype to view both perspectives on their campus contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {GROUP_PROJECT_DATA.archetypes.map((arch) => {
          const isSelected = selectedArchetype === arch.id;

          return (
            <div
              key={arch.id}
              onClick={() => {
                playClaySquish(perspective);
                setSelectedArchetype(arch.id);
              }}
              className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 ${
                isStudent ? 'clay-card-student' : 'clay-card-teacher'
              } ${isSelected ? 'scale-[1.02] ring-2 ring-purple-400/40' : 'opacity-90'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{arch.emoji}</span>
                <span
                  className={`text-xs font-black px-2 py-0.5 rounded-lg tabular-nums ${
                    isStudent ? 'bg-purple-100 text-purple-900' : 'bg-stone-200 text-stone-900'
                  }`}
                >
                  {arch.workloadShare}% work
                </span>
              </div>

              <h4
                className={`font-display text-lg font-bold mb-2 ${
                  isStudent ? 'text-purple-950' : 'text-stone-900'
                }`}
              >
                {arch.name}
              </h4>

              {/* Take for currently active perspective */}
              <p
                className={`text-xs sm:text-sm leading-relaxed font-medium mb-3 ${
                  isStudent ? 'text-purple-900/85' : 'text-stone-700/85'
                }`}
              >
                {isStudent ? arch.studentTake : arch.teacherTake}
              </p>

              {/* Subtle preview of the other side */}
              <div className="pt-2.5 border-t border-black/5 text-[11px] text-stone-500 italic">
                {isStudent ? `Prof side: "${arch.teacherTake}"` : `Student side: "${arch.studentTake}"`}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
