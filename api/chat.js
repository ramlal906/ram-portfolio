<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ram Lal — Business Analyst</title>
<meta name="description" content="Ram Lal — Business Analyst & Data Specialist. PwC Alumni. MS Business Analytics at Montclair State. Based in Jersey City, NJ.">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

:root {
  --black: #000000;
  --gray: #333333;
  --mid: #888888;
  --light: #cccccc;
  --rule: #e8e8e8;
  --bg: #ffffff;
  --bg2: #f7f7f5;
  --bg3: #f0f0ee;
  --accent: #000000;
  --accent-soft: #f0f0ff;
  --dark-bg: #0a0a0a;
  --green: #16a34a;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--bg);
  color: var(--black);
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--rule); }

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.1rem 3rem;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rule);
}

.nav-logo {
  font-family: 'Inter', sans-serif;
  font-weight: 900; font-size: 0.85rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--black); text-decoration: none;
}

.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; font-weight: 400;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--mid); text-decoration: none;
  transition: color 0.15s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute; bottom: -2px; left: 0; right: 0;
  height: 1px; background: var(--black);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.2s ease;
}
.nav-links a:hover { color: var(--black); }
.nav-links a:hover::after, .nav-links a.nav-active::after { transform: scaleX(1); }
.nav-links a.nav-active { color: var(--black); }

.nav-cta {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; font-weight: 500;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--bg); background: var(--black);
  border: none; padding: 0.55rem 1.4rem;
  cursor: pointer; text-decoration: none;
  transition: opacity 0.15s;
}
.nav-cta:hover { opacity: 0.75; }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  padding: 8rem 3rem 5rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
  border-bottom: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
}

/* Subtle dot grid background */
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, #e0e0e0 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.6;
  pointer-events: none;
}

/* Fade out at edges */
.hero::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 50%, transparent 30%, rgba(255,255,255,0.85) 70%);
  pointer-events: none;
}

.hero-left { position: relative; z-index: 1; }

.hero-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.62rem; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--mid);
  margin-bottom: 2rem;
  display: flex; align-items: center; gap: 1rem;
  animation: fadeUp 0.6s ease both;
}
.hero-eyebrow::before {
  content: ''; display: inline-block;
  width: 2.5rem; height: 1px; background: var(--black);
}

.avail-badge {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--green);
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 0.3rem 0.7rem;
  border-radius: 100px;
  margin-left: 1rem;
}
.avail-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--green);
  animation: pulse 2s ease infinite;
}
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

.hero h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(4.5rem, 9vw, 9rem);
  font-weight: 900;
  line-height: 0.93;
  letter-spacing: -0.04em;
  color: var(--black);
  margin-bottom: 2rem;
  animation: fadeUp 0.6s 0.1s ease both;
}
.hero h1 .light-word { font-weight: 300; color: var(--mid); }

.hero-desc {
  max-width: 500px;
  font-size: 1rem; color: var(--gray); line-height: 1.8;
  border-left: 3px solid var(--black);
  padding-left: 1.25rem;
  margin-bottom: 2.5rem;
  animation: fadeUp 0.6s 0.2s ease both;
}

.hero-actions {
  display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
  animation: fadeUp 0.6s 0.3s ease both;
}

.btn-black {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--bg); background: var(--black);
  border: 1px solid var(--black); padding: 0.9rem 2rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.2s;
}
.btn-black:hover { background: transparent; color: var(--black); }

.btn-outline {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--black); background: transparent;
  border: 1px solid var(--black); padding: 0.9rem 2rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.2s;
}
.btn-outline:hover { background: var(--black); color: var(--bg); }

/* Hero right stat panel */
.hero-right {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1px; background: var(--rule);
  border: 1px solid var(--rule);
  animation: fadeUp 0.6s 0.4s ease both;
}

.hero-stat-card {
  background: var(--bg);
  padding: 2rem 1.5rem;
  position: relative; overflow: hidden;
  transition: background 0.2s;
}
.hero-stat-card:hover { background: var(--bg2); }

.hero-stat-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--black);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.hero-stat-card:hover::before { transform: scaleX(1); }

.stat-big {
  font-family: 'Inter', sans-serif;
  font-size: 2.8rem; font-weight: 900;
  letter-spacing: -0.04em; color: var(--black);
  line-height: 1; margin-bottom: 0.4rem;
}

.stat-lbl {
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--mid);
  line-height: 1.5;
}

/* ── MARQUEE ── */
.marquee-wrap {
  padding: 1.25rem 0;
  background: var(--black);
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex; gap: 0;
  animation: marquee 30s linear infinite;
  width: max-content;
}
.marquee-track:hover { animation-play-state: paused; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-item {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0 2.5rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: rgba(255,255,255,0.5);
  white-space: nowrap;
  border-right: 1px solid rgba(255,255,255,0.1);
  transition: color 0.2s;
}
.marquee-item:hover { color: rgba(255,255,255,0.9); }

.m-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.3); }

/* ── SECTION COMMON ── */
.sec-marker {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--mid);
}

.section-heading {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 900; letter-spacing: -0.03em;
  color: var(--black); line-height: 1.05;
}

/* ── IMPACT ── */
#impact {
  padding: 7rem 3rem;
  background: var(--dark-bg);
  position: relative;
  border-bottom: 1px solid #111;
}

.impact-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 4rem;
}

.impact-heading {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900; letter-spacing: -0.03em; color: #fff;
  line-height: 1.05;
}

.impact-sub {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; letter-spacing: 0.1em;
  color: #444; text-transform: uppercase; max-width: 200px;
  text-align: right; line-height: 1.6;
}

