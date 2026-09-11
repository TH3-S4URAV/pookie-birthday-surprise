/* ==========================================================
   ANYA'S BIRTHDAY WONDERLAND - MEGA JAVASCRIPT ENGINE
   Touch Sparkles, Multi-Track Jukebox, 3D Cake, Mini-Game,
   Scratch Cards, Pookie Jar (50+ Notes), Certificate Download
   ========================================================== */

// Smart Auto-Loader for Polaroid Photos: tries .png, .jpeg, .webp, or Windows double-extension before fallback
window.handlePolaroidError = function(img, photoName, fallbackUrl) {
  const altExts = ['png', 'jpeg', 'webp', 'jpg.png', 'png.png'];
  let attempt = parseInt(img.dataset.extAttempt || '0', 10);
  if (attempt < altExts.length) {
    img.dataset.extAttempt = (attempt + 1).toString();
    img.src = `assets/images/${photoName}.${altExts[attempt]}`;
  } else {
    img.onerror = null;
    img.src = fallbackUrl;
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Load configuration from config.js / config.private.js with fallback
  const CFG = window.SURPRISE_CONFIG || (typeof DEFAULT_SURPRISE_CONFIG !== 'undefined' ? DEFAULT_SURPRISE_CONFIG : {});

  // ==================== 0. APPLY DYNAMIC CONFIGURATION ====================
  function applySurpriseConfig() {
    if (!CFG.partner) return;
    const p = CFG.partner;
    const s = CFG.sender || { name: "Your Love", title: "Forever Queen", signature: "~ With Love 💖" };
    const d = CFG.dates || { relationshipStart: "2025-11-01T00:00:00", displayMonthYear: "November 2025" };
    const loc = CFG.locations || { senderCity: "My City 📍", partnerCity: "Your City 📍" };

    if (p.name) {
      document.title = `${p.name}'s Birthday Wonderland 🎂🎀 | For My Pookie ${p.name}`;
      const navBrand = document.getElementById('navBrand');
      if (navBrand) navBrand.innerText = `🎀 ${p.name}'s Wonderland`;
    }

    // Lock screen
    const lockBadge = document.getElementById('lockCardBadge');
    if (lockBadge && s.name) lockBadge.innerText = `✨ ${s.name}'s Ultimate Love Vault ✨`;
    const lockSub = document.getElementById('lockSubtitle');
    if (lockSub && s.name && p.nicknames) lockSub.innerHTML = `Are you ${s.name}'s sweet, innocent, loyal & official <b>${p.nicknames}</b>?`;
    const btnYes = document.getElementById('btnYesAnya');
    if (btnYes && p.name) btnYes.innerText = `Yes, I am ${p.name}! 💖`;
    const lockHint = document.getElementById('lockHint');
    if (lockHint && s.name && p.petName) lockHint.innerText = `Hint: Only ${s.name}'s one-and-only ${p.petName} can enter! 🌸`;

    // Curtain Valance
    const valanceText = document.getElementById('valanceText');
    if (valanceText && p.name) valanceText.innerText = `${p.name}'s Grand Birthday Premiere`;
    const valanceSub = document.getElementById('valanceSub');
    if (valanceSub && s.name) valanceSub.innerText = `Directed with infinite love by ${s.name}`;
    const countdownCaption = document.getElementById('countdownCaption');
    if (countdownCaption && p.name) countdownCaption.innerText = `Hold your breath, ${p.name}! 💖`;

    // Hero Section
    const sparkleTag = document.getElementById('heroSparkleTag');
    if (sparkleTag && p.birthdayDate) sparkleTag.innerText = `✨ ${p.birthdayDate} Special • World's Cutest Birthday Girl ✨`;
    const heroHighlight = document.getElementById('heroHighlightName');
    if (heroHighlight && p.name) heroHighlight.innerText = `My Sweet Pookie ${p.name}!`;
    const heroSub = document.getElementById('heroSubtitle');
    if (heroSub && p.fullName) heroSub.innerHTML = `To the most innocent, precious, loyal and purest soul in my entire universe—<b>${p.fullName} (${p.name})</b>. <br />You make every single day of my life feel like poetry! 🌸✨`;
    const badge1 = document.getElementById('heroBadge1');
    if (badge1 && s.name && s.title) badge1.innerHTML = `<span class="badge-icon">👑</span> ${s.name}'s ${s.title}`;
    const badge3 = document.getElementById('heroBadge3');
    if (badge3 && p.petName) badge3.innerHTML = `<span class="badge-icon">🐣</span> ${p.petName}`;
    const badge4 = document.getElementById('heroBadge4');
    if (badge4 && p.birthdayDate) badge4.innerHTML = `<span class="badge-icon">✨</span> ${p.birthdayDate}`;

    // Counter Subtitle
    const counterSub = document.getElementById('counterSubtitle');
    if (counterSub && d.displayMonthYear) counterSub.innerText = `Every single heartbeat since ${d.displayMonthYear} is dedicated only to you.`;

    // Locations
    const pinSender = document.getElementById('pinSender');
    if (pinSender && loc.senderCity) pinSender.innerHTML = `<span>${loc.senderCity}</span>`;
    const pinPartner = document.getElementById('pinPartner');
    if (pinPartner && loc.partnerCity) pinPartner.innerHTML = `<span>${loc.partnerCity}</span>`;

    // Cake Section
    const cakeTitle = document.getElementById('cakeTitle');
    if (cakeTitle && p.name) cakeTitle.innerText = `${p.name}'s 3D Birthday Cake Bakery 🎂✨`;
    const wishSuccessMsg = document.getElementById('wishSuccessMsg');
    if (wishSuccessMsg && p.name && p.milestoneText) {
      wishSuccessMsg.innerText = `🎉 YAAAY! ${p.milestoneText} ${p.name}! May all your sweet wishes come true! 💖✨`;
    }

    // Gift Section
    const giftHead = document.getElementById('giftHeading');
    if (giftHead && s.name) giftHead.innerText = `Virtual Gift Box from ${s.name} 🎁🎀`;
    const giftTitle = document.getElementById('giftUnlockedTitle');
    if (giftTitle && s.name) giftTitle.innerText = `${s.name}'s Eternal Love & Hugs!`;
    const giftDesc = document.getElementById('giftUnlockedDesc');
    if (giftDesc && s.name) giftDesc.innerText = `You unlocked infinite love, loyalty, and a promise that ${s.name} will always be there for you no matter what! 🌸`;

    // Gallery Heading
    const galleryHeading = document.getElementById('galleryHeading');
    if (galleryHeading && p.name) galleryHeading.innerText = `${p.name}'s Cute Moments Scrapbook 📸`;

    // Jar Section
    const jarSub = document.getElementById('jarSubtitle');
    if (jarSub && s.name) jarSub.innerText = `Tap the jar to draw a fresh love note from ${s.name}!`;
    const jarLabel = document.getElementById('jarLabel');
    if (jarLabel && p.name) jarLabel.innerText = `Notes for ${p.name}`;

    // Quiz Heading
    const quizHeading = document.getElementById('quizHeading');
    if (quizHeading && p.name) quizHeading.innerText = `The Couple Quiz: ${p.name} Edition 🧠💖`;

    // Minigame Heading
    const gameHeading = document.getElementById('gameHeading');
    if (gameHeading && s.name) gameHeading.innerText = `Mini-Game: Catch ${s.name}'s Hearts! 🧺💖`;

    // Coupons Subtitle
    const couponsSub = document.getElementById('couponsSubtitle');
    if (couponsSub && s.name) couponsSub.innerText = `Scratch the cards with your finger or mouse to reveal redeemable vouchers from ${s.name}!`;

    // Reasons Heading
    const reasonsHeading = document.getElementById('reasonsHeading');
    if (reasonsHeading && p.name) reasonsHeading.innerText = `Why ${p.name} Owns My Heart 💌`;

    // Letter
    const letterStamp = document.getElementById('letterStamp');
    if (letterStamp && CFG.letter && CFG.letter.stamp) letterStamp.innerText = CFG.letter.stamp;

    // Certificate
    if (CFG.certificate) {
      const c = CFG.certificate;
      const certHeadingTitle = document.getElementById('certHeadingTitle');
      if (certHeadingTitle && p.name) certHeadingTitle.innerText = `Official World's Best Girlfriend Certificate 🏆🎀`;
      const certSubSub = document.getElementById('certSubSubtitle');
      if (certSubSub && p.fullName) certSubSub.innerText = `Presented to ${p.fullName} with love and infinite respect.`;
      const certMain = document.getElementById('certMainTitle');
      if (certMain && c.title) certMain.innerText = c.title;
      const certName = document.getElementById('certName');
      if (certName && c.recipient) certName.innerText = `${c.recipient} 🎀`;
      const certDesc = document.getElementById('certDesc');
      if (certDesc && c.reason) certDesc.innerHTML = `${c.reason} <br /><b>${c.designation || ''}</b>`;
      const certSign = document.getElementById('certSign');
      if (certSign && c.signatory) certSign.innerText = c.signatory;
      const certDate = document.getElementById('certDate');
      if (certDate && p.birthdayDate) certDate.innerText = p.birthdayDate;
    }

    // Proposal
    if (CFG.proposal) {
      const propQ = document.getElementById('proposalQuestion');
      if (propQ && CFG.proposal.question) propQ.innerText = CFG.proposal.question;
    }

    // Footer
    const footerDed = document.getElementById('footerDedication');
    if (footerDed && s.name && p.name) footerDed.innerHTML = `Crafted with infinite love, patience & code by <b>${s.name}</b> for his <b>${p.name}</b> 💖`;
    const footerSub = document.getElementById('footerSub');
    if (footerSub && p.fullName && d.displayMonthYear) footerSub.innerText = `Happy Birthday ${p.fullName} • ${d.displayMonthYear} to Infinity ✨`;
  }

  // Execute configuration updates immediately
  applySurpriseConfig();

  // ==================== 1. TOUCH & CLICK MAGIC SPARKLE TRAIL ====================
  const particleContainer = document.getElementById('magicParticleCanvas');
  const sparkleEmojis = ['💖', '✨', '🎀', '🌸', '💕', '⭐', '🧸', '🍓', '🌷'];
  let lastSparkleTime = 0;

  function createSparkle(x, y) {
    const now = Date.now();
    if (now - lastSparkleTime < 35) return; // Throttle to maintain 60fps
    lastSparkleTime = now;

    const sparkle = document.createElement('div');
    sparkle.className = 'magic-sparkle';
    sparkle.innerText = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty('--rand-x', `${(Math.random() - 0.5) * 40}px`);
    sparkle.style.setProperty('--rand-y', `${-20 - Math.random() * 30}px`);
    particleContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 850);
  }

  window.addEventListener('mousemove', (e) => createSparkle(e.clientX, e.clientY));
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      createSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  window.addEventListener('click', (e) => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => createSparkle(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20), i * 50);
    }
  });

  // ==================== 2. FLOATING BACKGROUND DECORATIONS ====================
  const floatingDecorations = document.getElementById('floatingDecorations');
  function initFloatingDecorations() {
    const emojis = ['💖', '🎀', '✨', '🌸', '🧸', '🍓', '🐣', '💕', '🌷', '🎂', '💌'];
    for (let i = 0; i < 24; i++) {
      const item = document.createElement('div');
      item.className = 'floating-item';
      item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      item.style.left = `${Math.random() * 95}vw`;
      item.style.animationDuration = `${9 + Math.random() * 8}s`;
      item.style.animationDelay = `${Math.random() * 6}s`;
      item.style.fontSize = `${1.1 + Math.random() * 0.9}rem`;
      floatingDecorations.appendChild(item);
    }
  }
  initFloatingDecorations();

  // ==================== 3. MULTI-TRACK JUKEBOX ====================
  const playlist = (CFG.playlist && CFG.playlist.length > 0) ? CFG.playlist : [
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
  ];
  let currentTrackIdx = 0;
  const bgAudio = document.getElementById('bgAudio');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicIcon = document.getElementById('musicIcon');
  const vinylDisc = document.getElementById('vinylDisc');
  const musicTitle = document.getElementById('musicTitle');
  const nextTrackBtn = document.getElementById('nextTrackBtn');
  let isPlaying = false;

  // Fallback to online stream if local mp3 is not yet added
  bgAudio.addEventListener('error', () => {
    const track = playlist[currentTrackIdx];
    if (track && track.fallback && bgAudio.src !== track.fallback) {
      console.log('Local audio file not found, loading fallback romantic melody...');
      bgAudio.src = track.fallback;
      if (isPlaying) {
        bgAudio.play().catch(e => console.log(e));
      }
    }
  });

  function loadTrack(idx) {
    currentTrackIdx = idx % playlist.length;
    bgAudio.src = playlist[currentTrackIdx].url;
    musicTitle.innerText = playlist[currentTrackIdx].title;
    if (isPlaying) {
      bgAudio.play().catch(e => console.log(e));
    }
  }

  function togglePlay() {
    if (isPlaying) {
      bgAudio.pause();
      vinylDisc.classList.remove('playing');
      musicIcon.innerText = '▶️';
      isPlaying = false;
    } else {
      bgAudio.volume = 0.55;
      bgAudio.play().then(() => {
        vinylDisc.classList.add('playing');
        musicIcon.innerText = '⏸️';
        isPlaying = true;
      }).catch(err => console.log('Autoplay blocked:', err));
    }
  }

  musicToggleBtn.addEventListener('click', togglePlay);
  nextTrackBtn.addEventListener('click', () => {
    loadTrack(currentTrackIdx + 1);
    if (!isPlaying) togglePlay();
  });

  // ==================== 4. POOKIE VERIFICATION & THEATRICAL CURTAIN COUNTDOWN ====================
  const lockScreen = document.getElementById('lockScreen');
  const btnYesAnya = document.getElementById('btnYesAnya');
  const btnNoAnya = document.getElementById('btnNoAnya');

  const curtainStage = document.getElementById('curtainStage');
  const countdownNum = document.getElementById('countdownNum');
  const countdownCaption = document.getElementById('countdownCaption');
  const btnReplayCurtain = document.getElementById('btnReplayCurtain');
  let isCurtainAnimating = false;

  function playCountdownBeep(freq) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    } catch(e) {}
  }

  function startCurtainGrandReveal() {
    if (isCurtainAnimating) return;
    isCurtainAnimating = true;

    // Display curtain stage overlay in closed state
    curtainStage.style.display = 'flex';
    curtainStage.style.opacity = '1';
    curtainStage.classList.remove('curtains-open');
    curtainStage.classList.remove('fade-out');

    const partnerName = CFG.partner?.name || 'Anni';
    const countdownStages = [
      { num: '3', caption: `Hold your breath, ${partnerName}! 💖`, freq: 523.25 },
      { num: '2', caption: 'Every heartbeat beats only for you... ✨', freq: 659.25 },
      { num: '1', caption: 'Make a wish, my Princess! 🎂', freq: 783.99 },
      { num: '🎉', caption: `HAPPY BIRTHDAY ${partnerName.toUpperCase()}! 👑💖`, freq: 1046.50 }
    ];

    let step = 0;

    function runStep() {
      if (step < 3) {
        const item = countdownStages[step];
        countdownNum.innerText = item.num;
        countdownCaption.innerText = item.caption;
        countdownNum.classList.remove('pop-anim');
        void countdownNum.offsetWidth; // Force CSS reflow
        countdownNum.classList.add('pop-anim');
        playCountdownBeep(item.freq);
        step++;
        setTimeout(runStep, 1100);
      } else {
        // Grand Final Countdown Step
        const item = countdownStages[3];
        countdownNum.innerText = item.num;
        countdownCaption.innerText = item.caption;
        countdownNum.classList.remove('pop-anim');
        void countdownNum.offsetWidth;
        countdownNum.classList.add('pop-anim');

        playCelebrationTone();
        triggerMegaConfetti();

        // Curtains part dramatically to both sides!
        setTimeout(() => {
          curtainStage.classList.add('curtains-open');

          // Smoothly start background music
          if (!isPlaying) {
            togglePlay();
          }

          // Second burst of celebratory confetti & rose petals
          setTimeout(() => {
            triggerMegaConfetti();
          }, 700);

          // Once curtains fully open, fade overlay and reveal website
          setTimeout(() => {
            curtainStage.classList.add('fade-out');
            setTimeout(() => {
              curtainStage.style.display = 'none';
              isCurtainAnimating = false;
              startTypewriter();
            }, 800);
          }, 2400);

        }, 400);
      }
    }

    runStep();
  }

  function dodgeButton(btn) {
    const x = (Math.random() - 0.5) * 220;
    const y = (Math.random() - 0.5) * 160;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }

  btnNoAnya.addEventListener('mouseover', () => dodgeButton(btnNoAnya));
  btnNoAnya.addEventListener('touchstart', (e) => { e.preventDefault(); dodgeButton(btnNoAnya); });
  btnNoAnya.addEventListener('click', (e) => { e.preventDefault(); dodgeButton(btnNoAnya); });

  btnYesAnya.addEventListener('click', () => {
    lockScreen.classList.add('hidden');
    startCurtainGrandReveal();
  });

  if (btnReplayCurtain) {
    btnReplayCurtain.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      startCurtainGrandReveal();
    });
  }

  // ==================== 5. TOGETHERNESS COUNTER ====================
  const relationshipStart = (CFG.dates && CFG.dates.relationshipStart)
    ? new Date(CFG.dates.relationshipStart).getTime()
    : new Date(2025, 10, 1, 0, 0, 0).getTime();
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMins = document.getElementById('countMins');
  const countSecs = document.getElementById('countSecs');

  function updateTimer() {
    const now = new Date().getTime();
    const diff = Math.max(0, now - relationshipStart);

    countDays.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countHours.innerText = h < 10 ? '0' + h : h;
    countMins.innerText = m < 10 ? '0' + m : m;
    countSecs.innerText = s < 10 ? '0' + s : s;
  }
  setInterval(updateTimer, 1000);
  updateTimer();

  // ==================== 6. 3D CAKE BAKERY FLAVOURS & BLOWING ====================
  const cakeElement = document.getElementById('cakeElement');
  const flavourBtns = document.querySelectorAll('.flavour-btn');
  const btnBlowCandles = document.getElementById('btnBlowCandles');
  const flame1 = document.getElementById('flame1');
  const flame2 = document.getElementById('flame2');
  const flame3 = document.getElementById('flame3');
  const wishSuccessMsg = document.getElementById('wishSuccessMsg');

  flavourBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flavourBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const flavor = btn.dataset.flavor;
      cakeElement.className = `cake flavor-${flavor}`;
      
      const top1 = document.getElementById('top1');
      const top2 = document.getElementById('top2');
      const top3 = document.getElementById('top3');
      if (flavor === 'chocolate') {
        top1.innerText = '🍫'; top2.innerText = '🍒'; top3.innerText = '🍫';
      } else if (flavor === 'vanilla') {
        top1.innerText = '🫐'; top2.innerText = '🧁'; top3.innerText = '🫐';
      } else {
        top1.innerText = '🍓'; top2.innerText = '🍓'; top3.innerText = '🍓';
      }
    });
  });

  btnBlowCandles.addEventListener('click', () => {
    flame1.classList.add('blown');
    flame2.classList.add('blown');
    flame3.classList.add('blown');
    playCelebrationTone();
    triggerMegaConfetti();
    wishSuccessMsg.style.display = 'block';
    btnBlowCandles.innerText = '🎉 Wish Sent to the Universe! ✨';
    btnBlowCandles.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btnBlowCandles.disabled = true;
  });

  // ==================== 7. 3D GIFT BOX UNBOXING ====================
  const giftBox = document.getElementById('giftBox');
  const giftContent = document.getElementById('giftContent');

  giftBox.addEventListener('click', () => {
    giftBox.classList.add('opened');
    playCelebrationTone();
    triggerMegaConfetti();
    setTimeout(() => {
      giftBox.style.display = 'none';
      giftContent.style.display = 'block';
    }, 500);
  });

  // ==================== 8. POOKIE JAR (POP-UP LOVE NOTES) ====================
  const pookieNotes = (CFG.pookieNotes && CFG.pookieNotes.length > 0) ? CFG.pookieNotes : [
    "Aapki smile meri favourite cheez hai puri duniya me! 🎀",
    "Aapki innocent baatein mera har din special bana deti hain. 🌸",
    "Aap jaisa sachha aur loyal insaan milna rab ki sabse badi blessing hai. 💎",
    "Distance sirf maps me hai, mere dil me to aap hamesha rehti ho! 📍❤️",
    "Happy Birthday my cute little Kuchu Puchu! 🎂",
    "You are my whole world and my biggest priority! 🧸",
    "Aapse baat karke jo sukoon milta hai wo kahi aur nahi mil sakta. 🕊️",
    "I promise to always protect your innocent smile. 💍",
    "You are the most beautiful girl inside and out! ✨",
    "Forever grateful that our paths crossed! 💖"
  ];
  let notesOpenedCount = 0;
  const pookieJarBtn = document.getElementById('pookieJarBtn');
  const noteText = document.getElementById('noteText');
  const noteCounter = document.getElementById('noteCounter');

  pookieJarBtn.addEventListener('click', () => {
    notesOpenedCount++;
    const randomNote = pookieNotes[Math.floor(Math.random() * pookieNotes.length)];
    noteText.innerHTML = `"${randomNote}"`;
    noteCounter.innerText = `Notes opened: ${notesOpenedCount}`;
    pookieJarBtn.style.transform = 'scale(1.12) rotate(-5deg)';
    setTimeout(() => pookieJarBtn.style.transform = 'scale(1)', 200);
    playChime();
  });

  // ==================== 9. OPEN WHEN ENVELOPES ====================
  const envelopeLetters = CFG.openWhenLetters || {
    miss: {
      title: "When You Miss Me 🥺💌",
      text: `Whenever you miss me, close your eyes and know that my heart is always right beside you. Drop a message anytime! I love you! ❤️`
    },
    angry: {
      title: "When You Are Angry With Me 😤🧸",
      text: `If I upset you, I am super sorry! You can scold me all you want, but please don't stay upset for long. Love you loads! 🥺💖`
    },
    sad: {
      title: "When You Feel Low or Sad 😢🌸",
      text: `You are strong, wonderful, and deeply loved. Take a deep breath—everything will be amazing, and I am always with you! 🌸✨`
    },
    bday: {
      title: "Happy Birthday My Princess! 🎂👑",
      text: `Happiest Birthday to my favorite human on planet Earth! Wishing you all the happiness, good health, and success in the universe! 🎀💍`
    }
  };

  const envelopeCards = document.querySelectorAll('.envelope-card');
  const envelopeModal = document.getElementById('envelopeModal');
  const envModalTitle = document.getElementById('envModalTitle');
  const envModalText = document.getElementById('envModalText');
  const closeEnvelopeModal = document.getElementById('closeEnvelopeModal');

  envelopeCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.letter;
      const data = envelopeLetters[type];
      if (data) {
        envModalTitle.innerText = data.title;
        envModalText.innerText = data.text;
        envelopeModal.classList.add('active');
        playChime();
      }
    });
  });

  closeEnvelopeModal.addEventListener('click', () => envelopeModal.classList.remove('active'));
  envelopeModal.addEventListener('click', (e) => {
    if (e.target === envelopeModal) envelopeModal.classList.remove('active');
  });

  // ==================== 10. COUPLE QUIZ ENGINE ====================
  const partnerName = CFG.partner?.name || 'Anni';
  const senderName = CFG.sender?.name || 'Saurav';

  const quizQuestions = (CFG.quizQuestions && CFG.quizQuestions.length > 0) ? CFG.quizQuestions : [
    {
      q: `What is ${senderName}'s absolute favorite thing about ${partnerName}?`,
      opts: ["Her innocent & cute smile 🎀", "Her 100% loyal & sweet heart 💎", "Her cute voice 🐣", "All of the above! (Everything) ❤️"],
      correct: 3
    },
    {
      q: "How much love is reserved for you?",
      opts: ["100%", "1000%", "Beyond Infinity & Universe ∞ 💍", "More than words can say!"],
      correct: 2
    }
  ];
  let currentQuizStep = 0;
  let quizScoreVal = 0;
  const quizStep = document.getElementById('quizStep');
  const quizScore = document.getElementById('quizScore');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizFeedback = document.getElementById('quizFeedback');

  function renderQuiz() {
    if (currentQuizStep >= quizQuestions.length) {
      quizQuestion.innerText = `🎉 Quiz Completed! You scored ${quizScoreVal}/${quizQuestions.length}!`;
      quizOptions.innerHTML = `<div style="text-align:center; padding:20px; font-weight:700; color:#ff758f;">Result: ${partnerName} knows ${senderName} 1000%! You are certified the best partner in the universe! 🏆💖</div>`;
      quizFeedback.innerText = '';
      triggerMegaConfetti();
      return;
    }
    const qData = quizQuestions[currentQuizStep];
    quizStep.innerText = `Question ${currentQuizStep + 1} of ${quizQuestions.length}`;
    quizQuestion.innerText = qData.q;
    quizOptions.innerHTML = '';
    quizFeedback.innerText = '';

    qData.opts.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerText = opt;
      btn.addEventListener('click', () => {
        if (idx === qData.correct) {
          btn.classList.add('correct');
          quizScoreVal++;
          quizScore.innerText = `Score: ${quizScoreVal}`;
          quizFeedback.innerText = `✨ Correct! That's my smart ${partnerName}! 💖`;
          quizFeedback.style.color = '#10b981';
          playCelebrationTone();
        } else {
          btn.classList.add('wrong');
          quizFeedback.innerText = `Arey re! But still ${senderName} loves you! 🥰`;
          quizFeedback.style.color = '#ef4444';
        }
        setTimeout(() => {
          currentQuizStep++;
          renderQuiz();
        }, 1200);
      });
      quizOptions.appendChild(btn);
    });
  }
  renderQuiz();

  // ==================== 11. 2D MINI-GAME: "CATCH SAURAV'S HEARTS" ====================
  const gameCanvas = document.getElementById('heartGameCanvas');
  const gameCtx = gameCanvas.getContext('2d');
  const gameScoreElem = document.getElementById('gameScore');
  const gameTimerElem = document.getElementById('gameTimer');
  const btnStartGame = document.getElementById('btnStartGame');

  let gameRunning = false;
  let gameScore = 0;
  let gameTimeLeft = 30;
  let gameInterval;
  let basketX = 160;
  const basketWidth = 70;
  let heartsArr = [];

  function spawnHeart() {
    heartsArr.push({
      x: Math.random() * (gameCanvas.width - 25),
      y: 0,
      speed: 2 + Math.random() * 3,
      emoji: Math.random() > 0.3 ? '💖' : '🍓'
    });
  }

  function gameLoop() {
    if (!gameRunning) return;
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Draw Basket
    gameCtx.fillStyle = '#ff758f';
    gameCtx.beginPath();
    gameCtx.roundRect(basketX, gameCanvas.height - 35, basketWidth, 24, 10);
    gameCtx.fill();
    gameCtx.font = '16px sans-serif';
    gameCtx.fillText(`🧺 ${partnerName}`, basketX + 10, gameCanvas.height - 18);

    // Update & Draw Falling Hearts
    if (Math.random() < 0.06) spawnHeart();

    for (let i = heartsArr.length - 1; i >= 0; i--) {
      const h = heartsArr[i];
      h.y += h.speed;
      gameCtx.font = '22px sans-serif';
      gameCtx.fillText(h.emoji, h.x, h.y);

      // Check Collision with Basket
      if (h.y >= gameCanvas.height - 40 && h.y <= gameCanvas.height - 10 && h.x + 15 >= basketX && h.x <= basketX + basketWidth) {
        gameScore += 10;
        gameScoreElem.innerText = gameScore;
        heartsArr.splice(i, 1);
        playChime();
        continue;
      }

      if (h.y > gameCanvas.height) {
        heartsArr.splice(i, 1);
      }
    }

    requestAnimationFrame(gameLoop);
  }

  // Basket movement listeners
  gameCanvas.addEventListener('mousemove', (e) => {
    const rect = gameCanvas.getBoundingClientRect();
    basketX = Math.max(0, Math.min(gameCanvas.width - basketWidth, e.clientX - rect.left - basketWidth / 2));
  });
  gameCanvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = gameCanvas.getBoundingClientRect();
      basketX = Math.max(0, Math.min(gameCanvas.width - basketWidth, e.touches[0].clientX - rect.left - basketWidth / 2));
    }
  }, { passive: true });

  btnStartGame.addEventListener('click', () => {
    if (gameRunning) return;
    gameRunning = true;
    gameScore = 0;
    gameTimeLeft = 30;
    heartsArr = [];
    gameScoreElem.innerText = gameScore;
    gameTimerElem.innerText = `${gameTimeLeft}s`;
    btnStartGame.disabled = true;
    btnStartGame.innerText = "Playing... 🎮";

    gameInterval = setInterval(() => {
      gameTimeLeft--;
      gameTimerElem.innerText = `${gameTimeLeft}s`;
      if (gameTimeLeft <= 0) {
        clearInterval(gameInterval);
        gameRunning = false;
        btnStartGame.disabled = false;
        btnStartGame.innerText = "Play Again! 🎮";
        triggerMegaConfetti();
        alert(`🎉 Game Over! ${partnerName} caught ${gameScore} points of ${senderName}'s love! ❤️`);
      }
    }, 1000);

    requestAnimationFrame(gameLoop);
  });

  // ==================== 12. MAGIC SCRATCH CARDS ====================
  function initScratchCard(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill with cute pastel silver-pink scratch overlay
    ctx.fillStyle = '#fbcfe8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 15px Fredoka, sans-serif';
    ctx.fillStyle = '#be185d';
    ctx.textAlign = 'center';
    ctx.fillText('✨ Scratch to Reveal Voucher ✨', canvas.width / 2, canvas.height / 2 + 5);

    let isScratching = false;

    function scratch(x, y) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
    }

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
      }
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    canvas.addEventListener('mousedown', (e) => { isScratching = true; const c = getCoords(e); scratch(c.x, c.y); });
    window.addEventListener('mouseup', () => isScratching = false);
    canvas.addEventListener('mousemove', (e) => { if (isScratching) { const c = getCoords(e); scratch(c.x, c.y); } });

    canvas.addEventListener('touchstart', (e) => { isScratching = true; const c = getCoords(e); scratch(c.x, c.y); }, { passive: true });
    window.addEventListener('touchend', () => isScratching = false);
    canvas.addEventListener('touchmove', (e) => { if (isScratching) { const c = getCoords(e); scratch(c.x, c.y); } }, { passive: true });
  }

  initScratchCard('scratch1');
  initScratchCard('scratch2');
  initScratchCard('scratch3');

  // ==================== 13. TYPEWRITER LOVE LETTER ====================
  let letterMessage = "";
  if (CFG.letter) {
    const l = CFG.letter;
    const paras = Array.isArray(l.paragraphs) ? l.paragraphs.join('\n\n') : (l.paragraphs || '');
    letterMessage = `${l.salutation || ''}\n\n${paras}\n\n${l.closing || ''}\n${l.signature || ''}`.trim();
  } else {
    letterMessage = `Meri Pookie ${partnerName} 🎀,\n\nHappy Birthday to the most special, pure, and precious person in my universe! 🎂✨\n\nMeeting you was the most beautiful turning point in my life. Every single moment with you is precious.\n\nI love you to the moon and back!\n\nHamesha sirf aapka,\n~ ${senderName} 💖`;
  }

  let letterStarted = false;
  function startTypewriter() {
    if (letterStarted) return;
    letterStarted = true;
    const container = document.getElementById('typewriterText');
    let idx = 0;
    container.innerHTML = '';

    function typeChar() {
      if (idx < letterMessage.length) {
        const char = letterMessage.charAt(idx);
        container.innerHTML += char === '\n' ? '<br/>' : char;
        idx++;
        setTimeout(typeChar, 22);
      }
    }
    typeChar();
  }

  // ==================== 14. CERTIFICATE DOWNLOAD VIA HTML2CANVAS ====================
  const btnDownloadCert = document.getElementById('btnDownloadCert');
  const certificateCard = document.getElementById('certificateCard');

  btnDownloadCert.addEventListener('click', () => {
    btnDownloadCert.innerText = "⏳ Generating Image...";
    if (typeof html2canvas === 'function') {
      html2canvas(certificateCard, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = CFG.certificate?.downloadFilename || `${partnerName}_Best_Partner_Certificate.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        btnDownloadCert.innerText = "✅ Downloaded Successfully! 🏆";
        triggerMegaConfetti();
        setTimeout(() => btnDownloadCert.innerText = "📥 Download Certificate as Image!", 3000);
      }).catch(err => {
        console.error(err);
        btnDownloadCert.innerText = "📥 Download Certificate as Image!";
      });
    }
  });

  // ==================== 15. POOKIE METER & PROPOSAL ====================
  const loveRange = document.getElementById('loveRange');
  const meterScore = document.getElementById('meterScore');
  const meterResult = document.getElementById('meterResult');
  const btnAlwaysYes = document.getElementById('btnAlwaysYes');
  const btnPlayfulNo = document.getElementById('btnPlayfulNo');
  const proposalResponse = document.getElementById('proposalResponse');

  loveRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    if (val < 50) {
      meterScore.innerText = `${val}%`;
      meterResult.innerText = "Arey itna kam? Slider ko 100% tak le jao! 🥺";
    } else if (val < 95) {
      meterScore.innerText = `${val}%`;
      meterResult.innerText = `Bahut zyada pyaar hai ${senderName} ko ${partnerName} se! 💖`;
    } else {
      meterScore.innerText = "∞ Infinity % ❤️";
      meterResult.innerText = `✨ Beyond Universe! ${senderName}'s heart is 1000% reserved only for ${partnerName}! 💍🎀`;
      triggerMegaConfetti();
    }
  });

  btnAlwaysYes.addEventListener('click', () => {
    triggerMegaConfetti();
    proposalResponse.innerHTML = CFG.proposal?.acceptedMessage || `🎉 YAYYY! Promise made! You are officially ${senderName}'s Pookie forever & ever! 💍🧸💖`;
    btnAlwaysYes.style.transform = 'scale(1.08)';
  });

  btnPlayfulNo.addEventListener('mouseover', () => dodgeButton(btnPlayfulNo));
  btnPlayfulNo.addEventListener('touchstart', (e) => { e.preventDefault(); dodgeButton(btnPlayfulNo); });
  btnPlayfulNo.addEventListener('click', (e) => { e.preventDefault(); dodgeButton(btnPlayfulNo); });

  // ==================== 16. AUDIO & SOUND EFFECTS ====================
  function playCelebrationTone() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.14, ctx.currentTime + index * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.12);
        osc.stop(ctx.currentTime + index * 0.12 + 0.6);
      });
    } catch(e) {}
  }

  function playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
  }

  function triggerMegaConfetti() {
    if (typeof confetti !== 'function') return;
    const count = 180;
    const defaults = { origin: { y: 0.7 }, colors: ['#ff758f', '#ff8fa3', '#ffb3c1', '#d8bbff', '#f59e0b', '#ffffff'] };
    function fire(ratio, opts) { confetti({ ...defaults, ...opts, particleCount: Math.floor(count * ratio) }); }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }

});
