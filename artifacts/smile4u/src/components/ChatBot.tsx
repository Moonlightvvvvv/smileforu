import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, ChevronDown } from "lucide-react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const FAQ_REPLIES = [
  "Book an Appointment",
  "Clinic Timings",
  "Services Offered",
  "Location & Address",
  "Emergency Contact",
  "WhatsApp Us",
];

const BOT_RESPONSES: Record<string, string> = {
  "Book an Appointment":
    "You can book an appointment by filling out our contact form, calling +91 82992 19918, or by messaging us on WhatsApp. We'll confirm your slot within 1-2 hours!",
  "Clinic Timings":
    "We are open Monday to Saturday from 10:00 AM to 10:00 PM, and on Sundays from 10:30 AM to 2:00 PM. We accommodate emergency cases outside these hours.",
  "Services Offered":
    "We offer Root Canal Treatment, Dental Implants, Teeth Whitening, Orthodontic Braces & Aligners, Pediatric Dentistry, Smile Makeover, Laser Dentistry, Conscious Sedation, and much more!",
  "Location & Address":
    "We are located at Shop No.4, Siddique Sardar House, Near Karthika School, Opp. Sai Baba Building, New Hall Road, Kurla (W), Mumbai 400070.",
  "Emergency Contact":
    "For dental emergencies, call us immediately at +91 82992 19918 or 022-25030850. We provide priority care for severe pain and injuries.",
  "WhatsApp Us":
    "You can reach us directly on WhatsApp at +91 82992 19918. Click the green WhatsApp button on the screen for a quick message!",
};

const INITIAL_MESSAGE: Message = {
  id: 0,
  from: "bot",
  text: "Hello! I'm your Smile 4U dental assistant. How can I help you today? You can ask me about appointments, timings, treatments, or our location.",
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const response =
      BOT_RESPONSES[text.trim()] ||
      "Thank you for your message! For specific queries, please call us at +91 82992 19918 or WhatsApp us directly. We'd love to help you!";

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: response },
      ]);
    }, 900);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: "linear-gradient(135deg, hsl(200 85% 45%), hsl(195 80% 38%))" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="chatbot-toggle"
        aria-label="Open dental assistant chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Bot className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 rounded-3xl overflow-hidden shadow-2xl"
            style={{ backdropFilter: "blur(20px)" }}
          >
            {/* Header — brand blue */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: "linear-gradient(90deg, hsl(200 85% 45%), hsl(200 85% 38%))" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Dental Assistant</p>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                    Online now
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors" data-testid="chatbot-close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 bg-white/95 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="bg-white/90 px-4 py-3 border-t border-border/50 flex gap-2 overflow-x-auto scrollbar-hide">
              {FAQ_REPLIES.map((faq) => (
                <button
                  key={faq}
                  onClick={() => sendMessage(faq)}
                  className="text-xs border rounded-full px-3 py-1 whitespace-nowrap transition-colors shrink-0 hover:text-white"
                style={{ color: "hsl(200 85% 45%)", borderColor: "hsl(200 85% 45% / 0.35)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "hsl(200 85% 45%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "")}
                  data-testid={`chatbot-faq-${faq.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {faq}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white px-4 py-3 flex items-center gap-3 border-t border-border/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type your question..."
                className="flex-1 text-sm bg-muted rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30 border-none"
                data-testid="chatbot-input"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
                data-testid="chatbot-send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
