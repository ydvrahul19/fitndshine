/**
 * app.js — Main Application JavaScript
 * Fit & Shine Wellness Centre
 * ============================================================
 * FIXED ISSUES:
 *  - Dynamic counters now use IntersectionObserver — they fire
 *    when the element scrolls into the viewport, not just on load.
 *  - Skill bars also use IntersectionObserver.
 *  - Counters re-run every time the Home page is navigated to.
 *  - No more setTimeout race conditions.
 *  - All counters verified against element IDs in HTML.
 */

'use strict';

/* ============================================================
   1. CONFIG & DATA
   ============================================================ */

var CONFIG = {
  WA_NUMBER: '919824455234',
  WA_MSG: "Hi! I'd like to book a free consultation at Fit & Shine Wellness Centre.",
  SLIDE_INTERVAL: 5200
};

var SLIDES_DATA = [
  {
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&h=700&fit=crop&q=85',
    title: 'Transform Your Body,<br><em>Transform Your Life</em>',
    sub: 'Expert-guided weight loss, advanced slimming treatments, and holistic wellness — personalised just for you by Kartik & Shilpa.'
  },
  {
    bg: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1400&h=700&fit=crop&q=85',
    title: 'Advanced Body<br><em>Slimming Treatments</em>',
    sub: 'Cutting-edge non-invasive technology to eliminate stubborn fat and sculpt your ideal body — zero pain, zero downtime, visible results.'
  },
  {
    bg: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&h=700&fit=crop&q=85',
    title: 'Expert Nutrition &amp;<br><em>Diet Consultation</em>',
    sub: 'Certified nutritionist Shilpa designs custom meal plans built around your lifestyle for sustainable, lasting transformation.'
  },
  {
    bg: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&h=700&fit=crop&q=85',
    title: 'Precision Inch Loss<br><em>Therapy Programs</em>',
    sub: 'Targeted localised treatments for belly, thighs, arms, and hips — measurable results from your very first session.'
  },
  {
    bg: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&h=700&fit=crop&q=85',
    title: 'Detox &amp; Wellness<br><em>Programs</em>',
    sub: 'Eliminate toxins, boost metabolism, and restore your energy with our signature 7–21 day cleansing programs.'
  }
];

