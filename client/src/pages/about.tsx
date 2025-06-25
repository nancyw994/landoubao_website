import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">关于蓝豆包</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              我们是一家专注于AI智能玩具研发的创新科技公司，致力于通过先进的人工智能技术，为全世界的孩子们创造更智能、更有趣、更有教育意义的玩具体验。
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">我们的故事</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  蓝豆包成立于2020年，由一群热爱科技和教育的工程师、设计师和教育专家共同创立。我们相信，人工智能不仅能够改变成人世界，更能为儿童的成长和学习带来革命性的变化。
                </p>
                <p>
                  从第一款智能陪伴机器人开始，我们就坚持以儿童的需求为中心，将最前沿的AI技术与寓教于乐的设计理念相结合，打造出既安全又充满创意的智能玩具产品。
                </p>
                <p>
                  今天，我们的产品已经走进了全国数万个家庭，同时我们也为众多企业客户提供专业的AI技术解决方案，推动整个行业的创新发展。
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">我们的价值观</h2>
            <p className="text-xl text-slate-600">指导我们前行的核心理念</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">创新驱动</h3>
              <p className="text-slate-600">持续探索AI技术的无限可能，为用户带来前所未有的体验</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">用户至上</h3>
              <p className="text-slate-600">以用户需求为中心，打造真正有价值的产品和服务</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                <Target className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">品质追求</h3>
              <p className="text-slate-600">严格的质量标准，确保每一款产品都达到最高品质</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">社会责任</h3>
              <p className="text-slate-600">关注儿童成长，促进教育公平，承担企业社会责任</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">核心团队</h2>
            <p className="text-xl text-slate-600">汇聚顶尖人才，共创美好未来</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-light to-blue-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">张</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">张博士</h3>
              <p className="text-blue-primary font-medium mb-2">创始人兼CEO</p>
              <p className="text-slate-600">人工智能博士，15年AI研发经验</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-light to-blue-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">李</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">李总</h3>
              <p className="text-blue-primary font-medium mb-2">技术总监</p>
              <p className="text-slate-600">前腾讯AI实验室主任工程师</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-light to-blue-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">王</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">王女士</h3>
              <p className="text-blue-primary font-medium mb-2">产品总监</p>
              <p className="text-slate-600">儿童教育心理学专家，产品设计大师</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}