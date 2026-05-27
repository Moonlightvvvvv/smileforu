import { motion } from "framer-motion";
import { QrCode, Smartphone, ShieldCheck, CreditCard } from "lucide-react";

export function PaymentSection() {
  // Replace these placeholders when ready
  const UPI_ID = "yourupiid@bank"; // e.g. drsajid@upi
  const UPI_NAME = "Smile 4U Family Dental Clinic";
  const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(UPI_NAME)}&cu=INR`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border border-border/60 shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/90 to-primary px-6 py-5 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg font-serif">Make Payment</h3>
          <p className="text-white/70 text-xs">Secure UPI payment</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* QR Code Placeholder */}
        <div className="flex flex-col items-center">
          <div
            className="w-40 h-40 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-2 group"
            data-testid="payment-qr-placeholder"
          >
            <QrCode className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />
            <p className="text-xs text-muted-foreground text-center font-medium leading-tight">
              QR Code<br />Coming Soon
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Scan with any UPI app to pay
          </p>
        </div>

        {/* UPI ID */}
        <div className="bg-muted/60 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">UPI ID</p>
            <p className="font-mono font-bold text-foreground text-sm" data-testid="payment-upi-id">
              {UPI_ID}
            </p>
          </div>
          <button
            onClick={() => navigator.clipboard?.writeText(UPI_ID)}
            className="text-xs text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-primary hover:text-white transition-colors font-medium"
            data-testid="payment-copy-upi"
          >
            Copy
          </button>
        </div>

        {/* Pay via UPI Button */}
        <a
          href={UPI_LINK}
          className="flex items-center justify-center gap-2 w-full bg-primary text-white rounded-xl py-3.5 font-semibold text-sm hover:bg-primary/90 transition-all active:scale-95"
          data-testid="payment-upi-button"
        >
          <Smartphone className="w-4 h-4" />
          Pay via UPI App
        </a>

        {/* Supported Apps */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground font-medium">Accepted on all UPI apps</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["GPay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"].map((app) => (
              <span
                key={app}
                className="text-xs bg-muted text-muted-foreground rounded-full px-2.5 py-1 font-medium border border-border/50"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground pt-1">
          <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
          <span>Secured by NPCI UPI — 100% safe & encrypted</span>
        </div>
      </div>
    </motion.div>
  );
}
