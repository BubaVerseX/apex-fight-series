export type Language = "en" | "ka";

export interface ClassItem {
  name: string;
  description: string;
  level: string;
  schedule: string;
}

export interface CoachItem {
  name: string;
  role: string;
  bio: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export interface Dictionary {
  nav: {
    home: string;
    classes: string;
    pricing: string;
    about: string;
    contact: string;
    joinNow: string;
  };
  common: {
    placeholder: string;
    photoPlaceholder: (label: string) => string;
  };
  home: {
    heroEyebrow: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroSubheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    introHeading: string;
    introBody: string;
    highlightsHeading: string;
    highlightsSubheading: string;
    seeFullSchedule: string;
    statsLabels: {
      members: string;
      weeklyClasses: string;
      coaches: string;
      years: string;
    };
    testimonialHeading: string;
    testimonialQuote: string;
    testimonialName: string;
    testimonialRole: string;
    ctaBottomHeading: string;
    ctaBottomBody: string;
    ctaBottomButton: string;
  };
  classes: {
    pageHeading: string;
    pageIntro: string;
    placeholderScheduleNote: string;
    levelLabel: string;
    scheduleLabel: string;
    items: ClassItem[];
  };
  pricing: {
    pageHeading: string;
    pageIntro: string;
    placeholderNote: string;
    tiers: PricingTier[];
    footNote: string;
  };
  about: {
    pageHeading: string;
    storyHeading: string;
    storyBody: string;
    missionHeading: string;
    missionBody: string;
    coachesHeading: string;
    coachesNote: string;
    coaches: CoachItem[];
  };
  contact: {
    pageHeading: string;
    pageIntro: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    instagramLabel: string;
    instagramValue: string;
    mapPlaceholder: string;
    formHeading: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactHeading: string;
    followHeading: string;
    addressLine: string;
    rights: string;
  };
}

export const translations: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      classes: "Classes",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      joinNow: "Join Now",
    },
    common: {
      placeholder: "PLACEHOLDER",
      photoPlaceholder: (label: string) => `[ Photo: ${label} ]`,
    },
    home: {
      heroEyebrow: "Tbilisi's Fight & Fitness Studio",
      heroHeadline1: "TRAIN LIKE",
      heroHeadline2: "YOU MEAN IT",
      heroSubheadline:
        "APEX Fight Series is Tbilisi's home for MMA, boxing, Muay Thai, BJJ, and strength & conditioning — built for absolute beginners and competing athletes alike.",
      ctaPrimary: "View Classes",
      ctaSecondary: "Get In Touch",
      introHeading: "NO SHORTCUTS. NO EXCUSES.",
      introBody:
        "APEX is a combat sports and fitness studio in the heart of Tbilisi. We train total beginners, people getting back into shape, and active competitors preparing to fight. Every coach on our floor is a real practitioner, and every class is built around discipline, technique, and honest progress — not gimmicks.",
      highlightsHeading: "TRAIN IN EVERY DISCIPLINE",
      highlightsSubheading:
        "Six programs. One floor. Pick a discipline or mix them all.",
      seeFullSchedule: "See Full Schedule",
      statsLabels: {
        members: "Members Trained",
        weeklyClasses: "Weekly Classes",
        coaches: "Expert Coaches",
        years: "Years Running",
      },
      testimonialHeading: "WHAT OUR FIGHTERS SAY",
      testimonialQuote:
        "Placeholder testimonial — replace with a real member quote before launch. Keep it short, specific, and credible.",
      testimonialName: "Member Name",
      testimonialRole: "Placeholder — Training 6 Months",
      ctaBottomHeading: "READY TO STEP IN THE CAGE?",
      ctaBottomBody:
        "Your first class is the hardest one. Come see the space, meet the coaches, and find your discipline.",
      ctaBottomButton: "Become a Member",
    },
    classes: {
      pageHeading: "OUR CLASSES",
      pageIntro:
        "Pick a discipline and start today. Every level is welcome — our coaches will place you at the right pace from day one.",
      placeholderScheduleNote:
        "Schedule and descriptions below are placeholder content and will be finalized soon.",
      levelLabel: "Level",
      scheduleLabel: "Schedule (placeholder)",
      items: [
        {
          name: "MMA",
          description:
            "Complete mixed martial arts training combining striking, wrestling, and ground fighting into one system — everything a real fighter needs.",
          level: "All Levels",
          schedule: "Mon / Wed / Fri — 19:00–20:30",
        },
        {
          name: "Boxing",
          description:
            "Footwork, combinations, pad work, and hard conditioning. Sharpen your hands and your gas tank.",
          level: "Beginner – Advanced",
          schedule: "Tue / Thu — 18:00–19:00",
        },
        {
          name: "Muay Thai",
          description:
            "The art of eight limbs — clinch work, elbows, knees, and kicks from Thailand's national sport.",
          level: "All Levels",
          schedule: "Mon / Wed / Fri — 20:30–22:00",
        },
        {
          name: "Brazilian Jiu-Jitsu (BJJ)",
          description:
            "Ground control, submissions, and positional strategy. Gi and no-gi sessions for problem-solvers.",
          level: "Beginner – Advanced",
          schedule: "Tue / Thu / Sat — 19:00–20:30",
        },
        {
          name: "Strength & Conditioning",
          description:
            "Functional strength, explosive power, and conditioning built specifically for combat athletes.",
          level: "All Levels",
          schedule: "Mon / Wed / Fri — 17:30–18:30",
        },
        {
          name: "Kids Program (Ages 6–14)",
          description:
            "Discipline, confidence, and fundamentals in a safe, supportive environment built for young athletes.",
          level: "Beginner",
          schedule: "Sat — 11:00–12:00",
        },
      ],
    },
    pricing: {
      pageHeading: "MEMBERSHIP",
      pageIntro:
        "Simple plans, no lock-in gimmicks. Prices below are placeholder figures in GEL and will be confirmed before launch.",
      placeholderNote: "Placeholder Price",
      tiers: [
        {
          name: "Drop-In",
          price: "₾30",
          period: "per class",
          features: [
            "One class of your choice",
            "All levels welcome",
            "Gear rental available",
            "No commitment",
          ],
          cta: "Book a Class",
        },
        {
          name: "Monthly",
          price: "₾189",
          period: "per month",
          featured: true,
          badge: "Most Popular",
          features: [
            "Unlimited access to one discipline",
            "Train up to 2x per week",
            "Open mat access",
            "10% off merch",
          ],
          cta: "Join Now",
        },
        {
          name: "Unlimited / VIP",
          price: "₾349",
          period: "per month",
          features: [
            "Access to all disciplines",
            "Unlimited weekly classes",
            "1 private session / month",
            "Priority booking",
          ],
          cta: "Talk To Us",
        },
      ],
      footNote:
        "All prices shown are placeholders for planning purposes only — final pricing will be published before opening.",
    },
    about: {
      pageHeading: "ABOUT APEX",
      storyHeading: "OUR STORY",
      storyBody:
        "APEX Fight Series was founded in Tbilisi with one goal: build a space where people could learn real combat sports from real coaches, in an environment that's honest and supportive rather than intimidating. What started as a small room with a handful of fighters has grown into one of Tbilisi's leading combat sports and fitness communities.",
      missionHeading: "OUR MISSION",
      missionBody:
        "We believe discipline, strength, and community should be accessible to everyone — regardless of experience or goals. At APEX, first-day beginners and active competitors train on the same floor, held to the same standard of respect and effort.",
      coachesHeading: "MEET THE COACHES",
      coachesNote:
        "Placeholder names and bios below — will be replaced with real coach profiles, credentials, and headshots.",
      coaches: [
        {
          name: "Coach Name One",
          role: "Head MMA Coach",
          bio: "Placeholder bio. Real competition record, coaching credentials, and background will be added here.",
        },
        {
          name: "Coach Name Two",
          role: "Boxing Coach",
          bio: "Placeholder bio. Real competition record, coaching credentials, and background will be added here.",
        },
        {
          name: "Coach Name Three",
          role: "Muay Thai & BJJ Coach",
          bio: "Placeholder bio. Real competition record, coaching credentials, and background will be added here.",
        },
        {
          name: "Coach Name Four",
          role: "Strength & Conditioning Coach",
          bio: "Placeholder bio. Real competition record, coaching credentials, and background will be added here.",
        },
      ],
    },
    contact: {
      pageHeading: "GET IN TOUCH",
      pageIntro:
        "Questions, trial class bookings, or partnership inquiries — send us a message or reach out directly.",
      addressLabel: "Address",
      addressValue: "12 Vazha-Pshavela Ave, Tbilisi, Georgia (placeholder)",
      phoneLabel: "Phone",
      phoneValue: "+995 555 00 00 00 (placeholder)",
      emailLabel: "Email",
      emailValue: "info@apexfightseries.ge (placeholder)",
      instagramLabel: "Instagram",
      instagramValue: "@apex_fightseries",
      mapPlaceholder: "[ Map: APEX Studio location — real Google Maps embed goes here ]",
      formHeading: "SEND A MESSAGE",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formNote:
        "This form is a front-end UI placeholder only — it is not wired up to send messages yet.",
    },
    footer: {
      tagline: "Combat Sports. Real Discipline.",
      quickLinks: "Quick Links",
      contactHeading: "Contact",
      followHeading: "Follow Us",
      addressLine: "12 Vazha-Pshavela Ave, Tbilisi, Georgia (placeholder)",
      rights: "All rights reserved.",
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      classes: "ტრენინგები",
      pricing: "ფასები",
      about: "ჩვენ შესახებ",
      contact: "კონტაქტი",
      joinNow: "შემოგვიერთდი",
    },
    common: {
      placeholder: "სანიმუშო",
      photoPlaceholder: (label: string) => `[ ფოტო: ${label} ]`,
    },
    home: {
      heroEyebrow: "თბილისის საბრძოლო სპორტისა და ფიტნესის სტუდია",
      heroHeadline1: "ივარჯიშე ისე,",
      heroHeadline2: "თითქოს მართლა გინდა",
      heroSubheadline:
        "APEX Fight Series — თბილისის სახლი MMA-სთვის, ბოქსისთვის, მუაი თაისთვის, ჯიუ-ჯიცუსთვის და ძალისა და გამძლეობის ვარჯიშისთვის — შექმნილია სრულიად დამწყებთათვის და მოქმედი სპორტსმენებისთვის ერთნაირად.",
      ctaPrimary: "ტრენინგების ნახვა",
      ctaSecondary: "დაგვიკავშირდი",
      introHeading: "შეკვეცის და საბაბების გარეშე",
      introBody:
        "APEX არის საბრძოლო სპორტისა და ფიტნესის სტუდია თბილისის გულში. ჩვენთან ვარჯიშობენ სრულიად დამწყებები, ისინი, ვინც ფორმაში დაბრუნებას ცდილობენ, და მოქმედი სპორტსმენები, რომლებიც შეჯიბრებისთვის ემზადებიან. ჩვენი ყველა მწვრთნელი რეალური პრაქტიკოსია, ხოლო ყოველი ვარჯიში აგებულია დისციპლინაზე, ტექნიკასა და გულწრფელ პროგრესზე — ტრიუკების გარეშე.",
      highlightsHeading: "ივარჯიშე ყველა დისციპლინაში",
      highlightsSubheading:
        "ექვსი პროგრამა. ერთი დარბაზი. აირჩიე ერთი დისციპლინა ან გაერთიანე ისინი.",
      seeFullSchedule: "სრული განრიგის ნახვა",
      statsLabels: {
        members: "გაწვრთნილი წევრი",
        weeklyClasses: "კვირეული ტრენინგი",
        coaches: "პროფესიონალი მწვრთნელი",
        years: "წელი საქმიანობაში",
      },
      testimonialHeading: "რას ამბობენ ჩვენი მებრძოლები",
      testimonialQuote:
        "სანიმუშო შეფასება — გამოშვებამდე შეიცვალეთ რეალური წევრის ციტატით. მოკლედ, კონკრეტულად და სანდოდ.",
      testimonialName: "წევრის სახელი",
      testimonialRole: "სანიმუშო — 6 თვის ვარჯიშობს",
      ctaBottomHeading: "მზად ხარ გალიაში შესასვლელად?",
      ctaBottomBody:
        "პირველი ვარჯიში ყველაზე რთულია. მოდი, ნახე სივრცე, გაიცანი მწვრთნელები და იპოვე შენი დისციპლინა.",
      ctaBottomButton: "გახდი წევრი",
    },
    classes: {
      pageHeading: "ჩვენი ტრენინგები",
      pageIntro:
        "აირჩიე დისციპლინა და დაიწყე დღესვე. მოგესალმება ყველა დონე — მწვრთნელები პირველივე დღიდან შენთვის სწორ ტემპს შეარჩევენ.",
      placeholderScheduleNote:
        "ქვემოთ მოცემული განრიგი და აღწერილობები სანიმუშოა და მალე დაზუსტდება.",
      levelLabel: "დონე",
      scheduleLabel: "განრიგი (სანიმუშო)",
      items: [
        {
          name: "MMA",
          description:
            "სრულყოფილი შერეული საბრძოლო ხელოვნების ვარჯიში, რომელიც აერთიანებს დარტყმით ტექნიკას, ჭიდაობასა და პარტერულ ბრძოლას ერთ სისტემაში.",
          level: "ყველა დონე",
          schedule: "ორშ / ოთხშ / პარ — 19:00–20:30",
        },
        {
          name: "ბოქსი",
          description:
            "ფეხის მუშაობა, კომბინაციები, საბერკეცო აპარატებზე ვარჯიში და მძლავრი გამძლეობის მუშაობა.",
          level: "დამწყები – გამოცდილი",
          schedule: "სამშ / ხუთშ — 18:00–19:00",
        },
        {
          name: "მუაი თაი",
          description:
            "რვა კიდურის ხელოვნება — კლინჩი, იდაყვები, მუხლები და წიხლები ტაილანდის ეროვნული სპორტიდან.",
          level: "ყველა დონე",
          schedule: "ორშ / ოთხშ / პარ — 20:30–22:00",
        },
        {
          name: "ბრაზილიური ჯიუ-ჯიცუ (BJJ)",
          description:
            "პარტერული კონტროლი, ჩაკეტვები და პოზიციური სტრატეგია. გის და ნო-გის ფორმატის სესიები.",
          level: "დამწყები – გამოცდილი",
          schedule: "სამშ / ხუთშ / შაბ — 19:00–20:30",
        },
        {
          name: "ძალისა და გამძლეობის ვარჯიში",
          description:
            "ფუნქციური ძალა, ასაფეთქებელი სიმძლავრე და გამძლეობა — სპეციალურად საბრძოლო სპორტსმენებისთვის.",
          level: "ყველა დონე",
          schedule: "ორშ / ოთხშ / პარ — 17:30–18:30",
        },
        {
          name: "საბავშვო პროგრამა (6–14 წელი)",
          description:
            "დისციპლინა, თავდაჯერებულობა და საბაზისო ტექნიკა უსაფრთხო და მხარდამჭერ გარემოში.",
          level: "დამწყები",
          schedule: "შაბ — 11:00–12:00",
        },
      ],
    },
    pricing: {
      pageHeading: "საწევრო გეგმები",
      pageIntro:
        "მარტივი გეგმები, ხისტი ვალდებულებების გარეშე. ქვემოთ მოცემული ფასები სანიმუშოა ლარში და დადასტურდება გახსნამდე.",
      placeholderNote: "სანიმუშო ფასი",
      tiers: [
        {
          name: "ერთჯერადი ვიზიტი",
          price: "₾30",
          period: "ვარჯიშზე",
          features: [
            "ერთი ტრენინგი შენი არჩევანით",
            "შესაფერისია ყველა დონისთვის",
            "აღჭურვილობის დაქირავება ხელმისაწვდომია",
            "ვალდებულების გარეშე",
          ],
          cta: "ვარჯიშის დაჯავშნა",
        },
        {
          name: "ყოველთვიური",
          price: "₾189",
          period: "თვეში",
          featured: true,
          badge: "ყველაზე პოპულარული",
          features: [
            "შეუზღუდავი წვდომა ერთ დისციპლინაზე",
            "კვირაში 2-ჯერამდე ვარჯიში",
            "ღია მატის სესიების წვდომა",
            "10% ფასდაკლება მერჩზე",
          ],
          cta: "შემოგვიერთდი",
        },
        {
          name: "შეუზღუდავი / VIP",
          price: "₾349",
          period: "თვეში",
          features: [
            "წვდომა ყველა დისციპლინაზე",
            "შეუზღუდავი კვირეული ტრენინგები",
            "1 პირადი გაკვეთილი თვეში",
            "პრიორიტეტული ჯავშანი",
          ],
          cta: "დაგვიკავშირდი",
        },
      ],
      footNote:
        "ყველა ნაჩვენები ფასი სანიმუშოა და მხოლოდ დაგეგმვის მიზნებისთვისაა — საბოლოო ფასები გამოქვეყნდება გახსნამდე.",
    },
    about: {
      pageHeading: "APEX-ის შესახებ",
      storyHeading: "ჩვენი ისტორია",
      storyBody:
        "APEX Fight Series დაარსდა თბილისში ერთი მარტივი მიზნით — შეგვექმნა სივრცე, სადაც ადამიანებს შეეძლოთ ნამდვილი საბრძოლო სპორტის სწავლა რეალური მწვრთნელებისგან, გულწრფელ და მხარდამჭერ გარემოში. რაც დაიწყო როგორც პატარა დარბაზი რამდენიმე მებრძოლით, დღეს თბილისის ერთ-ერთ წამყვან საბრძოლო სპორტისა და ფიტნესის საზოგადოებად იქცა.",
      missionHeading: "ჩვენი მისია",
      missionBody:
        "გვჯერა, რომ დისციპლინა, ძალა და საზოგადოება ყველასთვის ხელმისაწვდომი უნდა იყოს — გამოცდილებისა თუ მიზნების მიუხედავად. APEX-ში პირველი დღის დამწყები და მოქმედი სპორტსმენი ერთსა და იმავე იატაკზე ვარჯიშობენ, პატივისცემისა და ძალისხმევის ერთნაირი სტანდარტით.",
      coachesHeading: "გაიცანი მწვრთნელები",
      coachesNote:
        "ქვემოთ სანიმუშო სახელები და ბიოგრაფიებია — შეიცვლება რეალური მწვრთნელების პროფილებით, კვალიფიკაციითა და ფოტოებით.",
      coaches: [
        {
          name: "მწვრთნელი 1",
          role: "მთავარი MMA მწვრთნელი",
          bio: "სანიმუშო ბიოგრაფია. აქ დაემატება რეალური შეჯიბრებითი გამოცდილება, კვალიფიკაცია და ბიოგრაფია.",
        },
        {
          name: "მწვრთნელი 2",
          role: "ბოქსის მწვრთნელი",
          bio: "სანიმუშო ბიოგრაფია. აქ დაემატება რეალური შეჯიბრებითი გამოცდილება, კვალიფიკაცია და ბიოგრაფია.",
        },
        {
          name: "მწვრთნელი 3",
          role: "მუაი თაი და BJJ მწვრთნელი",
          bio: "სანიმუშო ბიოგრაფია. აქ დაემატება რეალური შეჯიბრებითი გამოცდილება, კვალიფიკაცია და ბიოგრაფია.",
        },
        {
          name: "მწვრთნელი 4",
          role: "ძალისა და გამძლეობის მწვრთნელი",
          bio: "სანიმუშო ბიოგრაფია. აქ დაემატება რეალური შეჯიბრებითი გამოცდილება, კვალიფიკაცია და ბიოგრაფია.",
        },
      ],
    },
    contact: {
      pageHeading: "დაგვიკავშირდი",
      pageIntro:
        "კითხვები, საცდელი ვარჯიშის დაჯავშნა ან პარტნიორობის შეთავაზება — მოგვწერე ან დაგვიკავშირდი პირდაპირ.",
      addressLabel: "მისამართი",
      addressValue: "ვაჟა-ფშაველას გამზ. 12, თბილისი, საქართველო (სანიმუშო)",
      phoneLabel: "ტელეფონი",
      phoneValue: "+995 555 00 00 00 (სანიმუშო)",
      emailLabel: "ელფოსტა",
      emailValue: "info@apexfightseries.ge (სანიმუშო)",
      instagramLabel: "ინსტაგრამი",
      instagramValue: "@apex_fightseries",
      mapPlaceholder: "[ რუკა: APEX სტუდიის ლოკაცია — აქ დაემატება რეალური Google Maps ჩართვა ]",
      formHeading: "მოგვწერე",
      formName: "სახელი",
      formEmail: "ელფოსტა",
      formMessage: "შეტყობინება",
      formSubmit: "გაგზავნა",
      formNote:
        "ეს ფორმა მხოლოდ დიზაინის დემონსტრირებისთვისაა და ამჟამად შეტყობინებებს არ აგზავნის.",
    },
    footer: {
      tagline: "საბრძოლო სპორტი. ნამდვილი დისციპლინა.",
      quickLinks: "სწრაფი ბმულები",
      contactHeading: "კონტაქტი",
      followHeading: "გამოგვყევი",
      addressLine: "ვაჟა-ფშაველას გამზ. 12, თბილისი, საქართველო (სანიმუშო)",
      rights: "ყველა უფლება დაცულია.",
    },
  },
};
