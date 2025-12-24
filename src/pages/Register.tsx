import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  WavingPerson,
  HappyStar,
  FloatingCloud,
  HeartDoodle,
  BouncingBall,
  Confetti,
} from "@/components/doodles/DoodleCharacters";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Welcome to Thittam1Hub! 🎉", {
      description: "Your account has been created successfully.",
    });
    setIsLoading(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Doodles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <WavingPerson className="absolute top-20 left-10 w-24 h-32 animate-float opacity-20" />
        <HappyStar className="absolute top-40 right-20 w-16 h-16 animate-bounce-gentle delay-200 opacity-30" />
        <FloatingCloud className="absolute bottom-40 left-20 w-28 h-20 animate-float delay-400 opacity-20" />
        <HeartDoodle className="absolute top-60 left-1/4 w-12 h-12 animate-bounce-gentle delay-300 opacity-25" />
        <BouncingBall className="absolute bottom-32 right-1/4 w-14 h-14 animate-float delay-500 opacity-20" />
        <Confetti className="absolute top-1/4 right-10 w-20 h-20 animate-spin-slow opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8 animate-slide-up">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 relative">
                <HappyStar className="w-full h-full animate-wiggle" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Thittam<span className="text-primary">1</span>Hub
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Join the Fun! 🎉
            </h1>
            <p className="text-muted-foreground">
              Create your account and start organizing amazing events
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-card rounded-3xl shadow-float p-8 border-2 border-border animate-pop-in delay-200">
            {/* Decorative Top */}
            <div className="flex justify-center -mt-14 mb-6">
              <div className="bg-accent rounded-full p-4 border-4 border-card shadow-doodle">
                <WavingPerson className="w-12 h-16" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2 animate-slide-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-12"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 animate-slide-up delay-400" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2 animate-slide-up delay-500" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-12"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2 animate-slide-up delay-600" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="pl-12 pr-12"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 animate-slide-up delay-700" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  className="mt-0.5"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="doodle"
                size="xl"
                className="w-full animate-slide-up delay-800"
                style={{ opacity: 0, animationFillMode: 'forwards' }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </div>
                ) : (
                  <>
                    <HappyStar className="w-6 h-6" />
                    Create Account
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground font-medium">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <Link to="/login">
              <Button variant="doodle-outline" size="lg" className="w-full">
                Log In Instead
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-6 animate-slide-up delay-300">
            By signing up, you're joining thousands of event organizers! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
