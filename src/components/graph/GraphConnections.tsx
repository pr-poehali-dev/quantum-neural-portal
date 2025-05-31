import { MedicalBlock } from "@/types/medical";
import { getConnectionPath } from "@/utils/graphUtils";

interface GraphConnectionsProps {
  blocks: MedicalBlock[];
  activeBlock: string | null;
}

const GraphConnections = ({ blocks, activeBlock }: GraphConnectionsProps) => {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
        </linearGradient>
      </defs>

      {blocks.map((block) =>
        block.connections.map((connectionId) => {
          const connectedBlock = blocks.find((b) => b.id === connectionId);
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
  );
};

export default GraphConnections;
