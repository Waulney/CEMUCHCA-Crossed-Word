const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide pour relier les mots en ligne droite.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! 🎶",
        modalSuccessDesc: "Prêt pour la mesure suivante ?",
        modalFinalTitle: "Parcours CEMUCHCA Terminé ! 🏆",
        modalFinalDesc: "Félicitations ! Vous avez complété tous les niveaux musicaux avec le Cercle des Musiciens Chrétiens Capois !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début",
        timeLabel: "Temps réalisé :",
        muteTitle: "Couper la musique",
        unmuteTitle: "Activer la musique"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Found",
        instruction: "Instruction: Slide your finger or mouse smoothly to connect words in a straight line.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! 🎶",
        modalSuccessDesc: "Ready for the next bar?",
        modalFinalTitle: "CEMUCHCA Journey Completed! 🏆",
        modalFinalDesc: "Congratulations! You completed all music levels with the Capois Christian Musicians Circle!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start",
        timeLabel: "Time taken:",
        muteTitle: "Mute music",
        unmuteTitle: "Unmute music"
    },
    es: {
        levelWord: "Nivel",
        scoreWord: "Encontrados",
        instruction: "Instrucción: Desliza tu dedo o ratón suavemente para conectar las palabras en línea recta.",
        wordsTitle: "Palabras a buscar:",
        modalSuccessTitle: "¡Nivel Validado! 🎶",
        modalSuccessDesc: "¿Listo para el siguiente compás?",
        modalFinalTitle: "¡Recorrido CEMUCHCA Completado! 🏆",
        modalFinalDesc: "¡Felicidades! Completaste todos los niveles musicales con el Círculo de Músicos Cristianos Capois!",
        nextBtn: "Siguiente Nivel",
        replayBtn: "Jugar de Nuevo",
        timeLabel: "Tiempo empleado:",
        muteTitle: "Silenciar música",
        unmuteTitle: "Activar música"
    }
};

