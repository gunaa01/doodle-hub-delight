import React from "react";

// Waving Person Doodle
export const WavingPerson = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 140" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="60" cy="30" r="22" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="52" cy="28" r="3" fill="hsl(var(--foreground))" />
    <circle cx="68" cy="28" r="3" fill="hsl(var(--foreground))" />
    {/* Smile */}
    <path d="M50 38 Q60 48 70 38" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M60 52 L60 90" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
    {/* Left arm (waving) */}
    <g className="animate-wave" style={{ transformOrigin: "40px 65px" }}>
      <path d="M60 60 L35 50 L25 30" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Hand */}
      <circle cx="25" cy="30" r="6" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    </g>
    {/* Right arm */}
    <path d="M60 60 L85 75" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
    {/* Legs */}
    <path d="M60 90 L45 125" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 90 L75 125" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Happy Star Doodle
export const HappyStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 5 L47 28 L72 28 L52 44 L58 68 L40 54 L22 68 L28 44 L8 28 L33 28 Z"
      fill="hsl(var(--sunny))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Eyes */}
    <circle cx="34" cy="35" r="3" fill="hsl(var(--foreground))" />
    <circle cx="46" cy="35" r="3" fill="hsl(var(--foreground))" />
    {/* Smile */}
    <path d="M34 44 Q40 50 46 44" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// Floating Cloud
export const FloatingCloud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 45 C10 45 5 35 15 25 C10 15 25 5 40 15 C50 5 70 5 75 20 C95 20 95 40 80 45 Z"
      fill="hsl(var(--card))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Eyes */}
    <circle cx="40" cy="30" r="2.5" fill="hsl(var(--foreground))" />
    <circle cx="55" cy="30" r="2.5" fill="hsl(var(--foreground))" />
    {/* Smile */}
    <path d="M42 38 Q48 43 54 38" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// Bouncing Ball
export const BouncingBall = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="25" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
    {/* Shine */}
    <circle cx="22" cy="22" r="6" fill="hsl(var(--primary-foreground))" opacity="0.5" />
    {/* Eyes */}
    <circle cx="24" cy="30" r="3" fill="hsl(var(--primary-foreground))" />
    <circle cx="36" cy="30" r="3" fill="hsl(var(--primary-foreground))" />
    {/* Smile */}
    <path d="M24 38 Q30 44 36 38" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// Lightbulb Idea
export const LightbulbIdea = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Bulb */}
    <path
      d="M30 5 C15 5 5 18 5 30 C5 42 18 48 18 55 L42 55 C42 48 55 42 55 30 C55 18 45 5 30 5"
      fill="hsl(var(--sunny))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Base */}
    <rect x="18" y="55" width="24" height="8" rx="2" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="22" y="63" width="16" height="6" rx="2" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Sparkles */}
    <path d="M30 0 L30 -8 M50 10 L58 5 M60 30 L68 30 M10 10 L2 5 M0 30 L-8 30" stroke="hsl(var(--sunny))" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Heart Doodle
export const HeartDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 55" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 50 C10 35 0 20 10 10 C20 0 30 8 30 15 C30 8 40 0 50 10 C60 20 50 35 30 50"
      fill="hsl(var(--coral))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Shine */}
    <circle cx="18" cy="18" r="4" fill="hsl(var(--primary-foreground))" opacity="0.6" />
  </svg>
);

// Pencil Writing
export const PencilWriting = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(-45 40 40)">
      {/* Pencil body */}
      <rect x="35" y="10" width="10" height="50" rx="1" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {/* Eraser */}
      <rect x="35" y="5" width="10" height="8" rx="2" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {/* Tip */}
      <polygon points="35,60 45,60 40,72" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="38,65 42,65 40,72" fill="hsl(var(--foreground))" />
    </g>
    {/* Writing lines */}
    <path d="M55 70 Q62 68 70 70" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M58 75 Q64 73 72 75" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
  </svg>
);

