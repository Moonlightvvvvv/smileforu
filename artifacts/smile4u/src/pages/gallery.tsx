import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import img1 from "@/assets/gallery1.png";
import img2 from "@/assets/gallery2.png";
import img3 from "@/assets/gallery3.png";
import img4 from "@/assets/gallery4.png";
import img5 from "@/assets/gallery5.png";
import img6 from "@/assets/gallery6.png";
import img7 from "@/assets/gallery7.png";
import img8 from "@/assets/gallery8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Clinic Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take a tour of our premium facilities and see the advanced technology that powers our world-class treatments.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-muted"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
