// components/platform-dropdown.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PlatformDropdown({ isActive }: { isActive: boolean }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const platforms = [
    { name: "抖音", type: "商品链接", bg: "bg-black", qr: "/douyinstore.png", note: "扫码进入抖音小店", status: "available" },
    { name: "淘宝", type: "商品链接", bg: "bg-orange-500", qr: "/taobaostore.jpeg", note: "扫码进入淘宝店铺", status: "available" },
    { name: "微店", type: "商品链接", bg: "bg-pink-500", qr: "/wechatstore.jpeg", note: "扫码进入微店", status: "available" },
    { name: "小红书", type: "官方账号", bg: "bg-[#d42333]", qr: "/qrcodes/xiaohongshu.png", note: "暂无店铺，后续添加", status: "unavailable" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button
        className={`flex items-center font-medium transition-colors pb-1 cursor-pointer text-lg ${
          isActive
            ? "text-white border-b-2 border-blue-primary"
            : "text-yellow-400 hover:text-blue-primary"
        }`}
      >
        电商平台 <ChevronDown className="ml-1 w-4 h-4" />
      </button>

      {showDropdown && (
        <div className="absolute top-full mt-2 right-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <h3 className="text-base font-semibold mb-3">官方账号</h3>
          <div className="space-y-4 mb-6">
            {platforms.filter((p) => p.type === "官方账号").map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img
                  src={item.qr}
                  alt={`${item.name} 二维码`}
                  className={`w-16 h-16 border rounded ${
                    item.status === "unavailable" ? "opacity-50 grayscale" : ""
                  }`}
                />
                <div className="text-s text-gray-500">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {platforms.filter((p) => p.type === "商品链接").map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img
                  src={item.qr}
                  alt={`${item.name} 二维码`}
                  className={`w-16 h-16 border rounded ${
                    item.status === "unavailable" ? "opacity-50 grayscale" : ""
                  }`}
                />
                <div className="text-s text-gray-500">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
