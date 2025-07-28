import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, Star, ShoppingCart, Heart, Shield, Award, Zap, Phone, CheckCircle, Clock, Wifi } from "lucide-react";

// 定义产品类型
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export default function Products() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // 直接定义产品数据
  const products: Product[] = [
      {
        id: 1,
        name: "蓝豆包AI语音陪伴玩偶",
        description: `蓝豆包AI对话玩偶，可以陪娃背古诗、学英语、练口算、百科知识、情感陪伴。
    主要特点：
    1. 全流程语音控制更加智能，摇一摇，趣味互动更加有趣；
    2. 10米内互相发现，蓝牙社交；
    3. 每周成长报告，宝宝来信温情满满；包装精美，送礼好物；
    4. 小程序不断升级，长期陪伴；
    5. 不联网时仍然有AI功能；同类产品性价比最高。`,
        price: "429.00",
        image: "/p2.png",
        features: ["语音交互", "情感识别", "学习能力", "安全材料"]
      },
      {
        id: 2,
        name: "蓝豆包AI智能语音戒指",
        description: `蓝豆包AI戒指产品功能介绍：
    1. 搭载大模型对话，通过独有的骨传导技术，将对话语音用私密方式让用户收听，可作为随身携带的智能助理，随时随地解决生活、工作的问题；
    2. 独特的指纹识别解锁功能；
    3. AI手势控制，不同的手势可对家电、AI硬件、机器人等形成功能控制；
    4. 保有传统健康戒指的心率、血压测试功能，通过AI语音可直接播报检测结果和异常数据；
    5. 时尚美观的设计，使智能戒指在拥有诸多AI功能的同时依然是一个美观的饰品。`,
        price: "敬请期待",
        image: "/p3.png",
        features: ["指纹解锁", "骨传导技术", "手势控制", "健康监测"]
      },
      {
        id: 3,
        name: "蓝豆包AI二代陪伴宠物",
        description: `二代产品研发生产具有更高AI功能的陪伴玩偶。
    玩偶具备灵活的眼睛、运动功能，带有摄像头可拍照识别物体、人物、用户情绪等。
    开启电子宠物养成系的新玩法。`,
        price: "敬请期待",
        image: "/p4.png",
        features: ["灵活眼睛", "运动功能", "拍照识别", "情绪感知", "宠物养成"]
      }
    ];

  const faqs = [
    {
      question: "我们的AI玩具适合什么年龄段的孩子？",
      answer: "我们的产品主要适合3岁以上的儿童。"
    },
    {
      question: "AI玩具的安全性如何保障？",
      answer: "我们严格遵循国际儿童玩具安全标准，所有产品都通过3C认证、CE认证等权威检测。在数据安全方面，我们采用端到端加密技术，严格保护儿童隐私，绝不收集个人敏感信息。"
    },
    {
      question: "产品需要联网使用吗？",
      answer: "部分功能需要联网，如语音识别、知识问答等。但我们也提供离线模式，确保在没有网络的情况下，孩子仍然可以享受基础的陪伴和游戏功能。首次使用时需要使用Bluepebo微信小程序进行设备wifi联网。"
    },
    {
      question: "如何进行售后服务和技术支持？",
      answer: "我们承诺1年内保修，任何问题可拨打官方客服热线电话：4000-269-568。"
    },
    {
      question: "产品的电池续航时间如何？",
      answer: "正常待机3-4天，高频持续使用维持18小时。所有产品都配备节能模式，延长使用时间。"
    }
  ];

  const handleProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  // 根据产品类型获取不同的规格信息
  const getProductSpecs = (product: Product) => {
    switch (product.id) {
      case 1: // 蓝豆包AI语音陪伴玩偶
        return [
          { label: "适用年龄", value: "3岁以上" },
          { label: "续航时间", value: "正常待机3-4天" },
          { label: "高频使用", value: "持续18小时" },
          { label: "联网方式", value: "微信小程序配置WiFi" },
          { label: "保修期限", value: "1年保修" },
          { label: "客服热线", value: "4000-269-568" }
        ];
      case 2: // 蓝豆包AI智能语音戒指
        return [
          { label: "产品状态", value: "研发中" },
          { label: "解锁方式", value: "指纹识别" },
          { label: "音频技术", value: "骨传导技术" },
          { label: "控制方式", value: "AI手势控制" },
          { label: "健康功能", value: "实时监测" },
          { label: "外观设计", value: "时尚穿戴" }
        ];
      case 3: // 蓝豆包AI二代陪伴宠物
        return [
          { label: "产品状态", value: "敬请期待" },
          { label: "智能眼睛", value: "灵活转动" },
          { label: "运动功能", value: "多种动作" },
          { label: "识别功能", value: "物体/人物/情绪" },
          { label: "养成模式", value: "电子宠物系统" },
          { label: "拍照功能", value: "内置摄像头" }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-black from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-yellow-400 mb-6">产品中心</h1>
            <p className="text-xl text-white max-w-5xl mx-auto leading-relaxed">
              探索我们全系列的AI智能玩具产品，每一款都融合了最新的人工智能技术，为孩子们带来前所未有的互动体验。
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
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
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
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
                      <span className="text-2xl font-bold text-yellow-500">¥{product.price}</span>
                      <Button
                        className="text-[15px] bg-black text-yellow-500 hover:bg-yellow-400 hover:text-black rounded-none"
                        onClick={() => handleProductDetail(product)}
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
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={isProductModalOpen} onOpenChange={setIsProductModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-800 mb-4">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                    </div>
                  </div>

                  {/* Product Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-green-800">安全认证</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <Award className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-orange-800">品质保证</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <Zap className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-purple-800">智能AI</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <Phone className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-blue-800">售后支持</p>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  {/* Price */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">产品介绍</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">核心功能</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-primary flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">产品规格</h4>
                    <div className="space-y-2">
                      {getProductSpecs(selectedProduct).map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-slate-100">
                          <span className="text-slate-600">{spec.label}</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info for specific products */}
              {selectedProduct.id === 1 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">用户评价</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-orange-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-800">李女士</span>
                      </div>
                      <p className="text-sm text-slate-600">
                        孩子非常喜欢这个AI玩具，不仅能学到知识，还培养了很好的表达能力。质量很好，值得推荐！
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-orange-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-800">张先生</span>
                      </div>
                      <p className="text-sm text-slate-600">
                        AI技术确实很先进，孩子现在更喜欢学习了。售后服务也很好，有问题都能及时解决。
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Special notice for unreleased products */}
              {(selectedProduct.id === 2 || selectedProduct.id === 3) && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex">
                      <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-yellow-800">产品状态</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          {selectedProduct.id === 2
                            ? "该产品目前正在研发中，预计将于2024年下半年发布。"
                            : "二代陪伴宠物正在紧锣密鼓的开发中，敬请期待正式发布！"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">常见问题</h2>
            <p className="text-xl text-slate-600">关于我们产品的常见疑问解答</p>
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