import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShoppingBag
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-16">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-between">
          {/* 公司信息 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src="/logo.jpeg" alt="蓝豆包 Logo" className="w-10 h-10 rounded" />
              <span className="text-2xl font-semibold">蓝豆包</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-base max-w-prose">
              专业的AI智能玩具研发公司，致力于为孩子们创造更智能、更有趣的游戏体验。
            </p>

            {/* 平台图标 */}
            <div className="flex gap-3 flex-wrap">
              {/* 微信 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("请扫描二维码关注我们的微信公众号：蓝豆包AI玩具");
                }}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors"
                title="微信公众号"
              >
                <MessageCircle className="text-white w-5 h-5" />
              </a>

              {/* 淘宝 */}
              <a
                href="https://shop.taobao.com/landoubao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors"
                title="淘宝"
              >
                <ShoppingBag className="text-white w-5 h-5" />
              </a>

              {/* 抖音 */}
              <a
                href="https://www.douyin.com/user/landoubao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black border border-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                title="抖音"
              >
                <span className="text-white text-xs font-bold">抖音</span>
              </a>
            </div>
          </div>

          {/* 联系我们 */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <div className="space-y-3 text-slate-300 text-base">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="text-blue-300 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <div>上海市 杨浦区</div>
                  <div>北京市 中关村</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="text-blue-300 h-5 w-5 flex-shrink-0" />
                <span>400-026-9568</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="text-blue-300 h-5 w-5 flex-shrink-0" />
                <span>business@landoubao.com</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <div className="space-y-2">
              <a href="/store" className="block text-slate-300 hover:text-white transition-colors text-base">技术服务</a>
              <a href="/products" className="block text-slate-300 hover:text-white transition-colors text-base">产品中心</a>
              <a href="/join-us" className="block text-slate-300 hover:text-white transition-colors text-base">加入我们</a>
              <a href="/contact" className="block text-slate-300 hover:text-white transition-colors text-base">联系我们</a>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400 text-sm space-y-2">
          <p>COPYRIGHT © 蓝豆包 LANDOUBAO.COM ALL RIGHTS RESERVED</p>
          <div className="flex justify-center gap-2 flex-wrap">
            <span>沪ICP备2025112922号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