// 20 Niveaux de 6 mots courts chacun autour de l'art de la musique (FR, EN, ES)
const LEVELS = [
    {
        title: { fr: "Niveau 1 : Notes & Gammes", en: "Level 1: Notes & Scales", es: "Nivel 1: Notas y Escalas" },
        words: {
            fr: ["DO", "RE", "MI", "FA", "SOL", "LA"],
            en: ["NOTE", "SCALE", "TONE", "PITCH", "KEY", "MODE"],
            es: ["NOTA", "ESCALA", "TONO", "CLAVE", "MODO", "RITMO"]
        }
    },
    {
        title: { fr: "Niveau 2 : Sons & Timbres", en: "Level 2: Sounds & Timbres", es: "Nivel 2: Sonidos y Timbres" },
        words: {
            fr: ["SON", "TIMBRE", "ECHO", "BRUIT", "VOIX", "ONDE"],
            en: ["SOUND", "TIMBRE", "ECHO", "VOICE", "WAVE", "RING"],
            es: ["SONIDO", "TIMBRE", "ECO", "VOZ", "ONDA", "TIMBRE"]
        }
    },
    {
        title: { fr: "Niveau 3 : Nuances & Intensité", en: "Level 3: Dynamics & Nuances", es: "Nivel 3: Matices e Intensidad" },
        words: {
            fr: ["PIANO", "FORTE", "DOUX", "CRESC", "LENT", "VIF"],
            en: ["PIANO", "FORTE", "SOFT", "LOUD", "SLOW", "FAST"],
            es: ["PIANO", "FORTE", "SUAVE", "FUERTE", "LENTO", "VIVO"]
        }
    },
    {
        title: { fr: "Niveau 4 : Rythme & Mesure", en: "Level 4: Rhythm & Meter", es: "Nivel 4: Ritmo y Compás" },
        words: {
            fr: ["RYTHME", "TEMPO", "MESURE", "TEMPS", "BEAT", "PULSE"],
            en: ["RHYTHM", "TEMPO", "METER", "BEAT", "PULSE", "TIME"],
            es: ["RITMO", "TEMPO", "COMPAS", "TIEMPO", "PULSO", "GOLPE"]
        }
    },
    {
        title: { fr: "Niveau 5 : Accords & Harmonie", en: "Level 5: Chords & Harmony", es: "Nivel 5: Acordes y Armonía" },
        words: {
            fr: ["ACCORD", "GAMME", "TIERCE", "QUINTE", "TONIC", "MAJEUR"],
            en: ["CHORD", "HARMONY", "THIRD", "FIFTH", "TONIC", "MAJOR"],
            es: ["ACORDE", "ARMONIA", "TERCERA", "QUINTA", "TONICA", "MAYOR"]
        }
    },
    {
        title: { fr: "Niveau 6 : Partition & Écriture", en: "Level 6: Sheet Music & Notation", es: "Nivel 6: Partitura y Escritura" },
        words: {
            fr: ["PORTEE", "CLEF", "BLANCHE", "NOIRE", "CROCHE", "PAUSE"],
            en: ["STAFF", "CLEF", "QUARTER", "EIGHTH", "REST", "BAR"],
            es: ["PENTAGR", "CLAVE", "NEGRA", "BLANCA", "CORCHEA", "SILENCIO"]
        }
    },
    {
        title: { fr: "Niveau 7 : Claviers & Touches", en: "Level 7: Keyboards & Keys", es: "Nivel 7: Teclados y Teclas" },
        words: {
            fr: ["PIANO", "ORGUE", "CLAVIER", "TOUCHE", "PEDALE", "JAZZ"],
            en: ["PIANO", "ORGAN", "KEYS", "PEDAL", "JAZZ", "CHORD"],
            es: ["PIANO", "ORGANO", "TECLADO", "TECLA", "PEDAL", "JAZZ"]
        }
    },
    {
        title: { fr: "Niveau 8 : Cordes & Frottés", en: "Level 8: Strings & Bowed", es: "Nivel 8: Cuerdas y Arco" },
        words: {
            fr: ["CORDE", "ARCHET", "VIOLON", "CELLO", "HARPE", "GUITARE"],
            en: ["STRING", "BOW", "VIOLIN", "CELLO", "HARP", "GUITAR"],
            es: ["CUERDA", "ARCO", "VIOLIN", "CELLO", "ARPA", "GUITARRA"]
        }
    },
    {
        title: { fr: "Niveau 9 : Vents & Souffle", en: "Level 9: Winds & Breath", es: "Nivel 9: Vientos y Soplo" },
        words: {
            fr: ["SOUFFLE", "FLUTE", "COR", "TROMPE", "ANCHE", "VENT"],
            en: ["BREATH", "FLUTE", "HORN", "REED", "WIND", "BRASS"],
            es: ["SOPLO", "FLAUTA", "TROMPA", "CAÑA", "VIENTO", "METAL"]
        }
    },
    {
        title: { fr: "Niveau 10 : Percussions & Frappe", en: "Level 10: Percussion & Strike", es: "Nivel 10: Percusión y Golpe" },
        words: {
            fr: ["TAMBOUR", "CAISSE", "CYMBALE", "BAGUET", "PEAU", "FRAPPE"],
            en: ["DRUM", "SNARE", "CYMBAL", "MALLET", "HEAD", "STRIKE"],
            es: ["TAMBOR", "CAJA", "PLATILLO", "BAQUETA", "PARCHE", "GOLPE"]
        }
    },
    {
        title: { fr: "Niveau 11 : Voix & Chant", en: "Level 11: Voice & Singing", es: "Nivel 11: Voz y Canto" },
        words: {
            fr: ["CHANT", "CHOEUR", "SOLO", "DUO", "TRIO", "HYMNE"],
            en: ["SING", "CHOIR", "SOLO", "DUET", "TRIO", "HYMN"],
            es: ["CANTO", "CORO", "SOLO", "DUO", "TRIO", "HIMNO"]
        }
    },
    {
        title: { fr: "Niveau 12 : Direction & Ensemble", en: "Level 12: Conducting & Ensemble", es: "Nivel 12: Dirección y Conjunto" },
        words: {
            fr: ["CHEF", "GROUPE", "CERCLE", "SALLE", "SCENE", "PUBLIC"],
            en: ["BAND", "GROUP", "CIRCLE", "STAGE", "HALL", "CROWD"],
            es: ["BANDA", "GRUPO", "CIRCULO", "ESCENA", "SALA", "PUBLICO"]
        }
    },
    {
        title: { fr: "Niveau 13 : Intervalles & Degrés", en: "Level 13: Intervals & Degrees", es: "Nivel 13: Intervalos y Grados" },
        words: {
            fr: ["TON", "DEMI", "OCTAVE", "SIXTE", "SEPTI", "DEGRE"],
            en: ["STEP", "HALF", "OCTAVE", "SIXTH", "SEVENTH", "DEGREE"],
            es: ["TONO", "MEDIO", "OCTAVA", "SEXTA", "SEPTIMA", "GRADO"]
        }
    },
    {
        title: { fr: "Niveau 14 : Styles & Couleurs", en: "Level 14: Styles & Colors", es: "Nivel 14: Estilos y Colores" },
        words: {
            fr: ["GOSPEL", "JAZZ", "SOUL", "BLUES", "CLASSI", "LOUNGE"],
            en: ["GOSPEL", "JAZZ", "SOUL", "BLUES", "CLASSIC", "GROOVE"],
            es: ["GOSPEL", "JAZZ", "SOUL", "BLUES", "CLASICO", "GROOVE"]
        }
    },
    {
        title: { fr: "Niveau 15 : Articulation & Toucher", en: "Level 15: Articulation & Touch", es: "Nivel 15: Articulación y Toque" },
        words: {
            fr: ["LEGATO", "STACCAT", "COULE", "POUSSE", "TIRE", "ACCENT"],
            en: ["LEGATO", "STACCAT", "SLUR", "DOWN", "UP", "ACCENT"],
            es: ["LEGATO", "STACCAT", "LIGADURA", "ABAJO", "ARRIBA", "ACENTO"]
        }
    },
    {
        title: { fr: "Niveau 16 : Louange & Adoration", en: "Level 16: Praise & Worship", es: "Nivel 16: Alabanza y Adoración" },
        words: {
            fr: ["LOUANGE", "PRIERE", "JOIE", "PAIX", "GRACE", "FOI"],
            en: ["PRAISE", "PRAYER", "JOY", "PEACE", "GRACE", "FAITH"],
            es: ["ALABANZA", "ORACION", "GOZO", "PAZ", "GRACIA", "FE"]
        }
    },
    {
        title: { fr: "Niveau 17 : Studio & Sonorisation", en: "Level 17: Studio & Sound", es: "Nivel 17: Estudio y Sonido" },
        words: {
            fr: ["MICRO", "MIXAGE", "CASQUE", "CABLE", "AMPLI", "PISTE"],
            en: ["MIC", "MIX", "HEADSET", "CABLE", "AMP", "TRACK"],
            es: ["MICRO", "MEZCLA", "CASCO", "CABLE", "AMPLI", "PISTA"]
        }
    },
    {
        title: { fr: "Niveau 18 : Improvisation & Swing", en: "Level 18: Improvisation & Swing", es: "Nivel 18: Improvisación y Swing" },
        words: {
            fr: ["SWING", "RIFF", "SOLO", "GROOVE", "LIBRE", "FLUIDE"],
            en: ["SWING", "RIFF", "SOLO", "GROOVE", "FREE", "FLOW"],
            es: ["SWING", "RIFF", "SOLO", "GROOVE", "LIBRE", "FLUIR"]
        }
    },
    {
        title: { fr: "Niveau 19 : Répétition & Pratique", en: "Level 19: Rehearsal & Practice", es: "Nivel 19: Ensayo y Práctica" },
        words: {
            fr: ["REPETE", "ETUDE", "GAMME", "EXERC", "ECOUTE", "SUIVI"],
            en: ["REHEARS", "STUDY", "SCALE", "DRILL", "LISTEN", "FOCUS"],
            es: ["ENSAYO", "ESTUDIO", "ESCALA", "PRACTIC", "ESCUCHA", "ATENTO"]
        }
    },
    {
        title: { fr: "Niveau 20 : CEMUCHCA Ultime", en: "Level 20: Ultimate CEMUCHCA", es: "Nivel 20: CEMUCHCA Último" },
        words: {
            fr: ["MUSIQUE", "CERCLE", "CAPOIS", "HARMON", "CHRETIEN", "ART"],
            en: ["MUSIC", "CIRCLE", "CAPOIS", "HARMONY", "CHRIST", "ART"],
            es: ["MUSICA", "CIRCULO", "CAPOIS", "ARMONIA", "CRISTIAN", "ARTE"]
        }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
const GRID_SIZE = 10;

// --- ANIMATION MUSICALE : JAZZ PIANO (DO-RE-MI-FA-SOL-LA-SI-DO) EN BOUCLE ---
let audioCtx = null;
let jazzLoopTimer = null;
let isMuted = false;
let stepIndex = 0;

// Fréquences de la gamme majeure de Do (C4 à C5) : Do - Ré - Mi - Fa - Sol - La - Si - Do
const C_MAJOR_SCALE = [
    261.63, // Do4 (C4)
    293.66, // Ré4 (D4)
    329.63, // Mi4 (E4)
    349.23, // Fa4 (F4)
    392.00, // Sol4 (G4)
    440.00, // La4 (A4)
    493.88, // Si4 (B4)
    523.25  // Do5 (C5)
];

// Accords de couleur jazz (Maj7 / 9 / 6) accompagnant la boucle
const JAZZ_CHORDS = [
    [130.81, 196.00, 246.94, 293.66], // Cmaj9 (Do - Sol - Si - Ré)
    [146.83, 220.00, 261.63, 329.63], // Dm9 (Ré - La - Do - Mi)
    [174.61, 220.00, 261.63, 329.63], // Fmaj7 (Fa - La - Do - Mi)
    [196.00, 246.94, 293.66, 349.23]  // G7sus / G9 (Sol - Si - Ré - Fa)
];

// Motif mélodique jazz basé sur Do-Ré-Mi-Fa-Sol-La-Si-Do avec syncope et montée/descente
const JAZZ_MELODY_PATTERN = [
    { noteIdx: 0, dur: 0.45, offset: 0.00 },  // Do
    { noteIdx: 2, dur: 0.35, offset: 0.42 },  // Mi (syncopé)
    { noteIdx: 4, dur: 0.50, offset: 0.78 },  // Sol
    { noteIdx: 6, dur: 0.40, offset: 1.25 },  // Si
    { noteIdx: 7, dur: 0.55, offset: 1.62 },  // Do aigu
    { noteIdx: 5, dur: 0.40, offset: 2.15 },  // La
    { noteIdx: 3, dur: 0.40, offset: 2.52 },  // Fa
    { noteIdx: 1, dur: 0.55, offset: 2.90 }   // Ré
];

function initAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }
}

