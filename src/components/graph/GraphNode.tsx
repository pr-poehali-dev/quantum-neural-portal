import { MedicalBlock } from "@/types/medical";

interface GraphNodeProps {
  block: MedicalBlock;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const GraphNode = ({
  block,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: GraphNodeProps) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{
        left: `${block.position.x}%`,
        top: `${block.position.y}%`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`
          relative p-6 rounded-xl bg-gradient-to-br ${block.color} 
          shadow-lg hover:shadow-2xl transition-all duration-300 
          hover:scale-110 border border-white/20
          ${isActive ? "cosmic-glow scale-110" : ""}
        `}
      >
        <div className="text-center">
          <div className="text-3xl mb-2">{block.icon}</div>
          <h3 className="text-white font-bold text-sm mb-1">{block.title}</h3>
          {isActive && (
            <p className="text-white/90 text-xs max-w-32 leading-tight">
              {block.description}
            </p>
          )}
        </div>

        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  );
};

export default GraphNode;
