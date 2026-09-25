import { ScheduleItem, ExcuseItem, ArchetypeItem, MoodStage, ConfessionScenario } from '../types';

export const HERO_DATA = {
  student: {
    badge: '🎓 Active Perspective: Exhausted Undergrad',
    headline: 'Welcome to College: Where Sleep is a Myth and Deadlines are Vibes',
    subheadline: 'Fueled by 600mg of caffeine, selective memory of the syllabus, and sheer 3 AM delusion.',
    pills: [
      { label: 'Current GPA', value: "Held by prayers" },
      { label: 'Browser Tabs', value: '84 tabs open' },
      { label: 'Sleep Deficit', value: '43.5 hours' },
    ],
    motto: '"Due today, do today."'
  },
  teacher: {
    badge: "🧑‍🏫 Active Perspective: Weary Faculty Member",
    headline: 'Welcome to College: Where I Pretend Your Excuses Are Original',
    subheadline: 'Armed with a red pen, lukewarm hazelnut coffee, and a 14-page syllabus nobody has ever opened.',
    pills: [
      { label: 'Canvas Unread', value: '172 messages' },
      { label: 'Remaining Patience', value: '1.8%' },
      { label: 'Syllabus Citations', value: '94 today' },
    ],
    motto: '"It was literally in bold on page one."'
  }
};

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 'slot-1',
    time: '09:00 AM',
    iconName: 'AlarmClock',
    student: {
      title: 'Technically Enrolled',
      caption: 'Sitting in the back row with sunglasses, mentally buffering, fighting the gravitational pull of the desk.',
      location: 'Lecture Hall B-12',
      statusBadge: 'Comatose'
    },
    teacher: {
      title: 'Attendance for Phantoms',
      caption: 'Calling names into an echoing lecture hall where 11 out of 48 enrolled students actually materialized.',
      location: 'Lecture Hall B-12',
      statusBadge: 'Speaking to Ghosts'
    }
  },
  {
    id: 'slot-2',
    time: '01:00 PM',
    iconName: 'Coffee',
    student: {
      title: 'Lunch & Grade Arithmetic',
      caption: 'Eating cold noodles while calculating if mathematically possible to pass with an 89% on the final.',
      location: 'Campus Quad Bench',
      statusBadge: 'Existential Math'
    },
    teacher: {
      title: 'Faculty Lounge Politics',
      caption: 'Intense 25-minute committee skirmish over who left 4ml of burnt hazelnut roast in the carafe.',
      location: 'Staff Lounge Rm 304',
      statusBadge: 'Zero Funding Left'
    }
  },
  {
    id: 'slot-3',
    time: '04:30 PM',
    iconName: 'Clock',
    student: {
      title: 'Office Hours: Stealth Recon',
      caption: 'Hovering awkwardly outside the doorway waiting for another student to go in first so I don’t look clueless.',
      location: 'Professor Office 402',
      statusBadge: 'Heart Rate: 135'
    },
    teacher: {
      title: 'Office Hours: Solitary Purgatory',
      caption: 'Staring intently at the doorway for 120 minutes. The only visitor was a fly and a lost campus tour group.',
      location: 'Professor Office 402',
      statusBadge: 'Crossword 80% Done'
    }
  },
  {
    id: 'slot-4',
    time: '11:45 PM',
    iconName: 'Laptop',
    student: {
      title: 'Peak Academic Productivity',
      caption: 'Typing the title in bold 16pt font, changing margins to 1.1 inches, and declaring it a solid night’s work.',
      location: 'Library 4th Floor',
      statusBadge: 'Caffeine Peak'
    },
    teacher: {
      title: 'Canvas Grading Roulette',
      caption: 'Reading an intro that contains "Since the dawn of human civilization" for the 37th consecutive paper.',
      location: 'Home Sofa with Cat',
      statusBadge: 'Red Ink Depleted'
    }
  }
];