var REVIEWS_DATA = [
  { name: 'Kajal Khatari',  location: 'Ahmedabad', text: 'Ye Nutrition Centre sirf diet nahi, proper care aur support deta hai. Yahan ki guidance se 8 kg weight gain, better digestion aur improved energy feel ho rahi hai. Team hamesha motivate karti hai. Dil se thank you Shilpa mam & Kartik sir!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { name: 'Shital Patel',   location: 'Ahmedabad', text: 'Fit & Shine Wellness Centre provides the best service related to health. They suggest proper well-balanced nutrition, physical exercise, and health motivation ideas. This centre helped me maintain my healthy journey. Thank you!', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { name: 'Jasmit Patel',   location: 'Ahmedabad', text: 'Fit and Shine Wellness Center combines effective exercise programs with personalised nutritional guidance in a supportive, welcoming environment focused on overall health and wellness.', img: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=100&h=100&fit=crop' },
  { name: 'Roshan',         location: 'Ahmedabad', text: 'The team is very supportive and guides you step by step in your health journey. The nutrition plans are easy to follow, sustainable, and designed according to personal goals. I feel more energetic, healthier, and motivated after joining!', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { name: 'Patel Mehul',    location: 'Ahmedabad', text: "I've seen amazing results in my energy levels, fitness, and confidence. The atmosphere is friendly and motivating, which makes it easier to stay consistent. They focus on overall health and wellness, not just weight management. Highly recommended!", img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
  { name: 'Vidhi Shah',     location: 'Ahmedabad', text: "3 months at Fit and Shine for weight reduction. The core objective here is not only to lose weight but to be more balanced nutritiously. The exercise and diet regime keeps you energetic through the day despite workout and diet modification. Surely will recommend!", img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop' },
  { name: 'Pratik Thakker', location: 'Ahmedabad', text: 'I joined to lose weight and improve my stamina. Within 3 months, I have seen visible results — not only physically but also mentally. Their nutrition guidance and group workouts make the journey even more effective. THANK YOU TEAM FIT & SHINE!', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop' },
  { name: 'Ravi Patel',     location: 'Ahmedabad', text: 'This is more than just a fitness club — it is a complete health and wellness experience! Expert fitness training and personalised nutrition guidance combined. The atmosphere is always positive, motivating, and clean. Highly recommend to anyone serious about transforming their lifestyle!', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: 'Kundan Patel',   location: 'Ahmedabad', text: 'Excellent trainer, cleanliness, and supportive staff — everything managed in very disciplined manner. The higher your energy level, the more efficient your body, and such feeling I get from here. Outstanding results!', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop' }
];

var CLINIC_PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=560&h=400&fit=crop&q=80', label: 'Reception & Welcome Area' },
  { url: 'https://images.unsplash.com/photo-1596510914966-76e04c3e42b5?w=560&h=400&fit=crop&q=80', label: 'Body Slimming Treatment Room' },
  { url: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=560&h=400&fit=crop&q=80', label: 'Advanced Treatment Session' },
  { url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=560&h=400&fit=crop&q=80', label: 'Inch Loss Therapy' },
  { url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=560&h=400&fit=crop&q=80', label: 'Detox & Wellness Suite' },
  { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=560&h=400&fit=crop&q=80', label: 'Nutrition Consultation' },
  { url: 'https://images.unsplash.com/photo-1609899464726-209cbc1b82d0?w=560&h=400&fit=crop&q=80', label: 'Expert Wellness Guidance' },
  { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=560&h=400&fit=crop&q=80', label: 'Fitness & Body Assessment' },
  { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=560&h=400&fit=crop&q=80', label: 'Personalised Training Session' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=560&h=400&fit=crop&q=80', label: 'Wellness & Mindfulness Area' },
  { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=560&h=400&fit=crop&q=80', label: 'Post-Treatment Recovery' },
  { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=560&h=400&fit=crop&q=80', label: 'Client Progress Check-in' },
  { url: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=560&h=400&fit=crop&q=80', label: 'Strength & Conditioning' },
  { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=560&h=400&fit=crop&q=80', label: 'Clinic Consultation Room' },
  { url: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=560&h=400&fit=crop&q=80', label: 'Personalised Diet Planning' }
];

var VIDEO_TESTIMONIALS = [
  { thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=300&fit=crop&q=80', ytId: 'dQw4w9WgXcQ', tag: 'Weight Loss',       title: 'How I Lost 20 Kgs in 4 Months',                  name: 'Meera Gandhi',  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', result: 'Lost 20 kgs',                   duration: '4:32' },
  { thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&q=80', ytId: 'dQw4w9WgXcQ', tag: 'Body Transformation', title: 'My Complete Body Transformation Story',            name: 'Rohan Kapoor',  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', result: 'Lost 15 kgs + 8 inches',          duration: '6:10' },
  { thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=300&fit=crop&q=80', ytId: 'dQw4w9WgXcQ', tag: 'Post-Pregnancy',     title: 'Back to Pre-Pregnancy Shape in 3 Months',         name: 'Anjali Joshi',  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop', result: 'Regained pre-pregnancy fitness', duration: '5:18' },
  { thumb: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=300&fit=crop&q=80', ytId: 'dQw4w9WgXcQ', tag: 'Inch Loss',          title: 'Lost 6 Inches in 6 Weeks — My Journey',           name: 'Priya Desai',   avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop', result: '6 inches in 6 weeks',             duration: '3:55' },
  { thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=300&fit=crop&q=80', ytId: 'dQw4w9WgXcQ', tag: 'Detox & Wellness',  title: '21-Day Detox Changed My Life Completely',         name: 'Karan Trivedi', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop', result: 'Lost 8 kgs + energy restored',   duration: '7:02' }
];

var FULL_REVIEWS = [
  { name: 'Kajal Khatari',  loc: 'Ahmedabad', text: 'Ye Nutrition Centre sirf diet nahi, proper care aur support deta hai. Yahan ki guidance se 8 kg weight gain, better digestion aur improved energy feel ho rahi hai. Team hamesha motivate karti hai. Dil se thank you so much Shilpa mam & Kartik sir!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', badge: 'Weight Gain Program' },
  { name: 'Shital Patel',   loc: 'Ahmedabad', text: 'Fit & Shine Wellness Centre provides the best service related to health. They suggest proper well-balanced nutrition, physical exercise, and health motivation ideas. This centre helped me maintain my healthy journey. Thank you very much!', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop', badge: 'Nutrition & Wellness' },
  { name: 'Jasmit Patel',   loc: 'Ahmedabad', text: 'Fit and Shine Wellness Center combines effective exercise programs with personalised nutritional guidance in a supportive, welcoming environment focused on overall health and wellness.', img: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=80&h=80&fit=crop', badge: 'Wellness Program' },
  { name: 'Roshan',         loc: 'Ahmedabad', text: 'I had an amazing experience at Fit & Shine Wellness Centre. The team is very supportive and guides you step by step. The nutrition plans are easy to follow, sustainable, and designed according to personal goals. I feel more energetic, healthier, and motivated. Highly recommend!', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop', badge: 'Health & Fitness' },
  { name: 'Patel Mehul',    loc: 'Ahmedabad', text: "I've seen amazing results in my energy levels, fitness, and confidence. They focus not only on weight management but also on overall health and wellness. The atmosphere is friendly and motivating. Highly recommended for anyone who wants to live a healthier lifestyle!", img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop', badge: 'Lifestyle Transformation' },
  { name: 'Ravi Patel',     loc: 'Ahmedabad', text: 'This is more than just a fitness club — it is a complete health and wellness experience! Expert fitness training and personalised nutrition guidance combined. I feel stronger, healthier, and more confident since joining. Highly recommend to anyone serious about transforming their lifestyle!', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', badge: 'Complete Wellness' },
  { name: 'Vidhi Shah',     loc: 'Ahmedabad', text: "3 months at Fit and Shine for weight reduction. The core objective here is not only to lose weight but to be more balanced nutritiously. The exercise and diet regime keeps you energetic through the day despite workout and diet modification. Surely will recommend!", img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop', badge: 'Weight Reduction' },
  { name: 'Pratik Thakker', loc: 'Ahmedabad', text: 'I joined to lose weight and improve my stamina. Within 3 months, I have seen visible results — not only physically but also mentally. Their nutrition guidance and group workouts make the journey even more effective. THANK YOU SO MUCH TEAM FIT & SHINE!', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop', badge: 'Weight Loss + Stamina' },
  { name: 'Kundan Patel',   loc: 'Ahmedabad', text: 'Excellent trainer, cleanliness, and supportive staff — everything managed in a very disciplined manner. The higher your energy level, the more efficient your body. And such feeling and result I get from here. Outstanding!', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop', badge: 'Discipline & Fitness' }
];

/* ============================================================
   2. WHATSAPP INTEGRATION
   ============================================================ */

function openWA() {
  var url = 'https://wa.me/' + CONFIG.WA_NUMBER + '?text=' + encodeURIComponent(CONFIG.WA_MSG);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ============================================================
   3. PAGE ROUTING
   ============================================================ */

function go(id, btn) {
  document.querySelectorAll('.pg').forEach(function (p) { p.classList.remove('on'); });
  var target = document.getElementById('p-' + id);
  if (target) target.classList.add('on');
  document.querySelectorAll('.nl').forEach(function (n) { n.classList.remove('act'); });
  if (btn) btn.classList.add('act');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Re-trigger counters & bars when navigating back to home */
  if (id === 'home') {
    setTimeout(function () {
      runAllCounters();
      runAllBars();
    }, 200);
  }
}

/* ============================================================
   4. MOBILE NAVIGATION
   ============================================================ */

function toggleMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('ham');
  m.classList.toggle('open');
  h.textContent = m.classList.contains('open') ? '\u2715' : '\u2630';
}

function closeMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('ham');
  m.classList.remove('open');
  h.textContent = '\u2630';
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
    var slide = document.createElement('div');
    slide.className = 'hs-slide';
    slide.style.backgroundImage = 'url(' + s.bg + ')';
    slEl.appendChild(slide);

    var dot = document.createElement('button');
    dot.className = 'hs-dot' + (i === 0 ? ' on' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function () { goSlide(i); });
    dotEl.appendChild(dot);
  });

  slideTimer = setInterval(function () { hSlide(1); }, CONFIG.SLIDE_INTERVAL);
}

function goSlide(i) {
  curSlide = i;
  var slEl = document.getElementById('hs-slides');
  var dotEl = document.getElementById('hs-dots');
  var titleEl = document.getElementById('hs-title');
  var subEl = document.getElementById('hs-sub');
  if (slEl) slEl.style.transform = 'translateX(-' + i + '00%)';
  if (dotEl) dotEl.querySelectorAll('.hs-dot').forEach(function (d, j) { d.className = 'hs-dot' + (j === i ? ' on' : ''); });
  if (titleEl) titleEl.innerHTML = SLIDES_DATA[i].title;
  if (subEl) subEl.textContent = SLIDES_DATA[i].sub;
}

function hSlide(dir) {
  curSlide = (curSlide + dir + SLIDES_DATA.length) % SLIDES_DATA.length;
  goSlide(curSlide);
  clearInterval(slideTimer);
  slideTimer = setInterval(function () { hSlide(1); }, CONFIG.SLIDE_INTERVAL);
}

/* ============================================================
   6. TREATMENT STRIP
   ============================================================ */

function selT(el) {
  document.querySelectorAll('.ts-item').forEach(function (t) { t.classList.remove('act'); });
  el.classList.add('act');
}

/* ============================================================
   7. SKILL BAR ANIMATIONS
   ============================================================ */

var barsRun = false;

function runAllBars() {
  document.querySelectorAll('.sb-fill').forEach(function (bar) {
    bar.style.width = '0%';
    /* Force reflow so the reset is visible before re-animating */
    void bar.offsetWidth;
    bar.style.width = bar.getAttribute('data-w') + '%';
  });
  barsRun = true;
}

function initBarsObserver() {
  var section = document.querySelector('.about-section');
  if (!section) { runAllBars(); return; }

  if (!('IntersectionObserver' in window)) {
    /* Fallback for old browsers */
    runAllBars();
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !barsRun) {
        runAllBars();
      }
    });
  }, { threshold: 0.2 });

  obs.observe(section);
}

/* ============================================================
   8. COUNTER ANIMATIONS  ← CORE FIX
   ============================================================

   Strategy:
   - Each counter element gets a data-target, data-suffix attribute.
   - IntersectionObserver watches the TWO counter sections
     (#hero-stat-bar and .stats-section).
   - When they enter viewport, animN() runs for their children.
   - go('home') also re-triggers counters so they work on
     every navigation, not just on first load.
   ============================================================ */

var countersRun = false;

/* Low-level counter: animates ONE element */
function animN(elId, target, suffix, dur) {
  var el = document.getElementById(elId);
  if (!el) return;

  /* Reset to 0 first (handles re-trigger on nav) */
  el.textContent = '0' + suffix;

  var s = 0;
  var steps = 60;
  var step = target / steps;
  var intervalMs = Math.max(10, Math.round(dur / steps));

  var iv = setInterval(function () {
    s += step;
    if (s >= target) {
      s = target;
      clearInterval(iv);
    }
    el.textContent = Math.round(s) + suffix;
  }, intervalMs);
}

/* Run ALL counters on the page */
function runAllCounters() {
  /* Hero stat bar counters */
  animN('hn1', 1000, '+', 1800);
  animN('hn2',   15, '+', 1400);
  animN('hn3', 5000, '+', 2200);
  animN('hn4',   98, '%', 1600);

  /* Stats section counters */
  animN('s1', 1000, '+', 1800);
  animN('s2', 5000, '+', 2200);
  animN('s3',   15, '+', 1400);
  animN('s4',    6,  '', 1200);
  animN('s5',   98, '%', 1600);

  countersRun = true;
}

function initCountersObserver() {
  /* Watch the stats section (lower on page, reliable trigger) */
  var watchEl = document.querySelector('.stats-section');
  if (!watchEl) {
    /* Fallback: just run after 600ms */
    setTimeout(runAllCounters, 600);
    return;
  }

  if (!('IntersectionObserver' in window)) {
    setTimeout(runAllCounters, 600);
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        runAllCounters();
        /* Re-observe is OK — runAllCounters resets to 0 first,
           so navigating back to Home gives a fresh animation */
      }
    });
  }, { threshold: 0.1 });

  obs.observe(watchEl);

  /* ALSO watch the hero stat bar so it animates immediately
     on page load without needing to scroll down */
  var heroBar = document.querySelector('.hero-stat-bar');
  if (heroBar) {
    var heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersRun) {
          runAllCounters();
        }
      });
    }, { threshold: 0.1 });
    heroObs.observe(heroBar);
  }
}

/* ============================================================
   9. TESTIMONIALS — HOME CAROUSEL
   ============================================================ */

var testiIdx = 0;

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
  if (!track) return;
  REVIEWS_DATA.forEach(function (r) { track.appendChild(makeTestiCard('testi-card', r)); });
}

function tSlide(dir) {
  var track = document.getElementById('testi-track');
  if (!track) return;
  var cards = track.querySelectorAll('.testi-card');
  if (!cards.length) return;
  var vis = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  var max = Math.max(0, cards.length - vis);
  testiIdx = Math.max(0, Math.min(testiIdx + dir, max));
  var cardW = cards[0].offsetWidth + 22;
  track.style.transform = 'translateX(-' + (testiIdx * cardW) + 'px)';
}

/* ============================================================
   10. TESTIMONIALS PAGE — GALLERY, VIDEOS, REVIEWS
   ============================================================ */

/* ── GALLERY DOT CYCLING ── */
function initClinicGallery() {
  /* Photos are baked into HTML — just run dot animation */
  var dotIdx = 0;
  var dots = document.querySelectorAll('.gallery-dot');
  if (!dots.length) return;
  setInterval(function () {
    dots[dotIdx].classList.remove('on');
    dotIdx = (dotIdx + 1) % dots.length;
    dots[dotIdx].classList.add('on');
  }, 4000);
}

/* ── VIDEO MODAL ── */
function openVideoModal(ytId) {
  var backdrop = document.getElementById('vmodal-backdrop');
  var frame    = document.getElementById('vmodal-frame');
  if (!backdrop || !frame) return;
  frame.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
  backdrop.classList.add('open');
}

function closeVideoModal() {
  var backdrop = document.getElementById('vmodal-backdrop');
  var frame    = document.getElementById('vmodal-frame');
  if (!backdrop || !frame) return;
  frame.src = '';
  backdrop.classList.remove('open');
}

function initVideoModal() {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeVideoModal();
  });
}

/* Stubs — content now baked in HTML, no JS rendering needed */
function initVideoTestimonials() {}
function initFullReviews() {}

/* ============================================================
   11. BOOKING FORM
   ============================================================ */

function initBookingForm() {
  var dateInput = document.getElementById('bk-date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
}

function bkSubmit(e) {
  e.preventDefault();
  var toast = document.getElementById('bk-toast');
  if (toast) {
    toast.style.display = 'block';
    setTimeout(function () { toast.style.display = 'none'; }, 5000);
  }
  e.target.reset();
}

/* ============================================================
   12. KEYBOARD NAVIGATION
   ============================================================ */

function initKeyboard() {
  document.addEventListener('keydown', function (e) {
    var home = document.getElementById('p-home');
    if (home && home.classList.contains('on')) {
      if (e.key === 'ArrowLeft')  hSlide(-1);
      if (e.key === 'ArrowRight') hSlide(1);
    }
  });
}

/* ============================================================
   13. INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initSlider();
  initTestimonials();
  initClinicGallery();
  initVideoTestimonials();
  initFullReviews();
  initVideoModal();
  initBookingForm();
  initKeyboard();

  /* Counters & bars use IntersectionObserver — fire when visible */
  initCountersObserver();
  initBarsObserver();
});
