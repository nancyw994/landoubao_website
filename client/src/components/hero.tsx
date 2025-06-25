import { Button } from "@/components/ui/button";
import { ShoppingCart, Play, Brain, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-soft via-white to-blue-soft/30 py-fluid-3xl">
      <div className="container-fluid">
        <div className="grid-fluid-2 items-center">
          <div className="space-y-fluid-xl">
            <div className="space-y-fluid-lg">
              <h1 className="text-fluid-5xl font-bold text-primary leading-tight">
                智能AI玩具<br/>
                <span className="text-blue-primary">点亮童年梦想</span>
              </h1>
              <p className="text-fluid-xl text-secondary leading-relaxed max-w-prose">
                蓝豆包致力于打造最先进的AI智能玩具，融合前沿人工智能技术与儿童教育理念，为全球孩子们提供个性化、互动性强的智能成长伙伴，同时为企业客户提供专业的AI技术解决方案与创新服务。
              </p>
            </div>

            <div className="flex-responsive">
              <Button className="bg-blue-primary text-white btn-responsive hover:bg-blue-deep transition-all transform hover:scale-105 shadow-lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                探索产品
              </Button>
              <Button variant="outline" className="border-2 border-blue-primary text-blue-primary btn-responsive hover:bg-blue-primary hover:text-white transition-all">
                <Play className="mr-2 h-4 w-4" />
                观看演示
              </Button>
            </div>

            <div className="grid-fluid-3 pt-fluid-lg">
              <div className="text-center p-fluid-md bg-white/80 rounded-2xl shadow-sm">
                <div className="text-fluid-3xl font-bold text-blue-primary mb-1">500K+</div>
                <div className="text-fluid-sm font-medium text-secondary">满意用户</div>
              </div>
              <div className="text-center p-fluid-md bg-white/80 rounded-2xl shadow-sm">
                <div className="text-fluid-3xl font-bold text-blue-primary mb-1">50+</div>
                <div className="text-fluid-sm font-medium text-secondary">AI产品</div>
              </div>
              <div className="text-center p-fluid-md bg-white/80 rounded-2xl shadow-sm">
                <div className="text-fluid-3xl font-bold text-blue-primary mb-1">100+</div>
                <div className="text-fluid-sm font-medium text-secondary">企业伙伴</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="AI robots and smart toys"
              className="img-responsive rounded-3xl shadow-2xl aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent rounded-3xl"></div>

            {/* Floating elements - responsive positioning */}
            <div className="absolute top-[5%] right-[5%] bg-white rounded-full p-fluid-md shadow-lg">
              <Brain className="text-blue-primary text-fluid-2xl" />
            </div>
            <div className="absolute bottom-[5%] left-[5%] bg-orange-accent rounded-full p-fluid-md shadow-lg">
              <Star className="text-white text-fluid-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}