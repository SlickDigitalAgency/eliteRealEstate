// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Apps: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Initialize statistics chart
    const statsChart = document.getElementById("stats-chart");
    if (statsChart) {
      const chart = echarts.init(statsChart);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: "Luxury Sales", max: 100 },
            { name: "Client Satisfaction", max: 100 },
            { name: "Market Knowledge", max: 100 },
            { name: "Negotiation", max: 100 },
            { name: "Response Time", max: 100 },
          ],
          splitArea: {
            areaStyle: {
              color: ["rgba(197, 165, 114, 0.05)", "rgba(197, 165, 114, 0.1)"],
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(197, 165, 114, 0.5)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(197, 165, 114, 0.3)",
            },
          },
        },
        series: [
          {
            name: "Performance Metrics",
            type: "radar",
            data: [
              {
                value: [95, 98, 92, 96, 94],
                name: "Agent Performance",
                areaStyle: {
                  color: "rgba(197, 165, 114, 0.4)",
                },
                lineStyle: {
                  color: "#C5A572",
                },
                itemStyle: {
                  color: "#C5A572",
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="min-h-screen font-sans text-[#333333] overflow-x-hidden">
      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] mb-4">
                Contact <span className="text-[#C5A572]">Us</span>
              </h2>
              <div className="w-20 h-1 bg-[#C5A572] mb-6"></div>
              <p className="text-lg mb-8 text-[#333333]/80">
                Whether you're looking to buy, sell, or simply explore the
                luxury real estate market, we're here to assist you every step
                of the way.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#F5F5F5] p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-[#C5A572]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">
                      Office Address
                    </h4>
                    <p className="text-[#333333]/80">
                      123 Luxury Lane, Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#F5F5F5] p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt text-[#C5A572]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Phone</h4>
                    <p className="text-[#333333]/80">+1 (310) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#F5F5F5] p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-[#C5A572]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Email</h4>
                    <p className="text-[#333333]/80">info@eliteestates.com</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                {["facebook", "instagram", "linkedin", "twitter"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-[#F5F5F5] w-10 h-10 rounded-full flex items-center justify-center text-[#0B1F3A] hover:bg-[#C5A572] hover:text-white transition-colors cursor-pointer"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0B1F3A] mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full border-[#C5A572]/30 focus:border-[#C5A572] focus:ring-[#C5A572] text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0B1F3A] mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full border-[#C5A572]/30 focus:border-[#C5A572] focus:ring-[#C5A572] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#0B1F3A] mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full border-[#C5A572]/30 focus:border-[#C5A572] focus:ring-[#C5A572] text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0B1F3A] mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full border-[#C5A572]/30 focus:border-[#C5A572] focus:ring-[#C5A572] text-sm"
                  />
                </div>
                <Button className="bg-[#C5A572] hover:bg-[#C5A572]/90 text-white w-full !rounded-button whitespace-nowrap cursor-pointer">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0B1F3A] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">
                <span className="text-[#C5A572]">ELITE</span> ESTATES
              </h3>
              <p className="text-white/70 mb-6">
                Connecting extraordinary properties with extraordinary people
                for over 15 years.
              </p>
              <div className="flex space-x-4">
                {["facebook", "instagram", "linkedin", "twitter"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-white/70 hover:text-[#C5A572] transition-colors cursor-pointer"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "Properties",
                  "About Us",
                  "Services",
                  "Testimonials",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "About Us"
                          ? "https://readdy.ai/home/f8b790de-3644-4386-ae05-f31e72ed6278/2d7a77a3-09d3-4701-bc7a-96bfa3bd03e2"
                          : "#"
                      }
                      data-readdy={link === "About Us" ? "true" : undefined}
                      className="text-white/70 hover:text-[#C5A572] transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Luxury Sales",
                  "Property Management",
                  "Investment Consulting",
                  "Market Analysis",
                  "Global Relocation",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#C5A572] transition-colors cursor-pointer"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-white/70 mb-4">
                Subscribe to receive updates on new properties and market
                insights.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#0B1F3A] border-[#C5A572]/50 focus:border-[#C5A572] text-white rounded-r-none"
                />
                <Button className="bg-[#C5A572] hover:bg-[#C5A572]/90 text-white rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Elite Estates. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white/70">
                <i className="fab fa-cc-visa text-xl mr-2"></i>
                <i className="fab fa-cc-mastercard text-xl mr-2"></i>
                <i className="fab fa-cc-amex text-xl mr-2"></i>
                <i className="fab fa-paypal text-xl"></i>
              </div>
              <div className="flex space-x-4 text-white/70 text-sm">
                <a
                  href="#"
                  className="hover:text-[#C5A572] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-[#C5A572] transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Apps;
