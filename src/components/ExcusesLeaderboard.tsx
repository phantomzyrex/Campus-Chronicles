import { useState } from 'react';
import { EXCUSES_LEADERBOARD } from '../data/perspectiveData';
import { Perspective, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { playClaySquish } from '../utils/audio';

interface ExcusesLeaderboardProps {
  perspective: Perspective;
  language: Language;
}

export default function ExcusesLeaderboard({ perspective, language }: ExcusesLeaderboardProps) {
  const isStudent = perspective === 'student';
  const isDoctor = language === 'doctor';
  const excusesTrans = TRANSLATIONS[language]?.excuses || TRANSLATIONS.english.excuses;
  const [votedIds, setVotedIds] = useState<Record<string, number>>({});
  const [selectedExcuse, setSelectedExcuse] = useState<string | null>(null);

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playClaySquish(perspective);
    setVotedIds((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <section id="excuses" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">
          {excusesTrans.tag}
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
            isStudent ? 'text-purple-950' : 'text-stone-900'
          } ${isDoctor ? 'font-doctor text-4xl sm:text-5xl' : ''}`}
        >
          {excusesTrans.title}
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors ${
            isStudent ? 'text-purple-800/80' : 'text-stone-700/80'
          } ${isDoctor ? 'font-doctor text-2xl' : ''}`}
        >
          {isStudent ? excusesTrans.descStudent : excusesTrans.descTeacher}
        </p>
      </div>

      {/* Leaderboard Clay Cards */}
      <div className="space-y-5">
        {EXCUSES_LEADERBOARD.map((item) => {
          const student = item.student;
          const teacher = item.teacher;
          const votes = votedIds[item.id] || 0;
          const isSelected = selectedExcuse === item.id;

          // Localized excuse titles in doctor or desi modes
          let excuseTitle = item.excuse;
          if (language === 'hinglish') {
            if (item.rank === 1) excuseTitle = '"Bhai 11:58 pe submit kiya tha, Wi-Fi udd gaya!"';
            else if (item.rank === 2) excuseTitle = '"Sir mail notification spam folder mein chala gaya tha"';
            else if (item.rank === 3) excuseTitle = '"Sir ye jo padha rahe ho, exam me aayega kya?"';
            else if (item.rank === 4) excuseTitle = '"Canteen wale printer ne aakhri waqt pe dhokha diya"';
            else if (item.rank === 5) excuseTitle = '"Sir attendance ke 5 extra marks mil sakte hain?"';
          } else if (language === 'hindi') {
            if (item.rank === 1) excuseTitle = '"प्रस्तुत करते ही इंटरनेट सेवा का आकस्मिक देहावसान हो गया"';
            else if (item.rank === 2) excuseTitle = '"आचार्य जी, संदेश सूचना मुझे प्राप्त नहीं हो सकी"';
            else if (item.rank === 3) excuseTitle = '"क्या यह जटिल विषय परीक्षा प्रश्नपत्र में सम्मिलित होगा?"';
            else if (item.rank === 4) excuseTitle = '"मुद्रण यंत्र ने अंतिम क्षण में कार्य करने से मना कर दिया"';
            else if (item.rank === 5) excuseTitle = '"क्या मात्र उपस्थिति हेतु अतिरिक्त अंक प्राप्त हो सकते हैं?"';
          } else if (language === 'doctor') {
            if (item.rank === 1) excuseTitle = '℞ Acute Wi-Fi Ventricular Fibrillation at 11:59:58 PM 〰∿';
            else if (item.rank === 2) excuseTitle = '℞ Notification Blindness Syndrome (ICD-10: H53.4) ∿﹏';
            else if (item.rank === 3) excuseTitle = '℞ Selective Academic Amnesia: Is this in Final Biopsy? 〰';
            else if (item.rank === 4) excuseTitle = '℞ Mechanical Hardware Cardiac Arrest (Printer DOA) ∿∿';
            else if (item.rank === 5) excuseTitle = '℞ Palliative Care Request: 5 Bonus Marks for Existing ﹏〰';
          }

          return (
            <div
              key={item.id}
              onClick={() => {
                playClaySquish(perspective);
                setSelectedExcuse(isSelected ? null : item.id);
              }}
              className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                isStudent ? 'clay-card-student' : 'clay-card-teacher'
              } ${isSelected ? 'ring-2 ring-purple-400/40' : ''} ${
                isDoctor ? 'doctor-rx-seal border border-rose-200/50' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                {/* Rank & Excuse Title */}
                <div className="flex items-start sm:items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center font-display font-black text-xl shrink-0">
                    {getRankBadge(item.rank)}
                  </span>
                  <div>
                    <h3
                      className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                        isStudent ? 'text-purple-950' : 'text-stone-900'
                      } ${isDoctor ? 'font-doctor text-2xl sm:text-3xl' : ''}`}
                    >
                      {excuseTitle}
                    </h3>
                    <div className="text-xs text-stone-500 font-medium mt-0.5">
                      {isStudent ? 'Strategy: ' + student.deliveryTactic : 'Reality Check: ' + teacher.realityCheck}
                    </div>
                  </div>
                </div>

                {/* Score / Gauge pill */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-xs uppercase font-bold text-stone-400">
                      {isStudent ? excusesTrans.metricStudent : excusesTrans.metricTeacher}
                    </div>
                    <div
                      className={`font-display font-black text-xl tabular-nums ${
                        isStudent
                          ? 'text-purple-700'
                          : teacher.plausibility <= 0
                          ? 'text-rose-700'
                          : 'text-amber-700'
                      } ${isDoctor ? 'font-doctor text-3xl' : ''}`}
                    >
                      {isStudent ? `${student.confidence}%` : `${teacher.plausibility}%`}
                    </div>
                  </div>

                  {/* "I've Done / Heard This" Clay Button */}
                  <button
                    onClick={(e) => handleVote(item.id, e)}
                    type="button"
                    className={`cursor-pointer px-3.5 py-2 text-xs font-bold rounded-2xl transition-all duration-150 flex items-center gap-1.5 ${
                      isStudent
                        ? 'clay-btn-student bg-purple-100 text-purple-900 hover:bg-purple-200'
                        : 'clay-btn-teacher bg-stone-200 text-stone-900 hover:bg-stone-300'
                    }`}
                    title={isStudent ? 'I have used this' : 'I have heard this'}
                  >
                    <span>{isStudent ? excusesTrans.btnStudent : excusesTrans.btnTeacher}</span>
                    <span className="text-[11px] opacity-75">({votes})</span>
                  </button>
                </div>
              </div>

              {/* Progress Track (Clay Inset) */}
              <div
                className={`w-full h-3 rounded-full overflow-hidden p-0.5 mb-4 ${
                  isStudent ? 'clay-inset-student bg-purple-100/60' : 'clay-inset-teacher bg-stone-200/60'
                }`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isStudent
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                      : teacher.plausibility <= 0
                      ? 'bg-gradient-to-r from-stone-400 to-rose-400 w-2'
                      : 'bg-gradient-to-r from-amber-400 to-rose-400'
                  }`}
                  style={{
                    width: isStudent
                      ? `${student.confidence}%`
                      : `${Math.max(teacher.plausibility, 4)}%`
                  }}
                />
              </div>

              {/* Perspective Quote Box */}
              <div
                className={`p-3.5 rounded-2xl text-sm italic font-medium flex items-center gap-2.5 ${
                  isStudent
                    ? 'bg-purple-50 text-purple-900 border border-purple-100'
                    : 'bg-stone-100 text-stone-800 border border-stone-200'
                } ${isDoctor ? 'font-doctor text-xl not-italic' : ''}`}
              >
                <span className="text-base shrink-0">{isStudent ? '💭' : '☕'}</span>
                <span>
                  {isStudent
                    ? `Student subtext: "${student.quote}"`
                    : `Teacher internal monologue: "${teacher.quote}"`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
