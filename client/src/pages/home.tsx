import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Award, Globe } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Tag, ArrowRight, AlertCircle, RefreshCw } from "lucide-react";
import type { NewsArticle } from "@shared/schema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Clean black design with more top spacing */}
      <section className="min-h-screen flex items-center bg-black relative overflow-hidden pt-32">
        <div className="w-full max-w-none px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Content */}
            <div className="space-y-12 pl-[200px]">
              <div className="space-y-12">
                <h1 className="text-[120px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  Bluepebo
                </h1>
                <h2 className="text-[90px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  蓝豆包AI
                </h2>
                <p className="text-[40px] font-bold leading-relaxed text-white/90 mt-16" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  让AI陪伴童年，让想象成为现实
                </p>
              </div>

              <div className="mt-20">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black px-12 py-8 text-[32px] font-medium transition-all duration-300 rounded-none transform hover:scale-105">
                  观看视频
                </Button>
              </div>
            </div>

            {/* Right side - Image/Video with enhanced gradient border */}
            <div className="relative">
              {/* Enhanced gradient border container */}
              <div className="p-4 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-3xl shadow-2xl">
                <div className="bg-black rounded-2xl overflow-hidden">
                  <img
                    src="/p1.png"
                    alt="Child with AI companion toy"
                    className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating animation elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with enhanced spacing */}
      <section className="py-40 bg-white text-white">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-[60px] text-black font-bold text-slate-900 mb-4" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>关于我们</h2>
              <p className="text-[25px] text-gray-600 text-slate-600 max-w-4xl mx-auto leading-relaxed">
                蓝豆包成立于2024年，我们是一家专注于AI智能玩具的创新科技公司
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-32 items-center mb-32">
              <div className="space-y-10">
                <div className="space-y-8">
                  <h3 className="text-[40px] text-black font-bold text-slate-900" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>我们的故事</h3>
                  <p className="text-[28px] text-gray-700 text-slate-600 leading-relaxed" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                    2024年，我们在上海杨浦区长阳创谷成立了Bluepebo蓝豆包AI，是一家专注于AI智能玩具的创新公司。
                    我们相信每个孩子都值得拥有最智能、最有趣的陪伴伙伴。
                  </p>
                  <p className="text-[28px] text-gray-700 text-slate-600 leading-relaxed" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                    从创立之初，我们就致力于将最先进的人工智能技术融入儿童玩具中，
                    让科技真正为孩子们的成长和快乐服务。
                  </p>
                </div>
                <div className="pt-8">
                  <Link href="/about">
                    <Button className="bg-black hover:bg-yellow-400 text-white hover:text-black px-12 py-8 text-[26px] rounded-none transition-all duration-300 transform hover:scale-105">
                      了解更多
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-16 shadow-xl">
                <div className="grid grid-cols-2 gap-12">
                  <div className="text-center transform hover:scale-110 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-[32px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>专业团队</h4>
                    <p className="text-slate-600 text-[22px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>30+ 工程师</p>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-[32px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>专注儿童</h4>
                    <p className="text-slate-600 text-[22px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>3-12岁市场</p>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-[32px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>行业认可</h4>
                    <p className="text-slate-600 text-[22px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>多项专利</p>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-[32px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>全球视野</h4>
                    <p className="text-slate-600 text-[22px]" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>国际标准</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Products Section with enhanced design */}
      <section className="py-40 bg-gradient-to-b from-blue-300 to-white">
        <div className="container-fluid">
          <div className="text-center mb-24">
            <h2 className="text-[70px] font-bold text-slate-900 mb-8" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>主要产品</h2>
            <p className="text-[28px] text-slate-600 max-w-4xl mx-auto leading-relaxed">
              新时代陪伴孩子成长的智能伙伴，家长的好帮手
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* 蓝豆包 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="h-96 bg-white flex items-center justify-center relative">
                  <img
                    src="/p2.png"
                    alt="蓝豆包"
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">蓝豆包AI语音陪伴玩偶</h3>
                  <p className="text-[22px] text-slate-600 mb-6 leading-relaxed">
                    集AI对话、情感陪伴、学习辅导于一体的智能机器人，是孩子最贴心的成长伙伴。
                    通过先进的自然语言处理技术，真正理解孩子的需求。
                  </p>
                </div>
              </div>

              {/* 语音戒指 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="h-96 bg-white flex items-center justify-center relative">
                  <img
                    src="/p3.png"
                    alt="AI智能语音戒指"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">蓝豆包AI智能语音戒指</h3>
                  <p className="text-[22px] text-slate-600 mb-6 leading-relaxed">
                    蓝豆包AI戒指集成大模型语音助手、指纹解锁、AI手势控制与健康监测于一体，以私密骨传导技术和时尚外观，打造既智能又美观的日常穿戴设备。
                  </p>
                </div>
              </div>
            </div>

            {/* Centered More Products Button */}
            <div className="text-center">
              <Link href="/products">
                <Button className="bg-black hover:bg-yellow-400 text-white hover:text-black px-16 py-8 text-[28px] rounded-none transition-all duration-300 transform hover:scale-105 shadow-xl">
                  更多产品
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}