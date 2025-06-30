import { useState } from "react";
import { Shield, GraduationCap, Heart, Settings, Handshake, Lightbulb } from "lucide-react";

export default function BusinessToggle() {
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-warm to-blue-soft relative overflow-hidden">
      {/* Cute floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-primary/10 rounded-blob animate-float"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-orange-accent/10 rounded-bubble animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-300/10 rounded-mega animate-pulse-cute"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Toggle buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white rounded-mega p-2 shadow-magic hover-lift">
            <button
              onClick={() => setShowBusiness(false)}
              className={`px-8 py-3 rounded-mega text-lg font-semibold transition-all hover-bounce ${
                !showBusiness
                  ? "bg-gradient-sunset text-white shadow-cute animate-pulse-cute"
                  : "text-slate-600 hover:text-blue-primary hover:bg-gradient-ocean hover:text-white"
              }`}
            >
              👶 消费者业务
            </button>
            <button
              onClick={() => setShowBusiness(true)}
              className={`px-8 py-3 rounded-mega text-lg font-semibold transition-all hover-bounce ${
                showBusiness
                  ? "bg-gradient-sunset text-white shadow-cute animate-pulse-cute"
                  : "text-slate-600 hover:text-orange-accent hover:bg-gradient-sunset hover:text-white"
              }`}
            >
              🏢 企业服务
            </button>
          </div>
        </div>

        {/* Consumer Section */}
        {!showBusiness && (
          <div className="space-y-16 animate-float">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6 hover-wiggle inline-block">
                🎈 为家庭打造的AI玩具 🎈
              </h2>
              <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
                🌟 我们的消费级产品专为儿童设计，结合最新AI技术与儿童心理学研究成果，提供安全、有趣、富有教育意义的智能游戏体验，助力孩子全面发展！ 🚀
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-ocean rounded-mega flex items-center justify-center mx-auto shadow-bubble group-hover:animate-bounce-gentle">
                  <Shield className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-rainbow transition-colors">
                  🛡️ 安全第一
                </h3>
                <p className="text-secondary group-hover:text-slate-700 transition-colors">
                  严格遵循国际安全标准，采用食品级环保材料，圆角设计防止意外伤害，全方位保护孩子健康安全成长 💖
                </p>
              </div>

              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-sunset rounded-mega flex items-center justify-center mx-auto shadow-cute group-hover:animate-bounce-gentle">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-rainbow transition-colors">
                  🎓 寓教于乐
                </h3>
                <p className="text-secondary group-hover:text-slate-700 transition-colors">
                  融合STEAM教育理念，通过趣味互动游戏培养孩子的创造力、逻辑思维、空间想象力和问题解决能力 🧠✨
                </p>
              </div>

              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-candy rounded-mega flex items-center justify-center mx-auto shadow-magic group-hover:animate-bounce-gentle">
                  <Heart className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-rainbow transition-colors">
                  💝 情感陪伴
                </h3>
                <p className="text-secondary group-hover:text-slate-700 transition-colors">
                  先进的情感AI技术能够识别和理解孩子的情绪变化，提供个性化的温暖陪伴和心理支持 🤗💕
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Business Section */}
        {showBusiness && (
          <div className="space-y-16 animate-float">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6 hover-wiggle inline-block">
                🚀 企业AI技术解决方案 🚀
              </h2>
              <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
                ⚡ 为企业客户提供全方位的AI技术服务，包括核心算法授权、联合产品研发、技术咨询指导等专业服务，助力传统企业实现智能化转型升级！ 🌈
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-sunset rounded-mega flex items-center justify-center mx-auto shadow-cute group-hover:animate-bounce-gentle">
                  <Settings className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-rainbow transition-colors">
                  ⚙️ 技术授权
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  授权我们成熟的AI算法和硬件解决方案，快速赋能您的产品智能化升级 🔧✨
                </p>
              </div>

              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-ocean rounded-mega flex items-center justify-center mx-auto shadow-bubble group-hover:animate-bounce-gentle">
                  <Handshake className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-rainbow transition-colors">
                  🤝 研发合作
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  联合开发定制化AI产品和解决方案，共同创造市场价值 💎🚀
                </p>
              </div>

              <div className="text-center space-y-4 hover-lift group">
                <div className="w-16 h-16 bg-gradient-candy rounded-mega flex items-center justify-center mx-auto shadow-magic group-hover:animate-bounce-gentle">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-rainbow transition-colors">
                  💡 技术咨询
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  专业的AI技术咨询和实施指导服务，助您少走弯路 🎯💪
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}