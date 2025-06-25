import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";

export default function Header() {
  const [businessMode, setBusinessMode] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-deep rounded-xl flex items-center justify-center">
              <Bot className="text-white text-lg" />
            </div>
            <span className="text-2xl font-semibold text-blue-primary">蓝豆包</span>
          </div>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-primary font-medium border-b-2 border-blue-primary pb-1">首页</a>
            <a href="#about" className="text-slate-600 hover:text-blue-primary transition-colors">关于我们</a>
            <a href="#products" className="text-slate-600 hover:text-blue-primary transition-colors">产品中心</a>
            <a href="#services" className="text-slate-600 hover:text-blue-primary transition-colors">技术服务</a>
            <a href="#mall" className="text-slate-600 hover:text-blue-primary transition-colors">线上商城</a>
            <a href="#news" className="text-slate-600 hover:text-blue-primary transition-colors">新闻中心</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-primary transition-colors">联系我们</a>
          </nav>
          
          {/* Business Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex bg-slate-100 rounded-full p-1">
              <Button
                variant={!businessMode ? "default" : "ghost"}
                size="sm"
                className={`rounded-full text-sm font-medium transition-all ${
                  !businessMode 
                    ? "bg-blue-primary text-white hover:bg-blue-deep" 
                    : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                }`}
                onClick={() => setBusinessMode(false)}
              >
                消费者
              </Button>
              <Button
                variant={businessMode ? "default" : "ghost"}
                size="sm"
                className={`rounded-full text-sm font-medium transition-all ${
                  businessMode 
                    ? "bg-orange-accent text-white hover:bg-orange-accent/90" 
                    : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                }`}
                onClick={() => setBusinessMode(true)}
              >
                企业客户
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden text-slate-600">
              <Menu className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
