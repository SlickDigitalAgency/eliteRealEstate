import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AgentProfileProps } from "@/types/agent/AgentProfileTypes";
import ScheduleModal from "../common/modal/SchedualModal";

export default function AgentProfile({
  name,
  title,
  description,
  experience,
  expertise,
  specialties,
  image,
}: AgentProfileProps) {
  const handleConsultationSubmit = (formData: any) => {
    console.log("Consultation form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-background" id="agent-profile">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={image}
              alt="Luxury Real Estate Agent"
              className="w-full h-[500px] object-cover object-top rounded-lg shadow-xl border border-muted"
            />
            <div className="absolute -bottom-10 -right-10 bg-card p-6 rounded-lg shadow-lg hidden md:block border border-border">
              <div className="text-card-foreground text-center">
                <p className="text-3xl font-bold mb-2">{experience.count}</p>
                <p className="text-sm">{experience.label}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              {name} <span className="text-primary">{title}</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg mb-6 text-muted-foreground">{description}</p>

            <div className="space-y-4 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary mt-1 mr-3 h-5 w-5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {specialties.map((specialty) => (
                <Badge
                  key={specialty.id}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2"
                >
                  {specialty.name}
                </Badge>
              ))}
            </div>

            <ScheduleModal
              trigger={
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Schedule a Consultation
                </Button>
              }
              onSubmit={handleConsultationSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
