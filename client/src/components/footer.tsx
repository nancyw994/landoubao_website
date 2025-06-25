import { Bot, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-fluid-2xl">
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
            <div className="flex gap-fluid-sm">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-primary transition-colors">
                <i className="fab fa-weixin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-primary transition-colors">
                <i className="fab fa-weibo"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-primary transition-colors">
                <i className="fab fa-qq"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">产品中心</h3>
            <div className="space-y-fluid-sm">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">智能陪伴机器人</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">AI学习助手</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">互动智能宠物</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">编程启蒙机器人</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">查看全部产品</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">服务支持</h3>
            <div className="space-y-fluid-sm">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">技术授权</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">研发合作</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">技术咨询</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">售后服务</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors text-fluid-base">用户手册</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-fluid-md">
            <h3 className="text-fluid-lg font-semibold">联系我们</h3>
            <div className="space-y-fluid-sm text-slate-300">
              <div className="flex items-start gap-fluid-sm">
                <MapPin className="text-blue-light h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-fluid-base">北京海淀区中关村；上海杨浦区长阳创谷 </span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <Phone className="text-blue-light h-5 w-5 flex-shrink-0" />
                <span className="text-fluid-base">13146075323</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <Mail className="text-blue-light h-5 w-5 flex-shrink-0" />
                <span className="text-fluid-base">business@landoubao.com</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <Clock className="text-blue-light h-5 w-5 flex-shrink-0" />
                <span className="text-fluid-base">工作日 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-fluid-xl pt-fluid-lg text-center text-slate-400">
          <div className="flex-responsive justify-center text-center gap-fluid-sm text-fluid-sm">
            <p>&copy; 2025 上海蓝豆包科技有限公司. 保留所有权利.</p>
            <div className="flex gap-fluid-sm justify-center">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">使用条款</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}