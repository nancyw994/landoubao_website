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

// Enhanced News Component for Home Page
function HomeNews() {
  const { data: news, isLoading, error, refetch } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
    retry: 3,
    retryDelay: 1000,
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    return (
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">新闻动态</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">了解AI玩具行业最新资讯和蓝豆包公司动态</p>
          </div>

          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">加载失败</h3>
              <p className="text-slate-600 mb-8">
                暂时无法加载新闻内容，请检查网络连接后重试。
              </p>
              <Button
                onClick={() => refetch()}
                className="bg-blue-primary text-white hover:bg-blue-deep px-6 py-3 rounded-full font-semibold"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                重新加载
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">新闻动态</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            了解AI玩具行业最新资讯和蓝豆包公司动态，掌握智能玩具发展趋势
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))
          ) : news && news.length > 0 ? (
            news.slice(0, 3).map((article) => (
              <Card key={article.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-primary text-white text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary hover:text-blue-primary transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-secondary leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-primary hover:text-blue-deep font-medium group-hover:translate-x-1 transition-transform">
                    阅读更多 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <Tag className="h-16 w-16 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">暂无新闻</h3>
                <p className="text-slate-600 mb-8">
                  目前没有可显示的新闻资讯，请稍后再来查看。
                </p>
                <Button
                  onClick={() => refetch()}
                  variant="outline"
                  className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  刷新
                </Button>
              </div>
            </div>
          )}
        </div>

        {news && news.length > 3 && (
          <div className="text-center mt-16">
            <Button className="bg-blue-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-deep transition-all transform hover:scale-105">
              查看更多新闻
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

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
                <h1 className="text-[130px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
                  Bluepebo
                </h1>
                <h2 className="text-[100px] font-bold leading-tight text-white" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
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
              <h2 className="text-[70px] text-black font-bold text-slate-900 mb-8" style={{fontFamily: 'Telegraf, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>关于我们</h2>
              <p className="text-[28px] text-gray-700 text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
                  <p className="text-[24px] text-slate-600 mb-6 leading-relaxed">
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
                  <p className="text-[24px] text-slate-600 mb-6 leading-relaxed">
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

      {/* News Section with enhanced spacing */}
      <div className="py-24 bg-white">
        <HomeNews />
      </div>

      <Footer />
    </div>
  );
}