import { Mic, Eye, Brain, Heart } from "lucide-react";

export default function AIShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">领先的AI技术</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">探索驱动我们产品的核心人工智能技术，了解如何将前沿科技转化为孩子们喜爱的智能伙伴</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">智能语音交互</h3>
                  <p className="text-secondary">采用先进的自然语言处理技术，能够准确理解儿童的语言表达，进行自然流畅的对话交流</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">计算机视觉</h3>
                  <p className="text-secondary">实时识别物体、人脸表情和手势动作，实现更加自然直观的人机交互体验</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">机器学习</h3>
                  <p className="text-secondary">持续学习记录孩子的兴趣偏好和行为模式，智能调整互动方式，提供个性化专属体验</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">情感计算</h3>
                  <p className="text-secondary">精准识别和深度理解儿童的情感状态变化，提供恰当的情感反馈和心理支持</p>
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
