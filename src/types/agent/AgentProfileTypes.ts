export interface Specialty {
  id: number;
  name: string;
}

export interface Achievement {
  count: string;
  label: string;
}

export interface AgentProfileProps {
  name: string;
  title: string;
  description: string;
  experience: Achievement;
  expertise: string[];
  specialties: Specialty[];
  image: string;
}