.impact-grid {
  display: grid; grid-template-columns: repeat(4,1fr);
  border-top: 1px solid #1a1a1a;
}

.impact-cell {
  padding: 3rem 2rem;
  border-right: 1px solid #1a1a1a;
  position: relative; overflow: hidden;
  transition: background 0.3s;
}
.impact-cell:last-child { border-right: none; }
.impact-cell:hover { background: #111; }

.impact-cell::after {
  content: attr(data-num);
  position: absolute; right: 1.5rem; bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 5rem; font-weight: 900; letter-spacing: -0.05em;
  color: rgba(255,255,255,0.03); line-height: 1;
  pointer-events: none;
}

.impact-num {
  font-family: 'Inter', sans-serif;
  font-size: 3.8rem; font-weight: 900;
  letter-spacing: -0.04em; color: #fff;
  line-height: 1; margin-bottom: 0.75rem;
}

.impact-bar {
  width: 100%; height: 2px;
  background: #1a1a1a; border-radius: 1px;
  margin-bottom: 0.75rem; overflow: hidden;
}
.impact-bar-fill {
  height: 100%; background: #fff;
  transform: scaleX(0); transform-origin: left;
  transition: transform 1.2s ease;
}
.impact-cell.animated .impact-bar-fill { transform: scaleX(1); }

.impact-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: #666; line-height: 1.6;
}

/* ── SKILLS ── */
#skills {
  padding: 7rem 3rem;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);
  position: relative;
}

.skills-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 4rem;
}

.skills-count {
  font-family: 'Inter', sans-serif;
  font-size: 4rem; font-weight: 900;
  letter-spacing: -0.04em; color: var(--rule);
  line-height: 1;
}

.skills-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 1px; background: var(--rule);
  border: 1px solid var(--rule);
}

.skill-card {
  background: var(--bg);
  padding: 2.5rem;
  position: relative; overflow: hidden;
  transition: background 0.2s;
  cursor: default;
}
.skill-card:hover { background: var(--bg2); }

.skill-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--black);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.skill-card:hover::after { transform: scaleX(1); }

.sk-num {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem; font-weight: 900;
  color: var(--rule); letter-spacing: -0.04em;
  line-height: 1; margin-bottom: 0.75rem;
}

.sk-icon { font-size: 1.4rem; margin-bottom: 0.75rem; }

.sk-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--black); margin-bottom: 1.2rem;
}

.sk-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.sk-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.58rem; letter-spacing: 0.05em;
  color: var(--gray); background: transparent;
  border: 1px solid var(--rule); padding: 0.3rem 0.65rem;
  transition: all 0.2s; border-radius: 2px;
}
.skill-card:hover .sk-tag {
  border-color: var(--black); color: var(--black);
}

/* ── PROJECTS ── */
#projects {
  padding: 7rem 3rem;
  background: var(--bg2);
  border-bottom: 1px solid var(--rule);
  position: relative;
}

.projects-grid {
  display: grid; grid-template-columns: repeat(2,1fr);
  gap: 1px; background: var(--rule);
  border: 1px solid var(--rule);
  margin-top: 3rem;
}

.proj-card {
  background: var(--bg);
  padding: 2.5rem;
  position: relative; overflow: hidden;
  transition: background 0.2s;
}
.proj-card:hover { background: #fff; box-shadow: 0 4px 40px rgba(0,0,0,0.06); }

.proj-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--black);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s ease;
}
.proj-card:hover::before { transform: scaleX(1); }

.proj-num {
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; letter-spacing: 0.2em;
  color: var(--light); text-transform: uppercase; margin-bottom: 0.5rem;
}

.proj-cat {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--mid); margin-bottom: 0.75rem;
}

.proj-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem; font-weight: 700;
  letter-spacing: -0.01em; color: var(--black);
  line-height: 1.3; margin-bottom: 1rem;
}

.proj-desc {
  font-size: 0.83rem; color: var(--gray);
  line-height: 1.75; margin-bottom: 1.5rem;
}

.proj-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1.5rem; }

.proj-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; letter-spacing: 0.05em;
  color: var(--mid); border: 1px solid var(--rule);
  padding: 0.22rem 0.55rem; border-radius: 2px;
  transition: all 0.15s;
}
.proj-card:hover .proj-tag { border-color: var(--light); }

.proj-metric {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem; font-weight: 700;
  color: var(--black); padding-top: 1rem;
  border-top: 1px solid var(--rule);
}

.proj-gh {
  display: inline-flex; align-items: center; gap: 0.4rem;
  margin-top: 1rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--mid); text-decoration: none;
  border-bottom: 1px solid var(--rule); padding-bottom: 0.15rem;
  transition: color 0.15s, border-color 0.15s;
}
.proj-gh:hover { color: var(--black); border-color: var(--black); }

/* ── EXPERIENCE ── */
#experience {
  padding: 7rem 3rem;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);
  position: relative;
}

.exp-list { margin-top: 3rem; }

.exp-item {
  display: grid; grid-template-columns: 240px 1fr;
  gap: 3rem; padding: 2.5rem 0;
  border-bottom: 1px solid var(--rule);
  transition: background 0.2s;
  position: relative;
}
.exp-item:first-child { border-top: 1px solid var(--rule); }

.exp-item::before {
  content: '';
  position: absolute; left: -3rem; top: 0; bottom: 0;
  width: 2px; background: var(--black);
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s ease;
}
.exp-item:hover::before { transform: scaleY(1); }

.exp-period {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--mid); margin-bottom: 0.4rem;
}

.exp-company {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem; font-weight: 900;
  letter-spacing: -0.02em; color: var(--black); margin-bottom: 0.2rem;
}

