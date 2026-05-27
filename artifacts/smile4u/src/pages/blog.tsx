import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import img2 from "@/assets/gallery2.png";
import img3 from "@/assets/gallery3.png";
import img4 from "@/assets/gallery4.png";
import img5 from "@/assets/gallery5.png";
import img6 from "@/assets/gallery6.png";
import img7 from "@/assets/gallery7.png";
import img8 from "@/assets/gallery8.png";

const blogPosts = [
  {
    title: "Understanding Root Canal Therapy",
    excerpt: "Everything you need to know about modern root canal treatments and why they are completely pain-free.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: img3
  },
  {
    title: "Preventing Tooth Decay in Children",
    excerpt: "Essential tips for parents to ensure their kids grow up with healthy, strong teeth.",
    date: "Nov 05, 2023",
    readTime: "4 min read",
    image: img7
  },
  {
    title: "Why Regular Dental Checkups Matter",
    excerpt: "Discover how a simple 6-month checkup can save you from severe pain and expensive treatments.",
    date: "Dec 18, 2023",
    readTime: "3 min read",
    image: img4
  },
  {
    title: "Gum Disease: Early Signs & Prevention",
    excerpt: "Don't ignore bleeding gums. Learn the early warning signs of periodontal disease.",
    date: "Jan 22, 2024",
    readTime: "6 min read",
    image: img5
  },
  {
    title: "Everything About Wisdom Teeth",
    excerpt: "When should you get them removed? A comprehensive guide to wisdom tooth management.",
    date: "Feb 14, 2024",
    readTime: "5 min read",
    image: img8
  },
  {
    title: "The Complete Guide to Dental Implants",
    excerpt: "Are implants the right choice for you? We break down the process, cost, and recovery.",
    date: "Mar 03, 2024",
    readTime: "8 min read",
    image: img2
  },
  {
    title: "Caring for Your Child's First Teeth",
    excerpt: "From teething to their first dentist visit, here's how to manage infant dental care.",
    date: "Apr 11, 2024",
    readTime: "4 min read",
    image: img6
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Oral Health Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert advice, treatment guides, and dental hygiene tips straight from our specialists.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                  <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
