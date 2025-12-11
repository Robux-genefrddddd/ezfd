import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Studio</div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Pricing
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Docs
            </a>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-blue-600 font-medium transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Build amazing things,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                effortlessly
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A modern platform designed to help teams collaborate, create, and
              ship faster. Intuitive, powerful, and built for everyone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-blue-600 font-medium transition flex items-center justify-center gap-2 group"
            >
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 font-medium transition">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">10M+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Everything you need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed with simplicity in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Experience blazing-fast performance with our optimized infrastructure.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security to keep your data safe and protected.",
              },
              {
                icon: Sparkles,
                title: "Intuitive Design",
                description:
                  "Beautiful, user-friendly interface that everyone loves to use.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition space-y-4 bg-white"
              >
                <feature.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="text-lg text-blue-100">
            Join thousands of teams already using our platform
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 font-medium transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg text-gray-900 mb-4">Studio</div>
              <p className="text-gray-600 text-sm">
                Build amazing things, effortlessly.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
