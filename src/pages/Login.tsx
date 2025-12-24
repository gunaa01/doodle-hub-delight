import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  BouncingBall,
  FloatingCloud,
  HappyStar,
  HeartDoodle,
  LightbulbIdea,
  RocketDoodle,
} from "@/components/doodles/DoodleCharacters";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Welcome back! 🎉", {
      description: "Successfully logged into your account.",
    });
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Doodles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <RocketDoodle className="absolute top-20 right-16 w-20 h-28 animate-float opacity-25" />
        <FloatingCloud className="absolute top-40 left-10 w-32 h-20 animate-float delay-300 opacity-20" />
        <HappyStar className="absolute bottom-40 right-20 w-14 h-14 animate-bounce-gentle delay-200 opacity-30" />
        <LightbulbIdea className="absolute top-1/3 left-20 w-16 h-20 animate-bounce-gentle delay-400 opacity-25" />
        <HeartDoodle className="absolute bottom-32 left-1/4 w-10 h-10 animate-float delay-500 opacity-20" />
        <BouncingBall className="absolute top-1/2 right-1/4 w-12 h-12 animate-bounce-gentle delay-100 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8 animate-slide-up">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 relative">
                <BouncingBall className="w-full h-full animate-bounce-gentle" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Thittam<span className="text-primary">1</span>Hub
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back! 👋
            </h1>
            <p className="text-muted-foreground">
              Log in to continue your event journey
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-card rounded-3xl shadow-float p-8 border-2 border-border animate-pop-in delay-200">
            {/* Decorative Top */}
            <div className="flex justify-center -mt-14 mb-6">
              <div className="bg-secondary rounded-full p-4 border-4 border-card shadow-doodle">
                <RocketDoodle className="w-12 h-16" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2 animate-slide-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
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

              {/* Password */}
              <div className="space-y-2 animate-slide-up delay-400" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                    Password
                  </Label>
                  <a href="#" className="text-sm text-primary hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              {/* Remember Me */}
              <div className="flex items-center gap-3 animate-slide-up delay-500" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="doodle"
                size="xl"
                className="w-full animate-slide-up delay-600"
                style={{ opacity: 0, animationFillMode: 'forwards' }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Logging in...
                  </div>
                ) : (
                  <>
                    <RocketDoodle className="w-6 h-6" />
                    Log In
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
                  New to Thittam1Hub?
                </span>
              </div>
            </div>

            {/* Register Link */}
            <Link to="/register">
              <Button variant="doodle-outline" size="lg" className="w-full">
                <HappyStar className="w-5 h-5" />
                Create an Account
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-6 animate-slide-up delay-300">
            Trusted by 10,000+ event organizers worldwide 🌍
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
