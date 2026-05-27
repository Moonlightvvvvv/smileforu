import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/AppointmentForm";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help. Reach out to book an appointment or for any dental emergencies.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Clinic Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Shop No.4, Siddique Sardar House,<br/>
                      Near Karthika School, Opp. Sai Baba Building,<br/>
                      New Hall Road, Kurla (W), Mumbai 400070
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <a href="tel:+918299219918" className="hover:text-primary transition-colors">+91 82992 19918 (Mobile & WhatsApp)</a>
                      <a href="tel:02225030850" className="hover:text-primary transition-colors">022 2503 0850 (Landline)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:drsajidmds1@yahoo.com" className="text-muted-foreground hover:text-primary transition-colors">
                      drsajidmds1@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Visiting Hours</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">10:30 AM - 2:00 PM</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-destructive/5 p-6 rounded-2xl border border-destructive/20 flex gap-4"
            >
              <AlertTriangle className="w-8 h-8 text-destructive shrink-0" />
              <div>
                <h4 className="font-bold text-destructive mb-1">Dental Emergency?</h4>
                <p className="text-sm text-destructive/80 mb-2">We provide priority care for severe pain or injuries.</p>
                <a href="tel:+918299219918" className="text-destructive font-bold hover:underline">Call +91 82992 19918</a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-3xl border shadow-xl shadow-primary/5"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">Book an Appointment</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you to confirm your slot.</p>
            <AppointmentForm />
          </motion.div>

        </div>
      </div>

      {/* Map */}
      <section className="mt-24 h-[400px] w-full bg-muted">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15082.9463991206!2d72.8761159!3d19.0753049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c897f223126f%3A0x6b6ce1ab1a1bdff!2sKurla%20West%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        ></iframe>
      </section>
    </div>
  );
}