// Celebration Confetti
export const Confetti = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="8" height="8" rx="1" fill="hsl(var(--coral))" transform="rotate(15 14 24)" />
    <rect x="80" y="15" width="6" height="6" rx="1" fill="hsl(var(--sunny))" transform="rotate(-20 83 18)" />
    <rect x="50" y="10" width="7" height="7" rx="1" fill="hsl(var(--secondary))" transform="rotate(30 53.5 13.5)" />
    <rect x="25" y="70" width="6" height="6" rx="1" fill="hsl(var(--sunny))" transform="rotate(-10 28 73)" />
    <rect x="70" y="60" width="8" height="8" rx="1" fill="hsl(var(--coral))" transform="rotate(25 74 64)" />
    <circle cx="15" cy="50" r="4" fill="hsl(var(--secondary))" />
    <circle cx="85" cy="45" r="3" fill="hsl(var(--coral))" />
    <circle cx="45" cy="80" r="5" fill="hsl(var(--sunny))" />
    <path d="M60 30 L65 20 L70 30 L60 30" fill="hsl(var(--secondary))" />
    <path d="M30 40 L35 30 L40 40 L30 40" fill="hsl(var(--coral))" />
  </svg>
);

// Rocket
export const RocketDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Rocket body */}
    <path
      d="M30 5 C20 15 15 35 15 55 L45 55 C45 35 40 15 30 5"
      fill="hsl(var(--card))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Window */}
    <circle cx="30" cy="30" r="8" fill="hsl(var(--secondary))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="28" cy="28" r="3" fill="hsl(var(--primary-foreground))" opacity="0.6" />
    {/* Fins */}
    <path d="M15 55 L5 65 L15 60" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
    <path d="M45 55 L55 65 L45 60" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
    {/* Flame */}
    <path d="M22 55 L30 75 L38 55" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
    <path d="M26 55 L30 68 L34 55" fill="hsl(var(--coral))" />
  </svg>
);

// Calendar Event
export const CalendarDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 70 70" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Calendar body */}
    <rect x="5" y="15" width="60" height="50" rx="5" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
    {/* Header */}
    <rect x="5" y="15" width="60" height="15" rx="5" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
    {/* Rings */}
    <rect x="18" y="8" width="6" height="14" rx="2" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="46" y="8" width="6" height="14" rx="2" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Date */}
    <text x="35" y="50" textAnchor="middle" fontSize="20" fontWeight="bold" fill="hsl(var(--foreground))">12</text>
  </svg>
);

// Trophy
export const TrophyDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 70 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Cup */}
    <path
      d="M15 10 L15 35 C15 50 25 55 35 55 C45 55 55 50 55 35 L55 10 Z"
      fill="hsl(var(--sunny))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Handles */}
    <path d="M15 15 C5 15 5 30 15 30" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" />
    <path d="M55 15 C65 15 65 30 55 30" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" />
    {/* Stem */}
    <rect x="30" y="55" width="10" height="10" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Base */}
    <rect x="20" y="65" width="30" height="8" rx="2" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Star */}
    <path d="M35 25 L37 30 L42 30 L38 34 L40 39 L35 36 L30 39 L32 34 L28 30 L33 30 Z" fill="hsl(var(--foreground))" />
  </svg>
);

// People Group
export const PeopleGroup = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Person 1 */}
    <circle cx="30" cy="25" r="12" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M30 37 L30 55" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 42 L20 52" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 42 L40 52" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 55 L22 70" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 55 L38 70" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    
    {/* Person 2 (center, slightly higher) */}
    <circle cx="60" cy="20" r="14" fill="hsl(var(--secondary))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M60 34 L60 55" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 40 L48 50" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 40 L72 50" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 55 L50 72" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 55 L70 72" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    
    {/* Person 3 */}
    <circle cx="90" cy="25" r="12" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M90 37 L90 55" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 42 L80 52" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 42 L100 52" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 55 L82 70" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 55 L98 70" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Certificate Badge
export const CertificateBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 70 90" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Badge circle */}
    <circle cx="35" cy="35" r="30" fill="hsl(var(--sunny))" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
    <circle cx="35" cy="35" r="22" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Star in center */}
    <path d="M35 18 L38 28 L48 28 L40 34 L43 44 L35 38 L27 44 L30 34 L22 28 L32 28 Z" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    {/* Ribbons */}
    <path d="M20 60 L25 85 L30 70 L35 85 L30 60" fill="hsl(var(--coral))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
    <path d="M50 60 L45 85 L40 70 L35 85 L40 60" fill="hsl(var(--secondary))" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
