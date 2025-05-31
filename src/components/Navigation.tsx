import { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", label: "Главная", icon: "🏠" },
    { id: "courses", label: "Курсы", icon: "🧠" },
    { id: "research", label: "Исследования", icon: "🔬" },
    { id: "profile", label: "Профиль", icon: "👤" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full cosmic-glow flex items-center justify-center">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            <span className="text-white font-['Montserrat'] font-bold text-lg">
              QNNW
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-purple-600/30 text-purple-300 cosmic-glow"
                    : "text-gray-300 hover:text-purple-300 hover:bg-purple-600/20"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-purple-400"></div>
              <div className="w-full h-0.5 bg-purple-400"></div>
              <div className="w-full h-0.5 bg-purple-400"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
