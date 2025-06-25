import { Bot } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Main logo container */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-primary via-blue-light to-blue-deep rounded-2xl flex items-center justify-center shadow-lg">
          {/* Robot icon with custom styling */}
          <Bot className="text-white h-6 w-6 drop-shadow-sm" />
        </div>
        {/* Small accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-accent rounded-full border-2 border-white shadow-sm"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-blue-primary tracking-tight">蓝豆包</span>
        <span className="text-xs text-slate-500 font-medium tracking-wider">AI TOYS</span>
      </div>
    </div>
  );
}