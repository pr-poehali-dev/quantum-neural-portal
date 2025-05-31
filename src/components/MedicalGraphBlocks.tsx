import { useState } from "react";

interface MedicalBlock {
  id: string;
  title: string;
  description: string;
  connections: string[];
  position: { x: number; y: number };
  color: string;
  icon: string;
}

const MedicalGraphBlocks = () => {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);

  const medicalBlocks: MedicalBlock[] = [
    {
      id: "cardiology",
      title: "Кардиология",
      description: "Заболевания сердечно-сосудистой системы",
      connections: ["neurology", "endocrinology"],
      position: { x: 20, y: 30 },
      color: "from-red-500 to-pink-600",
      icon: "❤️",
    },
    {
      id: "neurology",
      title: "Неврология",
      description: "Нервная система и мозг",
      connections: ["cardiology", "psychiatry"],
      position: { x: 60, y: 20 },
      color: "from-purple-500 to-indigo-600",
      icon: "🧠",
    },
    {
      id: "endocrinology",
      title: "Эндокринология",
      description: "Гормональная система организма",
      connections: ["cardiology", "metabolism"],
      position: { x: 30, y: 70 },
      color: "from-green-500 to-teal-600",
      icon: "⚗️",
    },
    {
      id: "psychiatry",
      title: "Психиатрия",
      description: "Психические расстройства",
      connections: ["neurology", "psychology"],
      position: { x: 80, y: 60 },
      color: "from-blue-500 to-cyan-600",
      icon: "🧘",
    },
    {
      id: "metabolism",
      title: "Метаболизм",
      description: "Обмен веществ в организме",
      connections: ["endocrinology", "nutrition"],
      position: { x: 15, y: 80 },
      color: "from-yellow-500 to-orange-600",
      icon: "⚡",
    },
    {
      id: "psychology",
      title: "Психология",
      description: "Поведение и когнитивные процессы",
      connections: ["psychiatry", "neurology"],
      position: { x: 70, y: 85 },
      color: "from-violet-500 to-purple-600",
      icon: "🎭",
    },
  ];

  const getConnectionPath = (from: MedicalBlock, to: MedicalBlock) => {
    const fromX = from.position.x;
    const fromY = from.position.y;
    const toX = to.position.x;
    const toY = to.position.y;

    return `M${fromX},${fromY} Q${(fromX + toX) / 2},${Math.min(fromY, toY) - 10} ${toX},${toY}`;
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Граф медицинских знаний
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Исследуйте взаимосвязи между различными областями медицины в
            интерактивной нейронной сети знаний
          </p>
        </div>

        <div className="relative h-[600px] bg-slate-900/50 rounded-2xl border border-purple-500/20 overflow-hidden">
          {/* SVG для связей */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient
                id="connectionGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
              </linearGradient>
            </defs>

            {medicalBlocks.map((block) =>
              block.connections.map((connectionId) => {
                const connectedBlock = medicalBlocks.find(
                  (b) => b.id === connectionId,
                );
                if (!connectedBlock) return null;

                return (
                  <path
                    key={`${block.id}-${connectionId}`}
                    d={getConnectionPath(block, connectedBlock)}
                    stroke="url(#connectionGrad)"
                    strokeWidth={
                      activeBlock &&
                      (activeBlock === block.id || activeBlock === connectionId)
                        ? "3"
                        : "2"
                    }
                    fill="none"
                    className="neural-connection"
                    opacity={
                      activeBlock &&
                      activeBlock !== block.id &&
                      activeBlock !== connectionId
                        ? 0.3
                        : 1
                    }
                  />
                );
              }),
            )}
          </svg>

          {/* Медицинские блоки */}
          {medicalBlocks.map((block) => (
            <div
              key={block.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${block.position.x}%`,
                top: `${block.position.y}%`,
              }}
              onMouseEnter={() => setActiveBlock(block.id)}
              onMouseLeave={() => setActiveBlock(null)}
            >
              <div
                className={`
                  relative p-6 rounded-xl bg-gradient-to-br ${block.color} 
                  shadow-lg hover:shadow-2xl transition-all duration-300 
                  hover:scale-110 border border-white/20
                  ${activeBlock === block.id ? "cosmic-glow scale-110" : ""}
                `}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{block.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">
                    {block.title}
                  </h3>
                  {activeBlock === block.id && (
                    <p className="text-white/90 text-xs max-w-32 leading-tight">
                      {block.description}
                    </p>
                  )}
                </div>

                {/* Пульсирующий индикатор активности */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Информационная панель */}
        {activeBlock && (
          <div className="mt-8 bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                {medicalBlocks.find((b) => b.id === activeBlock)?.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {medicalBlocks.find((b) => b.id === activeBlock)?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MedicalGraphBlocks;
