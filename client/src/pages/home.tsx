import Header from "@/components/header";
import News from "@/components/news";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Award, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Clean black design like the reference */}
      <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
        <div className="w-full max-w-none px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-[160px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  Bluepebo
                </h1>
                <h2 className="text-[160px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  蓝豆包AI
                </h2>
                <p className="text-[80px] font-bold leading-relaxed text-white/90 mt-12" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  让AI陪伴童年，让想象成为现实
                </p>
              </div>

              <div className="mt-16">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black px-8 py-4 text-[30px] font-medium transition-all duration-300 rounded-none"
                >
                  观看视频
                </Button>
              </div>
            </div>

            {/* Right side - Image/Video with gradient border */}
            <div className="relative">
              {/* Gradient border container */}
              <div className="p-10 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-2xl">
                <div className="bg-black rounded-xl overflow-hidden">
                  <img
                    src="/public/p1.png"
                    alt="Child with AI companion toy"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-white">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-slate-900 mb-6">关于我们</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                蓝豆包成立于2021年，我们是一家专注于AI智能玩具的创新科技公司
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">我们的故事</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    2021年，我们在上海杨浦区长阳创谷成立了蓝豆包，一家专注于AI智能玩具的创新公司。
                    我们相信每个孩子都值得拥有最智能、最有趣的陪伴伙伴。
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    从创立之初，我们就致力于将最先进的人工智能技术融入儿童玩具中，
                    让科技真正为孩子们的成长和快乐服务。
                  </p>
                </div>
                <Link href="/about">
                  <Button className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-4 text-lg">
                    了解更多关于我们
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">专业团队</h4>
                    <p className="text-sm text-slate-600">50+ AI专家</p>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">专注儿童</h4>
                    <p className="text-sm text-slate-600">3-12岁市场</p>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">行业认可</h4>
                    <p className="text-sm text-slate-600">多项专利</p>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">全球视野</h4>
                    <p className="text-sm text-slate-600">国际标准</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Products Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-fluid">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">热门产品</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              蓝豆包和语音戒指 - 陪伴孩子成长的智能伙伴
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* 蓝豆包 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">🤖</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">蓝豆包</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white text-sm font-medium">AI智能</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">智能陪伴机器人</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    集AI对话、情感陪伴、学习辅导于一体的智能机器人，是孩子最贴心的成长伙伴。
                    通过先进的自然语言处理技术，真正理解孩子的需求。
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-primary rounded-full text-sm font-medium">语音交互</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-primary rounded-full text-sm font-medium">情感识别</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-primary rounded-full text-sm font-medium">学习辅导</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3">
                    了解详情
                  </Button>
                </div>
              </div>

              {/* 语音戒指 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="h-80 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">💍</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">语音戒指</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white text-sm font-medium">便携式</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">便携式AI助手</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    小巧便携的智能语音设备，随时随地为孩子提供知识问答和趣味互动。
                    让学习变得更加有趣和便捷。
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-accent rounded-full text-sm font-medium">便携设计</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-accent rounded-full text-sm font-medium">即时问答</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-accent rounded-full text-sm font-medium">创意启发</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white py-3">
                    了解详情
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section with more spacing */}
      <div className="py-16">
        <News />
      </div>

      <Footer />
    </div>
  );
}