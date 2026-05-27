import { motion } from "framer-motion";
import { Newspaper, Trophy, Award, Star } from "lucide-react";

const newsItems = [
  {
    publication: "Mumbai Times",
    headline: "Smile 4U Recognized as Top Family Clinic in Suburban Mumbai",
    date: "October 2023",
  },
  {
    publication: "Healthcare India",
    headline: "Dr. Sajid Pioneers New Painless Implant Protocol",
    date: "July 2023",
  },
  {
    publication: "The Daily Standard",
    headline: "How Smile 4U is Changing the Face of Pediatric Dentistry",
    date: "March 2023",
  },
  {
    publication: "Mumbai Health Digest",
    headline: "17 Years of Trust: Smile 4U Celebrates Milestone",
    date: "January 2024",
  }
];

const awards = [
  {
    title: "Best Dental Clinic - Mumbai Suburbs",
    year: "2023",
    body: "Awarded by the Indian Dental Excellence Council for outstanding patient care and hygiene standards.",
  },
  {
    title: "Excellence in Implantology",
    year: "2022",
    body: "Recognized for completing 500+ successful implant procedures with a 99.8% success rate.",
  },
  {
    title: "Patient Trust Award",
    year: "2021",
    body: "Voted by patients as the most trusted clinic in Kurla for 5 consecutive years.",
  }
];

export default function Media() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Media & Awards</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our commitment to excellence has been recognized by leading publications and healthcare organizations.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* News Section */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Newspaper className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-serif font-bold">In the News</h2>
            </div>
            
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{item.publication}</div>
                  <h3 className="text-xl font-serif font-bold mb-3">{item.headline}</h3>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-serif font-bold">Awards & Recognition</h2>
            </div>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary/5 p-6 rounded-2xl border border-primary/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-bold bg-primary text-white px-3 py-1 rounded-full">
                      {award.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{award.title}</h3>
                  <p className="text-muted-foreground">{award.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
