/**
 * ===================================================================
 * 🎀 POOKIE BIRTHDAY SURPRISE - TEMPLATE / EXAMPLE CONFIG 🎂✨
 * ===================================================================
 * 
 * Instructions:
 * 1. Copy this file or directly edit 'config.js'.
 * 2. Replace the placeholder names ("Priya", "Rahul", etc.) with yours!
 * 3. Add your favorite photos to 'assets/images/'.
 * 4. Add your favorite background music to 'assets/music/'.
 * ===================================================================
 */

const DEFAULT_SURPRISE_CONFIG = {
  partner: {
    name: "Priya",
    fullName: "Priya Sharma",
    nicknames: "Priya (Piku / Cutie)",
    petName: "Pookie",
    birthdayDate: "25 October",
    milestoneText: "Happy 20th Birthday"
  },

  sender: {
    name: "Rahul",
    title: "Forever Queen",
    signature: "~ Rahul 💖"
  },

  dates: {
    relationshipStart: "2024-02-14T00:00:00",
    displayMonthYear: "February 2024"
  },

  locations: {
    senderCity: "Delhi 📍",
    partnerCity: "Mumbai 📍",
    distanceText: "1400 km on GPS, but 0 mm in heart 💖"
  },

  playlist: [
    {
      title: "Romantic Lo-Fi Melodies",
      artist: "Special Track 🎶",
      url: "assets/music/romantic_lofi.mp3",
      fallback: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
      title: "Sweet Memories Piano",
      artist: "Romantic Soft Chords 💕",
      url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-piano-10781.mp3"
    }
  ],

  polaroids: [
    {
      id: "photo1",
      filename: "photo1",
      caption: "That radiant smile that brightens up my world 🌸✨",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo2",
      filename: "photo2",
      caption: "The cutest human on planet Earth 🧸💖",
      fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "photo3",
      filename: "photo3",
      caption: "Every single memory with you is pure magic ✨🌷",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80"
    }
  ],

  pookieNotes: [
    "Your smile is my favorite view in the entire universe! 🎀",
    "Thank you for being the sweetest and most caring person. 🌸",
    "Miles mean nothing when you mean everything to me! 📍❤️",
    "Happy Birthday to my lovely Pookie! 🎂",
    "I promise to always make you laugh and smile. 💍"
  ],

  openWhenLetters: {
    miss: {
      title: "When You Miss Me 🥺💌",
      text: "Whenever you miss me, close your eyes and know that my heart is always right beside you. Drop a message anytime!"
    },
    angry: {
      title: "When You Are Angry With Me 😤🧸",
      text: "I am so sorry if I upset you! You can scold me all you want, but please don't stay upset for long. Love you loads!"
    },
    sad: {
      title: "When You Feel Low or Sad 😢🌸",
      text: "You are strong, wonderful, and deeply loved. Take a deep breath—everything will be amazing, and I am always with you."
    },
    bday: {
      title: "Happy Birthday My Love! 🎂👑",
      text: "Happiest Birthday! May all your dreams come true and this year bring endless happiness and success to your life."
    }
  },

  quizQuestions: [
    {
      q: "What is my absolute favorite thing about you?",
      opts: ["Your cute smile 🎀", "Your kind heart 💎", "Your laughter 🐣", "All of the above! ❤️"],
      correct: 3
    },
    {
      q: "How much love is reserved for you?",
      opts: ["100%", "1000%", "Beyond Infinity & Universe ∞ 💍", "More than words!"],
      correct: 2
    }
  ],

  scratchCoupons: [
    {
      badge: "Treat Voucher #1 🍫",
      title: "Favorite Ice Cream Date",
      desc: "Redeemable anytime for your favorite dessert or coffee date!",
      code: "SWEET-TREAT-100"
    },
    {
      badge: "Pampering Voucher #2 🫂",
      title: "Unlimited Warm Hugs",
      desc: "Valid forever with zero expiration date whenever you need comfort!",
      code: "HUGS-FOREVER"
    },
    {
      badge: "Royal Voucher #3 👑",
      title: "Win Any Friendly Argument",
      desc: "Flash this card anytime to win instantly with zero questions asked!",
      code: "QUEEN-ALWAYS-WINS"
    }
  ],

  letter: {
    stamp: "With All My Love ❤️",
    salutation: "To My Dearest Pookie 🎀,",
    paragraphs: [
      "Happy Birthday to the most wonderful person in my life! 🎂✨",
      "Meeting you has been one of the best blessings ever. No matter the distance, you are always in my thoughts and heart.",
      "Wishing you endless smiles, success, and warm adventures ahead!",
      "I love you endlessly! ❤️💍"
    ],
    closing: "Forever yours,",
    signature: "~ With Love 💖"
  },

  certificate: {
    title: "Official Certificate of Excellence 🏆",
    recipient: "Priya",
    designation: "Certified as World's Best Partner & Cutest Pookie",
    reason: "For bringing infinite joy, laughter, and sweetness into my life.",
    signatory: "Rahul ❤️",
    downloadFilename: "Best_Partner_Certificate.png"
  },

  proposal: {
    question: "Will you always stay as my sweet little Pookie? 🥺💍",
    acceptedMessage: "🎉 YAYYY! Promise made! You are officially my Pookie forever & ever! 💍🧸💖"
  }
};

if (typeof window !== 'undefined') {
  window.SURPRISE_CONFIG = (typeof window.SURPRISE_CONFIG_PRIVATE !== 'undefined')
    ? { ...DEFAULT_SURPRISE_CONFIG, ...window.SURPRISE_CONFIG_PRIVATE }
    : DEFAULT_SURPRISE_CONFIG;
}
