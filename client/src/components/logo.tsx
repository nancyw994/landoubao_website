
import { Bot } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Blue gradient background oval */}
        <div className="absolute -left-13 -top-5 w-36 h-24 bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 rounded-full opacity-75 -z-10"></div>
        {/* Logo text matching the exact image */}
        <div className="relative z-10 text-center">
          {/* Chinese characters with white outline */}
          <div className="text-3xl font-black text-black leading-none mb-2"
               style={{
                 WebkitTextStroke: '3px white',
                 paintOrder: 'stroke fill'
               }}>
            蓝豆包
          </div>
          {/* English text with decorative lines exactly as shown */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 bg-black w-8"></div>
            <span className="text-sm font-bold text-black tracking-widest">
              BLUEPEBO
            </span>
            <div className="h-0.5 bg-black w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}