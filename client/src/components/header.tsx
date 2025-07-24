import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";
import PlatformDropdown from "@/components/platform-dropdown";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("简");
  const [location] = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

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
    { path: "/store", label: "在线电商" },
    { path: "/contact", label: "联系我们" },
    { path: "/join-us", label: "人才招聘" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const platforms = [
    {
      name: "微信",
      type: "官方账号",
      url: "#",
      qr: "/qrcodes/wechat.png",
      note: "关注公众号或联系客服",
      status: "available"
    },
    {
      name: "小红书",
      type: "官方账号",
      url: "#",
      qr: "/qrcodes/xiaohongshu.png",
      note: "暂无链接，可搜索“蓝豆包AI”",
      status: "unavailable"
    }
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50 w-full">
      <div className="w-full max-w-none px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/">
            <Logo className="cursor-pointer" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-12 xl:gap-16 items-center">
            {navItems.map((item) =>
              item.label === "在线电商" ? (
                <PlatformDropdown key="dropdown" />
              ) : (
                <Link key={item.path} href={item.path}>
                  <span className={`font-medium transition-colors pb-1 cursor-pointer text-lg ${
                    isActive(item.path)
                      ? "text-white border-b-2 border-blue-primary"
                      : "text-yellow-400 hover:text-blue-primary"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              )
            )}
          </nav>


          {/* Language & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex bg-slate-100 rounded-full p-1">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant="ghost"
                  size="sm"
                  className={`rounded-full text-sm font-medium transition-all px-3 py-1 ${
                    currentLanguage === lang.code
                      ? "bg-yellow-500 text-black hover:bg-black hover:text-yellow-500"
                      : "text-black hover:text-yellow-500 hover:bg-transparent"
                  }`}
                  onClick={() => setCurrentLanguage(lang.code)}
                  title={lang.label}
                >
                  {lang.code}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-600 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer text-lg ${
                      isActive(item.path)
                        ? "bg-yellow-500 text-black hover:bg-black hover:text-yellow-500"
                        : "text-black hover:text-yellow-500 hover:bg-transparent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-4">
              <div className="flex bg-slate-100 rounded-full p-1">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    size="sm"
                    className={`flex-1 rounded-full text-sm font-medium transition-all ${
                      currentLanguage === lang.code
                        ? "bg-yellow-500 text-black hover:bg-black hover:text-yellow-500"
                        : "text-black hover:text-yellow-500 hover:bg-transparent"
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
