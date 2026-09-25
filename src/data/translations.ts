import { Language, Perspective } from '../types';

export interface LanguageOption {
  id: Language;
  label: string;
  sublabel: string;
  flag: string;
  badge: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    id: 'english',
    label: 'English',
    sublabel: 'Standard Sarcasm',
    flag: '🇬🇧',
    badge: 'EN'
  },
  {
    id: 'hinglish',
    label: 'Hinglish',
    sublabel: 'Desi Campus Slang',
    flag: '🇮🇳',
    badge: 'HN-EN'
  },
  {
    id: 'hindi',
    label: 'हिंदी',
    sublabel: 'शुद्ध अस्तित्वगत क्लेश',
    flag: '🕉️',
    badge: 'HI'
  },
  {
    id: 'doctor',
    label: 'Doctor (Rx)',
    sublabel: 'Illegible Scribble 🤣',
    flag: '🩺',
    badge: 'Rx'
  }
];

export const TRANSLATIONS = {
  english: {
    nav: {
      brand: 'Campus Chronicles',
      thought: 'Daily Thought',
      schedule: 'Daily Schedule',
      excuses: 'Excuse Leaderboard',
      group: 'Group Project',
      mood: 'Mood Meter',
      confessional: 'Office Hours',
      flipBadgeStudent: '🎓 Student',
      flipBadgeTeacher: '🧑‍🏫 Teacher',
      flipKnob: 'Flip'
    },
    hero: {
      student: {
        badge: '🎓 Active Perspective: Exhausted Undergrad',
        headline: 'Welcome to College: Where Sleep is a Myth and Deadlines are Vibes',
        subheadline: 'Fueled by 600mg of caffeine, selective memory of the syllabus, and sheer 3 AM delusion.',
        pills: [
          { label: 'Current GPA', value: 'Held by prayers' },
          { label: 'Browser Tabs', value: '84 tabs open' },
          { label: 'Sleep Deficit', value: '43.5 hours' },
        ],
        motto: '"Due today, do today."'
      },
      teacher: {
        badge: '🧑‍🏫 Active Perspective: Weary Faculty Member',
        headline: 'Welcome to College: Where I Pretend Your Excuses Are Original',
        subheadline: 'Armed with a red pen, lukewarm hazelnut coffee, and a 14-page syllabus nobody has ever opened.',
        pills: [
          { label: 'Canvas Unread', value: '172 messages' },
          { label: 'Remaining Patience', value: '1.8%' },
          { label: 'Syllabus Citations', value: '94 today' },
        ],
        motto: '"It was literally in bold on page one."'
      },
      flipPromptStudent: '(Flip to Faculty side)',
      flipPromptTeacher: '(Flip to Student side)',
      squishBtn: '👉 Squish the Clay'
    },
    thought: {
      badge: 'Gemini AI Perspective Engine',
      titleStudent: 'Daily Campus Thought: 3 AM Wisdom from the Trenches',
      titleTeacher: 'Daily Campus Thought: Sarcastic Musings from the Faculty Lounge',
      descStudent: 'Fresh, AI-generated philosophical breakthroughs from the brink of academic survival.',
      descTeacher: 'Real-time AI-distilled faculty cynicism for educators who have read one too many unformatted bibliographies.',
      rollBtn: 'Roll New Thought',
      pondering: 'Pondering...',
      subtextLabel: '🔍 Subtext:',
      authorStudent: 'Nocturnal Scholar in Library',
      authorTeacher: 'Department Faculty Member'
    },
    schedule: {
      tag: 'The Anatomy of 24 Hours',
      title: 'Daily Schedule: The Four Horsemen of Campus Hours',
      descStudent: 'Four predictable checkpoints between waking up exhausted and going to sleep panicked.',
      descTeacher: 'Four recurring temporal tragedies where faculty patience meets student creativity.',
      tapToSquish: 'Tap to squish',
      slots: [
        {
          id: 'slot-1',
          time: '09:00 AM',
          student: {
            title: 'Technically Enrolled',
            caption: 'Sitting in the back row with sunglasses, mentally buffering, fighting the gravitational pull of the desk.',
            location: 'Lecture Hall B-12',
            status: 'Comatose'
          },
          teacher: {
            title: 'Attendance for Phantoms',
            caption: 'Calling names into an echoing lecture hall where 11 out of 48 enrolled students actually materialized.',
            location: 'Lecture Hall B-12',
            status: 'Speaking to Ghosts'
          }
        },
        {
          id: 'slot-2',
          time: '01:00 PM',
          student: {
            title: 'Lunch & Grade Arithmetic',
            caption: 'Eating cold noodles while calculating if mathematically possible to pass with an 89% on the final.',
            location: 'Campus Quad Bench',
            status: 'Existential Math'
          },
          teacher: {
            title: 'Faculty Lounge Politics',
            caption: 'Intense 25-minute committee skirmish over who left 4ml of burnt hazelnut roast in the carafe.',
            location: 'Staff Lounge Rm 304',
            status: 'Zero Funding Left'
          }
        },
        {
          id: 'slot-3',
          time: '04:30 PM',
          student: {
            title: 'Office Hours: Stealth Recon',
            caption: 'Hovering awkwardly outside the doorway waiting for another student to go in first so I don’t look clueless.',
            location: 'Professor Office 402',
            status: 'Heart Rate: 135'
          },
          teacher: {
            title: 'Office Hours: Solitary Purgatory',
            caption: 'Staring intently at the doorway for 120 minutes. The only visitor was a fly and a lost campus tour group.',
            location: 'Professor Office 402',
            status: 'Crossword 80% Done'
          }
        },
        {
          id: 'slot-4',
          time: '11:45 PM',
          student: {
            title: 'Peak Academic Productivity',
            caption: 'Typing the title in bold 16pt font, changing margins to 1.1 inches, and declaring it a solid night’s work.',
            location: 'Library 4th Floor',
            status: 'Caffeine Peak'
          },
          teacher: {
            title: 'Canvas Grading Roulette',
            caption: 'Reading an intro that contains "Since the dawn of human civilization" for the 37th consecutive paper.',
            location: 'Home Sofa with Cat',
            status: 'Red Ink Depleted'
          }
        }
      ]
    },
    excuses: {
      tag: 'Hall of Academic Fiction',
      title: 'Common Excuses Leaderboard: Power Rankings',
      descStudent: 'The sacred canon of 11:59 PM desperate gambits, ranked by audacity and delivery confidence.',
      descTeacher: 'The five scripts every student believes they invented for the first time in human history.',
      btnStudent: '✋ Used It',
      btnTeacher: '🙄 Heard It',
      metricStudent: 'Audacity Confidence',
      metricTeacher: 'Faculty Believability'
    },
    group: {
      tag: 'The Anatomy of Collaboration',
      title: 'Group Project Experience: Two Overlapping Illusions',
      descStudent: 'What students think happens vs the mathematical horror of human group dynamics.',
      descTeacher: 'Why professors assign group work (hint: it is never about synergy).'
    },
    mood: {
      tag: 'The Thermodynamics of Burnout',
      title: 'End of Semester Mood Meter',
      descStudent: 'Track your descent from ambitious scholar in Week 1 to feral nocturnal mammal by Finals.',
      descTeacher: 'Track the decay of pedagogical grace from syllabus day to grading in absolute darkness.'
    },
    confessional: {
      tag: 'The Office Hours Translation Chamber',
      title: 'Office Hours: What is Said vs What is Felt',
      descStudent: 'The high-stakes game of pretending you are asking a thoughtful academic inquiry.',
      descTeacher: 'The faculty art of maintaining a calm diplomatic smile while your soul exits your body.'
    },
    footer: {
      slogan: 'Campus Chronicles: Both sides suffering equally since forever.',
      subtext: 'Crafted in claymorphism with double shadows, cold caffeine, and mutual campus exhaustion. No syllabi or GPAs were harmed in the making of this site.',
      toggleToStudent: 'Switch to Student Perspective (🎓)',
      toggleToTeacher: 'Switch to Teacher Perspective (🧑‍🏫)'
    }
  },

  hinglish: {
    nav: {
      brand: 'कैंपस Chronicles (देसी)',
      thought: 'आज का ज्ञान',
      schedule: 'दिन का रोना',
      excuses: 'बहानेबाजी रैंक',
      group: 'ग्रुप प्रोजेक्ट कांड',
      mood: 'तनाव का मीटर',
      confessional: 'केबिन का सच',
      flipBadgeStudent: '🎓 छात्र विंग',
      flipBadgeTeacher: '🧑‍🏫 प्रोफेसर साब',
      flipKnob: 'पलटो'
    },
    hero: {
      student: {
        badge: '🎓 करंट मूड: जिंदा लाश (इंजीनियरिंग/कॉलेज सर्वाइवर)',
        headline: 'कॉलेज में आपका स्वागत: जहाँ नींद एक सपना है और डेडलाइन सिर्फ एक सुझाव',
        subheadline: '3 कप चाय, 84 ब्राउज़र टैब्स और भगवान भरोसे चल रही डिग्री। रात को 3 बजे अक्ल आती है।',
        pills: [
          { label: 'करंट GPA', value: 'हनुमान चालीसा के दम पे' },
          { label: 'ओपन टैब्स', value: '84 विकिपीडिया टैब्स' },
          { label: 'नींद का कर्जा', value: '43.5 घंटे पेंडिंग' },
        ],
        motto: '"आज का काम आज ही होगा... रात 11:58 बजे!"'
      },
      teacher: {
        badge: '🧑‍🏫 करंट मूड: थका हुआ फैकल्टी (जिसने सब कुछ देख रखा है)',
        headline: 'कॉलेज में स्वागत: जहाँ मैं नाटक करता हूँ कि आपका बहाना नया है',
        subheadline: 'लाल पेन, ठंडी कैंटीन की चाय और 14 पेज का सिलेबस जिसे किसी ने पैदा होने के बाद कभी नहीं खोला।',
        pills: [
          { label: 'अनरीड मेल्स', value: '172 फालतू मेल्स' },
          { label: 'बचा हुआ सब्र', value: '1.8% मात्र' },
          { label: 'सिलेबस के ताने', value: '94 बार आज' },
        ],
        motto: '"सिलेबस के पहले पन्ने पर बोल्ड में लिखा था भाई!"'
      },
      flipPromptStudent: '(प्रोफेसर के दिमाग में झांको 🧑‍🏫)',
      flipPromptTeacher: '(छात्र की बर्बादी देखो 🎓)',
      squishBtn: '👉 क्ले को दबाओ'
    },
    thought: {
      badge: 'जेमिनी AI देसी कॉलेज दिमाग',
      titleStudent: 'आज का कैंपस विचार: 3 AM हॉस्टल ज्ञान',
      titleTeacher: 'आज का कैंपस विचार: स्टाफ रूम की कड़वी हकीकत',
      descStudent: 'मैगी खाते हुए और असाइनमेंट कॉपी करते हुए निकली अंतरात्मा की सच्ची आवाज।',
      descTeacher: 'उन प्रोफेसर्स का दर्द जो रोज़ 50 कॉपियों में वही घिसे-पिटे जुमले चेक करते हैं।',
      rollBtn: 'नया ज्ञान फेंको',
      pondering: 'दिमाग की बत्ती जल रही है...',
      subtextLabel: '🔍 अंदर की बात:',
      authorStudent: 'लाइब्रेरी में रोता हुआ बैकबेंचर',
      authorTeacher: 'स्टाफ रूम का चायबाज प्रोफेसर'
    },
    schedule: {
      tag: '24 घंटे का देसी क्लेश',
      title: 'डेली शेड्यूल: कॉलेज के चार भयानक पहर',
      descStudent: 'सुबह उठने के सदमे से लेकर रात को 11:59 बजे पोर्टल क्रैश होने तक का सफर।',
      descTeacher: 'चार ऐसे पहर जहाँ प्रोफेसर का सब्र और छात्र की नौटंकी आमने-सामने टकराते हैं।',
      tapToSquish: 'दबा के चेक करो',
      slots: [
        {
          id: 'slot-1',
          time: '09:00 AM',
          student: {
            title: 'नाममात्र की उपस्थिति',
            caption: 'लास्ट बेंच पे धूप का चश्मा पहन के आत्मा को शरीर में वापस बुलाने की नाकाम कोशिश।',
            location: 'लेक्चर हॉल B-12',
            status: 'कोमा स्टेज 3'
          },
          teacher: {
            title: 'भूतों की हाजिरी',
            caption: '48 बच्चों की क्लास में 9 लोग बैठे हैं। बाकी सब दोस्त के नाम पे प्रॉक्सी ठोक रहे हैं।',
            location: 'लेक्चर हॉल B-12',
            status: 'हवा से बातें'
          }
        },
        {
          id: 'slot-2',
          time: '01:00 PM',
          student: {
            title: 'समोसा और पासिंग मार्क्स का हिसाब',
            caption: 'ठंडी चाय पीते हुए कैलकुलेटर पे हिसाब लगाना कि 22 नंबर आ जाएं तो बैक बच जाएगी।',
            location: 'कैंटीन की टूटी बेंच',
            status: 'खतरनाक गणित'
          },
          teacher: {
            title: 'स्टाफ रूम की पंचायत',
            caption: 'इस बात पे 20 मिनट का बवाल कि केतली में 2 चम्मच दूध किसने खत्म किया।',
            location: 'फैकल्टी लाउंज',
            status: 'बजट खत्म'
          }
        },
        {
          id: 'slot-3',
          time: '04:30 PM',
          student: {
            title: 'ऑफिस के बाहर जासूसी',
            caption: 'सर के केबिन के बाहर चक्कर काटना कि कोई दूसरा बकरा पहले अंदर जाए तो मैं पीछे से घुसूंगा।',
            location: 'प्रोफेसर केबिन 402',
            status: 'धड़कन 140 BPM'
          },
          teacher: {
            title: 'केबिन का सन्नाटा',
            caption: '2 घंटे दरवाजा खोल के बैठा रहा। सिर्फ एक मक्खी आई और एक रास्ता भटका हुआ गार्ड।',
            location: 'प्रोफेसर केबिन 402',
            status: 'सुडोकू पूरा किया'
          }
        },
        {
          id: 'slot-4',
          time: '11:45 PM',
          student: {
            title: 'विशालकाय एकेडमिक उत्पादकता',
            caption: 'टाइटल को 16pt बोल्ड किया, फॉन्ट बदला और खुद को शाबाशी दी कि आज बहुत पढ़ाई हो गई।',
            location: 'हॉस्टल रूम 204',
            status: 'कैफीन ओवरडोज'
          },
          teacher: {
            title: 'कॉपियों का कत्लेआम',
            caption: '38वीं बार वही लाइन पढ़ी: "मानव सभ्यता के आरंभ से ही विज्ञान बहुत महत्वपूर्ण रहा है।"',
            location: 'घर का सोफा',
            status: 'लाल स्याही खत्म'
          }
        }
      ]
    },
    excuses: {
      tag: 'बहानेबाजी की दुनिया',
      title: 'टॉप कॉलेज बहाने: नेशनल पावर रैंकिंग्स',
      descStudent: '11:59 बजे जब किस्मत और इंटरनेट दोनों दगा दे जाएं, तब इस्तेमाल होने वाले ब्रह्मास्त्र।',
      descTeacher: 'वो 5 डायलॉग जो हर नया बच्चा सोचता है कि उसने स्टीव जॉब्स की तरह पहली बार इन्वेंट किए हैं।',
      btnStudent: '✋ मैंने बोला है',
      btnTeacher: '🙄 मैंने सुना है',
      metricStudent: 'सीने पर हाथ रखके कॉन्फिडेंस',
      metricTeacher: 'प्रोफेसर का भरोसा (0%)'
    },
    group: {
      tag: 'ग्रुप प्रोजेक्ट का स्यापा',
      title: 'ग्रुप प्रोजेक्ट का अनुभव: दो तरफा वहम',
      descStudent: 'एक बंदा पूरी रात जाग के पीपीटी बनाएगा, बाकी तीन लोग ग्रुप में "नाइस वर्क ब्रो 🔥" लिखेंगे।',
      descTeacher: 'प्रोफेसर टीमवर्क सिखाने के लिए नहीं, बल्कि 70 कॉपियों की जगह 18 कबाड़ जांचने के लिए ग्रुप बनाते हैं।'
    },
    mood: {
      tag: 'बर्नआउट का थर्मामीटर',
      title: 'सेमेस्टर का मूड मीटर: हफ्ते दर हफ्ते बर्बादी',
      descStudent: 'हफ्ते 1 में रंग-बिरंगे हाईलाइटर खरीदने से लेकर फाइनल में रोते हुए भगवान को याद करने तक।',
      descTeacher: 'पहले दिन उम्मीद से लेकर लास्ट दिन सिर पकड़ कर रेड वाइन पीने तक की कहानी।'
    },
    confessional: {
      tag: 'केबिन की सच्चाई',
      title: 'केबिन में क्या बोला vs दिल में क्या रोया',
      descStudent: 'जब आप प्रोफेसर के सामने भोले बनकर पूछते हैं कि "सर क्या ये एग्जाम में आएगा?"',
      descTeacher: 'जब प्रोफेसर चेहरे पर 32 दांतों की मुस्कान रखकर अंदर ही अंदर अपनी नौकरी को कोसते हैं।'
    },
    footer: {
      slogan: 'Campus Chronicles: दोनों तरफ बराबर की बर्बादी, सदियों से जारी।',
      subtext: 'मुलायम क्ले, ठंडी चाय और साझा तनाव के साथ तैयार किया गया। किसी भी सिलेबस या बैक को ठेस नहीं पहुँचाई गई।',
      toggleToStudent: 'छात्र के नजरिए पर स्विच करें (🎓)',
      toggleToTeacher: 'प्रोफेसर के नजरिए पर स्विच करें (🧑‍🏫)'
    }
  },

  hindi: {
    nav: {
      brand: 'परिसर गाथा (हिंदी)',
      thought: 'दैनिक सुविचार',
      schedule: 'दैनंदिनी चक्र',
      excuses: 'बहाना तालिका',
      group: 'सामूहिक परियोजना',
      mood: 'मनोदशा मापक',
      confessional: 'परामर्श कक्ष',
      flipBadgeStudent: '🎓 छात्र दृष्टि',
      flipBadgeTeacher: '🧑‍🏫 आचार्य दृष्टि',
      flipKnob: 'परिवर्तन'
    },
    hero: {
      student: {
        badge: '🎓 सक्रिय दृष्टिकोण: क्लांत स्नातक शिक्षार्थी',
        headline: 'महाविद्यालय में स्वागत: जहाँ निद्रा एक कपोल-कल्पना है और अंतिम तिथियाँ केवल भावनाएँ',
        subheadline: 'अत्यधिक कैफीन, पाठ्यक्रम की चयनात्मक विस्मृति और रात्रि 3 बजे के निराधार आत्मविश्वास से संचालित।',
        pills: [
          { label: 'वर्तमान GPA', value: 'ईश्वर की अनुकंपा पर' },
          { label: 'सक्रिय टैब', value: '84 सूचना पृष्ठ' },
          { label: 'निद्रा अभाव', value: '43.5 घंटे शेष' },
        ],
        motto: '"आज का कार्य आज ही... ठीक आधी रात 11:59 पर।"'
      },
      teacher: {
        badge: '🧑‍🏫 सक्रिय दृष्टिकोण: क्लान्त संकाय सदस्य',
        headline: 'महाविद्यालय में स्वागत: जहाँ मैं स्वांग रचता हूँ कि आपके बहाने मौलिक हैं',
        subheadline: 'रक्तवर्णी कलम, गुनगुनी कॉफी एवं 14 पृष्ठों का विस्तृत पाठ्यक्रम जिसे आज तक किसी नश्वर ने नहीं पढ़ा।',
        pills: [
          { label: 'अपठित संदेश', value: '172 निरर्थक पत्र' },
          { label: 'अवशिष्ट धैर्य', value: '1.8% शेष' },
          { label: 'पाठ्यक्रम संदर्भ', value: '94 बार आज' },
        ],
        motto: '"यह पाठ्यक्रम के प्रथम पृष्ठ पर स्पष्ट अक्षरों में मुद्रित था।"'
      },
      flipPromptStudent: '(आचार्य दृष्टिकोण की ओर)',
      flipPromptTeacher: '(शिक्षार्थी दृष्टिकोण की ओर)',
      squishBtn: '👉 मृत्तिका का स्पर्श करें'
    },
    thought: {
      badge: 'जेमिनी AI दार्शनिक प्रज्ञा',
      titleStudent: 'दैनिक परिसर चिंतन: गहन रात्रि का आत्म-मंथन',
      titleTeacher: 'दैनिक परिसर चिंतन: संकाय कक्ष की कटु अनुभूतियाँ',
      descStudent: 'अकादमिक संकट के कगार पर जन्मे दार्शनिक उद्गार।',
      descTeacher: 'कॉपियों के अंबार के सम्मुख संकाय का गहन वैराग्य।',
      rollBtn: 'नूतन विचार उत्पन्न करें',
      pondering: 'मनन जारी है...',
      subtextLabel: '🔍 अंतर्निहित यथार्थ:',
      authorStudent: 'पुस्तकालय का मौन तपस्वी',
      authorTeacher: 'अनुभवी संकाय सदस्य'
    },
    schedule: {
      tag: 'अहोरात्र का यथार्थ',
      title: 'दैनिक समय सारणी: परिसर काल के चार चरण',
      descStudent: 'प्रातःकाल के अवसाद से लेकर रात्रि के संत्रास तक का लेखा-जोखा।',
      descTeacher: 'चार ऐसे पहर जहाँ आचार्य का धैर्य शिक्षार्थी के छल-कपट से टकराता है।',
      tapToSquish: 'स्पर्श करके देखें',
      slots: [
        {
          id: 'slot-1',
          time: '09:00 AM',
          student: {
            title: 'औपचारिक नामांकन',
            caption: 'अंतिम पंक्ति में बैठकर काष्ठ पटल के गुरुत्वाकर्षण से संघर्ष करती चेतना।',
            location: 'व्याख्यान कक्ष B-12',
            status: 'अचेतनावस्था'
          },
          teacher: {
            title: 'अदृश्य आत्माओं की उपस्थिति',
            caption: 'रिक्त कक्ष में नाम पुकारना जहाँ 48 में से केवल 11 भौतिक रूप से उपस्थित हुए।',
            location: 'व्याख्यान कक्ष B-12',
            status: 'प्रेतों से संवाद'
          }
        },
        {
          id: 'slot-2',
          time: '01:00 PM',
          student: {
            title: 'भोजन एवं उत्तीर्णांक का अंकगणित',
            caption: 'अन्न ग्रहण करते हुए यह गणित लगाना कि क्या अंतिम परीक्षा में 89% प्राप्त कर उत्तीर्ण होना संभव है।',
            location: 'परिसर वाटिका',
            status: 'अस्तित्वगत गणित'
          },
          teacher: {
            title: 'संकाय कक्षीय राजनीति',
            caption: 'इस बात पर 25 मिनट का भीषण वाद-विवाद कि पात्र में नाममात्र की कॉफी किसने छोड़ी।',
            location: 'कर्मचारी कक्ष 304',
            status: 'धनराशि समाप्त'
          }
        },
        {
          id: 'slot-3',
          time: '04:30 PM',
          student: {
            title: 'कार्यालय परामर्श: गुप्त टोही प्रयास',
            caption: 'कक्ष के बाहर संकोचपूर्वक मंडराना कि कोई अन्य पहले प्रवेश करे ताकि मैं अज्ञानी न दिखूँ।',
            location: 'आचार्य कक्ष 402',
            status: 'हृदयगति: 135'
          },
          teacher: {
            title: 'कार्यालय परामर्श: एकांत कारावास',
            caption: '120 मिनट तक द्वार को ताकना। केवल एक मक्खी और भटके हुए पर्यटकों का समूह आया।',
            location: 'आचार्य कक्ष 402',
            status: 'वर्ग-पहेली पूर्ण'
          }
        },
        {
          id: 'slot-4',
          time: '11:45 PM',
          student: {
            title: 'पराकाष्ठा की उत्पादकता',
            caption: 'शीर्षक को 16pt बोल्ड करके पृष्ठ के हाशिये बदलकर यह मानना कि रात्रि सफल हुई।',
            location: 'पुस्तकालय चतुर्थ तल',
            status: 'कैफीन पराकाष्ठा'
          },
          teacher: {
            title: 'मूल्यांकन चक्रव्यूह',
            caption: '37वीं बार यह प्रस्तावना पढ़ना कि "सभ्यता के उषाकाल से ही यह विषय अत्यंत महत्वपूर्ण रहा है।"',
            location: 'गृह सोफा',
            status: 'मसि समाप्त'
          }
        }
      ]
    },
    excuses: {
      tag: 'अकादमिक कल्पना लोक',
      title: 'लोकप्रिय बहानों की वरीयता सूची',
      descStudent: 'रात्रि 11:59 के अंतिम अस्त्र, दुस्साहस एवं आत्मविश्वास के आधार पर क्रमित।',
      descTeacher: 'वे पाँच आख्यान जिन्हें प्रत्येक शिक्षार्थी समझता है कि उसने प्रथम बार गढ़ा है।',
      btnStudent: '✋ प्रयुक्त किया',
      btnTeacher: '🙄 श्रवण किया',
      metricStudent: 'आत्मविश्वास सूचकांक',
      metricTeacher: 'विश्वसनीयता प्रतिशत'
    },
    group: {
      tag: 'सामूहिकता का यथार्थ',
      title: 'सामूहिक परियोजना: दोहरे भ्रम का आख्यान',
      descStudent: 'चार अपरिचित जीव परस्पर भय और शून्य संवाद कौशल से बंधे हुए।',
      descTeacher: 'आचार्य द्वारा यह कार्य इसलिए नहीं दिया गया कि सहयोग बढ़े, बल्कि इसलिए ताकि कॉपियों का भार कम हो।'
    },
    mood: {
      tag: 'मानसिक अवसाद की ऊष्मागतिकी',
      title: 'सत्रांत मनोदशा मापक',
      descStudent: 'सप्ताह 1 के उत्साह से लेकर अंतिम परीक्षा के विलाप तक की यात्रा।',
      descTeacher: 'प्रथम दिवस की सौम्यता से लेकर अंतिम दिवस के गहन एकांत तक का क्षरण।'
    },
    confessional: {
      tag: 'कक्षीय वार्ता अनुवाद',
      title: 'कार्यालय संवाद: जो मुख से निकला बनाम जो अंतरात्मा में विलाप हुआ',
      descStudent: 'विद्वत्ता का अभिनय करते हुए अपनी अज्ञानता को छिपाने का प्रयास।',
      descTeacher: 'शांत मुस्कान के पीछे प्राण त्यागने की तत्परता।'
    },
    footer: {
      slogan: 'Campus Chronicles: दोनों पक्ष अनादि काल से समान रूप से पीड़ित।',
      subtext: 'मृदु क्ले रूप सज्जा, शीतल कैफीन और पारस्परिक संत्रास के समन्वय से निर्मित।',
      toggleToStudent: 'शिक्षार्थी दृष्टिकोण पर जाएँ (🎓)',
      toggleToTeacher: 'आचार्य दृष्टिकोण पर जाएँ (🧑‍🏫)'
    }
  },

  doctor: {
    nav: {
      brand: '℞ Campus Chronicles (Dr. Med)',
      thought: 'Daily Rx Dosage',
      schedule: 'OPD Schedule',
      excuses: 'Malingering Leaderboard',
      group: 'Trauma Team Dynamic',
      mood: 'Clinical Depression Scale',
      confessional: 'Consultation Room',
      flipBadgeStudent: '🎓 Resident Intern',
      flipBadgeTeacher: '🧑‍🏫 Head of Dept (HOD)',
      flipKnob: 'Prescribe'
    },
    hero: {
      student: {
        badge: '℞ Patient Dx: Chronic Sleep Deprivation (ICD-10: G47.9)',
        headline: '℞ B/L Cephalea, Acute Syllabus Shock & Terminal Deadline Phobia 〰∿∿∿',
        subheadline: 'Adv: Tab Paracetamol 650mg TDS p/c + 400ml IV Red Bull stat. Nil by mouth except cold caffeine ∿﹏〰.',
        pills: [
          { label: 'Prognosis', value: 'Guarded (Prayers OD)' },
          { label: 'Open Case Files', value: '84 tabs / Critical' },
          { label: 'Oxygen Saturation', value: '43.5% (Barely alive)' },
        ],
        motto: '"Rx: Submit at 11:59 PM or declare DOA 〰∿﹏"'
      },
      teacher: {
        badge: '🧑‍🏫 Attending HOD: Burnout Syndrome (ICD-10: Z73.0)',
        headline: '℞ Rx: Malingering Detected with 0.02% Diagnostic Originality ∿〰﹏',
        subheadline: 'Attending physician notes: 14-page syllabus prescribed as prophylactic. Patient non-compliant since admission ﹏∿∿.',
        pills: [
          { label: 'Unread Charts', value: '172 urgent consults' },
          { label: 'Reflex Irritability', value: 'Grade 4+ Hyperactive' },
          { label: 'Red Ink Vial', value: 'Depleted / Code Red' },
        ],
        motto: '"Rx: It was literally documented in the triage chart ﹏∿"'
      },
      flipPromptStudent: '(Transfer to Senior Consultant Ward 🧑‍🏫)',
      flipPromptTeacher: '(Examine Moribund Intern 🎓)',
      squishBtn: '👉 Squeeze Syringe Clay'
    },
    thought: {
      badge: '℞ Gemini Clinical Neural Consult',
      titleStudent: 'Daily Rx Thought: 3 AM Ward Rounds Hallucination 〰﹏∿',
      titleTeacher: 'Daily Rx Thought: Department Morbidity Conference ∿〰﹏',
      descStudent: 'Prescribed dosage of cynical medical truths to treat acute terminal finals hysteria.',
      descTeacher: 'Consultant post-mortem on why 94% of student excuses fail clinical criteria.',
      rollBtn: 'Dispense Fresh Dose 💊',
      pondering: 'Deciphering illegible handwriting...',
      subtextLabel: '🔍 Clinical Subtext:',
      authorStudent: 'Exhausted Intern on Call (36hr shift)',
      authorTeacher: 'Tired HOD with Unreadable Signature'
    },
    schedule: {
      tag: '24hr Clinical Shift Breakdown',
      title: 'Daily Schedule: The Four Wards of Academic Sepsis 〰∿',
      descStudent: 'From morning ward round shock to nocturnal resuscitation attempts.',
      descTeacher: 'Four shifts of observing student vital signs flatline against the syllabus.',
      tapToSquish: 'Check pulse',
      slots: [
        {
          id: 'slot-1',
          time: '09:00 AM',
          student: {
            title: 'Stupor & Sensory Blunting',
            caption: 'Pt presents GCS 3/15 in back row. Eyes closed, non-responsive to verbal commands regarding Chapter 4.',
            location: 'Ward Hall B-12',
            status: 'GCS: 4/15 Coma'
          },
          teacher: {
            title: 'Ghost Census Triage',
            caption: 'Attempted morning roll call. 37 patients absent without leave; 11 present with severe catatonia.',
            location: 'Ward Hall B-12',
            status: 'Speaking to Cadavers'
          }
        },
        {
          id: 'slot-2',
          time: '01:00 PM',
          student: {
            title: 'Emergency Caloric Infusion',
            caption: 'Administering cold sodium slurry while calculating survival probability if final exam scores < 40%.',
            location: 'Hospital Quad Bench',
            status: 'Stat Sodium 2000mg'
          },
          teacher: {
            title: 'Doctors Mess Friction',
            caption: 'Emergency ethics consult regarding who contaminated the sterile coffee maker with expired skim milk.',
            location: 'Faculty Lounge Rm 304',
            status: 'Zero Research Grants'
          }
        },
        {
          id: 'slot-3',
          time: '04:30 PM',
          student: {
            title: 'Consultation Doorway Hesitation',
            caption: 'Patient hovering in corridor with severe tachycardia (140 bpm), awaiting another casualty to enter first.',
            location: 'Clinic 402',
            status: 'Sinus Tachycardia'
          },
          teacher: {
            title: 'OPD Chamber Solitude',
            caption: 'Seated in consultation suite for 120min with zero walk-ins. Diagnosed self with profound existential fatigue.',
            location: 'Clinic 402',
            status: 'Crossword 100% Rx'
          }
        },
        {
          id: 'slot-4',
          time: '11:45 PM',
          student: {
            title: 'Nocturnal Defibrillation',
            caption: 'Rapid formatting therapy applied: Font size increased to 16pt, margins widened. Pt declares stabilization.',
            location: 'ICU Library Floor 4',
            status: 'Caffeine Tox: 99mg/dL'
          },
          teacher: {
            title: 'Post-Mortem Chart Review',
            caption: 'Reviewing 37th submission starting with "Since the dawn of human anatomy". Autopsy report: hopeless.',
            location: 'Home Sofa with Cat',
            status: 'Red Biweekly Ink Flat'
          }
        }
      ]
    },
    excuses: {
      tag: 'Pathological Malingering Registry',
      title: 'Top Excuses Leaderboard: Clinical Differential Diagnoses',
      descStudent: 'Documented psychosomatic claims utilized to delay terminal evaluation.',
      descTeacher: 'The 5 recurrent clinical presentations where zero objective pathology is discovered.',
      btnStudent: '💉 Prescribed Myself',
      btnTeacher: '🧪 Diagnosed Malingering',
      metricStudent: 'Placebo Audacity Index',
      metricTeacher: 'Biopsy Plausibility (0%)'
    },
    group: {
      tag: 'Multi-Organ Failure Dynamics',
      title: 'Group Project: Emergency Surgery by Interns',
      descStudent: 'One chief resident operating unassisted while three observers scroll surgical memes in sterile masks.',
      descTeacher: 'Assigned solely to reduce specimen workload from 72 individual autopsies to 18 collective post-mortems.'
    },
    mood: {
      tag: 'Burnout Sepsis Progression',
      title: 'Clinical Burnout Index: Stage I to Terminal Stage IV',
      descStudent: 'Week 1 ambulatory optimism progressing to finals week irreversible metabolic decompensation.',
      descTeacher: 'From benign admission bedside manners to palliative Merlot administration.'
    },
    confessional: {
      tag: 'Psychiatric Examination Chamber',
      title: 'Office Consult: Stated Symptoms vs Subconscious Pathology',
      descStudent: 'Patient attempts to fabricate genuine curiosity to mask impending academic cardiac arrest.',
      descTeacher: 'Clinician maintains therapeutic blank affect while monitoring internal vitals collapse.'
    },
    footer: {
      slogan: 'Campus Chronicles: Both clinician & patient terminal since antiquity ∿〰﹏.',
      subtext: 'Formulated in squishy clay suspension with double shadow sedation. No medical licenses or syllabi were revoked during clinical trials.',
      toggleToStudent: 'Switch to Resident Intern View (🎓)',
      toggleToTeacher: 'Switch to Senior HOD View (🧑‍🏫)'
    }
  }
};
