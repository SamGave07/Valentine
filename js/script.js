/* ═══════════════════════════════════════════════════════
   VALENTINE'S RIFT — Game Logic
   LoL Client-Inspired Valentine's Website
   ═══════════════════════════════════════════════════════ */

// ──────────────────────────────────────────────
// CONFIGURATION — Customize everything here!
// ──────────────────────────────────────────────

const CONFIG = {
  // Names
  herName: "Loutranne 🦦",
  hisName: "SamGave",

  // Timers (in seconds)
  queueDuration: 0 /* 4 */,          // How long "finding match" takes
  matchAcceptDuration: 10,    // Time to accept match
  pickPhaseDuration: 2330,      // Time to pick champion
  valentinePhaseDuration: 30, // Time to pick valentine
  loadingDuration: 5,         // Loading screen duration

  // Champion data — She can only pick Lux (replace with her pic later)
  herChampion: {
    name: "Lux",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Lux.png",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    loading: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg",
  },

  // Decoy champions in the pick grid (just for show, unclickable)
  decoyChampions: [
    { name: "Ahri",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Ahri.png" },
    { name: "Jinx",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Jinx.png" },
    { name: "Ezreal",   icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Ezreal.png" },
    { name: "Leona",    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Leona.png" },
    { name: "Morgana",  icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Morgana.png" },
    { name: "Sona",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Sona.png" },
    { name: "Rakan",    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Rakan.png" },
    { name: "Xayah",    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Xayah.png" },
    { name: "Senna",    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Senna.png" },
    { name: "Miss Fortune", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/MissFortune.png" },
    { name: "Ashe",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Ashe.png" },
    { name: "Lulu",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Lulu.png" },
    { name: "Nami",     icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Nami.png" },
    { name: "Soraka",   icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Soraka.png" },
    { name: "Janna",    icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Janna.png" },
    { name: "Caitlyn",  icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Caitlyn.png" },
    { name: "Vi",       icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Vi.png" },
    { name: "Seraphine",icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Seraphine.png" },
  ],

  // Valentine options — CUSTOMIZE THESE!
  // The "correct" one has isCorrect: true
  valentineOptions: [
    {
      id: "warwick",
      name: "Warwick",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Warwick.png",
      splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Warwick_0.jpg",
      isCorrect: false,
      errorTitle: "HOWLING AT THE WRONG MOON!",
      errorMessage: "Warwick is a lone wolf who only has eyes for the moon... and maybe a few other things, but definitely not you. Better luck next time, love!",
    },
    {
      id: "draven",
      name: "Draven",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Draven.png",
      splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Draven_0.jpg",
      isCorrect: false,
      errorTitle: "NICE TRY!",
      errorMessage: "Welcome to the League of Draven! 🪓\n\nUnfortunately, Draven only has room in his heart for... Draven. He's already taken — by himself.",
    },
    {
      id: "boyfriend",
      name: "SamGave (AKA best boyfriend ever)",
      icon: null,  // Will show a mystery heart icon
      splash: null,  // Replace with your photo later!
      isCorrect: true,
      errorTitle: "",
      errorMessage: "",
    },
    {
      id: "yasuo",
      name: "Yasuo",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Yasuo.png",
      splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
      isCorrect: false,
      errorTitle: "ERROR 0/10",
      errorMessage: "Your Valentine has disconnected! ⚔️\n\nYasuo went 0/10 and is still chasing the 0/10 powerspike. He's not coming back. Try again!",
    },
    {
      id: "quentin",
      name: "Quentin",
      icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Thresh.png",
      splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg",
      isCorrect: false,
      errorTitle: "MAIS NAN BESTIEEEEEE",
      errorMessage: "Je sais que je suis un léopard beau gosse mais t'as un mec, calme toi",
    },
  ],

  // Error message when timer runs out
  timeoutError: {
    title: "DODGE PENALTY!",
    message: "⏰ Time's up! Your Valentine escaped!\n\nYou failed to pick in time. The queue has been reset. Don't let them get away this time!",
  },

  // Final message — CUSTOMIZE THIS!
  finalTitle: "Happy Valentine's Day! 💕",
  finalMessage: "[Your beautiful love message here — replace this placeholder with something from the heart!]",
  finalSignature: "— With all my love ❤️",

  // Loading screen tips
  loadingTips: [
    "You're the most beautiful player in this game ❤️",
    "Did you know? You have a 100% win rate in my heart 💕",
    "Pro tip: Always pick the mysterious Valentine 🤫",
    "Fun fact: This game was made just for you 🎮",
    "Loading your happily ever after... ✨",
  ],
};


// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────

const STATE = {
  currentPhase: "launcher",
  queueTimer: 0,
  queueInterval: null,
  csTimer: 0,
  csTimerInterval: null,
  csSubPhase: "pick",  // "pick" or "valentine"
  selectedChamp: null,
  matchAccepted: false,
};


// ──────────────────────────────────────────────
// DOM REFERENCES
// ──────────────────────────────────────────────

const DOM = {
  // Phases
  launcher: document.getElementById("launcher"),
  queue: document.getElementById("queue"),
  matchFound: document.getElementById("match-found"),
  champSelect: document.getElementById("champ-select"),
  loadingScreen: document.getElementById("loading-screen"),
  finalMessage: document.getElementById("final-message"),
  errorModal: document.getElementById("error-modal"),

  // Launcher
  playBtn: document.getElementById("play-btn"),

  // Queue
  queueTimer: document.getElementById("queue-timer"),

  // Match Found
  acceptBtn: document.getElementById("accept-btn"),
  matchRing: document.getElementById("match-ring"),

  // Champion Select
  csPhaseText: document.getElementById("cs-phase-text"),
  csTimer: document.getElementById("cs-timer"),
  csTimerBar: document.getElementById("cs-timer-bar"),
  csBackground: document.getElementById("cs-background"),
  pickArea: document.getElementById("pick-area"),
  valentineArea: document.getElementById("valentine-area"),
  championGrid: document.getElementById("champion-grid"),
  valentineGrid: document.getElementById("valentine-grid"),
  lockInBtn: document.getElementById("lock-in-btn"),
  blueSplash: document.getElementById("blue-splash"),
  blueChampName: document.getElementById("blue-champ-name"),
  redSplash: document.getElementById("red-splash"),
  redChampName: document.getElementById("red-champ-name"),

  // Error Modal
  errorTitle: document.getElementById("error-title"),
  errorMessage: document.getElementById("error-message"),
  errorOkBtn: document.getElementById("error-ok-btn"),

  // Loading Screen
  loadingBlueArt: document.getElementById("loading-blue-art"),
  loadingRedArt: document.getElementById("loading-red-art"),
  loadingBlueBar: document.getElementById("loading-blue-bar"),
  loadingRedBar: document.getElementById("loading-red-bar"),
  loadingTipText: document.getElementById("loading-tip-text"),
  loadingBlueChamp: document.getElementById("loading-blue-champ"),
  loadingRedChamp: document.getElementById("loading-red-champ"),

  // Final Message
  finalParticles: document.getElementById("final-particles"),
  finalTitle: document.getElementById("final-title"),
  finalMsg: document.getElementById("final-msg"),
};


// ──────────────────────────────────────────────
// PHASE MANAGEMENT
// ──────────────────────────────────────────────

function showPhase(phaseId) {
  // Hide all phases
  document.querySelectorAll(".phase").forEach(el => {
    el.classList.remove("active");
  });

  // Show target phase
  const target = document.getElementById(phaseId);
  if (target) {
    target.classList.add("active");
    STATE.currentPhase = phaseId;
  }
}

function showOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.style.display = "flex";
    overlay.classList.add("active");
  }
}

function hideOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.classList.remove("active");
    overlay.style.display = "none";
  }
}


// ──────────────────────────────────────────────
// PHASE 1: LAUNCHER
// ──────────────────────────────────────────────

function initLauncher() {
  DOM.playBtn.addEventListener("click", () => {
    startQueue();
  });
}


// ──────────────────────────────────────────────
// PHASE 2: QUEUE
// ──────────────────────────────────────────────

function startQueue() {
  showPhase("queue");
  STATE.queueTimer = 0;
  DOM.queueTimer.textContent = "0:00";

  STATE.queueInterval = setInterval(() => {
    STATE.queueTimer++;
    const mins = Math.floor(STATE.queueTimer / 60);
    const secs = STATE.queueTimer % 60;
    DOM.queueTimer.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

    // After configured duration, match found!
    if (STATE.queueTimer >= CONFIG.queueDuration) {
      clearInterval(STATE.queueInterval);
      showMatchFound();
    }
  }, 1000);
}


// ──────────────────────────────────────────────
// PHASE 3: MATCH FOUND
// ──────────────────────────────────────────────

function showMatchFound() {
  showOverlay("match-found");

  // Animate the ring countdown
  const circumference = 2 * Math.PI * 100; // r=100
  DOM.matchRing.style.strokeDashoffset = "0";

  // Start countdown animation
  requestAnimationFrame(() => {
    DOM.matchRing.style.strokeDashoffset = circumference.toString();
  });

  DOM.acceptBtn.addEventListener("click", acceptMatch, { once: true });
}

function acceptMatch() {
  STATE.matchAccepted = true;
  hideOverlay("match-found");
  startChampSelect();
}


// ──────────────────────────────────────────────
// PHASE 4: CHAMPION SELECT
// ──────────────────────────────────────────────

function startChampSelect() {
  showPhase("champ-select");
  buildChampionGrid();
  startPickPhase();
}

function buildChampionGrid() {
  const grid = DOM.championGrid;
  grid.innerHTML = "";

  // Add all decoy champions (unclickable, grayed out)
  const allChamps = [...CONFIG.decoyChampions];

  // Insert Lux at a random-ish position (somewhere in the middle)
  const insertIndex = Math.floor(allChamps.length / 3) + Math.floor(Math.random() * 4);
  allChamps.splice(insertIndex, 0, { ...CONFIG.herChampion, isHer: true });

  allChamps.forEach(champ => {
    const icon = document.createElement("div");
    icon.className = "champ-icon" + (champ.isHer ? " available" : "");

    const img = document.createElement("img");
    img.src = champ.icon;
    img.alt = champ.name;
    img.loading = "lazy";
    icon.appendChild(img);

    const tooltip = document.createElement("div");
    tooltip.className = "champ-name-tooltip";
    tooltip.textContent = champ.name;
    icon.appendChild(tooltip);

    if (champ.isHer) {
      icon.addEventListener("click", () => selectChampion(icon, champ));
    }

    grid.appendChild(icon);
  });
}

function selectChampion(iconEl, champ) {
  // Deselect previous
  document.querySelectorAll(".champ-icon.selected").forEach(el => {
    el.classList.remove("selected");
  });

  // Select this one
  iconEl.classList.add("selected");
  STATE.selectedChamp = champ;

  // Update splash background
  DOM.csBackground.style.backgroundImage = `url(${champ.splash})`;
  DOM.csBackground.classList.add("visible");

  // Update blue side
  DOM.blueSplash.style.backgroundImage = `url(${champ.splash})`;
  DOM.blueSplash.classList.add("visible");
  DOM.blueChampName.textContent = champ.name;

  // Enable lock in
  DOM.lockInBtn.disabled = false;
}

function startPickPhase() {
  STATE.csSubPhase = "pick";
  DOM.csPhaseText.textContent = "DECLARE YOUR CHAMPION";
  DOM.csPhaseText.classList.remove("valentine-phase");
  DOM.csTimerBar.classList.remove("valentine");
  DOM.pickArea.style.display = "flex";
  DOM.valentineArea.style.display = "none";
  DOM.lockInBtn.style.display = "block";

  // Start timer
  startCSTimer(CONFIG.pickPhaseDuration, () => {
    // Time's up on pick phase — auto lock-in if selected, else restart
    if (STATE.selectedChamp) {
      lockIn();
    }
  });

  // Lock in handler
  DOM.lockInBtn.onclick = () => {
    if (STATE.selectedChamp) {
      lockIn();
    }
  };
}

function lockIn() {
  clearInterval(STATE.csTimerInterval);

  // Lock in animation
  DOM.lockInBtn.disabled = true;
  DOM.blueChampName.textContent = CONFIG.herChampion.name + " ✓";

  // Brief delay then transition to valentine phase
  setTimeout(() => {
    startValentinePhase();
  }, 1000);
}

function startValentinePhase() {
  STATE.csSubPhase = "valentine";
  DOM.csPhaseText.textContent = "💘 CHOOSE YOUR VALENTINE 💘";
  DOM.csPhaseText.classList.add("valentine-phase");
  DOM.csTimerBar.classList.add("valentine");
  DOM.pickArea.style.display = "none";
  DOM.valentineArea.style.display = "flex";
  DOM.lockInBtn.style.display = "none";

  // Clear background splash for this phase
  DOM.csBackground.classList.remove("visible");

  buildValentineGrid();
  startValentineTimer();
}

function buildValentineGrid() {
  const grid = DOM.valentineGrid;
  grid.innerHTML = "";

  CONFIG.valentineOptions.forEach(option => {
    const card = document.createElement("div");
    card.className = "valentine-card";
    card.dataset.id = option.id;

    const imgContainer = document.createElement("div");
    imgContainer.className = "valentine-card-img";

    if (option.icon) {
      const img = document.createElement("img");
      img.src = option.icon;
      img.alt = option.name;
      img.loading = "lazy";
      imgContainer.appendChild(img);
    } else {
      // Mystery option (boyfriend)
      const mystery = document.createElement("div");
      mystery.className = "valentine-mystery";
      mystery.textContent = "💝";
      imgContainer.appendChild(mystery);
    }

    const name = document.createElement("div");
    name.className = "valentine-card-name";
    name.textContent = option.name;

    card.appendChild(imgContainer);
    card.appendChild(name);

    card.addEventListener("click", () => pickValentine(card, option));

    grid.appendChild(card);
  });
}

function startValentineTimer() {
  startCSTimer(CONFIG.valentinePhaseDuration, () => {
    // Time's up! Show timeout error
    showError(CONFIG.timeoutError.title, CONFIG.timeoutError.message, () => {
      // Restart valentine phase timer
      startValentineTimer();
    });
  });
}

function pickValentine(cardEl, option) {
  if (option.isCorrect) {
    // CORRECT PICK! 🎉
    clearInterval(STATE.csTimerInterval);
    cardEl.classList.add("correct");

    // Update red side
    if (option.splash) {
      DOM.redSplash.style.backgroundImage = `url(${option.splash})`;
    }
    DOM.redSplash.classList.add("visible");
    DOM.redChampName.textContent = CONFIG.hisName;
    document.querySelector("#red-slot .cs-slot-name").textContent = CONFIG.hisName;

    // Transition to loading screen after animation
    setTimeout(() => {
      startLoadingScreen(option);
    }, 1500);
  } else {
    // WRONG PICK!
    clearInterval(STATE.csTimerInterval);
    cardEl.classList.add("shake");

    setTimeout(() => {
      cardEl.classList.remove("shake");
      showError(option.errorTitle, option.errorMessage, () => {
        // Restart timer
        startValentineTimer();
      });
    }, 500);
  }
}

// ──────────────────────────────────────────────
// CHAMPION SELECT TIMER
// ──────────────────────────────────────────────

function startCSTimer(duration, onComplete) {
  STATE.csTimer = duration;
  DOM.csTimer.textContent = duration;
  DOM.csTimer.classList.remove("urgent");
  DOM.csTimerBar.style.width = "100%";

  clearInterval(STATE.csTimerInterval);

  STATE.csTimerInterval = setInterval(() => {
    STATE.csTimer--;
    DOM.csTimer.textContent = STATE.csTimer;

    // Update bar
    const percent = (STATE.csTimer / duration) * 100;
    DOM.csTimerBar.style.width = percent + "%";

    // Urgent state when low
    if (STATE.csTimer <= 10) {
      DOM.csTimer.classList.add("urgent");
    }

    if (STATE.csTimer <= 0) {
      clearInterval(STATE.csTimerInterval);
      onComplete();
    }
  }, 1000);
}


// ──────────────────────────────────────────────
// ERROR MODAL
// ──────────────────────────────────────────────

function showError(title, message, onClose) {
  DOM.errorTitle.textContent = title;
  DOM.errorMessage.textContent = message;
  // Preserve newlines in message
  DOM.errorMessage.style.whiteSpace = "pre-line";
  showOverlay("error-modal");

  DOM.errorOkBtn.onclick = () => {
    hideOverlay("error-modal");
    if (onClose) onClose();
  };
}


// ──────────────────────────────────────────────
// PHASE 5: LOADING SCREEN
// ──────────────────────────────────────────────

function startLoadingScreen(valentineOption) {
  showPhase("loading-screen");

  // Set champion arts
  DOM.loadingBlueArt.style.backgroundImage = `url(${CONFIG.herChampion.loading})`;
  DOM.loadingBlueChamp.textContent = CONFIG.herChampion.name;

  if (valentineOption.splash) {
    DOM.loadingRedArt.style.backgroundImage = `url(${valentineOption.splash})`;
  } else {
    // Placeholder gradient for boyfriend
    DOM.loadingRedArt.style.background = "linear-gradient(180deg, #1a0a1e 0%, #2d0a1e 50%, #0a141e 100%)";
  }
  DOM.loadingRedChamp.textContent = CONFIG.hisName;

  // Random tip
  const tipIndex = Math.floor(Math.random() * CONFIG.loadingTips.length);
  DOM.loadingTipText.textContent = CONFIG.loadingTips[tipIndex];

  // Animate loading bars
  animateLoadingBars();
}

function animateLoadingBars() {
  let progress = 0;
  const duration = CONFIG.loadingDuration * 1000;
  const startTime = Date.now();

  function updateBars() {
    const elapsed = Date.now() - startTime;
    progress = Math.min((elapsed / duration) * 100, 100);

    // Blue bar loads slightly faster (she's the star!)
    const blueProgress = Math.min(progress * 1.1, 100);
    DOM.loadingBlueBar.style.width = blueProgress + "%";

    // Red bar loads a bit slower
    const redProgress = Math.min(progress * 0.9, 100);
    DOM.loadingRedBar.style.width = redProgress + "%";

    if (progress < 100) {
      requestAnimationFrame(updateBars);
    } else {
      // Both bars to 100%
      DOM.loadingBlueBar.style.width = "100%";
      DOM.loadingRedBar.style.width = "100%";

      // Transition to final message
      setTimeout(() => {
        showFinalMessage();
      }, 1000);
    }
  }

  requestAnimationFrame(updateBars);
}


// ──────────────────────────────────────────────
// PHASE 6: FINAL MESSAGE
// ──────────────────────────────────────────────

function showFinalMessage() {
  // Set customized text
  DOM.finalTitle.textContent = CONFIG.finalTitle;
  DOM.finalMsg.textContent = CONFIG.finalMessage;
  document.querySelector(".final-signature").textContent = CONFIG.finalSignature;

  showPhase("final-message");
  spawnParticles();
}

function spawnParticles() {
  const container = DOM.finalParticles;
  container.innerHTML = "";

  const hearts = ["💕", "❤️", "💗", "💖", "✨", "🌹", "💘", "💝"];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "final-particle";
    particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.fontSize = (12 + Math.random() * 16) + "px";
    particle.style.animationDuration = (6 + Math.random() * 8) + "s";
    particle.style.animationDelay = (Math.random() * 10) + "s";
    container.appendChild(particle);
  }
}


// ──────────────────────────────────────────────
// INITIALIZATION
// ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initLauncher();

  // Preload key images
  const preloadImages = [
    CONFIG.herChampion.icon,
    CONFIG.herChampion.splash,
    CONFIG.herChampion.loading,
    ...CONFIG.valentineOptions.filter(v => v.icon).map(v => v.icon),
  ];

  preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
