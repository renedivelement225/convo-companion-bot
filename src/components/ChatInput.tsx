
import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t bg-white/50 backdrop-blur-sm p-4"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-mint transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="p-2 rounded-full bg-mint text-white hover:bg-mint-dark transition-colors disabled:opacity-50 disabled:hover:bg-mint"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};
