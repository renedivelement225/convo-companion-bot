
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-light text-center mb-8 text-gray-800">
          Convo Companion
        </h1>
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
