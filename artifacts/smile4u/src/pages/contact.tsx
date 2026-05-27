import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PaymentSection } from "@/components/PaymentSection";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pb-0">
      <section className="bg-gradient-to-br from-primary/8 to-background py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book an appointment, ask a question, or visit us in person. We're here every day of the week.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Details */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8">Clinic Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Clinic Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Shop No.4, Siddique Sardar House,<br />
                      Near Karthika School, Opp. Sai Baba Building,<br />
                      New Hall Road, Kurla (W), Mumbai 400070
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+918299219918" className="text-muted-foreground hover:text-accent transition-colors" data-testid="contact-phone-mobile">
                        +91 82992 19918 (Mobile & WhatsApp)
                      </a>
                      <a href="tel:02225030850" className="text-muted-foreground hover:text-accent transition-colors" data-testid="contact-phone-landline">
                        022-25030850 (Landline)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:drsajidmds1@yahoo.com" className="text-muted-foreground hover:text-accent transition-colors" data-testid="contact-email">
                      drsajidmds1@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white p-8 rounded-3xl border border-border/60 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Visiting Hours</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="font-medium">Monday – Saturday</span>
                  <span className="text-accent font-semibold">10:00 AM – 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-accent font-semibold">10:30 AM – 2:00 PM</span>
                </li>
              </ul>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-accent/5 p-6 rounded-2xl border border-accent/20 flex gap-4"
            >
              <AlertTriangle className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="font-bold text-accent mb-1">Dental Emergency?</h4>
                <p className="text-sm text-accent/80 mb-2">
                  We provide immediate priority care for severe pain and dental injuries.
                </p>
                <a href="tel:+918299219918" className="text-accent font-bold hover:underline" data-testid="contact-emergency-call">
                  Call +91 82992 19918
                </a>
              </div>
            </motion.div>
          </div>

          {/* Appointment Form + Payment */}
          <div className="space-y-8">
            <motion.div
              id="appointment-form"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-border/60 shadow-xl shadow-accent/5"
            >
              <h2 className="text-3xl font-serif font-bold mb-2">Book an Appointment</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below — you'll be redirected to WhatsApp to confirm instantly.
              </p>
              <AppointmentForm />
            </motion.div>

            <PaymentSection />
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <section className="mt-8">
        <div className="relative h-[460px] w-full overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background/30 to-transparent h-8" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5938837960366!2d72.87610031490226!3d19.075319787100647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c897a27c0a4d%3A0xf1c5a24e59c59ccf!2sNew%20Hall%20Road%2C%20Kurla%20West%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "saturate(1.1) contrast(1.02)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Smile 4U Family Dental Clinic — New Hall Road, Kurla (W), Mumbai 400070"
          />
        </div>
        <div className="bg-foreground text-background py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-background/80">
              Shop No.4, Siddique Sardar House, Near Karthika School, New Hall Road, Kurla (W), Mumbai 400070
            </span>
          </div>
          <a
            href="https://maps.google.com/?q=New+Hall+Road,+Kurla+West,+Mumbai+400070"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold text-sm hover:underline shrink-0"
            data-testid="contact-directions"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
