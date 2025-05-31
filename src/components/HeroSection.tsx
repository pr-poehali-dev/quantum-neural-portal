import { useEffect, useState } from "react";

const HeroSection = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full floating-particle opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Neural Network Background Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,300 T900,200"
            stroke="url(#neuralGrad)"
            strokeWidth="2"
            fill="none"
            className="neural-connection"
          />
          <path
            d="M200,400 Q400,200 600,500 T1000,300"
            stroke="url(#neuralGrad)"
            strokeWidth="2"
            fill="none"
            className="neural-connection"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 leading-tight">
            Quantum Neural
            <br />
            Networks World
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Образовательный портал нового поколения, где медицинские знания
            структурированы как нейронная сеть, связывающая все области медицины
            в единую квантовую систему
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg cosmic-glow hover:scale-105 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <span>Начать обучение</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  🚀
                </span>
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-purple-500/50 rounded-xl text-purple-300 font-semibold text-lg hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300">
              Исследовать граф знаний
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "500+", label: "Медицинских тем" },
            { number: "10K+", label: "Нейронных связей" },
            { number: "50+", label: "Специализаций" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