.exp-badge {
  display: inline-block;
  font-family: 'DM Mono', monospace;
  font-size: 0.52rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--mid); border: 1px solid var(--rule);
  padding: 0.15rem 0.5rem; margin-top: 0.3rem;
}

.exp-location {
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; color: var(--light);
  margin-top: 0.5rem; letter-spacing: 0.06em;
}

.exp-role {
  font-family: 'Inter', sans-serif;
  font-size: 1rem; font-weight: 700;
  color: var(--black); margin-bottom: 1.2rem;
}

.exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
.exp-bullets li {
  font-size: 0.85rem; color: var(--gray);
  line-height: 1.65; padding-left: 1.2rem; position: relative;
}
.exp-bullets li::before {
  content: '—'; position: absolute; left: 0;
  color: var(--light); font-size: 0.8rem;
}
.exp-bullets li strong { color: var(--black); font-weight: 600; }

/* ── ABOUT ── */
#about {
  padding: 7rem 3rem;
  background: var(--bg2);
  border-bottom: 1px solid var(--rule);
  position: relative;
}

.about-split {
  display: grid; grid-template-columns: 1fr 360px;
  gap: 5rem; align-items: start; margin-top: 3rem;
}

.about-text { font-size: 1.05rem; color: var(--gray); line-height: 1.85; }
.about-text p { margin-bottom: 1.4rem; }
.about-text strong { color: var(--black); font-weight: 600; }

.edu-item {
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 4px;
  margin-bottom: 0.75rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.edu-item:hover { border-color: var(--black); box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

.edu-degree {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  color: var(--black); margin-bottom: 0.2rem;
}
.edu-school {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.1em;
  color: var(--mid); text-transform: uppercase; margin-bottom: 0.15rem;
}
.edu-meta {
  font-family: 'DM Mono', monospace;
  font-size: 0.58rem; color: var(--light);
}

.certs-block {
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 0.75rem;
}
.certs-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--black); margin-bottom: 1rem;
}
.cert-row {
  display: flex; align-items: flex-start; gap: 0.6rem;
  padding: 0.55rem 0; border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem; color: var(--gray); letter-spacing: 0.04em;
}
.cert-row:last-child { border-bottom: none; }
.cert-check { color: var(--black); font-weight: 700; flex-shrink: 0; }

/* ── CONTACT ── */
#contact {
  padding: 7rem 3rem;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);
  position: relative;
}

.contact-split {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: start; margin-top: 3rem;
}

.contact-intro { font-size: 1rem; color: var(--gray); line-height: 1.85; }

.contact-big-link {
  display: block; margin-top: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem; font-weight: 900;
  letter-spacing: -0.02em; color: var(--black);
  text-decoration: none;
  border-bottom: 2px solid var(--black); padding-bottom: 0.3rem;
  transition: opacity 0.15s;
}
.contact-big-link:hover { opacity: 0.5; }

.contact-links { display: flex; flex-direction: column; gap: 0.5rem; }

.contact-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.2rem 1.25rem;
  border: 1px solid var(--rule);
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s; background: var(--bg);
}
.contact-row:hover { border-color: var(--black); background: var(--bg2); transform: translateX(4px); }

.contact-row-left { display: flex; align-items: center; gap: 0.75rem; }
.contact-row-icon { font-size: 1rem; width: 20px; text-align: center; }

.contact-row-lbl {
  font-family: 'DM Mono', monospace;
  font-size: 0.55rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--mid); margin-bottom: 0.15rem;
}
.contact-row-val { font-size: 0.88rem; color: var(--black); font-weight: 500; }
.contact-arrow { color: var(--mid); font-size: 0.9rem; transition: color 0.15s; }
.contact-row:hover .contact-arrow { color: var(--black); }

/* ── FOOTER ── */
footer {
  padding: 1.75rem 3rem;
  border-top: 1px solid var(--rule);
  display: flex; align-items: center; justify-content: space-between;
  background: var(--bg);
}

.footer-name {
  font-family: 'Inter', sans-serif;
  font-weight: 900; font-size: 0.8rem;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--black);
}
.footer-copy {
  font-family: 'DM Mono', monospace;
  font-size: 0.58rem; color: var(--mid); letter-spacing: 0.1em;
}

