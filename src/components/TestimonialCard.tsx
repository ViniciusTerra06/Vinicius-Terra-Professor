import { Testimonial } from "@/data/content";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="min-w-[300px] flex-shrink-0 rounded-lg border border-border bg-card p-6"
    >
      <Quote size={20} className="mb-4 text-primary/40" />
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        "{testimonial.text}"
      </p>
      <div>
        <p className="font-display text-sm font-semibold text-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
