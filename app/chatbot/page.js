"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Compass } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! I'm your assistant. You can ask me anything or say like 'Go to Services' or 'Open Home'.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Free AI Chat API (No key required) ---
  const callAI = async (userText) => {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(
      userText
    )}&format=json&no_redirect=1`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.AbstractText) return data.AbstractText;
    if (data.RelatedTopics?.[0]?.Text) return data.RelatedTopics[0].Text;

    return "🤖 Sorry, I couldn't find an answer for that.";
  } catch (err) {
    console.error("AI API error:", err);
    return "⚠️ Network error. Please try again.";
  }
};

  // --- Handle Sending Message ---
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const lower = input.toLowerCase();

    // Navigation Commands
    if (
      lower.includes("home") ||
      lower.includes("about") ||
      lower.includes("services") ||
      lower.includes("projects") ||
      lower.includes("contact") ||
      lower.includes("research")
    ) {
      let botResponse = "";
      if (lower.includes("home")) {
        botResponse = "Navigating to Home 🏠";
        router.push("/");
      } else if (lower.includes("about")) {
        botResponse = "Heading to About page ℹ️";
        router.push("/about");
      } else if (lower.includes("services")) {
        botResponse = "Let's check out our Services 💼";
        router.push("/services");
      } else if (lower.includes("projects")) {
        botResponse = "Sure! Opening Projects 🚀";
        router.push("/projects");
      } else if (lower.includes("contact")) {
        botResponse = "Opening Contact page 📩";
        router.push("/contact");
      } else if (lower.includes("research")) {
        botResponse = "Taking you to Research 📚";
        router.push("/research");
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } else {
      // Ask AI for other questions
      const aiText = await callAI(input);
      setMessages((prev) => [...prev, { sender: "bot", text: aiText }]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 mt-8">
        <Compass className="w-6 h-6 text-indigo-400 animate-pulse" />
        <h1 className="text-2xl font-bold">Chat Assistant</h1>
      </div>

      {/* Chat Window */}
      <div className="w-full max-w-2xl flex flex-col bg-gray-900/60 rounded-2xl shadow-xl p-4 backdrop-blur-md border border-gray-800 flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-700">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[80%] ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    msg.sender === "user"
                      ? "bg-indigo-600"
                      : "bg-gray-800 text-indigo-400"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User size={18} />
                  ) : (
                    <Bot size={18} />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl text-sm leading-relaxed shadow-md ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Powered by Brainshop.ai 🤖 (Free AI)
      </p>
    </div>
  );
}
