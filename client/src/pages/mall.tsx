import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, Filter, Search, Truck, Shield, Award } from "lucide-react";

export default function Mall() {
  const featuredProducts = [
    {
      id: 1,
      name: "智能陪伴机器人 Pro",
      price: "¥399",
      originalPrice: "¥499",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      rating: 4.9,
      reviews: 328,
      tags: ["热销", "新品"],
      discount: "限时8折"
    },
    {
      id: 2,
      name: "AI学习助手",
      price: "¥599",
      originalPrice: "¥699",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      rating: 4.8,
      reviews: 256,
      tags: ["推荐"],
      discount: "教育专享"
    },
    {
      id: 3,
      name: "互动智能宠物",
      price: "¥299",
      originalPrice: "¥359",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      rating: 4.7,
      reviews: 189,
      tags: ["萌宠"],
      discount: "买二送一"
    },
    {
      id: 4,
      name: "编程启蒙机器人",
      price: "¥799",
      originalPrice: "¥899",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      rating: 4.9,
      reviews: 142,
      tags: ["STEM教育"],
      discount: "家长首选"
    }
  ];

  const categories = [
    { name: "陪伴机器人", count: 12, icon: "🤖" },
    { name: "教育助手", count: 8, icon: "📚" },
    { name: "智能宠物", count: 15, icon: "🐱" },
    { name: "编程教具", count: 6, icon: "💻" },
    { name: "益智玩具", count: 20, icon: "🧩" },
    { name: "配件专区", count: 25, icon: "🔧" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-primary to-blue-deep py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">蓝豆包线上商城</h1>
              <p className="text-xl text-blue-100 mb-6">
                精选AI智能玩具，让科技陪伴孩子快乐成长
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-primary hover:bg-blue-50 px-8 py-3 rounded-full font-semibold">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  立即购物
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary px-8 py-3 rounded-full font-semibold">
                  查看优惠
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="AI toys collection" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-accent rounded-2xl p-4 shadow-lg">
                <div className="text-white font-bold">新用户专享</div>
                <div className="text-orange-100 text-sm">首单立减¥50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索您想要的AI玩具..."
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-primary text-white rounded-full px-6">
                搜索
              </Button>
            </div>
            
            {/* Quick categories */}
            <div className="flex items-center space-x-4">
              {categories.slice(0, 4).map((category, index) => (
                <Button key={index} variant="outline" size="sm" className="rounded-full whitespace-nowrap">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-6 bg-blue-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="text-blue-primary h-6 w-6" />
              <span className="text-slate-700 font-medium">全国包邮 • 48小时发货</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="text-blue-primary h-6 w-6" />
              <span className="text-slate-700 font-medium">7天无理由退换</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="text-blue-primary h-6 w-6" />
              <span className="text-slate-700 font-medium">正品保证 • 官方质保</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">热门推荐</h2>
            <p className="text-xl text-slate-600">精选最受欢迎的AI智能玩具</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="inline-block px-2 py-1 bg-orange-accent text-white text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Discount */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                      {product.discount}
                    </span>
                  </div>
                  
                  {/* Like button */}
                  <Button variant="ghost" size="sm" className="absolute bottom-3 right-3 bg-white/80 hover:bg-white rounded-full p-2">
                    <Heart className="h-4 w-4 text-slate-600 hover:text-red-500" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-blue-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-orange-accent fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-blue-primary">{product.price}</span>
                    <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    加入购物车
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">产品分类</h2>
            <p className="text-xl text-slate-600">探索不同类别的AI智能玩具</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="bg-slate-50 hover:bg-blue-soft transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-blue-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-500">{category.count}件商品</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-primary to-blue-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">订阅优惠信息</h2>
          <p className="text-xl text-blue-100 mb-8">
            第一时间获取新品上市、限时优惠和专属活动信息
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