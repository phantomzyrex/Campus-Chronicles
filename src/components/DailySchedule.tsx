import { useState } from 'react';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';
import { AlarmClock, Coffee, Clock, Laptop, MapPin } from 'lucide-react';

interface DailyScheduleProps {
  perspective: Perspective;
  language: Language;
}

export default function DailySchedule({ perspective, language }: DailyScheduleProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const scheduleTrans = TRANSLATIONS[language]?.schedule || TRANSLATIONS.english.schedule;
  const [activeSlot, setActiveSlot] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlarmClock':
        return <AlarmClock className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const handleCardClick = (id: string) => {
    playClaySquish(perspective);
    setActiveSlot(activeSlot === id ? null : id);
  };

  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">
          {scheduleTrans.tag}
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {scheduleTrans.title}
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? scheduleTrans.descStudent : scheduleTrans.descTeacher}
        </p>
      </div>

      {/* 4 Puffy Clay Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scheduleTrans.slots.map((item, idx) => {
          const current = isStudent ? item.student : item.teacher;
          const isPressed = activeSlot === item.id;
          const iconNames = ['AlarmClock', 'Coffee', 'Clock', 'Laptop'];

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 select-none ${
                isStudent ? 'clay-card-student' : 'clay-card-teacher'
              } ${isPressed ? 'translate-y-1 scale-[0.98]' : ''} ${
                isDoctor ? 'doctor-rx-seal border border-rose-200/50' : ''
              }`}
            >
              <div>
                {/* Header: Time & Icon Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-display font-black text-xl tracking-tight ${
                      isStudent ? 'text-purple-900' : 'text-stone-900'
                    } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
                  >
                    {item.time}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isStudent
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {getIcon(iconNames[idx])}
                  </div>
                </div>

                {/* Scenario Title */}
                <h3
                  className={`font-display text-lg font-bold mb-2 transition-colors ${
                    isStudent ? 'text-purple-950' : 'text-stone-900'
                  } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
                >
                  {current.title}
                </h3>

                {/* Sarcastic Caption */}
                <p
                  className={`text-sm leading-relaxed mb-6 font-medium ${
                    isStudent ? 'text-purple-800/85' : 'text-stone-700/85'
                  } ${isDoctor ? 'font-doctor text-xl' : ''}`}
                >
                  {current.caption}
                </p>
              </div>

              {/* Card Footer: Location & Subtle Status */}
              <div className="pt-4 border-t border-black/5 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 opacity-60" />
                  <span className={isDoctor ? 'font-doctor text-lg' : ''}>{current.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-xl shadow-xs ${
                      isStudent
                        ? 'bg-pink-100 text-pink-900'
                        : 'bg-amber-100 text-amber-950'
                    } ${isDoctor ? 'font-doctor text-lg' : ''}`}
                  >
                    {current.status}
                  </span>
                  <span className="text-[11px] text-stone-400 font-medium">
                    {scheduleTrans.tapToSquish}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
