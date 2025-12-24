import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  WavingPerson,
  HappyStar,
  FloatingCloud,
  BouncingBall,
  RocketDoodle,
  CalendarDoodle,
  TrophyDoodle,
  PeopleGroup,
  CertificateBadge,
  Confetti,
  LightbulbIdea,
  HeartDoodle,
  PencilWriting,
} from "@/components/doodles/DoodleCharacters";
import { ArrowRight, Check, Sparkles, Zap, Shield, Users } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <CalendarDoodle className="w-16 h-16" />,
      title: "Event Management",
      description: "Create, manage, and track all your events in one beautiful place.",
      color: "bg-coral/10",
    },
    {
      icon: <PeopleGroup className="w-20 h-16" />,
      title: "Participant Tracking",
      description: "QR check-ins, attendance tracking, and real-time participant insights.",
      color: "bg-secondary/20",
    },
    {
      icon: <CertificateBadge className="w-16 h-20" />,
      title: "Digital Certificates",
      description: "Auto-generate beautiful certificates with secure verification.",
      color: "bg-accent/30",
    },
    {
      icon: <TrophyDoodle className="w-16 h-18" />,
      title: "Competitions & Judging",
      description: "Built-in judging rubrics, leaderboards, and winner announcements.",
      color: "bg-coral-light/20",
    },
  ];

  const stats = [
    { number: "10K+", label: "Events Created" },
    { number: "500K+", label: "Participants" },
    { number: "1M+", label: "Certificates Issued" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Floating Doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <WavingPerson className="absolute top-32 left-[5%] w-20 h-28 animate-float opacity-40" />
          <HappyStar className="absolute top-48 right-[10%] w-16 h-16 animate-bounce-gentle delay-200 opacity-50" />
          <FloatingCloud className="absolute top-64 left-[15%] w-24 h-16 animate-float delay-400 opacity-30" />
          <BouncingBall className="absolute bottom-40 right-[15%] w-14 h-14 animate-bounce-gentle delay-300 opacity-40" />
          <Confetti className="absolute top-40 left-[40%] w-20 h-20 animate-spin-slow opacity-30" />
          <LightbulbIdea className="absolute bottom-32 left-[8%] w-14 h-18 animate-float delay-500 opacity-35" />
          <HeartDoodle className="absolute top-72 right-[5%] w-10 h-10 animate-bounce-gentle delay-100 opacity-40" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/40 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pop-in">
              <Sparkles className="w-4 h-4" />
              The Fun Way to Manage Events
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-slide-up leading-tight">
              Events Made{" "}
              <span className="text-primary relative inline-block">
                Simple
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 Q50 2 100 8 Q150 14 198 6" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" className="animate-draw-line" />
                </svg>
              </span>
              <br />
              & Delightful ✨
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
              From planning to certificates, manage your entire event lifecycle with a platform that's as fun as your events!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  <RocketDoodle className="w-6 h-8 transition-transform group-hover:-translate-y-1" />
                  Start Free Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="doodle-outline" size="xl">
                <CalendarDoodle className="w-6 h-6" />
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground animate-slide-up delay-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Secure & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Setup in Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10K+ Organizers</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-dashed border-border shadow-float animate-pop-in delay-500">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border transition-transform hover:scale-105 hover:-rotate-2">
                  <CalendarDoodle className="w-20 h-20" />
                  <span className="font-bold text-foreground">Plan Events</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary hidden md:block animate-bounce-gentle" />
                <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border transition-transform hover:scale-105 hover:rotate-1">
                  <PeopleGroup className="w-24 h-16" />
                  <span className="font-bold text-foreground">Track Attendees</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary hidden md:block animate-bounce-gentle delay-200" />
                <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border transition-transform hover:scale-105 hover:-rotate-1">
                  <CertificateBadge className="w-16 h-20" />
                  <span className="font-bold text-foreground">Issue Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-pop-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <LightbulbIdea className="w-12 h-16 animate-bounce-gentle" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Everything You Need 🎯
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features wrapped in a delightful experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${feature.color} rounded-3xl p-8 border-2 border-border transition-all duration-300 hover:shadow-float hover:-translate-y-2 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        {/* Floating Doodles */}
        <div className="absolute inset-0 pointer-events-none">
          <HappyStar className="absolute top-10 left-[10%] w-12 h-12 animate-bounce-gentle opacity-40" />
          <HeartDoodle className="absolute bottom-10 right-[10%] w-10 h-10 animate-float opacity-40" />
          <Confetti className="absolute top-20 right-[20%] w-16 h-16 animate-spin-slow opacity-30" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-card rounded-3xl p-12 border-2 border-border shadow-float text-center">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-4">
                <div className="w-16 h-16 bg-coral rounded-full border-4 border-card flex items-center justify-center">
                  <WavingPerson className="w-10 h-14" />
                </div>
                <div className="w-16 h-16 bg-secondary rounded-full border-4 border-card flex items-center justify-center">
                  <RocketDoodle className="w-10 h-14" />
                </div>
                <div className="w-16 h-16 bg-accent rounded-full border-4 border-card flex items-center justify-center">
                  <HappyStar className="w-10 h-10" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Ready to Get Started? 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of organizers creating memorable events with Thittam1Hub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  Create Your First Event
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <CalendarDoodle className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">
                Thittam<span className="text-primary">1</span>Hub
              </span>
            </div>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Features</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-muted-foreground text-sm">
              Made with <HeartDoodle className="w-4 h-4 inline-block" /> by Thittam1Hub Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
