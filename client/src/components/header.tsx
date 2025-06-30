import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("简");
  const [location] = useLocation();

  const languages = [
    { code: "简", label: "简体中文" },
    { code: "繁", label: "繁體中文" },
    { code: "EN", label: "English" }
  ];

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

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-fluid-sm">
            {/* Language switcher - responsive sizing */}
            <div className="hidden sm:flex bg-slate-100 rounded-full p-1">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant="ghost"
                  size="sm"
                  className={`rounded-full text-fluid-sm font-medium transition-all px-fluid-md py-fluid-xs ${
                    currentLanguage === lang.code
                      ? "bg-blue-primary text-white hover:bg-blue-deep"
                      : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                  }`}
                  onClick={() => setCurrentLanguage(lang.code)}
                  title={lang.label}
                >
                  {lang.code}
                </Button>
              ))}
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

            {/* Mobile Language Switcher */}
            <div className="mt-fluid-md px-fluid-md">
              <div className="flex bg-slate-100 rounded-full p-1">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    size="sm"
                    className={`flex-1 rounded-full text-fluid-sm font-medium transition-all ${
                      currentLanguage === lang.code
                        ? "bg-blue-primary text-white hover:bg-blue-deep"
                        : "text-slate-600 hover:text-blue-primary hover:bg-transparent"
                    }`}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    title={lang.label}
                  >
                    {lang.code}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}