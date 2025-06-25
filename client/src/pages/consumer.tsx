import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, GraduationCap, Heart, Star, Play, ShoppingCart, Users, Award, Clock } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Consumer() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  const features = [
    {
      icon: Shield,
      title: "安全第一",
      description: "采用食品级安全材料，通过国际安全认证，保护孩子健康成长",
      details: ["环保ABS材料", "圆角设计", "无毒涂料", "CE/FCC认证"]
    },
    {
      icon: GraduationCap,
      title: "寓教于乐",
      description: "融合STEAM教育理念，在游戏中培养孩子的创造力和逻辑思维",
      details: ["科学启蒙", "逻辑思维", "创意表达", "问题解决"]
    },
    {
      icon: Heart,
      title: "情感陪伴",
      description: "AI情感识别技术，理解孩子的情绪变化，提供温暖的陪伴支持",
      details: ["情绪识别", "个性互动", "成长记录", "家长反馈"]
    }
  ];

  const ageGroups = [
    {
      age: "3-6岁",
      title: "启蒙探索期",
      description: "培养基础认知和语言能力",
      products: ["智能陪伴机器人", "互动故事机"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      age: "7-10岁",
      title: "学习成长期",
      description: "强化学科知识和思维训练",
      products: ["AI学习助手", "编程启蒙机器人"],
      color: "bg-green-100 text-green-600"
    },
    {
      age: "11-14岁",
      title: "创新实践期",
      description: "提升创造力和实践能力",
      products: ["高级编程机器人", "AI创作助手"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "李女士",
      role: "8岁孩子家长",
      content: "我的孩子现在每天都主动要求和AI机器人一起学习，不仅成绩提高了，性格也变得更加开朗自信。",
      rating: 5,
      avatar: "李"
    },
    {
      name: "张先生",
      role: "双胞胎爸爸",
      content: "两个孩子都很喜欢，AI助手能够根据每个孩子的特点提供个性化的学习内容，真的很智能。",
      rating: 5,
      avatar: "张"
    },
    {
      name: "王女士",
      role: "幼儿园老师",
      content: "作为教育工作者，我认为这些AI玩具在培养孩子学习兴趣方面效果显著，值得推荐。",
      rating: 5,
      avatar: "王"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-slate-800 leading-tight">
                  为孩子打造的<br/>
                  <span className="text-blue-primary">智能成长伙伴</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  蓝豆包专为家庭设计的AI智能玩具，让孩子在安全、有趣的环境中快乐学习，健康成长。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-deep transition-all transform hover:scale-105 shadow-lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  立即选购
                </Button>
                <Button variant="outline" className="border-2 border-blue-primary text-blue-primary px-8 py-4 rounded-full font-semibold hover:bg-blue-primary hover:text-white transition-all">
                  <Play className="mr-2 h-4 w-4" />
                  产品演示
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-primary">50W+</div>
                  <div className="text-sm text-slate-500">满意家庭</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-primary">98%</div>
                  <div className="text-sm text-slate-500">好评率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-primary">24h</div>
                  <div className="text-sm text-slate-500">客服支持</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Children playing with AI toys" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">为什么选择蓝豆包</h2>
            <p className="text-xl text-slate-600">专为中国家庭设计的AI教育解决方案</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 group">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 mb-6">{feature.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-primary rounded-full"></div>
                        <span className="text-slate-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">适合不同年龄段的成长方案</h2>
            <p className="text-xl text-slate-600">根据儿童发展阶段，提供个性化的学习体验</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <CardContent className="p-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${group.color}`}>
                    {group.age}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{group.title}</h3>
                  <p className="text-slate-600 mb-6">{group.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800">推荐产品：</h4>
                    {group.products.map((product, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-orange-accent" />
                        <span className="text-slate-600">{product}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white">
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">热门产品推荐</h2>
            <p className="text-xl text-slate-600">精选最受家长和孩子喜爱的AI智能玩具</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="w-full h-48 bg-slate-200 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-slate-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>
                      <div className="h-10 w-24 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : products?.slice(0, 4).map((product) => (
              <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-blue-primary text-white text-xs font-medium rounded">
                      热销
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-blue-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-primary">¥{product.price}</span>
                    <Button className="bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full text-sm">
                      立即购买
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-blue-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-deep transition-all">
              查看全部产品
            </Button>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-soft to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">家长真实评价</h2>
            <p className="text-xl text-slate-600">听听其他家长的使用体验</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 text-orange-accent mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">贴心服务保障</h2>
            <p className="text-xl text-slate-600">让您安心购买，放心使用</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "品质保证", desc: "1年质保，终身维护" },
              { icon: Users, title: "专业客服", desc: "7×24小时在线支持" },
              { icon: Award, title: "权威认证", desc: "通过国际安全标准" },
              { icon: Clock, title: "快速配送", desc: "48小时内发货" }
            ].map((service, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-primary to-blue-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">开启孩子的AI学习之旅</h2>
          <p className="text-xl text-blue-100 mb-8">
            选择蓝豆包，让科技陪伴孩子快乐成长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-primary hover:bg-blue-50 px-8 py-3 rounded-full font-semibold">
              <ShoppingCart className="mr-2 h-4 w-4" />
              立即购买
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary px-8 py-3 rounded-full font-semibold">
              免费试用
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}