import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F91e2732f1c03487e879c66ee97e72712%2Fee08390eccc04e8dbea3ce5415d97e92?format=webp&width=800"
              alt="PinPinCloud"
              className="w-6 h-6"
            />
            PinPinCloud
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-200 transition text-sm">
              Features
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-200 transition text-sm">
              Pricing
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-200 transition text-sm">
              Documentation
            </a>
          </div>

          <div className="text-slate-400 text-sm">
            <a href="#" className="hover:text-slate-200 transition">
              Help
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome
            </h1>
            <p className="text-slate-400 text-base">
              Sign in to your PinPinCloud account and manage your projects
            </p>
          </div>

          {/* Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6">
            {/* Tabs */}
            <div className="flex gap-3 p-1 bg-slate-800/50 rounded-lg border border-slate-700">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-colors ${
                  isLogin
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-colors ${
                  !isLogin
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 pl-11 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-colors"
                    />
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 pl-11 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-colors"
                  />
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pl-11 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-colors"
                  />
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-slate-800 border border-slate-700 rounded accent-blue-500 cursor-pointer"
                    />
                    <span className="text-slate-300">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors">
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-700"></div>
              <span className="text-slate-500 text-xs">OR</span>
              <div className="flex-1 h-px bg-slate-700"></div>
            </div>

            {/* Toggle Text */}
            <p className="text-center text-slate-400 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>

            {/* Google Button */}
            <button className="w-full py-3 px-4 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92h8.85c.2 1.1.01 2.84-.88 4.3-.5 1.02-2.02 2.53-4.57 2.53-2.44 0-4.44-1.6-5.12-3.74H7.84c.48 2.45 2.25 4.97 5.23 4.97 2.5 0 4.9-.87 6.52-2.55 1.25-1.27 1.96-2.74 2.2-4.53h.05c.37-.05.74-.1 1.1-.1 1.1 0 1.82.35 2.02.97h3.26c-.5-1.6-2.15-3.83-4.1-4.39v-.05c-1.3-.4-2.64-.4-3.84-.05-1.2.35-2.4 1.05-3.2 2.05zm.05 3.5c.5 1.25 1.97 2.5 4 2.5 2.05 0 3.48-1.25 3.98-2.5H12.53z" />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-500 text-xs mt-8">
            © PinPinCloud — All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