/* ── REVEAL ANIMATION ── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.visible { opacity: 1; transform: none; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}

/* ── RESPONSIVE ── */
@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .hero-right { grid-template-columns: repeat(4,1fr); }
  .impact-grid { grid-template-columns: repeat(2,1fr); }
  .skills-grid { grid-template-columns: repeat(2,1fr); }
  .projects-grid { grid-template-columns: 1fr; }
  .exp-item { grid-template-columns: 1fr; gap: 0.75rem; }
  .about-split, .contact-split { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 600px) {
  nav { padding: 1rem 1.25rem; }
  .nav-links { display: none; }
  .hero { padding: 7rem 1.25rem 4rem; }
  .hero-right { grid-template-columns: repeat(2,1fr); }
  #impact, #skills, #projects, #experience, #about, #contact { padding: 4.5rem 1.25rem; }
  .impact-grid { grid-template-columns: repeat(2,1fr); }
  .skills-grid { grid-template-columns: 1fr; }
  footer { padding: 1.25rem; flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
</head>
<body>

<!-- ── NAV ── -->
<nav>
  <a class="nav-logo" href="#">Ram Lal</a>
  <ul class="nav-links">
    <li><a href="#impact">Impact</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a class="nav-cta" href="#contact">Hire Me ↗</a>
</nav>

<!-- ── HERO ── -->
<section class="hero" id="home">
  <div class="hero-left">
    <div class="hero-eyebrow">
      Business Analyst &nbsp;·&nbsp; Data Specialist &nbsp;·&nbsp; PwC Alumni
      <span class="avail-badge"><span class="avail-dot"></span> Open to Work</span>
    </div>
    <h1>Ram<br><span class="light-word">Lal</span></h1>
    <p class="hero-desc">
      I turn messy data into decisions — and broken processes into systems that run themselves. MS Business Analytics candidate at Montclair State. Based in Jersey City, NJ.
    </p>
    <div class="hero-actions">
      <a class="btn-black" href="#projects">View My Work ↓</a>
      <a class="btn-outline" href="mailto:ramkukreja03@gmail.com">Get in Touch</a>
      <a class="btn-outline" href="Lal_Ram_Resume.pdf" download>Download CV ↓</a>
    </div>
  </div>

  <div class="hero-right">
    <div class="hero-stat-card">
      <div class="stat-big stat-num">99%</div>
      <div class="stat-lbl">Data Migration<br>Accuracy</div>
    </div>
    <div class="hero-stat-card">
      <div class="stat-big stat-num">40%</div>
      <div class="stat-lbl">Error Reduction<br>Post-Launch</div>
    </div>
    <div class="hero-stat-card">
      <div class="stat-big stat-num">5</div>
      <div class="stat-lbl">KPI Dashboards<br>Built</div>
    </div>
    <div class="hero-stat-card">
      <div class="stat-big stat-num">30%</div>
      <div class="stat-lbl">ERP Downtime<br>Reduction</div>
    </div>
  </div>
</section>

<!-- ── MARQUEE ── -->
<div class="marquee-wrap">
  <div class="marquee-track">
    <!-- set 1 -->
    <div class="marquee-item"><span class="m-dot"></span> SQL</div>
    <div class="marquee-item"><span class="m-dot"></span> Python</div>
    <div class="marquee-item"><span class="m-dot"></span> Power BI</div>
    <div class="marquee-item"><span class="m-dot"></span> Tableau</div>
    <div class="marquee-item"><span class="m-dot"></span> Oracle EBS</div>
    <div class="marquee-item"><span class="m-dot"></span> Excel</div>
    <div class="marquee-item"><span class="m-dot"></span> BigQuery</div>
    <div class="marquee-item"><span class="m-dot"></span> R</div>
    <div class="marquee-item"><span class="m-dot"></span> Machine Learning</div>
    <div class="marquee-item"><span class="m-dot"></span> Financial Modeling</div>
    <div class="marquee-item"><span class="m-dot"></span> Data Wrangling</div>
    <div class="marquee-item"><span class="m-dot"></span> ERP Modules</div>
    <div class="marquee-item"><span class="m-dot"></span> Process Mapping</div>
    <div class="marquee-item"><span class="m-dot"></span> QuickBooks</div>
    <!-- set 2 (duplicate) -->
    <div class="marquee-item"><span class="m-dot"></span> SQL</div>
    <div class="marquee-item"><span class="m-dot"></span> Python</div>
    <div class="marquee-item"><span class="m-dot"></span> Power BI</div>
    <div class="marquee-item"><span class="m-dot"></span> Tableau</div>
    <div class="marquee-item"><span class="m-dot"></span> Oracle EBS</div>
    <div class="marquee-item"><span class="m-dot"></span> Excel</div>
    <div class="marquee-item"><span class="m-dot"></span> BigQuery</div>
    <div class="marquee-item"><span class="m-dot"></span> R</div>
    <div class="marquee-item"><span class="m-dot"></span> Machine Learning</div>
    <div class="marquee-item"><span class="m-dot"></span> Financial Modeling</div>
    <div class="marquee-item"><span class="m-dot"></span> Data Wrangling</div>
    <div class="marquee-item"><span class="m-dot"></span> ERP Modules</div>
    <div class="marquee-item"><span class="m-dot"></span> Process Mapping</div>
    <div class="marquee-item"><span class="m-dot"></span> QuickBooks</div>
  </div>
</div>

<!-- ── IMPACT ── -->
<section id="impact">
  <div class="impact-header">
    <div>
      <div class="sec-marker" style="color:#555; margin-bottom:1rem;">01. Impact</div>
      <div class="impact-heading">Measurable<br>Results.</div>
    </div>
    <div class="impact-sub">Numbers that prove the work delivers.</div>
  </div>
  <div class="impact-grid">
    <div class="impact-cell" data-num="99">
      <div class="impact-num stat-num">99%</div>
      <div class="impact-bar"><div class="impact-bar-fill" style="width:99%"></div></div>
      <div class="impact-label">Data Migration<br>Accuracy at PwC</div>
    </div>
    <div class="impact-cell" data-num="40">
      <div class="impact-num stat-num">40%</div>
      <div class="impact-bar"><div class="impact-bar-fill" style="width:40%"></div></div>
      <div class="impact-label">Reduction in<br>Post-Launch Errors</div>
    </div>
    <div class="impact-cell" data-num="25">
      <div class="impact-num stat-num">25%</div>
      <div class="impact-bar"><div class="impact-bar-fill" style="width:25%"></div></div>
      <div class="impact-label">Faster Executive<br>Decision-Making</div>
    </div>
    <div class="impact-cell" data-num="20">
      <div class="impact-num stat-num">20%</div>
      <div class="impact-bar"><div class="impact-bar-fill" style="width:20%"></div></div>
      <div class="impact-label">Cut in Manual<br>Processing Time</div>
    </div>
  </div>
</section>

<!-- ── SKILLS ── -->
<section id="skills" class="reveal">
  <div class="skills-header">
    <div>
      <div class="sec-marker" style="margin-bottom:1rem;">02. Skills</div>
      <h2 class="section-heading">What I<br>Bring.</h2>
    </div>
    <div class="skills-count">06</div>
  </div>
  <div class="skills-grid">
    <div class="skill-card">
      <div class="sk-num">01</div>
      <div class="sk-icon">🗄️</div>
      <div class="sk-title">Data & Databases</div>
      <div class="sk-tags">
        <span class="sk-tag">SQL</span>
        <span class="sk-tag">Oracle EBS</span>
        <span class="sk-tag">BigQuery</span>
        <span class="sk-tag">QuickBooks</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="sk-num">02</div>
      <div class="sk-icon">📊</div>
      <div class="sk-title">Analytics & BI</div>
      <div class="sk-tags">
        <span class="sk-tag">Tableau</span>
        <span class="sk-tag">Power BI</span>
        <span class="sk-tag">Excel</span>
        <span class="sk-tag">Data Wrangling</span>
        <span class="sk-tag">Statistical Modeling</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="sk-num">03</div>
      <div class="sk-icon">💻</div>
      <div class="sk-title">Programming</div>
      <div class="sk-tags">
        <span class="sk-tag">Python</span>
        <span class="sk-tag">R</span>
        <span class="sk-tag">Machine Learning</span>
        <span class="sk-tag">Optimization</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="sk-num">04</div>
      <div class="sk-icon">💰</div>
      <div class="sk-title">Finance & Modeling</div>
      <div class="sk-tags">
        <span class="sk-tag">Financial Modeling</span>
        <span class="sk-tag">Portfolio Analysis</span>
        <span class="sk-tag">Corporate Reporting</span>
        <span class="sk-tag">Auditing</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="sk-num">05</div>
      <div class="sk-icon">🤝</div>
      <div class="sk-title">Business & Functional</div>
      <div class="sk-tags">
        <span class="sk-tag">Requirements Gathering</span>
        <span class="sk-tag">Process Mapping</span>
        <span class="sk-tag">UAT</span>
        <span class="sk-tag">Stakeholder Comms</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="sk-num">06</div>
      <div class="sk-icon">⚙️</div>
      <div class="sk-title">ERP & Platforms</div>
      <div class="sk-tags">
        <span class="sk-tag">Oracle EBS</span>
        <span class="sk-tag">ERP Modules</span>
        <span class="sk-tag">Finance</span>
        <span class="sk-tag">Procurement</span>
        <span class="sk-tag">Inventory</span>
      </div>
    </div>
  </div>
</section>

<!-- ── PROJECTS ── -->
<section id="projects">
  <div class="sec-marker reveal" style="margin-bottom:1rem;">03. Projects</div>
  <h2 class="section-heading reveal">I Turn Data<br>Into Decisions.</h2>
  <div class="projects-grid">
    <div class="proj-card reveal">
      <div class="proj-num">Project 01</div>
      <div class="proj-cat">Analytics & HR</div>
      <div class="proj-title">HR Analytics Dashboard Suite</div>
      <div class="proj-desc">Built interactive Power BI and Tableau dashboards to visualize employee engagement, retention trends, and pay-equity insights for leadership at EXera Solutions. Cleaned and transformed HR datasets; identified key drivers of employee turnover through exploratory data analysis.</div>
      <div class="proj-tags">
        <span class="proj-tag">Power BI</span>
        <span class="proj-tag">Tableau</span>
        <span class="proj-tag">Python</span>
        <span class="proj-tag">HR Analytics</span>
        <span class="proj-tag">KPI Design</span>
      </div>
      <div class="proj-metric">360° workforce visibility delivered to leadership</div>
    </div>

    <div class="proj-card reveal">
      <div class="proj-num">Project 02</div>
      <div class="proj-cat">Database Engineering</div>
      <div class="proj-title">Library Management System via SQL</div>
      <div class="proj-desc">Designed and implemented a full relational database managing books, members, employees, and transactions. Executed CRUD operations and built advanced SQL queries for efficient data retrieval. Created summary reports analyzing book demand, member activity, and employee performance.</div>
      <div class="proj-tags">
        <span class="proj-tag">SQL</span>
        <span class="proj-tag">Database Design</span>
        <span class="proj-tag">CRUD</span>
        <span class="proj-tag">Query Optimization</span>
      </div>
      <div class="proj-metric">Full CRUD system with advanced analytics reporting</div>
      <a class="proj-gh" href="https://github.com/ramlal906/library_dataset_project/blob/main/README%20(1).md" target="_blank">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
        View on GitHub ↗
      </a>
    </div>

    <div class="proj-card reveal">
      <div class="proj-num">Project 03</div>
      <div class="proj-cat">ERP Implementation · PwC</div>
      <div class="proj-title">Oracle EBS Migration & KPI Dashboards</div>
      <div class="proj-desc">Migrated customer records with 99% accuracy using SQL validation, reducing post-launch errors by 40%. Designed 5 KPI dashboards in Power BI and Excel, improving executive decision-making speed by 25%.</div>
      <div class="proj-tags">
        <span class="proj-tag">Oracle EBS</span>
        <span class="proj-tag">SQL</span>
        <span class="proj-tag">Power BI</span>
        <span class="proj-tag">Excel</span>
      </div>
      <div class="proj-metric">99% accuracy · 40% fewer post-launch errors</div>
    </div>

    <div class="proj-card reveal">
      <div class="proj-num">Project 04</div>
      <div class="proj-cat">Process Automation · PwC</div>
      <div class="proj-title">Automated Reporting Workflows</div>
      <div class="proj-desc">Automated reporting workflows cutting manual processing time by 20%. Collaborated across 3 departments to translate business requirements into ERP enhancements, increasing user adoption by 15%.</div>
      <div class="proj-tags">
        <span class="proj-tag">ERP Automation</span>
        <span class="proj-tag">Workflow Design</span>
        <span class="proj-tag">Excel</span>
        <span class="proj-tag">Power BI</span>
      </div>
      <div class="proj-metric">20% reduction in manual processing time</div>
    </div>
  </div>
</section>

<!-- ── EXPERIENCE ── -->
<section id="experience">
  <div class="sec-marker reveal" style="margin-bottom:1rem;">04. Experience</div>
  <h2 class="section-heading reveal">Where I've<br>Done the Work.</h2>
  <div class="exp-list">
    <div class="exp-item reveal">
      <div class="exp-meta">
        <div class="exp-period">Jul 2023 – Jun 2024</div>
        <div class="exp-company">PwC</div>
        <span class="exp-badge">Full-Time</span>
        <div class="exp-location">Karachi, Pakistan</div>
      </div>
      <div>
        <div class="exp-role">Associate I — Functional Consultant</div>
        <ul class="exp-bullets">
          <li>Migrated customer records with <strong>99% accuracy</strong> using SQL validation, reducing post-launch errors by <strong>40%</strong>.</li>
          <li>Designed and delivered <strong>5 KPI dashboards</strong> in Power BI and Excel, improving executive decision-making speed by <strong>25%</strong>.</li>
          <li>Led <strong>3 critical testing phases</strong>, resolving major recurring issues and ensuring smooth ERP launch.</li>
          <li>Automated reporting workflows, reducing manual processing time by <strong>20%</strong>.</li>
          <li>Configured ERP modules for finance, procurement, and inventory — reducing downtime by <strong>30%</strong> within first month post-launch.</li>
        </ul>
      </div>
    </div>
    <div class="exp-item reveal">
      <div class="exp-meta">
        <div class="exp-period">Mar 2023 – Jun 2023</div>
        <div class="exp-company">PwC</div>
        <span class="exp-badge">Internship</span>
        <div class="exp-location">Karachi, Pakistan</div>
      </div>
      <div>
        <div class="exp-role">Intern — Business Consulting</div>
        <ul class="exp-bullets">
          <li>Supported senior consultants across <strong>4+ client projects</strong> with process documentation and risk analysis.</li>
          <li>Validated risk assessment data for Oracle EBS implementation with <strong>98% accuracy</strong>.</li>
          <li>Identified <strong>5+ risk mitigation opportunities</strong> across process improvement initiatives.</li>
          <li>Prepared client presentations and functional documentation, improving team efficiency by <strong>15%</strong>.</li>
        </ul>
      </div>
    </div>
    <div class="exp-item reveal">
      <div class="exp-meta">
        <div class="exp-period">Jun 2022 – Aug 2022</div>
        <div class="exp-company">Silver Sky</div>
        <span class="exp-badge">Internship</span>
        <div class="exp-location">Karachi, Pakistan</div>
      </div>
      <div>
        <div class="exp-role">Finance & Analytics Intern</div>
        <ul class="exp-bullets">
          <li>Managed daily financial records and invoices in Excel, improving accuracy of company accounts.</li>
          <li>Supported cost analysis of travel packages, enabling better pricing and profitability decisions.</li>
          <li>Reconciled customer and vendor payments, improving cash flow and reducing outstanding balances.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ── ABOUT ── -->
<section id="about">
  <div class="sec-marker reveal" style="margin-bottom:1rem;">05. About</div>
  <h2 class="section-heading reveal">The Analyst<br>Behind the Numbers.</h2>
  <div class="about-split reveal">
    <div class="about-text">
      <p>I'm <strong>Ram Lal</strong> — a Business Analytics graduate student at Montclair State University, with a background in accounting and finance from Sukkur IBA University.</p>
      <p>I spent a year at <strong>PwC as a Functional Consultant</strong>, where I learned that the gap between raw data and real decisions is exactly where I want to work. From migrating ERP systems to building dashboards that actually get used, I care about outputs that matter.</p>
      <p>I'm currently completing my <strong>MS in Business Analytics</strong> and building toward roles where data, systems, and strategy intersect.</p>
    </div>
    <div class="about-sidebar">
      <div class="edu-item">
        <div class="edu-degree">MS Business Analytics</div>
        <div class="edu-school">Montclair State University</div>
        <div class="edu-meta">Aug 2024 – May 2026 · Montclair, NJ</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">BS Accounting & Finance</div>
        <div class="edu-school">Sukkur IBA University</div>
        <div class="edu-meta">Aug 2019 – May 2023 · Sukkur, Pakistan</div>
      </div>
      <div class="certs-block">
        <div class="certs-title">Certifications</div>
        <div class="cert-row"><span class="cert-check">✓</span> BigQuery for Data Analysts</div>
        <div class="cert-row"><span class="cert-check">✓</span> Introduction to Power BI</div>
        <div class="cert-row"><span class="cert-check">✓</span> Intermediate SQL</div>
        <div class="cert-row"><span class="cert-check">✓</span> Joining Data in SQL</div>
        <div class="cert-row"><span class="cert-check">✓</span> Excel Skills for Business</div>
        <div class="cert-row"><span class="cert-check">✓</span> Financial Modeling and Forecasting Financial Statements</div>
      </div>
    </div>
  </div>
</section>

<!-- ── CONTACT ── -->
<section id="contact">
  <div class="sec-marker reveal" style="margin-bottom:1rem;">06. Contact</div>
  <h2 class="section-heading reveal">Let's Work<br>Together.</h2>
  <div class="contact-split reveal">
    <div class="contact-intro">
      <p>Available for new opportunities and open to collaboration. Whether you need a business analyst, data analyst, or someone who bridges the gap between data and decisions — I'd love to hear from you.</p>
      <a class="contact-big-link" href="mailto:ramkukreja03@gmail.com">ramkukreja03@gmail.com ↗</a>
    </div>
    <div class="contact-links">
      <a class="contact-row" href="https://www.linkedin.com/in/ramlal-businessanalyst/" target="_blank">
        <div class="contact-row-left">
          <div class="contact-row-icon">💼</div>
          <div>
            <div class="contact-row-lbl">LinkedIn</div>
            <div class="contact-row-val">ramlal-businessanalyst</div>
          </div>
        </div>
        <div class="contact-arrow">↗</div>
      </a>
      <a class="contact-row" href="https://github.com/ramlal906" target="_blank">
        <div class="contact-row-left">
          <div class="contact-row-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#333"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
          </div>
          <div>
            <div class="contact-row-lbl">GitHub</div>
            <div class="contact-row-val">ramlal906</div>
          </div>
        </div>
        <div class="contact-arrow">↗</div>
      </a>
      <a class="contact-row" href="tel:+19294381088">
        <div class="contact-row-left">
          <div class="contact-row-icon">📞</div>
          <div>
            <div class="contact-row-lbl">Phone</div>
            <div class="contact-row-val">+1 (929) 438-1088</div>
          </div>
        </div>
        <div class="contact-arrow">↗</div>
      </a>
      <a class="contact-row" href="https://www.google.com/maps/place/Jersey+City,+NJ" target="_blank">
        <div class="contact-row-left">
          <div class="contact-row-icon">📍</div>
          <div>
            <div class="contact-row-lbl">Location</div>
            <div class="contact-row-val">Jersey City, NJ — Remote & Hybrid</div>
          </div>
        </div>
        <div class="contact-arrow">↗</div>
      </a>
    </div>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <div class="footer-name">Ram Lal</div>
  <div class="footer-copy">© 2026 · Business Analyst · Jersey City, NJ</div>
</footer>

<!-- ── SCRIPTS ── -->
<script>
  // Counter animation
  const nums = document.querySelectorAll('.stat-num');
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const text = el.textContent;
      const num = parseFloat(text);
      const suffix = text.replace(/[\d.]/g, '');
      if (!isNaN(num)) {
        let start = 0; const dur = 1400;
        const tick = ts => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(eased * num) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      cObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => cObs.observe(n));

  // Impact bar animation
  const bars = document.querySelectorAll('.impact-cell');
  const bObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('animated'); bObs.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => bObs.observe(b));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const rObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        rObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(r => rObs.observe(r));

  // Active nav highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const nObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('nav-active');
          if (link.getAttribute('href') === '#' + entry.target.id) link.classList.add('nav-active');
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => nObs.observe(s));
</script>