export const EXCUSES_LEADERBOARD: ExcuseItem[] = [
  {
    id: 'ex-1',
    rank: 1,
    excuse: '"My Wi-Fi crashed right as I hit submit"',
    student: {
      deliveryTactic: 'Send email at 12:03 AM with a blurry screenshot of an unplugged router.',
      confidence: 94,
      quote: 'Technically true if you count turning airplane mode on as crashing.',
      icon: 'WifiOff'
    },
    teacher: {
      realityCheck: 'Canvas server logs show document created at 12:01 AM and uploaded corrupt.',
      plausibility: 4,
      quote: 'Your Wi-Fi has had worse timing than Shakespearean tragedies.',
      icon: 'FileQuestion'
    }
  },
  {
    id: 'ex-2',
    rank: 2,
    excuse: '"I didn\'t see the email announcement"',
    student: {
      deliveryTactic: 'Look genuinely bewildered while ignoring 4,100 unread university emails.',
      confidence: 88,
      quote: 'If I don\'t open the notification, did the deadline ever exist?',
      icon: 'MailWarning'
    },
    teacher: {
      realityCheck: 'Sent to all, pinned in Canvas, posted on syllabus, announced three times.',
      plausibility: 2,
      quote: 'I could send a carrier pigeon and you\'d complain it wasn\'t in your preferred format.',
      icon: 'Megaphone'
    }
  },
  {
    id: 'ex-3',
    rank: 3,
    excuse: '"Is this going to be on the exam?"',
    student: {
      deliveryTactic: 'Ask with hopeful pen poised, ready to immediately drop pen if answer is no.',
      confidence: 99,
      quote: 'I am performing strategic cognitive load management.',
      icon: 'HelpCircle'
    },
    teacher: {
      realityCheck: 'I spent 40 minutes passionately explaining the fundamental core theorem.',
      plausibility: 0,
      quote: 'No, I just came in on a Thursday to entertain myself with theoretical tangents.',
      icon: 'Flame'
    }
  },
  {
    id: 'ex-4',
    rank: 4,
    excuse: '"My printer broke this morning"',
    student: {
      deliveryTactic: 'Clutch warm piece of blank paper with catastrophic conviction.',
      confidence: 81,
      quote: 'Printers smell student fear and jam on purpose.',
      icon: 'Printer'
    },
    teacher: {
      realityCheck: 'This is an online-only submission portal in the year 2026.',
      plausibility: 1,
      quote: 'Why were you printing an interactive WebGL data visualizer anyway?',
      icon: 'ServerCrash'
    }
  },
  {
    id: 'ex-5',
    rank: 5,
    excuse: '"Can we get extra credit for attendance?"',
    student: {
      deliveryTactic: 'Hail Mary pass in Week 14 to salvage an unrecoverable 41% average.',
      confidence: 72,
      quote: 'I showed up today, surely physical respiration in this room deserves points.',
      icon: 'Trophy'
    },
    teacher: {
      realityCheck: 'Missed 8 assignments and 11 quizzes, now requesting salvation.',
      plausibility: -15,
      quote: 'You want bonus points for existing in three dimensions?',
      icon: 'AlertOctagon'
    }
  }
];

export const GROUP_PROJECT_DATA = {
  studentView: {
    headline: 'The Stanford Prison Experiment on Google Docs',
    subtext: 'Four people who have never met each other, bound together by mutual dread and zero communication skills.',
    realityQuote: '"The only thing this taught me is that hell is indeed other people."'
  },
  teacherView: {
    headline: 'The Grading Efficiency Optimization Maneuver',
    subtext: 'I assigned this not to foster "collaborative workplace skills," but because grading 72 individual essays causes clinical blindness.',
    realityQuote: '"Grading 18 collective train wrecks takes half the weekend of grading 72."'
  },
  archetypes: [
    {
      id: 'martyr',
      name: 'The Martyr',
      emoji: '🕯️',
      workloadShare: 82,
      studentTake: 'Writes 24 slides, formats bibliography at 3:45 AM, quietly drafts their own eulogy.',
      teacherTake: 'Sends frantic 2:18 AM emails asking if they can kick everyone else off the title slide.'
    },
    {
      id: 'phantom',
      name: 'The Phantom',
      emoji: '👻',
      workloadShare: 3,
      studentTake: 'Joined the group chat on day one. Next communication: "I\'ll click the next slide during the presentation!"',
      teacherTake: 'Shows up on presentation day wearing a full suit as if they orchestrated the entire thesis.'
    },
    {
      id: 'moral-support',
      name: 'The Moral Support',
      emoji: '📣',
      workloadShare: 10,
      studentTake: 'Contributes exclusively through fire emojis: "Looks fire guys! Keep crushing it! 🔥🔥"',
      teacherTake: 'Gives everyone 5/5 on peer review because they literally have no idea what anyone did.'
    },
    {
      id: 'slide-formatter',
      name: 'The Aesthetic Saboteur',
      emoji: '🎨',
      workloadShare: 5,
      studentTake: 'Changes font from Arial to bright Comic Sans at 2:00 AM because "it felt more engaging."',
      teacherTake: 'Presents yellow font over neon cyan background. Retinas permanently scarred.'
    }
  ]
};

