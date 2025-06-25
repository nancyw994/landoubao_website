import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Handshake, Lightbulb, Code, Database, Cpu, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "AI技术授权",
      description: "授权我们成熟的AI算法、模型和硬件解决方案",
      features: ["语音识别技术", "计算机视觉", "自然语言处理", "机器学习算法", "硬件集成方案"],
      price: "面议"
    },
    {
      icon: Handshake,
      title: "联合研发",
      description: "与企业客户共同开发定制化AI产品和解决方案",
      features: ["产品概念设计", "技术方案制定", "原型开发", "测试验证", "量产支持"],
      price: "面议"
    },
    {
      icon: Lightbulb,
      title: "技术咨询",
      description: "提供专业的AI技术咨询和实施指导服务",
      features: ["技术评估", "方案设计", "实施指导", "培训服务", "持续支持"],
      price: "¥50,000起"
    }
  ];

  const technologies = [
    {
      icon: Code,
      title: "AI算法库",
      description: "包含语音识别、图像处理、自然语言理解等核心算法"
    },
    {
      icon: Database,
      title: "数据处理平台",
      description: "高效的数据收集、处理和分析平台"
    },
    {
      icon: Cpu,
      title: "硬件解决方案",
      description: "优化的硬件设计和集成方案"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-accent/10 to-blue-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">技术服务</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              为企业客户提供全方位的AI技术解决方案，包括技术授权、联合研发和专业咨询服务，助力您的AI产品创新。
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">服务类型</h2>
            <p className="text-xl text-slate-600">多样化的技术服务，满足不同企业需求</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center">
                    <service.icon className="text-white h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-800">服务内容：</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-orange-accent">{service.price}</span>
                      <Button className="bg-orange-accent text-white hover:bg-orange-accent/90 rounded-full">
                        咨询详情
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">核心技术</h2>
            <p className="text-xl text-slate-600">我们的技术优势和能力</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <tech.icon className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{tech.title}</h3>
                <p className="text-slate-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">合作流程</h2>
            <p className="text-xl text-slate-600">简单高效的合作流程</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "需求沟通", desc: "深入了解您的具体需求和目标" },
              { step: "02", title: "方案设计", desc: "制定详细的技术解决方案" },
              { step: "03", title: "项目实施", desc: "专业团队执行项目开发" },
              { step: "04", title: "交付维护", desc: "产品交付和后续技术支持" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-primary to-blue-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-accent to-orange-accent/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">开始您的AI之旅</h2>
          <p className="text-xl text-orange-50 mb-8">
            联系我们的专家团队，讨论您的项目需求，获取定制化解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-accent hover:bg-orange-50 px-8 py-3 rounded-full font-semibold">
              立即咨询
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-accent px-8 py-3 rounded-full font-semibold">
              下载技术方案
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}