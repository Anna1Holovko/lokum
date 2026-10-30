"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center py-12 px-4 page-transition">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-12 h-12 bg-[var(--color-accent)] flex items-center justify-center shadow-lg">
            <Home className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <span className="text-2xl font-heading tracking-tight text-[var(--color-text-primary)]">
            Lokum
          </span>
        </Link>

        {/* Card */}
        <div className="bg-white border border-[var(--color-border)] p-8 animate-scale-in">
          {/* Tabs */}
          <div className="flex bg-[var(--color-background)] p-1 mb-6 border border-[var(--color-border)]">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-[15px] font-medium transition-all ${
                isLogin
                  ? "bg-[var(--color-accent)] text-white"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Logowanie
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-[15px] font-medium transition-all ${
                !isLogin
                  ? "bg-[var(--color-accent)] text-white"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Rejestracja
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-1.5">
                  Imię i nazwisko
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    className="w-full h-12 pl-12 pr-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-1.5">
                Adres email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan@example.com"
                  className="w-full h-12 pl-12 pr-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-1.5">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full h-12 pl-12 pr-12 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                  aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-1.5">
                  Potwierdź hasło
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full h-12 pl-12 pr-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[14px] text-[var(--color-accent)] font-medium hover:underline"
                >
                  Zapomniałeś hasła?
                </button>
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full h-12 press-effect">
              {isLogin ? "Zaloguj się" : "Zarejestruj się"}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[var(--color-border)]"></div>
            <span className="text-[13px] text-[var(--color-text-muted)]">lub kontynuuj przez</span>
            <div className="flex-1 h-px bg-[var(--color-border)]"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 h-12 bg-[var(--color-background)] border border-[var(--color-border)] text-[14px] font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 h-12 bg-[var(--color-background)] border border-[var(--color-border)] text-[14px] font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Terms */}
          {!isLogin && (
            <p className="mt-6 text-[13px] text-[var(--color-text-muted)] text-center">
              Rejestrując się, akceptujesz{" "}
              <Link href="/regulamin" className="text-[var(--color-accent)] hover:underline">
                Regulamin
              </Link>{" "}
              oraz{" "}
              <Link href="/polityka-prywatnosci" className="text-[var(--color-accent)] hover:underline">
                Politykę Prywatności
              </Link>
            </p>
          )}
        </div>

        {/* Back to home */}
        <p className="mt-6 text-center text-[14px] text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            ← Wróć do strony głównej
          </Link>
        </p>
      </div>
    </div>
  );
}
