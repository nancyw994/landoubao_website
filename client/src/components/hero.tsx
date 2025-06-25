import { Button } from "@/components/ui/button";
import { ShoppingCart, Play, Brain, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-soft to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-slate-800 leading-tight">
                智能AI玩具<br/>
                <span className="text-blue-primary">点亮童年梦想</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                蓝豆包致力于打造最先进的AI智能玩具，为孩子们提供寓教于乐的科技体验，同时为企业提供专业的AI技术解决方案。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-deep transition-all transform hover:scale-105 shadow-lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                探索产品
              </Button>
              <Button variant="outline" className="border-2 border-blue-primary text-blue-primary px-8 py-4 rounded-full font-semibold hover:bg-blue-primary hover:text-white transition-all">
                <Play className="mr-2 h-4 w-4" />
                观看演示
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-primary">500K+</div>
                <div className="text-sm text-slate-500">满意用户</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-primary">50+</div>
                <div className="text-sm text-slate-500">AI产品</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-primary">100+</div>
                <div className="text-sm text-slate-500">企业伙伴</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI robots and smart toys" 
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Brain className="text-blue-primary text-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-accent rounded-full p-4 shadow-lg">
              <Star className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
