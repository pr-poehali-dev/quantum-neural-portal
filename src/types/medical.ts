export interface MedicalBlock {
  id: string;
  title: string;
  description: string;
  connections: string[];
  position: { x: number; y: number };
  color: string;
  icon: string;
}
