import { MedicalBlock } from "@/types/medical";

export const getConnectionPath = (
  from: MedicalBlock,
  to: MedicalBlock,
): string => {
  const fromX = from.position.x;
  const fromY = from.position.y;
  const toX = to.position.x;
  const toY = to.position.y;

  return `M${fromX},${fromY} Q${(fromX + toX) / 2},${Math.min(fromY, toY) - 10} ${toX},${toY}`;
};