<!-- ===== RAM'S AI CHATBOT ===== -->
<style>
  #chat-fab {
    position: fixed; bottom: 28px; right: 28px;
    width: 56px; height: 56px; border-radius: 50%;
    background: #0f172a; border: 2px solid #334155; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s; z-index: 9999;
  }
  #chat-fab:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(0,0,0,0.5); }
  #chat-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9997; display: none; }
  #chat-overlay.open { display: block; }
  #chat-window {
    position: fixed; bottom: 94px; right: 28px;
    width: 400px; height: 580px;
    background: #0f172a; border: 1px solid #1e293b;
    border-radius: 20px; overflow: hidden;
    display: none; flex-direction: column;
    box-shadow: 0 12px 48px rgba(0,0,0,0.6); z-index: 9998;
    font-family: 'Inter', system-ui, sans-serif;
    transition: all 0.3s ease;
  }
  #chat-window.open { display: flex; animation: slideUp 0.25s ease; }
  #chat-window.maximized { bottom: 0; right: 0; width: 100vw; height: 100vh; border-radius: 0; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  #chat-header { padding: 14px 16px; background: #0f172a; border-bottom: 1px solid #1e293b; display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
  .rl-avatar { width: 36px; height: 36px; border-radius: 50%; background: #1e293b; border: 2px solid #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #94a3b8; flex-shrink: 0; }
  #chat-header-info { flex: 1; }
  #chat-header-info p { font-size: 13px; font-weight: 600; color: #f1f5f9; margin: 0; }
  #chat-header-info span { font-size: 11px; color: #22c55e; }
  #header-btns { display: flex; gap: 6px; }
  #maximize-btn, #close-btn { background: #1e293b; border: 1px solid #334155; cursor: pointer; color: #64748b; width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: background 0.15s, color 0.15s; }
  #maximize-btn:hover, #close-btn:hover { background: #334155; color: #f1f5f9; }
  #messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; scrollbar-width: thin; scrollbar-color: #1e293b transparent; }
  .msg { display: flex; gap: 8px; }
  .msg.user { flex-direction: row-reverse; }
  .msg-bubble { padding: 10px 14px; border-radius: 14px; font-size: 13px; line-height: 1.6; max-width: 82%; }
  .msg.bot .msg-bubble { background: #1e293b; color: #cbd5e1; border-radius: 4px 14px 14px 14px; }
  .msg.user .msg-bubble { background: #334155; color: #f1f5f9; border-radius: 14px 4px 14px 14px; }
  .typing { display: flex; gap: 4px; align-items: center; padding: 10px 14px; background: #1e293b; border-radius: 4px 14px 14px 14px; }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #64748b; animation: blink 1.2s infinite; }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes blink { 0%,80%,100%{opacity:0.3;} 40%{opacity:1;} }
  #suggested { padding: 0 16px 12px; flex-shrink: 0; }
  #suggested p { font-size: 10px; color: #475569; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px; }
  .sug-grid { display: flex; flex-direction: column; gap: 6px; }
  .sug-btn { background: #1e293b; border: 1px solid #334155; color: #94a3b8; font-size: 12px; padding: 8px 12px; border-radius: 10px; cursor: pointer; text-align: left; transition: background 0.15s, color 0.15s, border-color 0.15s; }
  .sug-btn:hover { background: #334155; color: #f1f5f9; border-color: #475569; }
  #input-area { padding: 12px 16px; border-top: 1px solid #1e293b; display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  #user-input { flex: 1; background: #1e293b; border: 1px solid #334155; border-radius: 24px; padding: 10px 16px; font-size: 13px; color: #f1f5f9; outline: none; resize: none; transition: border-color 0.15s; }
  #user-input::placeholder { color: #475569; }
  #user-input:focus { border-color: #475569; }
  #send-btn { width: 36px; height: 36px; border-radius: 50%; background: #334155; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }
  #send-btn:hover { background: #475569; }
  @media (max-width: 768px) {
    #chat-window { bottom: 80px !important; right: 8px !important; left: 8px !important; width: auto !important; }
  }
</style>

<button id="chat-fab" title="Chat with Ram's AI">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
</button>
<div id="chat-overlay"></div>
<div id="chat-window">
  <div id="chat-header">
    <div class="rl-avatar">RL</div>
    <div id="chat-header-info"><p>Ram's AI Assistant</p><span>● Online now</span></div>
    <div id="header-btns">
      <button id="maximize-btn" title="Maximize">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
      </button>
      <button id="close-btn" title="Close">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>
  <div id="messages"></div>
  <div id="suggested">
    <p>Suggested questions</p>
    <div class="sug-grid">
      <button class="sug-btn">Who is Ram Lal?</button>
      <button class="sug-btn">What projects has he built?</button>
      <button class="sug-btn">What does he specialize in?</button>
      <button class="sug-btn">How can Ram add value to my team?</button>
      <button class="sug-btn">How do I get in touch with Ram?</button>
    </div>
  </div>
  <div id="input-area">
    <textarea id="user-input" rows="1" placeholder="Ask anything about Ram..."></textarea>
    <button id="send-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </div>
</div>

<script>
  let chatHistory = [];
  let isMaximized = false;
  const messagesEl = document.getElementById('messages');
  const inputEl = document.getElementById('user-input');
  const suggestedEl = document.getElementById('suggested');
  const chatWindow = document.getElementById('chat-window');

  function addMsg(role, text) {
    suggestedEl.style.display = 'none';
    const wrap = document.createElement('div'); wrap.className = 'msg ' + role;
    if (role === 'bot') { const av = document.createElement('div'); av.className = 'rl-avatar'; av.style.cssText = 'width:26px;height:26px;font-size:10px;flex-shrink:0'; av.textContent = 'RL'; wrap.appendChild(av); }
    const bubble = document.createElement('div'); bubble.className = 'msg-bubble'; bubble.textContent = text;
    wrap.appendChild(bubble); messagesEl.appendChild(wrap); messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const wrap = document.createElement('div'); wrap.className = 'msg bot'; wrap.id = 'typing';
    const av = document.createElement('div'); av.className = 'rl-avatar'; av.style.cssText = 'width:26px;height:26px;font-size:10px;flex-shrink:0'; av.textContent = 'RL';
    const t = document.createElement('div'); t.className = 'typing'; t.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    wrap.appendChild(av); wrap.appendChild(t); messagesEl.appendChild(wrap); messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function sendMessage(text) {
    if (!text.trim()) return;
    addMsg('user', text); chatHistory.push({ role: 'user', content: text }); inputEl.value = ''; showTyping();
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: chatHistory }) });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'Sorry, please try again!';
      document.getElementById('typing')?.remove(); addMsg('bot', reply); chatHistory.push({ role: 'assistant', content: reply });
    } catch(e) { document.getElementById('typing')?.remove(); addMsg('bot', 'Something went wrong. Email Ram at ramkukreja03@gmail.com'); }
  }

  document.getElementById('chat-fab').onclick = () => {
    chatWindow.classList.toggle('open'); document.getElementById('chat-overlay').classList.toggle('open');
    if (chatWindow.classList.contains('open') && messagesEl.children.length === 0) setTimeout(() => addMsg('bot', "Hi! I'm Ram's AI assistant. Ask me anything about his experience, projects, skills, or how to get in touch!"), 300);
  };
  document.getElementById('close-btn').onclick = () => { chatWindow.classList.remove('open','maximized'); document.getElementById('chat-overlay').classList.remove('open'); isMaximized = false; updateMaximizeIcon(); };
  document.getElementById('chat-overlay').onclick = () => { chatWindow.classList.remove('open','maximized'); document.getElementById('chat-overlay').classList.remove('open'); isMaximized = false; updateMaximizeIcon(); };
  document.getElementById('maximize-btn').onclick = () => { isMaximized = !isMaximized; chatWindow.classList.toggle('maximized', isMaximized); updateMaximizeIcon(); };
  function updateMaximizeIcon() {
    document.getElementById('maximize-btn').innerHTML = isMaximized
      ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>`
      : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  }
  document.getElementById('send-btn').onclick = () => sendMessage(inputEl.value);
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputEl.value); } });
  document.querySelectorAll('.sug-btn').forEach(btn => { btn.onclick = () => sendMessage(btn.textContent); });
</script>
<!-- ===== END CHATBOT ===== -->
</body>
</html>
