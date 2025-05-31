import { useState } from "react";
import { medicalBlocks } from "@/data/medicalData";
import GraphNode from "@/components/graph/GraphNode";
import GraphConnections from "@/components/graph/GraphConnections";
import InfoPanel from "@/components/graph/InfoPanel";

const MedicalGraphBlocks = () => {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);

  const activeBlockData = medicalBlocks.find((b) => b.id === activeBlock);

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
          <GraphConnections blocks={medicalBlocks} activeBlock={activeBlock} />

          {medicalBlocks.map((block) => (
            <GraphNode
              key={block.id}
              block={block}
              isActive={activeBlock === block.id}
              onMouseEnter={() => setActiveBlock(block.id)}
              onMouseLeave={() => setActiveBlock(null)}
            />
          ))}
        </div>

        <InfoPanel activeBlock={activeBlockData} />
      </div>
    </section>
  );
};

export default MedicalGraphBlocks;
