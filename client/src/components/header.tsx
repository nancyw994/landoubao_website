import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Header() {
  const [businessMode, setBusinessMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "首页" },
    { path: "/about", label: "关于我们" },
    { path: "/products", label: "产品中心" },
    { path: "/services", label: "技术服务" },
    { path: "/mall", label: "线上商城" },
    { path: "/news", label: "新闻中心" },
    { path: "/contact", label: "联系我们" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Logo className="cursor-pointer" />
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`font-medium transition-colors pb-1 cursor-pointer ${
                  isActive(item.path)
                    ? "text-blue-primary border-b-2 border-blue-primary"
                    : "text-slate-600 hover:text-blue-primary"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span 
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "bg-blue-soft text-blue-primary"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile Business Toggle */}
            <div className="mt-4 px-4">
              <div className="flex bg-slate-100 rounded-full p-1">
                <Button
                  variant={!businessMode ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 rounded-full text-sm font-medium transition-all ${
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
                  className={`flex-1 rounded-full text-sm font-medium transition-all ${
                    businessMode 
                      ? "bg-orange-accent text-white hover:bg-orange-accent/90" 
                      : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                  }`}
                  onClick={() => setBusinessMode(true)}
                >
                  企业客户
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