export const MOOD_STAGES: MoodStage[] = [
  {
    id: 'stage-1',
    week: 'Week 1',
    stageName: 'Syllabus Week (The Honeymoon)',
    student: {
      stress: 15,
      title: 'Unwarranted Optimism',
      vibe: 'Bought 6 pastel highlighters and color-coded a calendar I will abandon by Thursday.',
      fuel: 'Iced oat milk matcha latte with 2 espresso shots',
      thought: '"This semester, I\'m going to be that organized aesthetic student."'
    },
    teacher: {
      stress: 25,
      title: 'Guarded Hope',
      vibe: 'Refreshed course syllabus with 4 new warning bullet points inspired by last semester’s disasters.',
      fuel: 'Freshly ground French roast & renewed faith in humanity',
      thought: '"Maybe this batch will actually read page three before asking about office hours."'
    }
  },
  {
    id: 'stage-2',
    week: 'Week 6',
    stageName: 'Midterm Triage (The Reality Check)',
    student: {
      stress: 60,
      title: 'The Triage Phase',
      vibe: 'Realizing 3 exams and 2 papers are scheduled for the exact same 36-hour window.',
      fuel: 'Gas station energy drinks & instant noodle sodium',
      thought: '"If I skip this lecture, I can sleep for 42 minutes."'
    },
    teacher: {
      stress: 55,
      title: 'The Inevitable Influx',
      vibe: 'Inboxes flooded with students discovering that assignments from September were not optional.',
      fuel: 'Office drip coffee that has been cooking since 8:00 AM',
      thought: '"No, you cannot turn in four weeks of homework for full credit on Friday."'
    }
  },
  {
    id: 'stage-3',
    week: 'Week 11',
    stageName: 'The November Slump (The Zombie Walk)',
    student: {
      stress: 85,
      title: 'Survival Protocol',
      vibe: 'Attending lectures in pajama bottoms. Mental bandwidth completely saturated.',
      fuel: 'Pure adrenaline and cold tap water',
      thought: '"What is the absolute minimum grade I need to keep my financial aid?"'
    },
    teacher: {
      stress: 80,
      title: 'Faculty Burnout',
      vibe: 'Looking at 65 ungraded midterms while attending a mandatory 2-hour strategic alignment zoom.',
      fuel: 'Espresso mixed with quiet resignation',
      thought: '"If nobody asks a question in the next 10 seconds, I am releasing them 20 minutes early."'
    }
  },
  {
    id: 'stage-4',
    week: 'Finals Week',
    stageName: 'Finals Meltdown (Maximum Velocity)',
    student: {
      stress: 100,
      title: 'Existential Dread',
      vibe: 'Camped in library corner with 4 blankets, 6 empty energy drink cans, and zero will to live.',
      fuel: 'Tears, caffeine capsules, and unearned prayers to the curve',
      thought: '"Lord, please let there be a catastrophic electrical grid failure tonight."'
    },
    teacher: {
      stress: 100,
      title: 'Mild Existential Dread (with Wine)',
      vibe: 'Grading 80 essays while calculating how many more semesters until early retirement sabbatical.',
      fuel: 'Tall glass of Pinot Noir and spicy snacks',
      thought: '"If another student begins an essay with \'Webster\'s Dictionary defines...\' I will scream."'
    }
  }
];

