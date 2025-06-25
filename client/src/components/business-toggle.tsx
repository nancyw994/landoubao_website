import { useState } from "react";
import { Shield, GraduationCap, Heart, Settings, Handshake, Lightbulb } from "lucide-react";

export default function BusinessToggle() {
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-soft">
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
              <h2 className="text-4xl font-bold text-slate-800 mb-4">为家庭打造的AI玩具</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">我们的消费级产品专为儿童设计，结合最新AI技术，提供安全、有趣、教育性的游戏体验</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">安全第一</h3>
                <p className="text-slate-600">严格的安全标准和环保材料，保护孩子健康成长</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">寓教于乐</h3>
                <p className="text-slate-600">通过游戏培养创造力、逻辑思维和问题解决能力</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">情感陪伴</h3>
                <p className="text-slate-600">AI伙伴理解孩子情绪，提供温暖的陪伴和支持</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Business Section */}
        {showBusiness && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">企业AI技术解决方案</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">为企业客户提供定制化AI技术授权、研发合作和技术咨询服务</p>
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
