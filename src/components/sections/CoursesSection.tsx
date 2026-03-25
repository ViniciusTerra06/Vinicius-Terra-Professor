import { courses } from "@/data/content";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";

const CoursesSection = () => {
  return (
    <section id="cursos" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Cursos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Aprenda automação na prática com cursos completos, do básico ao avançado.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