export const CONFESSION_SCENARIOS: ConfessionScenario[] = [
  {
    id: 'conf-1',
    question: '"Is this going to be on the exam?"',
    student: {
      intendedTone: '"I am an inquisitive scholar seeking curriculum alignment."',
      actualSubtext: '"Tell me immediately so my brain can flush this information from RAM."',
      secretFear: 'Professor will look into my soul and see nothing is retained.'
    },
    teacher: {
      politeResponse: '"Everything covered in lecture and readings is fair game!"',
      internalMonologue: '"I just spent 45 minutes passionately diagramming this on the chalkboard, you gremlin."',
      energyDepleted: '-18 HP'
    }
  },
  {
    id: 'conf-2',
    question: '"I missed Tuesday’s class, did I miss anything important?"',
    student: {
      intendedTone: '"I deeply regret my unavoidable absence."',
      actualSubtext: '"Please compress an 80-minute lecture into a 15-second bullet list for me."',
      secretFear: 'They will tell me they gave away unannounced 50-point extra credit vouchers.'
    },
    teacher: {
      politeResponse: '"Please consult a peer\'s notes or review the slide deck on Canvas."',
      internalMonologue: '"No, the 35 remaining students and I merely sat in meditative silence mourning your absence."',
      energyDepleted: '-24 HP'
    }
  },
  {
    id: 'conf-3',
    question: '"Can you look over my 18-page draft before tomorrow morning?"',
    student: {
      intendedTone: '"I am taking proactive initiative on my scholarship."',
      actualSubtext: '"Please pre-grade this so I know what grade I will get before I even try."',
      secretFear: 'They will notice page 12 is just Wikipedia paragraphs with synonyms.'
    },
    teacher: {
      politeResponse: '"I can review an outline, but full draft feedback requires 48 hours minimum."',
      internalMonologue: '"It is currently 11:34 PM on Sunday. Do you think I am a nocturnal feedback machine?"',
      energyDepleted: '-35 HP'
    }
  },
  {
    id: 'conf-4',
    question: '"I have an 89.4%. Is there any round-up consideration?"',
    student: {
      intendedTone: '"A humble plea from a dedicated pupil who worked tirelessly."',
      actualSubtext: '"It is only 0.6%!! Do not destroy my future over a rounding error!!"',
      secretFear: 'They remember I fell asleep in the front row during Week 8.'
    },
    teacher: {
      politeResponse: '"The syllabus grading scale is strictly adhered to for fairness across all students."',
      internalMonologue: '"You skipped 4 discussion posts and arrived 20 minutes late to every lab, Marcus."',
      energyDepleted: '-50 HP (Critical Hit)'
    }
  }
];

export const CLAY_STICKY_NOTES = {
  student: [
    { title: 'To-Do Today', desc: '1. Panic\n2. Open document\n3. Stare into middle distance\n4. Repeat', color: 'bg-pink-100 text-pink-900 border-pink-200' },
    { title: 'Budget Allocation', desc: 'Iced Coffee: $74/wk\nTextbooks: $0 (pirated PDF)\nRamen: $8/wk', color: 'bg-indigo-100 text-indigo-900 border-indigo-200' },
    { title: 'Survival Tip #14', desc: 'If you walk briskly with a clipboard, nobody asks why you missed lab.', color: 'bg-emerald-100 text-emerald-900 border-emerald-200' }
  ],
  teacher: [
    { title: 'Faculty Rules', desc: '1. The syllabus is law.\n2. Nobody reads the law.\n3. Repeat step 1.', color: 'bg-amber-100 text-amber-900 border-amber-200' },
    { title: 'Meeting Counter', desc: 'Meetings that could have been an email: 14 this week. Total hours lost: 22.', color: 'bg-slate-200 text-slate-800 border-slate-300' },
    { title: 'Faculty Tip #42', desc: 'When asking "Any questions?", count to 7 silently so the awkward silence forces them to look down.', color: 'bg-rose-100 text-rose-900 border-rose-200' }
  ]
};
