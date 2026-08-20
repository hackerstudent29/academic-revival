import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const DEFAULT_SUGGESTIONS = [
  "Admission eligibility 2026",
  "Engineering programmes offered",
  "Placement statistics",
  "Campus facilities & hostel",
];

const PREDEFINED_KNOWLEDGE: Record<string, string> = {
  admission:
    "Admissions for 2026-27 at MSAJCE are open! We offer B.E./B.Tech programmes through TNEA counselling (Anna University) and Management Quota. For direct queries, reach out to admissions@msajce-edu.in or visit the Admissions page.",
  eligibility:
    "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum prescribed marks as per Anna University / AICTE norms.",
  programme:
    "MSAJCE offers Undergraduate (B.E./B.Tech) courses in CSE, AI & Data Science, Cyber Security, IT, ECE, EEE, Mechanical, and Civil Engineering, along with PG & Research programmes.",
  course:
    "MSAJCE offers Undergraduate (B.E./B.Tech) courses in CSE, AI & Data Science, Cyber Security, IT, ECE, EEE, Mechanical, and Civil Engineering, along with PG & Research programmes.",
  placement:
    "MSAJCE has an active training & placement cell with 90%+ placement consistency. Top recruiters include TCS, Infosys, Wipro, Cognizant, Zoho, HCL, and prominent core engineering firms.",
  hostel:
    "MSAJCE provides separate, secure, and modern hostels for boys and girls on-campus with Wi-Fi, hygienic dining facilities, 24/7 power backup, and indoor recreation.",
  fee:
    "Fee structures adhere to Tamil Nadu State Government / Fee Fixation Committee norms. Please contact the admissions desk at +91 44 2747 0025 for specific branch details and scholarship opportunities.",
  contact:
    "MSAJCE is located at Rajiv Gandhi Salai (OMR), Siruseri, IT Highway, Chennai - 603103. Phone: +91 44 2747 0025 | Email: info@msajce-edu.in",
  hackathon:
    "MSAJCE regularly hosts national-level hackathons, technical symposiums, and code fests across AI, Web3, and Robotics domains in collaboration with IEEE and industry chapters.",
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! Welcome to MSAJCE (Mohamed Sathak A.J. College of Engineering). I am your AI campus assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const generateBotReply = async (userQuery: string): Promise<string> => {
    // 1. If an external API URL is configured (FastAPI RAG server), attempt to call it
    const apiUrl = import.meta.env.VITE_CHATBOT_API_URL;
    const clientKey = import.meta.env.VITE_CHATBOT_KEY || "msajce-client-key";

    if (apiUrl) {
      try {
        const response = await fetch(`${apiUrl}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Chatbot-Key": clientKey,
          },
          body: JSON.stringify({ query: userQuery }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.answer) return data.answer;
        }
      } catch (err) {
        console.warn("FastAPI backend connection unreachable, using local knowledge base.", err);
      }
    }

    // 2. Simulated RAG / Smart Local Match
    await new Promise((resolve) => setTimeout(resolve, 800)); // Natural typing latency
    const normalized = userQuery.toLowerCase();

    for (const [keyword, response] of Object.entries(PREDEFINED_KNOWLEDGE)) {
      if (normalized.includes(keyword)) {
        return response;
      }
    }

    if (normalized.includes("hello") || normalized.includes("hi") || normalized.includes("hey")) {
      return "Hello! Feel free to ask about our engineering departments, admissions process, campus life, or upcoming hackathons.";
    }

    return "Thank you for asking! For comprehensive details, please check our relevant department pages or speak directly with the MSAJCE Admissions Office at admissions@msajce-edu.in.";
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const answer = await generateBotReply(query);
      const botMsg: Message = {
        id: String(Date.now() + 1),
        sender: "bot",
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "I encountered a minor issue. Please feel free to try asking again or contact our campus desk.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Chat cleared. What else would you like to know about MSAJCE?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <div className="absolute bottom-6 right-6 z-50 select-none font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[400px] h-[540px] max-h-[calc(100svh-120px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-white/15 backdrop-blur-md border border-white/20">
                  <img src="/images/bot-mascot.png" alt="AI Mascot" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-primary rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm leading-none text-white tracking-tight">MSAJCE Assistant</h3>
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-1.5 py-0.5 rounded text-white/90">
                      RAG AI
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 mt-0.5 font-medium">OMR IT Corridor Campus</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-background/50 scrollbar-none">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <img src="/images/bot-mascot.png" alt="Bot Avatar" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-xs font-medium"
                        : "bg-muted/80 text-foreground border border-border rounded-bl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <span
                      className={`text-[9px] block mt-1 tracking-wider ${
                        msg.sender === "user" ? "text-primary-foreground/70 text-right" : "text-muted-foreground"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-foreground/80" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                  </div>
                  <div className="bg-muted/80 border border-border rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-4 py-2 border-t border-border/60 bg-muted/20 flex gap-1.5 overflow-x-auto scrollbar-none">
                {DEFAULT_SUGGESTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSend(item)}
                    className="whitespace-nowrap text-[11px] font-semibold bg-background hover:bg-primary/10 hover:text-primary hover:border-primary/40 border border-border px-2.5 py-1 rounded-full text-foreground/80 transition-all shrink-0 cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-border bg-card flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about admissions, courses..."
                className="flex-1 bg-muted/60 border border-border text-foreground text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.92 }}
        className="w-16 h-16 rounded-full overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer border-2 border-primary/20 bg-background/80 backdrop-blur-md focus:outline-none transition-shadow hover:shadow-primary/30 hover:border-primary relative"
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full flex items-center justify-center bg-primary"
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <img
                src="/images/bot-mascot.png"
                alt="AI Assistant"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
