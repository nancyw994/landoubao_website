import Header from "@/components/header";
import FeaturedProducts from "@/components/featured-products";
import News from "@/components/news";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, Sparkles, Zap, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section - Story about us */}
      <section className="py-fluid-4xl">
        <div className="container-fluid text-center">
          <div className="max-w-4xl mx-auto space-y-fluid-xl">
            <h1 className="text-fluid-4xl font-bold text-slate-900 leading-tight">
              蓝豆包
              <span className="block text-fluid-2xl text-blue-primary font-normal mt-fluid-sm">
                让AI陪伴童年，让想象成为现实
              </span>
            </h1>
            
            <div className="bg-white rounded-2xl p-fluid-2xl shadow-lg">
              <p className="text-fluid-lg text-slate-700 leading-relaxed">
                2023年，我们在上海杨浦区长阳创谷成立了蓝豆包，一家专注于AI智能玩具的创新公司。
                我们相信每个孩子都值得拥有最智能、最有趣的陪伴伙伴。
              </p>
              <Link href="/about">
                <Button className="mt-fluid-lg bg-blue-primary hover:bg-blue-deep text-white px-fluid-xl py-fluid-md text-fluid-base">
                  了解更多关于我们
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-fluid-4xl bg-slate-900">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold text-white mb-fluid-xl">
              探索蓝豆包的AI世界
            </h2>
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                  <Play className="w-16 h-16" />
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-fluid-base font-medium">蓝豆包企业宣传片</p>
                <p className="text-fluid-sm text-gray-300">了解我们的AI玩具创新之路</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Slogan & Differences */}
      <section className="py-fluid-4xl">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-900 mb-fluid-md">
              我们的使命
            </h2>
            <p className="text-fluid-xl text-blue-primary font-semibold">
              "用AI科技点亮童心，让每个孩子都能拥有最懂他们的智能伙伴"
            </p>
          </div>

          <div className="grid-fluid gap-fluid-xl">
            <div className="bg-white rounded-2xl p-fluid-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-fluid-md">
                <Sparkles className="w-8 h-8 text-blue-primary" />
              </div>
              <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">真正的AI理解</h3>
              <p className="text-slate-600">不只是语音识别，我们的玩具能真正理解孩子的情感和需求</p>
            </div>

            <div className="bg-white rounded-2xl p-fluid-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-fluid-md">
                <Zap className="w-8 h-8 text-orange-accent" />
              </div>
              <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">持续学习成长</h3>
              <p className="text-slate-600">玩具会随着孩子的成长而不断学习，提供个性化的陪伴体验</p>
            </div>

            <div className="bg-white rounded-2xl p-fluid-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-fluid-md">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">安全第一</h3>
              <p className="text-slate-600">严格的隐私保护和内容审核，让家长放心，孩子开心</p>
            </div>

            <div className="bg-white rounded-2xl p-fluid-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-fluid-md">
                <Lightbulb className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">启发创造力</h3>
              <p className="text-slate-600">通过互动游戏和故事，激发孩子的想象力和创造思维</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-fluid-4xl bg-gray-50">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-900 mb-fluid-md">
              明星产品
            </h2>
            <p className="text-fluid-lg text-slate-600">
              蓝豆包和语音戒指 - 陪伴孩子成长的智能伙伴
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-fluid-2xl">
            {/* 蓝豆包 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-blue-primary to-blue-deep flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold">蓝豆包</h3>
                </div>
              </div>
              <div className="p-fluid-xl">
                <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">智能陪伴机器人</h3>
                <p className="text-slate-600 mb-fluid-md">
                  集AI对话、情感陪伴、学习辅导于一体的智能机器人，是孩子最贴心的成长伙伴。
                </p>
                <div className="flex gap-fluid-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-primary rounded-full text-sm">语音交互</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-primary rounded-full text-sm">情感识别</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-primary rounded-full text-sm">学习辅导</span>
                </div>
              </div>
            </div>

            {/* 语音戒指 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-orange-accent to-orange-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💍</span>
                  </div>
                  <h3 className="text-2xl font-bold">语音戒指</h3>
                </div>
              </div>
              <div className="p-fluid-xl">
                <h3 className="text-fluid-xl font-semibold text-slate-900 mb-fluid-sm">便携式AI助手</h3>
                <p className="text-slate-600 mb-fluid-md">
                  小巧便携的智能语音设备，随时随地为孩子提供知识问答和趣味互动。
                </p>
                <div className="flex gap-fluid-sm">
                  <span className="px-3 py-1 bg-orange-100 text-orange-accent rounded-full text-sm">便携设计</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-accent rounded-full text-sm">即时问答</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-accent rounded-full text-sm">创意启发</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* News Section */}
      <News />

      <Footer />
    </div>
  );
}
