import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Header() {
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
      <div className="container-fluid">
        <div className="flex justify-between items-center py-fluid-md">
          {/* Logo */}
          <Link href="/">
            <Logo className="cursor-pointer" />
          </Link>

          {/* Main Navigation - Hidden on mobile, flex on larger screens */}
          <nav className="hidden lg:flex gap-fluid-lg">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`font-medium transition-colors pb-1 cursor-pointer text-fluid-base ${
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
          <div className="flex items-center gap-fluid-sm">
            {/* Business toggle - responsive sizing */}
            <div className="hidden sm:flex bg-slate-100 rounded-full p-1">
              <Link href="/consumer">
                <Button
                  variant={location === "/consumer" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full text-fluid-sm font-medium transition-all px-fluid-md py-fluid-xs ${
                    location === "/consumer"
                      ? "bg-blue-primary text-white hover:bg-blue-deep"
                      : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                  }`}
                >
                  消费者
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button
                  variant={location === "/enterprise" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full text-fluid-sm font-medium transition-all px-fluid-md py-fluid-xs ${
                    location === "/enterprise"
                      ? "bg-orange-accent text-white hover:bg-orange-accent/90"
                      : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                  }`}
                >
                  企业客户
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-600 p-fluid-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-fluid-lg" /> : <Menu className="text-fluid-lg" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Responsive design */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-fluid-md">
            <nav className="space-y-fluid-xs">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-fluid-md py-fluid-sm rounded-lg font-medium transition-colors cursor-pointer text-fluid-base ${
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
            <div className="mt-fluid-md px-fluid-md">
              <div className="flex bg-slate-100 rounded-full p-1 gap-1">
                <Link href="/consumer" className="flex-1">
                  <Button
                    variant={location === "/consumer" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full rounded-full text-fluid-sm font-medium transition-all ${
                      location === "/consumer"
                        ? "bg-blue-primary text-white hover:bg-blue-deep"
                        : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    消费者
                  </Button>
                </Link>
                <Link href="/enterprise" className="flex-1">
                  <Button
                    variant={location === "/enterprise" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full rounded-full text-fluid-sm font-medium transition-all ${
                      location === "/enterprise"
                        ? "bg-orange-accent text-white hover:bg-orange-accent/90"
                        : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    企业客户
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}