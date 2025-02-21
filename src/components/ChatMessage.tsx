
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 shadow-sm backdrop-blur-sm",
          isBot
            ? "bg-mint-light text-gray-800"
            : "bg-gray-100 text-gray-800"
        )}
      >
        <p className="text-sm sm:text-base leading-relaxed">{content}</p>
        <time className="text-[10px] text-gray-500 mt-1 block">
          {format(timestamp, "HH:mm")}
        </time>
      </div>
    </div>
  );
};
