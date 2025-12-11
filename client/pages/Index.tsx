import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Animated gradient sphere background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-300 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse -mr-48"></div>
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-t from-cyan-400 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F91e2732f1c03487e879c66ee97e72712%2Fee08390eccc04e8dbea3ce5415d97e92?format=webp&width=800"
              alt="PinPinCloud"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-white">PinPinCloud</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition">
              Fonctionnalités
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Tarification
            </a>
            <Link
              to="/dashboard"
              className="text-white/80 hover:text-white transition"
            >
              Documentation
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-white/80 hover:text-white font-medium transition"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-cyan-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-cyan-300 font-medium transition"
            >
              Commencer
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900/95 backdrop-blur p-6 space-y-4">
            <a
              href="#"
              className="block text-white/80 hover:text-white transition"
            >
              Fonctionnalités
            </a>
            <a
              href="#"
              className="block text-white/80 hover:text-white transition"
            >
              Tarification
            </a>
            <Link
              to="/dashboard"
              className="block text-white/80 hover:text-white transition"
            >
              Documentation
            </Link>
            <div className="pt-4 space-y-3 border-t border-white/20">
              <Link
                to="/login"
                className="block text-white/80 hover:text-white font-medium transition"
              >
                Se connecter
              </Link>
              <Link
                to="/register"
                className="block bg-cyan-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-cyan-300 font-medium transition text-center"
              >
                Commencer
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Left side - Card */}
          <div className="relative z-10">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-auto lg:mx-0 border border-slate-800">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F91e2732f1c03487e879c66ee97e72712%2Fee08390eccc04e8dbea3ce5415d97e92?format=webp&width=800"
                  alt="PinPinCloud"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-white">PinPinCloud</span>
              </div>

              {/* Welcome text */}
              <h2 className="text-3xl font-bold text-white mb-2">Bienvenue</h2>
              <p className="text-gray-400 mb-8 text-sm">
                Connectez-vous à votre compte
              </p>

              {/* Form fields */}
              <div className="space-y-4 mb-8">
                <div>
                  <input
                    type="text"
                    placeholder="NOM D'UTILISATEUR"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="MOT DE PASSE"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Login button */}
              <Link
                to="/dashboard"
                className="w-full bg-cyan-500 text-slate-900 py-3 rounded-lg font-bold hover:bg-cyan-400 transition flex items-center justify-center gap-2 mb-6 group"
              >
                CONNEXION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              {/* Footer links */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <Link to="/register" className="hover:text-gray-300">
                  S'inscrire
                </Link>
                <a href="#" className="hover:text-gray-300">
                  Mot de passe oublié?
                </a>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8 pt-8 border-t border-slate-800">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Welcome text and gradient */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Large gradient sphere effect */}
            <div className="relative h-96 flex items-center justify-center mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-300 to-orange-200 rounded-full blur-2xl opacity-50"></div>
              <div className="relative text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Bienvenue.
                </h1>
              </div>
            </div>

            <p className="text-white/80 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Une plateforme moderne conçue pour aider les équipes à collaborer, créer et livrer plus rapidement. Intuitive, puissante et construite pour tout le monde.
            </p>

            <div className="mt-8">
              <Link
                to="/register"
                className="inline-block bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg hover:bg-cyan-300 font-bold transition"
              >
                Commencer Maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Features */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-t from-blue-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Tout ce qu'il vous faut
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ultra Rapide",
                description:
                  "Profitez d'une performance ultra-rapide grâce à notre infrastructure optimisée.",
              },
              {
                title: "Sécurisé et Fiable",
                description:
                  "Sécurité de classe entreprise pour protéger vos données et votre confidentialité.",
              },
              {
                title: "Conception Intuitive",
                description:
                  "Interface belle et conviviale que tout le monde adore utiliser.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-white/60 text-sm">
          <p>&copy; 2024 PinPinCloud | FREE. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