function playPianoNote(freq, duration = 0.5, velocity = 0.06, type = 'triangle') {
    if (isMuted || !audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const overtone = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    // Légère harmonique chaude pour évoquer un piano électrique / jazz acoustique
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, now);

    const overtoneGain = audioCtx.createGain();
    overtoneGain.gain.setValueAtTime(velocity * 0.25, now);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0008, now + duration * 0.7);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(freq * 4, 2400), now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.5, 400), now + duration);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(velocity, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + duration);

    osc.connect(filter);
    overtone.connect(overtoneGain);
    overtoneGain.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + duration + 0.02);
    overtone.stop(now + duration + 0.02);
}

function playJazzBar() {
    if (isMuted) return;
    initAudioContext();
    if (!audioCtx) return;

    const chord = JAZZ_CHORDS[stepIndex % JAZZ_CHORDS.length];
    // Voicing jazz doux en début de mesure
    chord.forEach((cFreq, idx) => {
        playPianoNote(cFreq, 1.6, 0.022 - idx * 0.003, 'sine');
    });

    // Notes mélodiques de la gamme Do-Ré-Mi-Fa-Sol-La-Si-Do en style jazz
    JAZZ_MELODY_PATTERN.forEach((step) => {
        const freq = C_MAJOR_SCALE[step.noteIdx];
        setTimeout(() => {
            if (!isMuted) {
                playPianoNote(freq, step.dur, 0.055, 'triangle');
            }
        }, step.offset * 1000);
    });

    stepIndex++;
}

