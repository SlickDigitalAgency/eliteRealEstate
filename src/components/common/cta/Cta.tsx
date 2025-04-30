import { Button } from "@/components/ui/button";
import { CTASectionProps } from "@/types/cta/CtaTypes";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const CTASection = ({ data }: CTASectionProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return <Phone className="w-4 h-4" />;
      case "MessageCircle":
        return <MessageCircle className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--color-black))]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="relative group rounded-2xl p-12 md:p-16 overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="relative text-center mb-16">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c2972f] to-[#e3b748] py-3">
                  {data.title}
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-32 h-1 mx-auto mb-8 origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(212,175,55,0.3), rgb(212,175,55), rgba(212,175,55,0.3))",
                  }}
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-serif text-[rgb(var(--color-gold))] mb-6"
                >
                  {data.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >
                  {data.description}
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {data.buttons.map((button) => {
                const isWhatsApp = button.label
                  .toLowerCase()
                  .includes("whatsapp");
                const isCallOrEmail =
                  button.label.toLowerCase().includes("call") ||
                  button.label.toLowerCase().includes("email");

                return (
                  <motion.div
                    key={button.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className={`w-full h-14 transition-all duration-500 group relative overflow-hidden border text-[rgb(var(--color-gold))] bg-transparent`}
                      style={{
                        borderColor: "rgba(212,175,55,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        if (isWhatsApp) {
                          e.currentTarget.style.borderColor =
                            "rgba(212,175,55,1)";
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "rgba(212,175,55,1)";
                        } else if (isCallOrEmail) {
                          e.currentTarget.style.backgroundColor =
                            "rgba(212,175,55,0.15)";
                          e.currentTarget.style.color = "rgba(212,175,55,1)";
                          e.currentTarget.style.borderColor = "transparent";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor =
                          "rgba(212,175,55,0.3)";
                        e.currentTarget.style.color = "rgb(212,175,55)";
                      }}
                    >
                      <a
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 text-lg"
                      >
                        {getIcon(button.icon)}
                        <span className="font-medium">{button.label}</span>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background glow */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03], rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-[rgb(var(--color-gold))] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.04, 0.07, 0.04], rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -left-48 w-[30rem] h-[30rem] bg-[rgb(var(--color-gold))] rounded-full blur-[120px]"
      />
    </section>
  );
};

export default CTASection;
