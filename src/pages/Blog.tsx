import { blogPosts } from "@/data/content";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 pb-24 pt-32">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> Voltar ao início
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Artigos sobre automação, N8N, IA e produtividade.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Tag size={12} /> {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readingTime}
                </span>
                <span>{post.date}</span>
              </div>

              <h2 className="mb-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

              <span className="mt-4 text-sm font-medium text-primary">
                Ler mais →
              </span>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
