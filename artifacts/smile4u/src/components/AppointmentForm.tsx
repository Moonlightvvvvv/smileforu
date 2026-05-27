import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "./ui/select";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Config ─── */
// Replace this URL with your Google Apps Script Web App deployment URL.
// See: https://developers.google.com/apps-script/guides/web
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

const TREATMENT_LABELS: Record<string, string> = {
  "oral-checkup": "Regular Oral Checkup",
  "teeth-cleaning": "Teeth Cleaning",
  "filling": "Filling & Restoration",
  "root-canal": "Root Canal Treatment",
  "fixed-teeth": "Fixed Teeth (Crown/Bridge)",
  "removable-teeth": "Removable Teeth",
  "dentures": "Complete Dentures",
  "implants": "Dental Implants",
  "pediatric": "Pediatric Dental Care",
  "extraction": "Tooth Extraction",
  "whitening": "Teeth Whitening",
  "braces": "Braces & Aligners",
  "superspecialized": "Superspecialized Consultation",
  "sedation": "Conscious Sedation",
  "other": "Other / Not Sure",
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

async function saveToGoogleSheets(values: FormValues) {
  if (!GOOGLE_SHEETS_URL) return;
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        treatmentLabel: TREATMENT_LABELS[values.treatment] ?? values.treatment,
        timestamp: new Date().toISOString(),
        source: "Website Appointment Form",
      }),
    });
  } catch {
    // Silently continue — WhatsApp redirect will still happen
  }
}

function openWhatsApp(values: FormValues) {
  const treatmentLabel = TREATMENT_LABELS[values.treatment] ?? values.treatment;
  const message =
    `Hello Doctor,\n` +
    `I would like to book a dental appointment at Smile 4U Family Dental Clinic.\n\n` +
    `*Name:* ${values.name}\n` +
    `*Phone:* ${values.phone}\n` +
    `*Email:* ${values.email}\n` +
    `*Treatment:* ${treatmentLabel}\n` +
    `*Preferred Date:* ${values.date}\n` +
    (values.message ? `*Notes:* ${values.message}\n` : "") +
    `\nPlease confirm my appointment availability.\nThank you.`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/918299219918?text=${encoded}`, "_blank");
}

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [submittedValues, setSubmittedValues] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", treatment: "", date: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    await saveToGoogleSheets(values);
    setSubmittedValues(values);
    setStatus("success");
  }

  if (status === "success" && submittedValues) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/5 p-10 rounded-3xl border border-primary/20 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
          Appointment Request Sent!
        </h3>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong>{submittedValues.name}</strong>! Your request has been recorded.
          Complete your booking instantly via WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => openWhatsApp(submittedValues)}
            className="gap-2 rounded-full px-6 bg-[#25D366] hover:bg-[#20b858] text-white"
            data-testid="form-confirm-whatsapp"
          >
            <MessageCircle className="w-4 h-4" />
            Confirm on WhatsApp
          </Button>
          <Button
            onClick={() => { setStatus("idle"); form.reset(); setSubmittedValues(null); }}
            variant="outline"
            className="rounded-full px-6"
            data-testid="form-book-another"
          >
            Book Another Appointment
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} className="bg-white rounded-xl" data-testid="form-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} className="bg-white rounded-xl" data-testid="form-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@email.com" {...field} className="bg-white rounded-xl" data-testid="form-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="treatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Treatment Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white rounded-xl" data-testid="form-treatment">
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(TREATMENT_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Preferred Appointment Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="bg-white rounded-xl" data-testid="form-date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Additional Notes <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any dental concerns, questions, or special requests..."
                  className="resize-none bg-white rounded-xl min-h-[100px]"
                  data-testid="form-message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full text-base py-6 rounded-xl gap-2"
          disabled={status === "loading"}
          data-testid="form-submit"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              <MessageCircle className="w-5 h-5" />
              Request Appointment via WhatsApp
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          After submission, you'll be redirected to WhatsApp to confirm your appointment instantly.
        </p>
      </form>
    </Form>
  );
}
