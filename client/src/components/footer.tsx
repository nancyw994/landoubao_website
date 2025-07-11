import { Bot, MapPin, Phone, Mail, MessageCircle, ShoppingBag, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-fluid-2xl">
      <div className="container-fluid">
        <div className="grid-fluid gap-fluid-xl">
          {/* Company Info */}
          <div className="space-y-fluid-md">
            <div className="flex items-center gap-fluid-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-deep rounded-xl flex items-center justify-center">
                <Bot className="text-white text-fluid-lg" />
              </div>
              <span className="text-fluid-2xl font-semibold">蓝豆包</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-fluid-base max-w-prose">
              专业的AI智能玩具研发公司，致力于为孩子们创造更智能、更有趣的游戏体验。
            </p>
            {/* Platform Icons */}
            <div className="flex gap-fluid-sm flex-wrap">
              <a 
                href="https://weibo.com/landoubao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" 
                title="微博"
              >
                <Share2 className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://xiaohongshu.com/user/profile/landoubao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors" 
                title="小红书"
              >
                <span className="text-white text-xs font-bold">小红书</span>
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  alert('请扫描二维码关注我们的微信公众号：蓝豆包AI玩具');
                }}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors" 
                title="微信"
              >
                <MessageCircle className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://shop.taobao.com/landoubao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors" 
                title="淘宝"
              >
                <ShoppingBag className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://mall.jd.com/index-landoubao.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors" 
                title="京东"
              >
                <ShoppingBag className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://www.douyin.com/user/landoubao" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" 
                title="抖音"
              >
                <span className="text-white text-xs font-bold">抖音</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">快速链接</h3>
            <div className="space-y-fluid-sm">
              <a href="/join-us" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">加入我们</a>
              <a href="/contact" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">联系我们</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">廉洁合规</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">知识产权保护</a>
            </div>
          </div>

          {/* Legal Info */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">法律信息</h3>
            <div className="space-y-fluid-sm">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">隐私声明</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">ISO27001信息安全管理体系认证</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">营业执照</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">联系我们</h3>
            <div className="space-y-fluid-sm text-slate-300">
              <div className="flex items-start gap-fluid-sm">
                <MapPin className="text-blue-light h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-fluid-base">北京市朝阳区望京东园四区 13号楼 -4 至 33 层 101 内 A 座 36 层 3606 室</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <Phone className="text-blue-light h-5 w-5 flex-shrink-0" />
                <span className="text-fluid-base">4000232233</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <Mail className="text-blue-light h-5 w-5 flex-shrink-0" />
                <span className="text-fluid-base">4000232233@POPMART.COM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-fluid-xl pt-fluid-lg text-center text-slate-400">
          <div className="space-y-fluid-sm text-fluid-sm">
            <p>COPYRIGHT © 泡泡玛特 POPMART.COM ALL RIGHTS RESERVED</p>
            <div className="flex flex-wrap justify-center gap-fluid-sm">
              <span>京公网安备 11010502051946号</span>
              <span>|</span>
              <span>京ICP备11028233号-4</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}