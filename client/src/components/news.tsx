import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";

export default function News() {
  const { data: news, isLoading, error } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"]
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
          <div className="text-center">
            <p className="text-red-500">Failed to load news articles. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">新闻动态</h2>
          <p className="text-xl text-slate-600">了解AI玩具行业最新资讯和公司动态</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="bg-slate-50 rounded-2xl overflow-hidden">
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
              <Card key={article.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.publishDate)}</span>
                    <Tag className="h-4 w-4 ml-4" />
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 hover:text-blue-primary transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-slate-600">
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
              <p className="text-slate-500">暂无新闻资讯</p>
            </div>
          )}
        </div>
        
        {news && news.length > 3 && (
          <div className="text-center mt-12">
            <Button className="bg-blue-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-deep transition-all">
              查看更多新闻
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
