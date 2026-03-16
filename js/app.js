/**
 * app.js — Main Application JavaScript
 * Fit & Shine Wellness Centre
 * ============================================================
 * Sections:
 *  1. CONFIG & DATA
 *  2. WHATSAPP INTEGRATION
 *  3. PAGE ROUTING
 *  4. MOBILE NAVIGATION
 *  5. HERO SLIDER
 *  6. TREATMENT STRIP
 *  7. SKILL BAR ANIMATIONS
 *  8. COUNTER ANIMATIONS
 *  9. TESTIMONIALS
 * 10. BOOKING FORM
 * 11. KEYBOARD NAVIGATION
 * 12. INIT
 */

'use strict';

/* ============================================================
   1. CONFIG & DATA
   ============================================================ */

const CONFIG = {
  WA_NUMBER: '919824455234',
  WA_MSG: "Hi! I'd like to book a free consultation at Fit & Shine Wellness Centre.",
  SLIDE_INTERVAL: 5200,
};

const SLIDES_DATA = [
  {
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&h=700&fit=crop&q=85',
    title: 'Transform Your Body,<br><em>Transform Your Life</em>',
    sub: 'Expert-guided weight loss, advanced slimming treatments, and holistic wellness — personalised just for you by Kartik & Shilpa.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1400&h=700&fit=crop&q=85',
    title: 'Advanced Body<br><em>Slimming Treatments</em>',
    sub: 'Cutting-edge non-invasive technology to eliminate stubborn fat and sculpt your ideal body — zero pain, zero downtime, visible results.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&h=700&fit=crop&q=85',
    title: 'Expert Nutrition &amp;<br><em>Diet Consultation</em>',
    sub: 'Certified nutritionist Shilpa designs custom meal plans built around your lifestyle for sustainable, lasting transformation.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&h=700&fit=crop&q=85',
    title: 'Precision Inch Loss<br><em>Therapy Programs</em>',
    sub: 'Targeted localised treatments for belly, thighs, arms, and hips — measurable results from your very first session.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&h=700&fit=crop&q=85',
    title: 'Detox &amp; Wellness<br><em>Programs</em>',
    sub: 'Eliminate toxins, boost metabolism, and restore your energy with our signature 7–21 day cleansing programs.',
  },
];

