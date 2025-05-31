import { MedicalBlock } from "@/types/medical";

interface InfoPanelProps {
  activeBlock: MedicalBlock | undefined;
}

const InfoPanel = ({ activeBlock }: InfoPanelProps) => {
  if (!activeBlock) return null;

  return (
    <div className="mt-8 bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple-300 mb-2">
          {activeBlock.title}
        </h3>
        <p className="text-gray-300 text-lg">{activeBlock.description}</p>
      </div>
    </div>
  );
};

export default InfoPanel;