function startJazzLoop() {
    stopJazzLoop();
    if (isMuted) return;
    playJazzBar();
    jazzLoopTimer = setInterval(() => {
        if (!isMuted) {
            playJazzBar();
        }
    }, 3400);
}

function stopJazzLoop() {
    if (jazzLoopTimer) {
        clearInterval(jazzLoopTimer);
        jazzLoopTimer = null;
    }
}

function updateMuteButtonUI() {
    const btn = document.getElementById('muteToggleBtn');
    const t = I18N[currentLang];
    if (isMuted) {
        btn.innerText = '🔇';
        btn.classList.add('muted');
        btn.title = t.unmuteTitle;
    } else {
        btn.innerText = '🔊';
        btn.classList.remove('muted');
        btn.title = t.muteTitle;
    }
}

function toggleMute() {
    isMuted = !isMuted;
    updateMuteButtonUI();
    if (isMuted) {
        stopJazzLoop();
    } else {
        startJazzLoop();
    }
}

function normalizeWord(word) {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, '').toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);
    updateMuteButtonUI();

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        updateMuteButtonUI();
        initLevel(currentLevelIndex);
    });

    document.getElementById('muteToggleBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMute();
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-light') ? '🌙' : '☀️';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    // Démarre ou reprend l'animation musicale au premier geste si non muet
    const unlockAudioOnGesture = () => {
        if (!isMuted && !jazzLoopTimer) {
            startJazzLoop();
        } else if (!isMuted && audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }
    };

    window.addEventListener('pointerdown', unlockAudioOnGesture, { once: false });
    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `⏱️ ${mins}:${secs}`;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (currentLang === 'fr') {
        if (mins > 0) return `${mins} minute(s) et ${secs} seconde(s)`;
        return `${secs} seconde(s)`;
    } else if (currentLang === 'es') {
        if (mins > 0) return `${mins} minuto(s) y ${secs} segundo(s)`;
        return `${secs} segundo(s)`;
    } else {
        if (mins > 0) return `${mins} minute(s) and ${secs} second(s)`;
        return `${secs} second(s)`;
    }
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];

    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();

    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
    startTimer();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = normalizeWord(word);

        while (!placed && attempts < 150) {
            attempts++;
            const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ original: word, clean: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${idx}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    if (!isMuted && !jazzLoopTimer) {
        startJazzLoop();
    }
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;

    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    const t = I18N[currentLang];

    placedWords.forEach((pw, idx) => {
        const isMatch = pw.clean === formedWord || pw.clean === formedWord.split('').reverse().join('');
        if (isMatch && !foundWords.has(idx)) {
            foundWords.add(idx);

            if (!isMuted) {
                playPianoNote(523.25, 0.35, 0.06, 'triangle');
                setTimeout(() => playPianoNote(659.25, 0.45, 0.06, 'triangle'), 90);
            }

            selectedCells.forEach(key => {
                const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
                if (cell) cell.classList.add('found');
            });

            const chip = document.getElementById(`chip-${idx}`);
            if (chip) chip.classList.add('found');

            document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

            if (foundWords.size === currentWords.length) {
                stopTimer();
                setTimeout(showLevelModal, 400);
            }
        }
    });

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    const timeFormatted = formatTime(secondsElapsed);

    document.getElementById('modalTimeResult').innerText = `${t.timeLabel} ${timeFormatted}`;

    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}