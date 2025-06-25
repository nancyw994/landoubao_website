import { Mic, Eye, Brain, Heart } from "lucide-react";

export default function AIShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">领先的AI技术</h2>
          <p className="text-xl text-slate-600">探索驱动我们产品的核心AI技术</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">智能语音交互</h3>
                  <p className="text-slate-600">先进的自然语言处理技术，理解并回应儿童的语言表达</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">计算机视觉</h3>
                  <p className="text-slate-600">实时识别物体、表情和手势，实现更自然的交互体验</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">机器学习</h3>
                  <p className="text-slate-600">持续学习孩子的偏好和行为模式，提供个性化体验</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">情感计算</h3>
                  <p className="text-slate-600">识别和理解情感状态，提供适当的情感反馈和支持</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern AI technology demonstration" 
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating tech indicators */}
            <div className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium text-slate-800">AI 处理中...</div>
              <div className="w-20 h-2 bg-slate-200 rounded-full mt-2">
                <div className="w-16 h-2 bg-blue-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