const REVIEWS_DATA = [
  {
    name: 'Priya Sharma',
    location: 'Ahmedabad',
    text: 'Lost 15 kgs in just 3 months! The team is incredibly supportive and the program was perfectly tailored to my busy lifestyle. Truly life-changing!',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Rahul Patel',
    location: 'Gota',
    text: 'Amazing inch loss results — 4 inches off my waist in just 6 weeks. Best wellness centre in Ahmedabad, absolutely no question. Highly recommend!',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Sneha Desai',
    location: 'Ahmedabad',
    text: "Shilpa's nutrition plan completely changed my relationship with food. I don't feel like I'm on a diet at all, yet the results are truly remarkable.",
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  },
  {
    name: 'Amit Shah',
    location: 'Sarkhej',
    text: "Professional, results-driven, and genuinely caring. Lost stubborn belly fat I'd had for years. Wish I'd found Fit & Shine sooner — absolutely life-changing.",
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    name: 'Pooja Mehta',
    location: 'Ahmedabad',
    text: 'The post-pregnancy program was exactly what I needed — so safe and gentle, yet the results have been absolutely incredible. Thank you Kartik and Shilpa!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
  {
    name: 'Karan Trivedi',
    location: 'Gota',
    text: 'Completed the 21-day detox. Honestly life-changing — my energy is through the roof, skin is glowing, and I\'ve lost 8 kgs. Highly recommended to everyone!',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

/* ============================================================
   2. WHATSAPP INTEGRATION
   ============================================================ */

/**
 * Opens WhatsApp with a pre-filled message to the business number.
 */
function openWA() {
  const url =
    'https://wa.me/' +
    CONFIG.WA_NUMBER +
    '?text=' +
    encodeURIComponent(CONFIG.WA_MSG);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ============================================================
   3. PAGE ROUTING
   ============================================================ */

/**
 * Navigate to a page by ID.
 * @param {string} id - Page identifier (e.g. 'home', 'services')
 * @param {HTMLElement|null} btn - Nav button to mark as active
 */
function go(id, btn) {
  // Hide all pages
  document.querySelectorAll('.pg').forEach(function (p) {
    p.classList.remove('on');
  });

  // Show target page
  var target = document.getElementById('p-' + id);
  if (target) target.classList.add('on');

  // Update nav active states
  document.querySelectorAll('.nl').forEach(function (n) {
    n.classList.remove('act');
  });
  if (btn) btn.classList.add('act');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   4. MOBILE NAVIGATION
   ============================================================ */

function toggleMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('ham');
  m.classList.toggle('open');
  h.textContent = m.classList.contains('open') ? '✕' : '☰';
}

function closeMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('ham');
  m.classList.remove('open');
  h.textContent = '☰';
}

/* ============================================================
   5. HERO SLIDER
   ============================================================ */

var curSlide = 0;
var slideTimer = null;

function initSlider() {
  var slEl = document.getElementById('hs-slides');
  var dotEl = document.getElementById('hs-dots');

  if (!slEl || !dotEl) return;

  SLIDES_DATA.forEach(function (s, i) {
    // Create slide element
    var slide = document.createElement('div');
    slide.className = 'hs-slide';
    slide.style.backgroundImage = 'url(' + s.bg + ')';
    slEl.appendChild(slide);

    // Create dot
    var dot = document.createElement('button');
    dot.className = 'hs-dot' + (i === 0 ? ' on' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function () {
      goSlide(i);
    });
    dotEl.appendChild(dot);
  });

  // Start auto-play
  slideTimer = setInterval(function () {
    hSlide(1);
  }, CONFIG.SLIDE_INTERVAL);
}

/**
 * Navigate to a specific slide index.
 * @param {number} i - Target slide index
 */
function goSlide(i) {
  curSlide = i;

  var slEl = document.getElementById('hs-slides');
  var dotEl = document.getElementById('hs-dots');
  var titleEl = document.getElementById('hs-title');
  var subEl = document.getElementById('hs-sub');

  if (slEl) slEl.style.transform = 'translateX(-' + i + '00%)';

  // Update dots
  if (dotEl) {
    dotEl.querySelectorAll('.hs-dot').forEach(function (d, j) {
      d.className = 'hs-dot' + (j === i ? ' on' : '');
    });
  }

  // Update content
  if (titleEl) titleEl.innerHTML = SLIDES_DATA[i].title;
  if (subEl) subEl.textContent = SLIDES_DATA[i].sub;
}

/**
 * Move slider by direction.
 * @param {number} dir - 1 for next, -1 for previous
 */
function hSlide(dir) {
  curSlide = (curSlide + dir + SLIDES_DATA.length) % SLIDES_DATA.length;
  goSlide(curSlide);

  // Reset auto-play timer
  clearInterval(slideTimer);
  slideTimer = setInterval(function () {
    hSlide(1);
  }, CONFIG.SLIDE_INTERVAL);
}

/* ============================================================
   6. TREATMENT STRIP
   ============================================================ */

/**
 * Set active treatment item.
 * @param {HTMLElement} el - Clicked treatment item
 */
function selT(el) {
  document.querySelectorAll('.ts-item').forEach(function (t) {
    t.classList.remove('act');
  });
  el.classList.add('act');
}

/* ============================================================
   7. SKILL BAR ANIMATIONS
   ============================================================ */

function animateBars() {
  document.querySelectorAll('.sb-fill').forEach(function (bar) {
    bar.style.width = bar.getAttribute('data-w') + '%';
  });
}

/* ============================================================
   8. COUNTER ANIMATIONS
   ============================================================ */

/**
 * Animate a counter from 0 to target value.
 * @param {string} elId - Element ID
 * @param {number} target - Target number
 * @param {string} suffix - Suffix to append (e.g. '+', '%')
 * @param {number} dur - Duration in ms
 */
function animN(elId, target, suffix, dur) {
  var el = document.getElementById(elId);
  if (!el) return;

  var s = 0;
  var step = target / 60;
  var interval = Math.round(dur / 60);

  var iv = setInterval(function () {
    s += step;
    if (s >= target) {
      s = target;
      clearInterval(iv);
    }
    el.textContent = Math.round(s) + suffix;
  }, interval);
}

function initCounters() {
  // Hero stat bar
  animN('hn1', 1000, '+', 1800);
  animN('hn2', 15, '+', 1400);
  animN('hn3', 5000, '+', 2200);
  animN('hn4', 98, '%', 1600);

  // Stats section
  animN('s1', 1000, '+', 1800);
  animN('s2', 5000, '+', 2200);
  animN('s3', 15, '+', 1400);
  animN('s4', 6, '', 1200);
  animN('s5', 98, '%', 1600);
}

/* ============================================================
   9. TESTIMONIALS
   ============================================================ */

var testiIdx = 0;

/**
 * Create a testimonial card HTML element.
 * @param {string} className - CSS class name
 * @param {Object} r - Review data object
 * @returns {HTMLElement}
 */
function makeTestiCard(className, r) {
  var d = document.createElement('div');
  d.className = className;
  d.innerHTML =
    '<div class="testi-quote">\u201C</div>' +
    '<div class="testi-stars">\u2605\u2605\u2605\u2605\u2605</div>' +
    '<p class="testi-text">' + r.text + '</p>' +
    '<div class="testi-author">' +
    '<img src="' + r.img + '" class="ta-img" alt="' + r.name + '" loading="lazy">' +
    '<div>' +
    '<div class="ta-name">' + r.name + '</div>' +
    '<div class="ta-place">' + r.location + '</div>' +
    '</div>' +
    '</div>';
  return d;
}

function initTestimonials() {
  var track = document.getElementById('testi-track');
  var fullGrid = document.getElementById('full-testi-grid');

  REVIEWS_DATA.forEach(function (r) {
    if (track) track.appendChild(makeTestiCard('testi-card', r));
    if (fullGrid) fullGrid.appendChild(makeTestiCard('testi-card', r));
  });
}

/**
 * Slide testimonial carousel.
 * @param {number} dir - 1 for next, -1 for previous
 */
function tSlide(dir) {
  var track = document.getElementById('testi-track');
  if (!track) return;

  var cards = track.querySelectorAll('.testi-card');
  if (cards.length === 0) return;

  var visibleCount;
  if (window.innerWidth <= 768) {
    visibleCount = 1;
  } else if (window.innerWidth <= 1024) {
    visibleCount = 2;
  } else {
    visibleCount = 3;
  }

  var max = Math.max(0, cards.length - visibleCount);
  testiIdx = Math.max(0, Math.min(testiIdx + dir, max));

  var cardW = cards[0].offsetWidth + 22; // 22 = gap
  track.style.transform = 'translateX(-' + (testiIdx * cardW) + 'px)';
}

/* ============================================================
   10. BOOKING FORM
   ============================================================ */

function initBookingForm() {
  // Set minimum date to today
  var dateInput = document.getElementById('bk-date');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }
}

function bkSubmit(e) {
  e.preventDefault();

  var toast = document.getElementById('bk-toast');
  if (toast) {
    toast.style.display = 'block';
    setTimeout(function () {
      toast.style.display = 'none';
    }, 5000);
  }

  e.target.reset();
}

/* ============================================================
   11. KEYBOARD NAVIGATION
   ============================================================ */

function initKeyboard() {
  document.addEventListener('keydown', function (e) {
    var home = document.getElementById('p-home');
    if (home && home.classList.contains('on')) {
      if (e.key === 'ArrowLeft') hSlide(-1);
      if (e.key === 'ArrowRight') hSlide(1);
    }
  });
}

/* ============================================================
   12. INIT — runs when DOM is ready
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initSlider();
  initTestimonials();
  initBookingForm();
  initKeyboard();

  // Delay counters and bars slightly so they feel reactive
  setTimeout(function () {
    initCounters();
    animateBars();
  }, 500);
});
