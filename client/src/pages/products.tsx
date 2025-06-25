import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Filter, Search, ShoppingCart } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  const categories = ["全部", "陪伴机器人", "教育机器人", "智能宠物", "编程教育"];

  const filteredProducts = products?.filter(product => {
    const matchesCategory = selectedCategory === "全部" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">产品中心</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              探索我们全系列的AI智能玩具产品，每一款都融合了最新的人工智能技术，为孩子们带来前所未有的互动体验。
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索产品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
              />
            </div>
            
            {/* Category filters */}
            <div className="flex items-center space-x-2">
              <Filter className="text-slate-500 h-5 w-5" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error ? (
            <div className="text-center py-12">
              <p className="text-red-500">加载产品信息失败，请稍后重试。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <Skeleton className="w-full h-64" />
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <div className="flex justify-between items-center">
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-10 w-24" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-blue-soft text-blue-primary text-xs font-medium rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-blue-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 2 && (
                            <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                              +{product.features.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-primary">¥{product.price}</span>
                        <Button className="bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full text-sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          购买
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-slate-500">没有找到符合条件的产品</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}