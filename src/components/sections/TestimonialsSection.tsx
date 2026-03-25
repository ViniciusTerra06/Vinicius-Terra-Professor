import { testimonials, stats } from "@/data/content";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que meus alunos dizem
          </h2>
        </motion.div>

        {/* Infinite Marquee Carousel */}
        <div className="mb-16 relative mx-auto w-full overflow-hidden mask-edges py-4">
          <style>{`
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            .animate-marquee-testimonials {
              display: flex;
              width: max-content;
              animation: marqueeTestimonials 40s linear infinite;
            }
            .animate-marquee-testimonials:hover {
              animation-play-state: paused;
            }
            @keyframes marqueeTestimonials {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}</style>

          <div className="animate-marquee-testimonials gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className="flex-shrink-0 w-[350px] md:w-[450px]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-primary glow-text-teal md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
