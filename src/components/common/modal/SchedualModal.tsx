import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import {
  ScheduleModalProps,
  ScheduleFormData,
} from "@/types/common/modal/SchedualModalTypes";

export default function ScheduleModal({
  trigger,
  onSubmit,
}: ScheduleModalProps) {
  const [formData, setFormData] = useState<ScheduleFormData>({
    name: "",
    email: "",
    phone: "",
    date: undefined,
    time: "",
    needs: "",
  });

  const handleSubmit = () => {
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule a Consultation
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border border-border/50 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif font-bold text-card-foreground">
              Schedule a Consultation
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="border-input bg-card text-card-foreground focus:border-ring focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your Email"
                  className="border-input bg-card text-card-foreground focus:border-ring focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Your Phone Number"
                className="border-input bg-card text-card-foreground focus:border-ring focus:ring-ring"
              />
            </div>

            {/* Preferred Date and Time in a side-by-side grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Preferred Date
                </label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData({ ...formData, date })}
                  className="w-full max-w-[252px] rounded-md border border-border bg-card p-2"
                  disabled={(date) =>
                    date < new Date() ||
                    date.getDay() === 0 ||
                    date.getDay() === 6
                  }
                  classNames={{
                    day_selected:
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                    day_today: "bg-accent text-accent-foreground",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Preferred Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full rounded-md border border-input bg-card text-card-foreground p-2 focus:border-ring focus:ring-ring"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Your Real Estate Needs
              </label>
              <Textarea
                value={formData.needs}
                onChange={(e) =>
                  setFormData({ ...formData, needs: e.target.value })
                }
                placeholder="Please briefly describe your real estate needs and preferences..."
                className="border-input bg-card text-card-foreground focus:border-ring focus:ring-ring"
                rows={4}
              />
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleSubmit}
            >
              Submit Consultation Request
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
