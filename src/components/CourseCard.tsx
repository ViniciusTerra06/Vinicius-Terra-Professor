import { Course } from "@/data/content";
import ToolBadge from "./ToolBadge";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {course.bestSeller && (
        <Badge className="absolute right-4 top-4 bg-secondary text-secondary-foreground">
          Mais vendido
        </Badge>
      )}

      <h3 className="mb-2 font-display text-xl font-bold text-foreground">
        {course.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{course.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {course.tools.map((tool) => (
          <ToolBadge key={tool} name={tool} />
        ))}
      </div>

      <div className="mb-4 flex items-baseline justify-between">
        <span className="text-xs text-muted-foreground">{course.level}</span>
        <span className="font-display text-2xl font-bold text-primary">{course.price}</span>
      </div>

      <a
        href={course.ctaUrl}
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-teal"
      >
        {course.ctaLabel}
      </a>
    </motion.div>
  );
};

export default CourseCard;
