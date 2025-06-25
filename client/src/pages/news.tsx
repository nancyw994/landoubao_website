import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Tag, ArrowRight, Search, Filter } from "lucide-react";
import type { NewsArticle } from "@shared/schema";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: news, isLoading, error } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"]
  });

  const categories = ["全部", "产品发布", "技术创新", "企业合作", "行业动态", "公司新闻"];

  const filteredNews = news?.filter(article => {
    const matchesCategory = selectedCategory === "全部" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">新闻中心</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              了解蓝豆包最新动态、产品发布、技术创新和行业资讯，与我们一起见证AI玩具行业的发展历程。
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索新闻..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
              />
            </div>
            
            {/* Category filters */}
            <div className="flex items-center space-x-2">
              <Filter className="text-slate-500 h-5 w-5" />
              <div className="flex space-x-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-blue-primary text-white hover:bg-blue-deep"
                        : "border-slate-200 text-slate-600 hover:border-blue-primary hover:text-blue-primary"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">头条新闻</h2>
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={filteredNews[0].image} 
                      alt={filteredNews[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-blue-primary text-white text-sm font-medium rounded-full">
                        {filteredNews[0].category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(filteredNews[0].publishDate)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 hover:text-blue-primary transition-colors cursor-pointer">
                      {filteredNews[0].title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {filteredNews[0].excerpt}
                    </p>
                    <Button className="bg-blue-primary text-white hover:bg-blue-deep w-fit rounded-full">
                      阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">最新资讯</h2>
          </div>
          
          {error ? (
            <div className="text-center py-12">
              <p className="text-red-500">加载新闻失败，请稍后重试。</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="bg-white rounded-2xl overflow-hidden">
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
              ) : filteredNews.length > 0 ? (
                filteredNews.slice(1).map((article) => (
                  <Card key={article.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-blue-primary text-white text-xs font-medium rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 hover:text-blue-primary transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-blue-primary hover:text-blue-deep font-medium">
                        阅读更多 <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-slate-500">没有找到符合条件的新闻</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-blue-primary to-blue-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">订阅新闻简报</h2>
          <p className="text-xl text-blue-100 mb-8">
            第一时间获取蓝豆包最新动态和行业资讯
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-orange-accent text-white hover:bg-orange-accent/90 px-8 py-3 rounded-full font-semibold">
              订阅
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}