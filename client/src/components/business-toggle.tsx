import { useState } from "react";
import { Shield, GraduationCap, Heart, Settings, Handshake, Lightbulb } from "lucide-react";

export default function BusinessToggle() {
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-warm to-blue-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setShowBusiness(false)}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                !showBusiness 
                  ? "bg-blue-primary text-white shadow-md" 
                  : "text-slate-600 hover:text-blue-primary"
              }`}
            >
              消费者业务
            </button>
            <button
              onClick={() => setShowBusiness(true)}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                showBusiness 
                  ? "bg-orange-accent text-white shadow-md" 
                  : "text-slate-600 hover:text-orange-accent"
              }`}
            >
              企业服务
            </button>
          </div>
        </div>

        {/* Consumer Section */}
        {!showBusiness && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">为家庭打造的AI玩具</h2>
              <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">我们的消费级产品专为儿童设计，结合最新AI技术与儿童心理学研究成果，提供安全、有趣、富有教育意义的智能游戏体验，助力孩子全面发展</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary">安全第一</h3>
                <p className="text-secondary">严格遵循国际安全标准，采用食品级环保材料，圆角设计防止意外伤害，全方位保护孩子健康安全成长</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary">寓教于乐</h3>
                <p className="text-secondary">融合STEAM教育理念，通过趣味互动游戏培养孩子的创造力、逻辑思维、空间想象力和问题解决能力</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary">情感陪伴</h3>
                <p className="text-secondary">先进的情感AI技术能够识别和理解孩子的情绪变化，提供个性化的温暖陪伴和心理支持</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Business Section */}
        {showBusiness && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">企业AI技术解决方案</h2>
              <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">为企业客户提供全方位的AI技术服务，包括核心算法授权、联合产品研发、技术咨询指导等专业服务，助力传统企业实现智能化转型升级</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center mx-auto">
                  <Settings className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">技术授权</h3>
                <p className="text-slate-600">授权我们成熟的AI算法和硬件解决方案</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">研发合作</h3>
                <p className="text-slate-600">联合开发定制化AI产品和解决方案</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">技术咨询</h3>
                <p className="text-slate-600">专业的AI技术咨询和实施指导服务</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
