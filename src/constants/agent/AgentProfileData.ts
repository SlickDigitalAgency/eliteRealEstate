import { AgentProfileProps } from "@/types/agent/AgentProfileTypes";

export const agentProfileData: AgentProfileProps = {
  name: "Your Luxury",
  title: "Property Expert",
  description:
    "With over 15 years of experience in luxury real estate, I specialize in connecting discerning clients with exceptional properties that meet their unique lifestyle needs and investment goals.",
  experience: {
    count: "15+",
    label: "Years of Experience",
  },
  expertise: [
    "Specialized knowledge of luxury markets worldwide",
    "Discreet, personalized service for high-net-worth clients",
    "Expert negotiation skills to secure optimal terms",
    "Extensive network of industry professionals",
  ],
  specialties: [
    { id: 1, name: "Luxury Residential" },
    { id: 2, name: "Waterfront Properties" },
    { id: 3, name: "Historic Estates" },
    { id: 4, name: "Investment Properties" },
  ],
  image: "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg",
};
