import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Filter, Search, ChevronDown, ChevronUp } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  const categories = ["全部", "陪伴机器人", "教育机器人", "智能宠物", "编程教育"];

  const faqs = [
    {
      question: "我们的AI玩具适合什么年龄段的孩子？",
      answer: "我们的产品主要适合3-12岁的儿童，不同产品有相应的年龄推荐。蓝豆包适合5-12岁，语音戒指适合3-8岁。每款产品都经过儿童心理学专家的评估，确保符合不同年龄段的认知发展特点。"
    },
    {
      question: "AI玩具的安全性如何保障？",
      answer: "我们严格遵循国际儿童玩具安全标准，所有产品都通过3C认证、CE认证等权威检测。在数据安全方面，我们采用端到端加密技术，严格保护儿童隐私，绝不收集个人敏感信息。"
    },
    {
      question: "产品需要联网使用吗？",
      answer: "部分功能需要联网，如语音识别、知识问答等。但我们也提供离线模式，确保在没有网络的情况下，孩子仍然可以享受基础的陪伴和游戏功能。首次使用时需要联网进行设置和软件更新。"
    },
    {
      question: "如何进行售后服务和技术支持？",
      answer: "我们提供1年免费保修服务，终身技术支持。您可以通过官方客服热线、微信客服或邮件联系我们。我们的技术团队会及时回应您的问题，并提供远程技术支持和上门维修服务。"
    },
    {
      question: "产品可以定制化吗？",
      answer: "是的，我们支持个性化定制服务。您可以根据孩子的兴趣爱好和学习需求，定制专属的对话内容、学习计划和游戏模式。企业客户还可以定制品牌外观和特殊功能。"
    },
    {
      question: "产品的电池续航时间如何？",
      answer: "蓝豆包的电池续航时间约为8-12小时，支持快充技术，充电2小时可使用一整天。语音戒指续航时间约为48小时，待机时间可达7天。所有产品都配备节能模式，延长使用时间。"
    }
  ];

  const filteredProducts = products?.filter(product => {
    const matchesCategory = selectedCategory === "全部" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
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
      <section className="py-20 bg-white">
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
                        <Button 
                          className="bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full text-sm"
                          onClick={() => {
                            // Show product description modal or navigate to product detail
                            alert(`产品详情：\n\n${product.name}\n\n${product.description}\n\n特色功能：\n${product.features.join('\n• ')}`);
                          }}
                        >
                          查看详情
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">常见问题</h2>
            <p className="text-lg text-slate-600">关于我们产品的常见疑问解答</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}