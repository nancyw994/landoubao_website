// Updated client/src/pages/store.tsx with better error handling

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { X, ShoppingBag, MessageCircle } from "lucide-react";

export default function Store() {
  const [showQR, setShowQR] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
    console.error(`Failed to load image: ${imagePath}`);
  };

  const platforms = [
    {
      name: "抖音",
      url: "https://v.douyin.com/uu6F88OY8Fg/",
      icon: <span className="text-white text-xs font-bold">抖音</span>,
      bg: "bg-black",
      qr: "/douyinstore.png", // Updated path to match your structure
      note: "扫码进入抖音小店",
      status: "available"
    },
    {
      name: "淘宝",
      url: "https://m.tb.cn/h.hj0QuWAB1Zqglu7",
      icon: <ShoppingBag className="text-white w-5 h-5" />,
      bg: "bg-orange-500",
      qr: "/taobaostore.jpeg", // Updated path
      note: "点击跳转淘宝店铺",
      status: "available"
    },
    {
      name: "微信",
      url: "#",
      icon: <MessageCircle className="text-white w-5 h-5" />,
      bg: "bg-green-600",
      qr: "/wechatstore.jpeg", // Updated path
      note: "关注公众号或联系客服",
      status: "available"
    },
    {
      name: "小红书",
      url: "#",
      icon: <span className="text-white text-[11px] font-bold leading-none">小红书</span>,
      bg: "bg-[#d42333]",
      qr: "/xiaohongshu.png",
      note: "暂无链接，可搜索”蓝豆包AI“",
      status: "unavailable"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />

      {/* Hero Section */}
      <section className="bg-black from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-fluid-5xl font-bold text-yellow-400 mb-6">在线电商平台</h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-4xl mx-auto">
              通过以下平台购买我们的AI智能玩具产品，享受优质的购物体验。
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-white py-12 px-4 text-center">
        {/* 平台跳转图标 */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {platforms.map((item, index) => (
            <a
              key={index}
              href={item.url}
              onClick={(e) => {
                if (item.url === "#") {
                  e.preventDefault();
                  alert(`暂无跳转链接，请通过二维码进入 ${item.name}`);
                }
              }}
              className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center hover:scale-105 transition`}
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          className="px-5 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-400 transition"
          onClick={() => setShowQR(true)}
        >
          查看二维码
        </button>

        {/* 二维码弹窗 */}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-3xl relative max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-xl font-bold text-center mb-6">扫码进入我们的线上平台</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {platforms.map((item, index) => (
                  <div key={index} className="text-center">
                    {imageErrors.has(item.qr) ? (
                      // Fallback when image fails to load
                      <div className="w-32 h-32 mx-auto border rounded bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                            {item.icon}
                          </div>
                          <p className="text-xs text-gray-500">二维码加载中...</p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.qr}
                        alt={`${item.name} 二维码`}
                        className={`w-32 h-32 mx-auto border rounded ${item.status === 'unavailable' ? 'opacity-50 grayscale' : ''}`}
                        onError={() => handleImageError(item.qr)}
                        loading="lazy"
                      />
                    )}
                    <div className="mt-2 font-semibold">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.note}</div>
                    {item.status === 'available' && !imageErrors.has(item.qr) && (
                      <div className="text-xs text-green-600 mt-1">✓ 可购买</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm text-gray-500 text-center">
                <p>如果二维码无法显示，请直接点击上方的平台图标跳转</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}