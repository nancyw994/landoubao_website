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

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-fluid-3xl">
        <div className="container-fluid">
          <div className="grid-fluid-2 items-center gap-fluid-xl">
            <div className="space-y-fluid-xl">
              <div className="space-y-fluid-md">
                <h1 className="text-fluid-5xl font-bold text-slate-800 leading-tight">
                  为孩子打造的<br/>
                  <span className="text-blue-primary">智能成长伙伴</span>
                </h1>
                <p className="text-fluid-xl text-slate-600 leading-relaxed max-w-prose">
                  蓝豆包专为家庭设计的AI智能玩具，让孩子在安全、有趣的环境中快乐学习，健康成长。
                </p>
              </div>

              <div className="flex-responsive">
                <Button className="bg-blue-primary text-white btn-responsive hover:bg-blue-deep transition-all transform hover:scale-105 shadow-lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  立即选购
                </Button>
                <Button variant="outline" className="border-2 border-blue-primary text-blue-primary btn-responsive hover:bg-blue-primary hover:text-white transition-all">
                  <Play className="mr-2 h-4 w-4" />
                  产品演示
                </Button>
              </div>

              <div className="grid-fluid-3 pt-fluid-md">
                <div className="text-center">
                  <div className="text-fluid-2xl font-bold text-blue-primary">50W+</div>
                  <div className="text-fluid-sm text-slate-500">满意家庭</div>
                </div>
                <div className="text-center">
                  <div className="text-fluid-2xl font-bold text-blue-primary">98%</div>
                  <div className="text-fluid-sm text-slate-500">好评率</div>
                </div>
                <div className="text-center">
                  <div className="text-fluid-2xl font-bold text-blue-primary">24h</div>
                  <div className="text-fluid-sm text-slate-500">客服支持</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Children playing with AI toys"
                className="img-responsive rounded-3xl shadow-2xl aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-800 mb-fluid-md">为什么选择蓝豆包</h2>
            <p className="text-fluid-xl text-slate-600 max-w-prose mx-auto">专为中国家庭设计的AI教育解决方案</p>
          </div>

          <div className="grid-fluid-3 gap-fluid-xl">
            {features.map((feature, index) => (
              <Card key={index} className="card-responsive bg-white group">
                <CardContent className="space-y-fluid-lg">
                  <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-fluid-2xl font-semibold text-slate-800 mb-fluid-sm">{feature.title}</h3>
                    <p className="text-slate-600 mb-fluid-md text-fluid-base leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="space-y-fluid-xs">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-fluid-xs">
                        <div className="w-2 h-2 bg-blue-primary rounded-full flex-shrink-0"></div>
                        <span className="text-slate-600 text-fluid-sm">{detail}</span>
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
      <section className="py-fluid-3xl bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-800 mb-fluid-md">适合不同年龄段的成长方案</h2>
            <p className="text-fluid-xl text-slate-600 max-w-prose mx-auto">根据儿童发展阶段，提供个性化的学习体验</p>
          </div>

          <div className="grid-fluid-3 gap-fluid-lg">
            {ageGroups.map((group, index) => (
              <Card key={index} className="bg-white card-responsive overflow-hidden">
                <CardContent className="p-fluid-lg">
                  <div className={`inline-block px-fluid-md py-fluid-xs rounded-full text-fluid-sm font-medium mb-fluid-md ${group.color}`}>
                    {group.age}
                  </div>
                  <h3 className="text-fluid-xl font-semibold text-slate-800 mb-fluid-sm">{group.title}</h3>
                  <p className="text-slate-600 mb-fluid-lg text-fluid-base">{group.description}</p>

                  <div className="space-y-fluid-xs">
                    <h4 className="font-medium text-slate-800 text-fluid-base">推荐产品：</h4>
                    {group.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-fluid-xs">
                        <Star className="h-4 w-4 text-orange-accent flex-shrink-0" />
                        <span className="text-slate-600 text-fluid-sm">{product}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-fluid-lg border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white btn-responsive">
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-800 mb-fluid-md">热门产品推荐</h2>
            <p className="text-fluid-xl text-slate-600 max-w-prose mx-auto">精选最受家长和孩子喜爱的AI智能玩具</p>
          </div>

          <div className="grid-fluid-4 gap-fluid-lg">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="overflow-hidden card-responsive">
                  <div className="w-full aspect-video bg-slate-200 animate-pulse"></div>
                  <CardContent className="p-fluid-lg">
                    <div className="h-6 bg-slate-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center gap-fluid-sm">
                      <div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>
                      <div className="h-10 flex-1 max-w-24 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : products?.slice(0, 4).map((product) => (
              <Card key={product.id} className="bg-white card-responsive overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-blue-primary text-white text-xs font-medium rounded">
                      热销
                    </span>
                  </div>
                </div>
                <CardContent className="p-fluid-lg">
                  <h3 className="font-semibold text-fluid-lg text-slate-800 mb-fluid-sm group-hover:text-blue-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-fluid-sm mb-fluid-md line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center gap-fluid-sm">
                    <span className="text-fluid-2xl font-bold text-blue-primary">¥{product.price}</span>
                    <Button className="bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full text-fluid-sm">
                      立即购买
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-fluid-xl">
            <Button className="bg-blue-primary text-white btn-responsive hover:bg-blue-deep transition-all">
              查看全部产品
            </Button>
          </div>
        </div>
      </section>

      {/* Support & Service */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-slate-800 mb-fluid-md">贴心服务保障</h2>
            <p className="text-fluid-xl text-slate-600 max-w-prose mx-auto">让您安心购买，放心使用</p>
          </div>

          <div className="grid-fluid-4 gap-fluid-lg">
            {[
              { icon: Shield, title: "品质保证", desc: "1年质保，终身维护" },
              { icon: Users, title: "专业客服", desc: "7×24小时在线支持" },
              { icon: Award, title: "权威认证", desc: "通过国际安全标准" },
              { icon: Clock, title: "快速配送", desc: "48小时内发货" }
            ].map((service, index) => (
              <div key={index} className="text-center space-y-fluid-md">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-fluid-lg font-semibold text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-fluid-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-fluid-3xl bg-gradient-to-br from-blue-primary to-blue-deep">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold text-white mb-fluid-md">开启孩子的AI学习之旅</h2>
            <p className="text-fluid-xl text-blue-100 mb-fluid-lg max-w-prose mx-auto">
              选择蓝豆包，让科技陪伴孩子快乐成长
            </p>
            <div className="flex-responsive justify-center">
              <Button className="bg-white text-blue-primary hover:bg-blue-50 btn-responsive">
                <ShoppingCart className="mr-2 h-4 w-4" />
                立即购买
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary btn-responsive">
                免费试用
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}