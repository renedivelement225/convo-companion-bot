
export const TypingIndicator = () => {
  return (
    <div className="flex space-x-2 p-3">
      <div className="h-2 w-2 rounded-full bg-mint animate-blink"></div>
      <div className="h-2 w-2 rounded-full bg-mint animate-blink [animation-delay:0.2s]"></div>
      <div className="h-2 w-2 rounded-full bg-mint animate-blink [animation-delay:0.4s]"></div>
    </div>
  );
};
