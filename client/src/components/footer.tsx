import { Bot, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-primary to-blue-deep rounded-xl flex items-center justify-center">
                <Bot className="text-white text-lg" />
              </div>
              <span className="text-2xl font-semibold">蓝豆包</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              专业的AI智能玩具研发公司，致力于为孩子们创造更智能、更有趣的游戏体验。
            </p>
            <div className="flex space-x-4">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">产品中心</h3>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">智能陪伴机器人</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">AI学习助手</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">互动智能宠物</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">编程启蒙机器人</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">查看全部产品</a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">服务支持</h3>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">技术授权</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">研发合作</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">技术咨询</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">售后服务</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">用户手册</a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-light h-5 w-5" />
                <span>深圳市南山区科技园</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-light h-5 w-5" />
                <span>400-888-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-light h-5 w-5" />
                <span>contact@landoubao.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-light h-5 w-5" />
                <span>工作日 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 蓝豆包科技有限公司. 保留所有权利. | 
             <a href="#" className="hover:text-white transition-colors ml-2">隐私政策</a> | 
             <a href="#" className="hover:text-white transition-colors ml-2">使用条款</a> | 
             <a href="#" className="hover:text-white transition-colors ml-2">网站地图</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
