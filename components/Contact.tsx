"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "pkrishi782@email.com",
    href: "mailto:pkrishi782@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+256 XXX XXX XXX",
    href: "tel:+256000000000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kampala, Uganda",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <div className="absolute right-[-5%] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[200px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          badge="Contact"
          title="Let's Build"
          accent="Something Amazing"
          description="Whether it's cybersecurity, software engineering, artificial intelligence or an exciting new project, I'd love to hear from you."
        />

        <div className="mt-24 grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <Reveal direction="left">

            <div className="space-y-6">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <GlassCard
                    key={item.title}
                    className="flex items-center gap-6"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">

                      <Icon size={28} />

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      {item.href === "#" ? (
                        <p className="mt-1 text-white/60">
                          {item.value}
                        </p>
                      ) : (
                        <a
                          href={item.href}
                          className="mt-1 block text-white/60 transition hover:text-cyan-300"
                        >
                          {item.value}
                        </a>
                      )}

                    </div>

                  </GlassCard>
                );
              })}

            </div>

          </Reveal>

          {/* Contact Form */}

          <Reveal direction="right">

            <GlassCard>

              <form className="space-y-6">

                <div>

                  <label className="mb-2 block text-sm text-white/70">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-300 focus:bg-white/10"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-300 focus:bg-white/10"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm text-white/70">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Subject"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-300 focus:bg-white/10"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm text-white/70">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-300 focus:bg-white/10"
                  />

                </div>

                <GlassButton
                  icon={<Send size={18} />}
                >
                  Send Message
                </GlassButton>

              </form>

            </GlassCard>

          </Reveal>

        </div>

      </div>
    </section>
  );
}