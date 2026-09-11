/**
 * ===================================================================
 * 🎀 POOKIE BIRTHDAY SURPRISE - CONFIGURATION FILE 🎂✨
 * ===================================================================
 * 
 * Hey there! Customize this entire web app for YOUR partner or friend
 * by simply editing the values below. No coding knowledge required!
 * 
 * 💡 TIPS:
 * - Change the names, dates, nicknames, and cities.
 * - Replace or add your own love notes, couple quiz questions, and coupons.
 * - Add your photos in 'assets/images/' (photo1.jpg, photo2.jpg, etc.)
 * - Add your favorite song in 'assets/music/romantic_lofi.mp3'
 * ===================================================================
 */

const DEFAULT_SURPRISE_CONFIG = {
  // ==========================================
  // 1. BASIC INFORMATION & NAMES
  // ==========================================
  partner: {
    name: "Anni",                        // Primary display name or nickname (e.g., "Priya", "Anni")
    fullName: "Anisha",                  // Full name
    nicknames: "Anni (Anya / Anisha)",   // Cute nicknames displayed in titles & headers
    petName: "Kuchu Puchu",              // Lovable cute pet name (e.g., "Pookie", "Bubu", "Baby")
    birthdayDate: "11 September",        // Birthday date (e.g., "11 September", "24 October")
    milestoneText: "Happy 16th Birthday" // Celebration milestone (e.g., "Happy 16th Birthday", "Happy 21st Birthday")
  },

  sender: {
    name: "Saurav",                      // Your name (the sender)
    title: "Forever Queen",              // Title given to partner (e.g., "Forever Queen", "Favorite Person")
    signature: "~ Saurav 💖"             // Love letter signature
  },

  // ==========================================
  // 2. TOGETHERNESS COUNTER & DATES
  // ==========================================
  // Format: "YYYY-MM-DDTHH:mm:ss" - date when you met or started dating
  dates: {
    relationshipStart: "2025-11-01T00:00:00",
    displayMonthYear: "November 2025"    // Human-readable string shown on cards
  },

  // ==========================================
  // 3. LONG DISTANCE & LOCATION DETAILS
  // ==========================================
  locations: {
    senderCity: "Saurav 📍",
    partnerCity: "Anni 📍",
    distanceText: "Miles on GPS, but 0 mm in heart 💖"
  },

  // ==========================================
  // 4. MUSIC PLAYLIST
  // ==========================================
  // Local files should be placed in 'assets/music/'.
  // If local file is not found, it automatically uses the fallback online stream!
  playlist: [
    {
      title: "Our Romantic Melody",
      artist: "Special Track 🎶",
      url: "assets/music/romantic_lofi.mp3",
      fallback: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
      title: "Sweet Memories Piano",
      artist: "Romantic Soft Chords 💕",
      url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-piano-10781.mp3"
    },
    {
      title: "Cozy Lofi Evening",
      artist: "Heartfelt Beats 🌸",
      url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8bbf7b9a5.mp3?filename=lofi-chill-medium-version-159456.mp3"
    }
  ],

  // ==========================================
  // 5. POLAROID MEMORY LANE
  // ==========================================
  // Put photos in 'assets/images/photo1.jpg' through 'photo6.jpg'.
  // If you don't add photos, aesthetic fallback illustrations will automatically display!
  polaroids: [
    {
      id: "photo1",
      filename: "photo1",
      caption: "That innocent smile that stole my heart 🌸✨",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo2",
      filename: "photo2",
      caption: "Certified cutest human in the world 🧸💖",
      fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo3",
      filename: "photo3",
      caption: "Every memory with you feels like magic ✨🌷",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo4",
      filename: "photo4",
      caption: "My forever favorite notification 💌🎀",
      fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo5",
      filename: "photo5",
      caption: "The queen of my heart and dreams 👑💎",
      fallback: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo6",
      filename: "photo6",
      caption: "Togetherness that transcends any distance ⏳❤️",
      fallback: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
    }
  ],

  // ==========================================
  // 6. POOKIE JAR NOTES (Random Love Messages)
  // ==========================================
  pookieNotes: [
    "Aapki smile meri favourite cheez hai puri duniya me! 🎀",
    "Aapki innocent baatein mera har din special bana deti hain. 🌸",
    "Aap jaisa sachha aur loyal insaan milna rab ki sabse badi blessing hai. 💎",
    "Distance sirf maps me hai, mere dil me to aap hamesha rehti ho! 📍❤️",
    "Happy Birthday to my cute little Kuchu Puchu! 🎂",
    "Aap meri sabse pyari priority aur meri whole world ho! 🧸",
    "Aapse baat karke jo sukoon milta hai wo kahi aur nahi mil sakta. 🕊️",
    "I promise to always protect your innocent smile. 💍",
    "You are the most beautiful girl inside and out! ✨",
    "Hamare sath se lekar forever tak, sirf aapka hu! ⏳",
    "Whenever you feel low, just remember I am always in your corner! 🛡️",
    "Aapki bacho jaisi harkatein mujhe bohot pyaari lagti hain! 🐣",
    "World's Best Pookie Award goes to you! 👑",
    "Every love song reminds me of you. 🎶",
    "Your smile is 1000x brighter than the stars! ⭐",
    "I love the way you care for me with your pure heart. 🌷",
    "Can't wait for our future ice cream and coffee dates! 🍦",
    "You are my favorite notification every single day. 💌",
    "Forever grateful that our paths crossed! 💖"
  ],

  // ==========================================
  // 7. OPEN WHEN ENVELOPES
  // ==========================================
  openWhenLetters: {
    miss: {
      title: "When You Miss Me 🥺💌",
      text: `Meri pyaari Anni,\n\nAgar aap mujhe miss kar rahi ho, to bas ek baar apni aakhein band karo aur mehsus karo ki mai hamesha aapke kareeb hu. Long distance hamare darmiyan sirf kuch kilometers ka fasla bana sakta hai, par hamare dil hamesha ek dusre se jude hain.\n\nWhenever you miss me, just drop me a message. Mai hamesha aapse baat karne aur aapki cute awaz sunne ke liye ready hu! I love you so much! ❤️`
    },
    angry: {
      title: "When You Are Angry With Me 😤🧸",
      text: `Arey meri sweet pookie,\n\nAgar meri kisi baat se aap naraz ho gayi ho, to I am super sorry! 🙈\nMera kabhi bhi aapko hurt karne ka intention nahi hota. Aap gussa ho to mujhpe daant lo, par please zyada der naraz mat rehna, kyuki aapki bina muskurahat ke mera dil bilkul bechain ho jata hai.\n\nAapki har narazgi dur karne ke liye mai kuch bhi karunga! Maan jao na pookie? 🥺💖`
    },
    sad: {
      title: "When You Feel Low or Sad 😢🌸",
      text: `My Sweetheart Anni,\n\nAap bohot strong, pure aur khoobsurat ho. Kabhi bhi koi mushkil ya stress aaye to yaad rakhna ki ye waqt guzar jayega aur mai har kadam par aapke saath khada hu.\n\nAapki happiness meri sabse badi priority hai. Ek lambi saans lo, muskurao, kyuki aapki smile hi meri duniya ki sabse pyari roshni hai! 🌸✨`
    },
    bday: {
      title: "Happy Birthday Anni! 🎂👑",
      text: `Happiest Birthday to my favorite human on planet Earth! 🎉\n\nToday is the day an angel was born who came into my life and made everything magical. Wishing you all the happiness, good health, success and endless joy in the universe!\n\nAlways stay my cute little innocent Pookie! Happy Birthday my princess! 🎀💍`
    }
  },

  // ==========================================
  // 8. COUPLE QUIZ ENGINE
  // ==========================================
  quizQuestions: [
    {
      q: "What is Saurav's absolute favorite thing about Anni?",
      opts: ["Her innocent & cute smile 🎀", "Her 100% loyal & sweet heart 💎", "Her cute voice 🐣", "All of the above! (Everything) ❤️"],
      correct: 3
    },
    {
      q: "When did our beautiful journey start?",
      opts: ["November 2025 ✨", "January 2026", "September 2025", "August 2026"],
      correct: 0
    },
    {
      q: "Who is the cutest Pookie / Kuchu Puchu in the universe?",
      opts: ["Anni (Anya / Anisha) 👑", "Definitely Anni! 🌸", "Nobody else except Anni 🧸", "All options = Anni! 💖"],
      correct: 3
    },
    {
      q: "How much does Saurav love Anni?",
      opts: ["100%", "1000%", "Beyond Infinity & Universe ∞ 💍", "More than words can say!"],
      correct: 2
    }
  ],

  // ==========================================
  // 9. SCRATCH CARD COUPONS / VOUCHERS
  // ==========================================
  scratchCoupons: [
    {
      badge: "Sweet Voucher #1 🍫",
      title: "Ice Cream & Sweet Treat Date",
      desc: "Redeemable anytime for your favorite chocolate, pastries, or ice cream date!",
      code: "SWEET-POOKIE-100"
    },
    {
      badge: "Love Voucher #2 🫂",
      title: "Unlimited Warm Hugs & Pampering",
      desc: "Valid forever with zero expiration date. Full pampering guaranteed whenever you need!",
      code: "HUGS-FOREVER-INF"
    },
    {
      badge: "Royal Voucher #3 👑",
      title: "Win Any Argument Instantly",
      desc: "Flash this card anytime to win any cute argument immediately with zero resistance!",
      code: "QUEEN-ALWAYS-WINS"
    }
  ],

  // ==========================================
  // 10. TYPEWRITER LOVE LETTER
  // ==========================================
  letter: {
    stamp: "From Saurav ❤️",
    salutation: "Meri Pookie Anni (Anya) 🎀,",
    paragraphs: [
      "Happy 16th Birthday to the most special, pure, and precious girl in my universe! 🎂✨",
      "November 2025 me aapse mulakat hona meri life ka sabse khoobsurat mor tha. Chahe hum long distance me ho, par mera dil har ek second aapse hi baatein karta hai. Aapki wo sweet masoomiyat, aapka bina kisi shart ke mere liye itna loyal rehna, aur wo pyari bacho jaisi smile—ye sab mere liye sabse anmol hain.",
      "Aap meri Anya ho, meri Anni ho, aur meri sabse pyari pookie ho! 🌸",
      "Aapke is Birthday par mai rab se yahi dua karta hu ki aap hamesha muskurati raho, khush raho aur meri life me aise hi roshni bikherti raho.",
      "I love you to the moon and back my Kuchu Puchu Anni! ❤️💍"
    ],
    closing: "Hamesha sirf aapka,",
    signature: "~ Saurav 💖"
  },

  // ==========================================
  // 11. CERTIFICATE OF BEST PARTNER
  // ==========================================
  certificate: {
    title: "Official Certificate of Perfection 🏆",
    recipient: "Anni (Anya)",
    designation: "Certified as Saurav's Forever Queen & Favorite Person",
    reason: "For having the purest heart, infinite innocence, loyal love, and bringing infinite happiness every day.",
    signatory: "Saurav ❤️",
    downloadFilename: "Anni_Best_Girlfriend_Certificate.png"
  },

  // ==========================================
  // 12. PROPOSAL & PROMISE CARD
  // ==========================================
  proposal: {
    question: "Anni, will you always stay as Saurav's sweet little Pookie? 🥺💍",
    acceptedMessage: "🎉 YAYYY! Promise made! You are officially Saurav's Pookie forever & ever! 💍🧸💖"
  }
};

// Allow local private overrides if present (e.g. from config.private.js)
if (typeof window !== 'undefined') {
  window.SURPRISE_CONFIG = (typeof window.SURPRISE_CONFIG_PRIVATE !== 'undefined')
    ? { ...DEFAULT_SURPRISE_CONFIG, ...window.SURPRISE_CONFIG_PRIVATE }
    : DEFAULT_SURPRISE_CONFIG;
}
