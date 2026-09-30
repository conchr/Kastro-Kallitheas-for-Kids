/* ============================================================
   ΚΑΣΤΡΟ ΚΑΛΛΙΘΕΑΣ — KIDS PRESENTATION SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------------------------------
    // DOM
    // --------------------------------------------------------
    const welcomeScreen       = document.getElementById('welcome-screen');
    const presentationCont    = document.getElementById('presentation-container');
    const startBtn            = document.getElementById('start-btn');
    const slidesWrapper       = document.getElementById('slides-wrapper');
    const progressBar         = document.getElementById('progress-bar');
    const currentPageEl       = document.getElementById('currentPage');
    const totalPagesEl        = document.getElementById('totalPages');
    const prevBtn             = document.getElementById('prevBtn');
    const nextBtn             = document.getElementById('nextBtn');

    let currentSlide = 1;
    const totalSlides = 15;
    let quizScore = 0;

    // --------------------------------------------------------
    // ΔΕΔΟΜΕΝΑ SLIDES
    // --------------------------------------------------------
    const slidesData = [
        // Slide 1 — Εισαγωγή
        {
            hero: '🏰',
            title: 'Καλώς ήρθατε στο Κάστρο!',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/city.jpg',
                alt: 'Το Κάστρο της Καλλιθέας'
            },
            bubble: 'Αυτό είναι το Κάστρο της Καλλιθέας! Ήταν μια πολύ σημαντική πόλη πριν από χιλιάδες χρόνια. Οι άνθρωποι ζούσαν εδώ και το κάστρο τους προστάτευε.'
        },

        // Slide 2 — Πότε χτίστηκε
        {
            hero: '🕰️',
            title: 'Πότε χτίστηκε το Κάστρο;',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/anaskafes.jpg',
                alt: 'Ανασκαφές στο κάστρο'
            },
            bubble: 'Το κάστρο χτίστηκε πριν από πολύ πολύ καιρό! Στην εποχή που ζούσαν οι αρχαίοι Έλληνες, περίπου <strong>2.500 χρόνια πριν</strong>! Φανταστείτε πόσο παλιό είναι!'
        },

        // Slide 3 — Τα τείχη
        {
            hero: '🧱',
            title: 'Τα Γιγαντιαία Τείχη',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/cityWalls.jpg',
                alt: 'Τα τείχη του κάστρου'
            },
            bubble: 'Το κάστρο είχε πολύ ψηλά και δυνατά τείχη! Αυτά τα τείχη προστάτευαν τους ανθρώπους που ζούσαν μέσα. Ήταν σαν ένα γιγαντιαίο αγκαλιάσμα που τους κρατούσε ασφαλείς!'
        },

        // Slide 4 — Οι πύργοι
        {
            hero: '🗼',
            title: 'Οι Ψηλοί Πύργοι',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/walls.jpg',
                alt: 'Οι πύργοι του κάστρου'
            },
            bubble: 'Στα τείχη υπήρχαν ψηλοί πύργοι! Από εκεί οι φύλακες μπορούσαν να βλέπουν μακριά και να προειδοποιούν αν έβλεπαν κάποιον εχθρό να έρχεται. Ήταν σαν τα <strong>μάτια του κάστρου</strong>!'
        },

        // Slide 5 — Ακρόπολη
        {
            hero: '⛰️',
            title: 'Η Ακρόπολη — Η Κορυφή του Κάστρου',
            bubble: 'Στην πιο ψηλή θέση του κάστρου ήταν η <strong>ακρόπολη</strong>! Ήταν το πιο ασφαλές μέρος. Αν κάποιος επιτεθόταν, όλοι μπορούσαν να τρέξουν εκεί για προστασία. Ήταν σαν το φρούριο μέσα στο φρούριο!'
        },

        // Slide 6 — Πύλες
        {
            hero: '🚪',
            title: 'Οι Πύλες — Η Είσοδος στο Κάστρο',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/cutyEnter.jpg',
                alt: 'Η είσοδος του κάστρου'
            },
            bubble: 'Για να μπεις στο κάστρο, έπρεπε να περάσεις από τις πύλες! Υπήρχαν μερικές πύλες και οι φύλακες τις φύλαγαν προσεκτικά. Μόνο <strong>φίλοι</strong> μπορούσαν να μπουν, όχι εχθροί!'
        },

        // Slide 7 — Ζωή στο κάστρο
        {
            hero: '🏘️',
            title: 'Η Ζωή Μέσα στο Κάστρο',
            bubble: 'Μέσα στο κάστρο ζούσαν πολλοί άνθρωποι! Είχαν σπίτια, δρόμους και ακόμα και <strong>αγορά</strong> όπου μπορούσαν να αγοράσουν τρόφιμα και ρούχα. Ήταν μια μικρή πόλη μέσα στα τείχη!'
        },

        // Slide 8 — Κτήριο 10
        {
            hero: '🏛️',
            title: 'Το Σπίτι Νούμερο 10',
            singleImage: {
                src: 'https://raw.githubusercontent.com/conchr/Kastro-Kallitheas/main/Ktirio10.jpg',
                alt: 'Το κτήριο 10'
            },
            bubble: 'Οι αρχαιολόγοι βρήκαν ένα μεγάλο σπίτι που το ονόμασαν <strong>«Κτήριο 10»</strong>. Από αυτό το σπίτι μάθαμε πολλά για τη ζωή των ανθρώπων που ζούσαν στο κάστρο! Ήταν σαν ένα παζλ που μας βοήθησε να καταλάβουμε την ιστορία.'
        },

        // Slide 9 — Σημασία
        {
            hero: '📖',
            title: 'Γιατί είναι Σημαντικό το Κάστρο;',
            bubble: 'Το Κάστρο της Καλλιθέας είναι σαν ένα <strong>βιβλίο ιστορίας</strong> που μπορούμε να «διαβάσουμε»! Μας διδάσκει πώς ζούσαν οι άνθρωποι πριν από χιλιάδες χρόνια και πώς προστατεύονταν. Κάθε πέτρα έχει μια ιστορία να μας πει!'
        },

        // Slide 10 — Quiz 1
        {
            quiz: true,
            quizIndex: 0,
            question: 'Πώς προστατεύονταν οι άνθρωποι στο κάστρο;',
            options: [
                { text: 'Με μαγικά ξόρκια', correct: false },
                { text: 'Με ψηλά τείχη και πύργους', correct: true },
                { text: 'Κρυβόντουσαν κάτω από τα κρεβάτια', correct: false }
            ]
        },

        // Slide 11 — Quiz 2
        {
            quiz: true,
            quizIndex: 1,
            question: 'Τι ήταν η ακρόπολη;',
            options: [
                { text: 'Ένα μεγάλο πάρκο με χλόη', correct: false },
                { text: 'Μια πισίνα για κολύμπι', correct: false },
                { text: 'Το πιο ασφαλές μέρος στο ψηλότερο σημείο', correct: true }
            ]
        },

        // Slide 12 — Quiz 3
        {
            quiz: true,
            quizIndex: 2,
            question: 'Τι έκαναν οι φύλακες στους πύργους;',
            options: [
                { text: 'Έπαιζαν παιχνίδια στο κινητό', correct: false },
                { text: 'Παρακολουθούσαν αν έρχονταν εχθροί', correct: true },
                { text: 'Κοιμόντουσαν όλη μέρα', correct: false }
            ]
        },

        // Slide 13 — Quiz 4
        {
            quiz: true,
            quizIndex: 3,
            question: 'Πώς μπαίνανε οι άνθρωποι στο κάστρο;',
            options: [
                { text: 'Πηδώντας από το τείχος', correct: false },
                { text: 'Από τις ειδικές πύλες', correct: true },
                { text: 'Με ελικόπτερο', correct: false }
            ]
        },

        // Slide 14 — Quiz 5
        {
            quiz: true,
            quizIndex: 4,
            question: 'Τι μάθαμε από το «Κτήριο 10»;',
            options: [
                { text: 'Πώς να φτιάχνουμε πίτσα', correct: false },
                { text: 'Ποιος θα νικήσει στο Πόκεμον', correct: false },
                { text: 'Πώς ζούσαν οι άνθρωποι στο κάστρο', correct: true }
            ]
        },

        // Slide 15 — Αποτελέσματα
        {
            results: true
        }
    ];

    // --------------------------------------------------------
    // BUILD SLIDES
    // --------------------------------------------------------
    function buildSlides() {
        slidesData.forEach((slide, idx) => {
            const el = document.createElement('div');
            el.className = 'slide';
            el.id = 'page-' + (idx + 1);

            let html = '<div class="slide-content">';

            if (slide.results) {
                // Final results slide
                html += `
                    <div class="hero-icon">🎉</div>
                    <h2 class="slide-title">Συγχαρητήρια!</h2>
                    <div class="bubble-text">
                        <p>Ολοκληρώσατε το κουίζ και μάθατε πολλά για το Κάστρο της Καλλιθέας!</p>
                    </div>

                    <p class="slide-text" style="font-weight:800; color: var(--coral-dark); margin-top: 0.5rem;">Το Σκορ Σας:</p>
                    <p class="final-score" id="final-score">0 / 5</p>
                    <p class="score-message" id="score-message"></p>

                    <div class="final-actions">
                        <button class="btn btn-sun" onclick="restartPresentation()">
                            <i class="fas fa-redo"></i> Ξανά από την Αρχή
                        </button>
                        <a href="https://conchr.github.io/Farsala-Center-Page/" class="btn btn-primary">
                            <i class="fas fa-home"></i> Κεντρική Σελίδα
                        </a>
                    </div>
                `;
            } else if (slide.quiz) {
                // Quiz slide
                html += `<div class="hero-icon">❓</div>`;
                html += `<h2 class="slide-title">Κουίζ Γνώσεων!</h2>`;
                html += `<div class="quiz-question-text">${slide.quizIndex + 1}. ${slide.question}</div>`;
                html += `<div class="quiz-container-inner">`;

                slide.options.forEach((opt, optIdx) => {
                    html += `<button class="quiz-option" data-correct="${opt.correct}" data-opt-index="${optIdx}">${opt.text}</button>`;
                });

                html += `</div>`;
                html += `<div class="feedback correct hidden">🎉 Μπράβο! Απάντησες σωστά!</div>`;
                html += `<div class="feedback incorrect hidden">😢 Λάθος! Δοκίμασε την επόμενη!</div>`;
                html += `<button class="next-question hidden">${slide.quizIndex < 4 ? 'Επόμενη Ερώτηση' : 'Δες τα Αποτελέσματα'} <i class="fas fa-arrow-right"></i></button>`;
            } else {
                // Regular slide
                if (slide.hero) html += `<div class="hero-icon">${slide.hero}</div>`;
                if (slide.title) html += `<h2 class="slide-title">${slide.title}</h2>`;
                if (slide.singleImage) {
                    html += `
                        <div class="image-container">
                            <img src="${slide.singleImage.src}" alt="${slide.singleImage.alt}">
                        </div>
                    `;
                }
                if (slide.bubble) {
                    html += `<div class="bubble-text"><p>${slide.bubble}</p></div>`;
                }
            }

            html += '</div>';
            el.innerHTML = html;
            slidesWrapper.appendChild(el);
        });

        // Attach quiz handlers
        attachQuizHandlers();
    }

    // --------------------------------------------------------
    // QUIZ HANDLERS
    // --------------------------------------------------------
    function attachQuizHandlers() {
        document.querySelectorAll('.slide').forEach(slideEl => {
            const options = slideEl.querySelectorAll('.quiz-option');
            if (!options.length) return;

            const feedbackCorrect = slideEl.querySelector('.feedback.correct');
            const feedbackIncorrect = slideEl.querySelector('.feedback.incorrect');
            const nextBtn = slideEl.querySelector('.next-question');
            const quizIndex = parseInt(slideEl.id.replace('page-', '')) - 10; // 0-4

            options.forEach(opt => {
                opt.addEventListener('click', function () {
                    // Disable all
                    options.forEach(o => o.disabled = true);

                    const isCorrect = this.dataset.correct === 'true';

                    if (isCorrect) {
                        this.classList.add('correct');
                        feedbackCorrect.classList.remove('hidden');
                        quizScore++;
                    } else {
                        this.classList.add('incorrect');
                        // Highlight the correct one
                        options.forEach(o => {
                            if (o.dataset.correct === 'true') o.classList.add('correct');
                        });
                        feedbackIncorrect.classList.remove('hidden');
                    }

                    // Show next button
                    if (nextBtn) {
                        nextBtn.classList.remove('hidden');
                        nextBtn.addEventListener('click', () => {
                            if (quizIndex < 4) {
                                showSlide(currentSlide + 1);
                            } else {
                                showSlide(15);
                            }
                        });
                    }
                });
            });
        });
    }

    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------
    function updateProgress() {
        const pct = (currentSlide / totalSlides) * 100;
        progressBar.style.width = pct + '%';
        currentPageEl.textContent = currentSlide;
    }

    function showSlide(index) {
        if (index < 1 || index > totalSlides) return;

        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

        const target = document.getElementById('page-' + index);
        if (target) {
            target.classList.add('active');
            if (slidesWrapper) slidesWrapper.scrollTop = 0;
        }

        currentSlide = index;
        prevBtn.disabled = (index === 1);
        nextBtn.disabled = (index === totalSlides);

        updateProgress();

        // On results slide, update score display
        if (index === totalSlides) {
            updateFinalScore();
        }
    }

    window.nextSlide = function () {
        // Block next if this is a quiz slide and the user hasn't answered
        const currentEl = document.getElementById('page-' + currentSlide);
        if (currentEl && currentEl.querySelector('.quiz-option')) {
            const nextQuestionBtn = currentEl.querySelector('.next-question');
            if (nextQuestionBtn && nextQuestionBtn.classList.contains('hidden')) {
                // hasn't answered yet — flash a hint
                const quizText = currentEl.querySelector('.quiz-question-text');
                if (quizText) {
                    quizText.style.animation = 'wrongShake 0.5s';
                    setTimeout(() => quizText.style.animation = '', 600);
                }
                return;
            }
        }
        if (currentSlide < totalSlides) showSlide(currentSlide + 1);
    };

    window.prevSlide = function () {
        if (currentSlide > 1) showSlide(currentSlide - 1);
    };

    // --------------------------------------------------------
    // FINAL SCORE
    // --------------------------------------------------------
    function updateFinalScore() {
        const scoreEl = document.getElementById('final-score');
        const msgEl = document.getElementById('score-message');
        if (!scoreEl || !msgEl) return;

        scoreEl.textContent = `${quizScore} / 5`;

        scoreEl.classList.remove('text-gold', 'text-green', 'text-coral');
        msgEl.classList.remove('text-green', 'text-blue', 'text-orange');

        if (quizScore === 5) {
            scoreEl.classList.add('text-gold');
            msgEl.textContent = '🏆 Τέλειο! Είσαι ειδικός στο Κάστρο της Καλλιθέας!';
            msgEl.classList.add('text-green');
        } else if (quizScore >= 3) {
            scoreEl.classList.add('text-green');
            msgEl.textContent = '👏 Πολύ καλά! Ξέρεις πολλά για το κάστρο!';
            msgEl.classList.add('text-blue');
        } else {
            scoreEl.classList.add('text-coral');
            msgEl.textContent = '📚 Καλή προσπάθεια! Διάβασε ξανά την παρουσίαση για να μάθεις περισσότερα!';
            msgEl.classList.add('text-orange');
        }
    }

    // --------------------------------------------------------
    // RESTART
    // --------------------------------------------------------
    window.restartPresentation = function () {
        // Reset quiz score
        quizScore = 0;

        // Reset all quiz slides
        document.querySelectorAll('.slide').forEach(slideEl => {
            const options = slideEl.querySelectorAll('.quiz-option');
            if (!options.length) return;

            options.forEach(o => {
                o.disabled = false;
                o.classList.remove('correct', 'incorrect');
            });

            const fc = slideEl.querySelector('.feedback.correct');
            const fi = slideEl.querySelector('.feedback.incorrect');
            const nq = slideEl.querySelector('.next-question');

            if (fc) fc.classList.add('hidden');
            if (fi) fi.classList.add('hidden');
            if (nq) nq.classList.add('hidden');
        });

        showSlide(1);
    };

    // --------------------------------------------------------
    // START BUTTON
    // --------------------------------------------------------
    startBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            presentationCont.classList.remove('hidden');
            document.body.classList.remove('no-scroll');
            showSlide(1);
        }, 800);
    });

    // Lock scroll while on welcome
    document.body.classList.add('no-scroll');

    // --------------------------------------------------------
    // BUTTONS
    // --------------------------------------------------------
    prevBtn.addEventListener('click', window.prevSlide);
    nextBtn.addEventListener('click', window.nextSlide);

    // --------------------------------------------------------
    // KEYBOARD
    // --------------------------------------------------------
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        // If on welcome screen and user presses Enter/Space → start
        if (!welcomeScreen.classList.contains('fade-out') &&
            welcomeScreen.style.display !== 'none') {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                startBtn.click();
            }
            return;
        }

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            window.nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.prevSlide();
        } else if (e.key === 'Home') {
            e.preventDefault();
            showSlide(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            showSlide(totalSlides);
        }
    });

    // --------------------------------------------------------
    // TOUCH SWIPE (μόνο σε non-quiz slides)
    // --------------------------------------------------------
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        // Μην κάνεις swipe αν ο χρήστης απάντησε σε quiz — αφήνουμε τα κουμπιά
        const target = e.target;
        if (target && target.classList && target.classList.contains('quiz-option')) {
            return;
        }

        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;

        // Μόνο οριζόντιο swipe (και όχι κάθετο scroll)
        if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) {
                window.nextSlide();
            } else {
                window.prevSlide();
            }
        }
    }, { passive: true });

    // --------------------------------------------------------
    // INIT
    // --------------------------------------------------------
    buildSlides();
    totalPagesEl.textContent = totalSlides;
});