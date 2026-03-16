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
  REVIEWS_DATA.forEach(function (r) {
    if (track) track.appendChild(makeTestiCard('testi-card', r));
  });
}

function tSlide(dir) {
  var track = document.getElementById('testi-track');
  if (!track) return;
  var cards = track.querySelectorAll('.testi-card');
  if (cards.length === 0) return;
  var visibleCount = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  var max = Math.max(0, cards.length - visibleCount);
  testiIdx = Math.max(0, Math.min(testiIdx + dir, max));
  var cardW = cards[0].offsetWidth + 22;
  track.style.transform = 'translateX(-' + (testiIdx * cardW) + 'px)';
}

/* ============================================================
   10. TESTIMONIALS PAGE — GALLERY, VIDEOS, REVIEWS
   ============================================================ */

var CLINIC_PHOTOS = [
  {url:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=560&h=400&fit=crop&q=80',label:'Reception & Welcome Area'},
  {url:'https://images.unsplash.com/photo-1596510914966-76e04c3e42b5?w=560&h=400&fit=crop&q=80',label:'Body Slimming Treatment Room'},
  {url:'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=560&h=400&fit=crop&q=80',label:'Advanced Treatment Session'},
  {url:'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=560&h=400&fit=crop&q=80',label:'Inch Loss Therapy'},
  {url:'https://images.unsplash.com/photo-1547592180-85f173990554?w=560&h=400&fit=crop&q=80',label:'Detox & Wellness Suite'},
  {url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=560&h=400&fit=crop&q=80',label:'Nutrition Consultation'},
  {url:'https://images.unsplash.com/photo-1609899464726-209cbc1b82d0?w=560&h=400&fit=crop&q=80',label:'Expert Wellness Guidance'},
  {url:'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=560&h=400&fit=crop&q=80',label:'Fitness & Body Assessment'},
  {url:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=560&h=400&fit=crop&q=80',label:'Personalised Training Session'},
  {url:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=560&h=400&fit=crop&q=80',label:'Wellness & Mindfulness Area'},
  {url:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=560&h=400&fit=crop&q=80',label:'Post-Treatment Recovery'},
  {url:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=560&h=400&fit=crop&q=80',label:'Client Progress Check-in'},
  {url:'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=560&h=400&fit=crop&q=80',label:'Strength & Conditioning'},
  {url:'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=560&h=400&fit=crop&q=80',label:'Clinic Consultation Room'},
  {url:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=560&h=400&fit=crop&q=80',label:'Personalised Diet Planning'},
];

var VIDEO_TESTIMONIALS = [
  {thumb:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=300&fit=crop&q=80',ytId:'dQw4w9WgXcQ',tag:'Weight Loss',title:'How I Lost 20 Kgs in 4 Months',name:'Meera Gandhi',avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',result:'Lost 20 kgs',duration:'4:32'},
  {thumb:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&q=80',ytId:'dQw4w9WgXcQ',tag:'Body Transformation',title:'My Complete Body Transformation Story',name:'Rohan Kapoor',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',result:'Lost 15 kgs + 8 inches',duration:'6:10'},
  {thumb:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=300&fit=crop&q=80',ytId:'dQw4w9WgXcQ',tag:'Post-Pregnancy',title:'Back to Pre-Pregnancy Shape in 3 Months',name:'Anjali Joshi',avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop',result:'Regained pre-pregnancy fitness',duration:'5:18'},
  {thumb:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=300&fit=crop&q=80',ytId:'dQw4w9WgXcQ',tag:'Inch Loss',title:'Lost 6 Inches in 6 Weeks — My Journey',name:'Priya Desai',avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop',result:'6 inches in 6 weeks',duration:'3:55'},
  {thumb:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=300&fit=crop&q=80',ytId:'dQw4w9WgXcQ',tag:'Detox & Wellness',title:'21-Day Detox Changed My Life Completely',name:'Karan Trivedi',avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',result:'Lost 8 kgs + energy restored',duration:'7:02'},
];

var FULL_REVIEWS = [
  {name:'Priya Sharma',loc:'Ahmedabad',text:'Lost 15 kgs in just 3 months! The team is incredibly supportive and the program was perfectly tailored to my busy lifestyle. The inch loss therapy is incredible.',img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',badge:'Weight Loss Program'},
  {name:'Rahul Patel',loc:'Gota',text:"Amazing results — 4 inches off my waist in just 6 weeks. Kartik's expertise and Shilpa's nutrition plan together made the impossible possible. Best in Ahmedabad!",img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',badge:'Inch Loss Therapy'},
  {name:'Sneha Desai',loc:'Ahmedabad',text:"Shilpa's nutrition consultation completely changed my relationship with food. I don't feel like I'm on a diet at all, yet the results are absolutely remarkable.",img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop',badge:'Nutrition Consultation'},
  {name:'Amit Shah',loc:'Sarkhej',text:"Professional, results-driven, and genuinely caring. Lost stubborn belly fat I'd had for years. The body slimming treatment was painless and incredibly effective.",img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop',badge:'Body Slimming'},
  {name:'Pooja Mehta',loc:'Ahmedabad',text:'The post-pregnancy program was exactly what I needed — so safe, so gentle, and the results have been absolutely incredible. Got back to my original weight in 3 months!',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop',badge:'Post-Pregnancy Care'},
  {name:'Karan Trivedi',loc:'Gota',text:"Completed the 21-day detox. Life-changing — my energy is through the roof, skin glowing, and I've lost 8 kgs. This clinic is unlike anything else in Ahmedabad.",img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',badge:'Detox Program'},
  {name:'Deepa Nair',loc:'Ahmedabad',text:'I had been struggling with weight for over 5 years and tried everything. Fit & Shine was the only place that truly understood my body and designed a plan that actually worked.',img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop',badge:'Weight Loss Program'},
  {name:'Vikram Joshi',loc:'Bopal',text:'The inch loss therapy combined with nutrition guidance was a game-changer. Lost 12 kgs over 10 weeks without any harsh dieting. Highly recommend to everyone!',img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop',badge:'Inch Loss + Nutrition'},
  {name:'Nisha Patel',loc:'Ahmedabad',text:'Absolutely loved the team here. Every session was professional and effective. Kartik and Shilpa genuinely care about each client's journey. Five stars without hesitation!',img:'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=80&h=80&fit=crop',badge:'Wellness Program'},
];

function initClinicGallery() {
  var track = document.getElementById('gallery-track');
  if (!track) return;

  var allPhotos = CLINIC_PHOTOS.concat(CLINIC_PHOTOS); // duplicate for seamless scroll
  allPhotos.forEach(function (p) {
    var d = document.createElement('div');
    d.className = 'gphoto';
    d.innerHTML = '<img src="' + p.url + '" alt="' + p.label + '" loading="lazy"><div class="gphoto-label">' + p.label + '</div>';
    track.appendChild(d);
  });

  // Dot cycling animation
  var dotIdx = 0;
  var dots = document.querySelectorAll('.gallery-dot');
  if (dots.length > 0) {
    setInterval(function () {
      dots[dotIdx].classList.remove('on');
      dotIdx = (dotIdx + 1) % dots.length;
      dots[dotIdx].classList.add('on');
    }, 4000);
  }
}

function initVideoTestimonials() {
  var grid = document.getElementById('video-testi-grid');
  if (!grid) return;

  VIDEO_TESTIMONIALS.forEach(function (v) {
    var d = document.createElement('div');
    d.className = 'vtcard';
    d.innerHTML =
      '<div class="vt-thumb">' +
        '<img src="' + v.thumb + '" alt="' + v.title + '" loading="lazy">' +
        '<div class="vt-overlay">' +
          '<div class="vt-play">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="#003d2e"><path d="M8 5v14l11-7z"/></svg>' +
          '</div>' +
        '</div>' +
        '<span class="vt-duration">' + v.duration + '</span>' +
      '</div>' +
      '<div class="vt-info">' +
        '<span class="vt-tag">' + v.tag + '</span>' +
        '<h3>' + v.title + '</h3>' +
        '<div class="vt-meta">' +
          '<img src="' + v.avatar + '" class="vt-avatar" alt="' + v.name + '" loading="lazy">' +
          '<div>' +
            '<span class="vt-name">' + v.name + '</span>' +
            '<div class="vt-result">&#10003; ' + v.result + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    (function (ytId, title) {
      d.addEventListener('click', function () { openVideoModal(ytId, title); });
    })(v.ytId, v.title);
    grid.appendChild(d);
  });
}

function initFullReviews() {
  var grid = document.getElementById('testi-reviews-grid');
  if (!grid) return;

  FULL_REVIEWS.forEach(function (r) {
    var d = document.createElement('div');
    d.className = 'tr-card';
    d.innerHTML =
      '<div class="tr-quote">\u201C</div>' +
      '<div class="tr-stars">\u2605\u2605\u2605\u2605\u2605</div>' +
      '<p class="tr-text">' + r.text + '</p>' +
      '<div class="tr-author">' +
        '<img src="' + r.img + '" class="tr-avatar" alt="' + r.name + '" loading="lazy">' +
        '<div>' +
          '<div class="tr-name">' + r.name + '</div>' +
          '<div class="tr-loc">' + r.loc + '</div>' +
          '<span class="tr-badge">' + r.badge + '</span>' +
        '</div>' +
      '</div>';
    grid.appendChild(d);
  });
}

/* ── VIDEO MODAL ── */
function openVideoModal(ytId, title) {
  var backdrop = document.getElementById('vmodal-backdrop');
  var frame = document.getElementById('vmodal-frame');
  if (!backdrop || !frame) return;
  frame.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
  backdrop.classList.add('open');
}

function closeVideoModal() {
  var backdrop = document.getElementById('vmodal-backdrop');
  var frame = document.getElementById('vmodal-frame');
  if (!backdrop || !frame) return;
  frame.src = '';
  backdrop.classList.remove('open');
}

function initVideoModal() {
  var closeBtn = document.getElementById('vmodal-close');
  var backdrop = document.getElementById('vmodal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeVideoModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeVideoModal();
  });
}

/* ============================================================
   11. BOOKING FORM
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
   12. KEYBOARD NAVIGATION
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
   13. INIT — runs when DOM is ready
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

  setTimeout(function () {
    initCounters();
    animateBars();
  }, 500);
});
