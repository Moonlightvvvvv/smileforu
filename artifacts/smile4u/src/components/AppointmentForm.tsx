import { useState, useMemo } from "react";
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
import { CheckCircle2, Loader2, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Config ─── */
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

/* ─── Time slot generator ─── */
function generateTimeSlots(isSunday: boolean): string[] {
  const slots: string[] = [];
  const startH = isSunday ? 10 : 10;
  const startM = isSunday ? 30 : 0;
  const endH = isSunday ? 14 : 22; // 2 PM or 10 PM
  const endM = isSunday ? 0 : 0;

  let h = startH;
  let m = startM;

  while (h < endH || (h === endH && m < endM)) {
    const period = h < 12 ? "AM" : "PM";
    const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const displayM = m === 0 ? "00" : "30";
    slots.push(`${displayH}:${displayM} ${period}`);
    m += 30;
    if (m >= 60) { m -= 60; h += 1; }
  }
  return slots;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
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
    // Silently continue — WhatsApp redirect still happens
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
    `*Preferred Time:* ${values.time}\n` +
    (values.message ? `*Notes:* ${values.message}\n` : "") +
    `\nPlease confirm my appointment availability.\nThank you.`;

  window.open(`https://wa.me/918299219918?text=${encodeURIComponent(message)}`, "_blank");
}

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [submittedValues, setSubmittedValues] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", treatment: "", date: "", time: "", message: "" },
  });

  const selectedDate = form.watch("date");

  const timeSlots = useMemo(() => {
    if (!selectedDate) return generateTimeSlots(false);
    const day = new Date(selectedDate + "T00:00:00").getDay(); // 0 = Sunday
    return generateTimeSlots(day === 0);
  }, [selectedDate]);

  const isSundaySelected = useMemo(() => {
    if (!selectedDate) return false;
    return new Date(selectedDate + "T00:00:00").getDay() === 0;
  }, [selectedDate]);

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
        <p className="text-muted-foreground mb-2 max-w-sm mx-auto">
          Thank you, <strong>{submittedValues.name}</strong>!
        </p>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
          {submittedValues.date} at {submittedValues.time} — {TREATMENT_LABELS[submittedValues.treatment] ?? submittedValues.treatment}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => openWhatsApp(submittedValues)}
            className="gap-2 rounded-full px-6 bg-[#25D366] hover:bg-[#1ebd59] text-white"
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

        {/* Row 1: Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} className="bg-white rounded-xl" data-testid="form-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+91 98765 43210" {...field} className="bg-white rounded-xl" data-testid="form-phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Row 2: Email + Treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@email.com" {...field} className="bg-white rounded-xl" data-testid="form-email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="treatment" render={({ field }) => (
            <FormItem>
              <FormLabel>Treatment Interest</FormLabel>
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
          )} />
        </div>

        {/* Row 3: Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField control={form.control} name="date" render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-white rounded-xl"
                  data-testid="form-date"
                  onChange={(e) => {
                    field.onChange(e);
                    form.setValue("time", ""); // reset time when date changes
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="time" render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Preferred Time
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white rounded-xl" data-testid="form-time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-60">
                  {isSundaySelected && (
                    <div className="px-3 py-2 text-xs text-muted-foreground bg-amber-50 border-b">
                      Sunday hours: 10:30 AM – 2:00 PM
                    </div>
                  )}
                  {!isSundaySelected && selectedDate && (
                    <div className="px-3 py-2 text-xs text-muted-foreground bg-muted/50 border-b">
                      Mon–Sat hours: 10:00 AM – 10:00 PM
                    </div>
                  )}
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Notes */}
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>
              Additional Notes{" "}
              <span className="text-muted-foreground font-normal text-xs">(Optional)</span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any dental concerns, questions, or special requests..."
                className="resize-none bg-white rounded-xl min-h-[90px]"
                data-testid="form-message"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button
          type="submit"
          size="lg"
          className="w-full text-base py-6 rounded-xl gap-2 font-semibold"
          disabled={status === "loading"}
          data-testid="form-submit"
        >
          {status === "loading" ? (
            <><Loader2 className="w-5 h-5 animate-spin" />Sending Request...</>
          ) : (
            <><MessageCircle className="w-5 h-5" />Request Appointment via WhatsApp</>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          After submitting, you'll be redirected to WhatsApp to confirm your appointment instantly.
        </p>
      </form>
    </Form>
  );
}
