import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Handshake, Lightbulb, Code, Database, Cpu, CheckCircle, Building, Briefcase, Target, TrendingUp, Users, Award, Phone, Mail } from "lucide-react";

export default function Enterprise() {
  const services = [
    {
      icon: Settings,
      title: "AI技术授权",
      description: "授权我们成熟的AI算法、模型和硬件解决方案",
      features: ["语音识别技术", "计算机视觉", "自然语言处理", "机器学习算法", "硬件集成方案"],
      price: "面议",
      color: "bg-orange-accent"
    },
    {
      icon: Handshake,
      title: "联合研发",
      description: "与企业客户共同开发定制化AI产品和解决方案",
      features: ["产品概念设计", "技术方案制定", "原型开发", "测试验证", "量产支持"],
      price: "面议",
      color: "bg-blue-primary"
    },
    {
      icon: Lightbulb,
      title: "技术咨询",
      description: "提供专业的AI技术咨询和实施指导服务",
      features: ["技术评估", "方案设计", "实施指导", "培训服务", "持续支持"],
      price: "¥50,000起",
      color: "bg-green-500"
    }
  ];

  const technologies = [
    {
      icon: Code,
      title: "AI算法库",
      description: "包含语音识别、图像处理、自然语言理解等核心算法",
      specs: ["准确率>95%", "响应时间<100ms", "支持多语言", "云端+边缘部署"]
    },
    {
      icon: Database,
      title: "数据处理平台",
      description: "高效的数据收集、处理和分析平台",
      specs: ["PB级数据处理", "实时分析", "隐私保护", "可视化展示"]
    },
    {
      icon: Cpu,
      title: "硬件解决方案",
      description: "优化的硬件设计和集成方案",
      specs: ["低功耗设计", "模块化结构", "成本优化", "量产支持"]
    }
  ];

  const successCases = [
    {
      company: "智趣玩具有限公司",
      industry: "玩具制造",
      challenge: "传统玩具缺乏互动性，需要AI技术升级产品线",
      solution: "提供语音交互和图像识别技术授权",
      result: "产品销量增长200%，市场份额提升至行业前三",
      logo: "智"
    },
    {
      company: "未来教育科技",
      industry: "教育科技",
      challenge: "需要开发个性化AI学习助手产品",
      solution: "联合研发定制化教育AI解决方案",
      result: "成功推出爆款产品，获得千万级融资",
      logo: "未"
    },
    {
      company: "创新科技集团",
      industry: "科技制造",
      challenge: "缺乏AI技术团队，需要专业技术指导",
      solution: "提供全方位技术咨询和人才培训服务",
      result: "建立完整AI技术体系，成功转型智能制造",
      logo: "创"
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "技术领先",
      description: "拥有50+项AI技术专利，技术实力行业领先",
      metric: "50+"
    },
    {
      icon: Users,
      title: "专业团队",
      description: "100+名AI工程师，平均从业经验8年以上",
      metric: "100+"
    },
    {
      icon: Award,
      title: "成功案例",
      description: "已服务200+企业客户，成功率达95%以上",
      metric: "200+"
    },
    {
      icon: TrendingUp,
      title: "市场认可",
      description: "连续3年获得行业最佳AI技术服务商奖",
      metric: "3年"
    }
  ];

  const process = [
    {
      step: "01",
      title: "需求分析",
      description: "深入了解您的业务需求和技术目标",
      tasks: ["业务调研", "技术评估", "可行性分析", "预算规划"]
    },
    {
      step: "02",
      title: "方案设计",
      description: "制定详细的技术解决方案和实施计划",
      tasks: ["架构设计", "技术选型", "时间规划", "风险评估"]
    },
    {
      step: "03",
      title: "开发实施",
      description: "专业团队执行项目开发和集成测试",
      tasks: ["敏捷开发", "质量控制", "集成测试", "性能优化"]
    },
    {
      step: "04",
      title: "交付运维",
      description: "产品交付培训和持续技术支持服务",
      tasks: ["系统交付", "人员培训", "技术支持", "升级维护"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-accent/10 to-blue-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-slate-800 leading-tight">
                  企业AI技术<br/>
                  <span className="text-orange-accent">解决方案专家</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  为企业客户提供全方位的AI技术服务，包括技术授权、联合研发和专业咨询，助力您的AI产品创新和数字化转型。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-accent/90 transition-all transform hover:scale-105 shadow-lg">
                  <Briefcase className="mr-2 h-4 w-4" />
                  免费咨询
                </Button>
                <Button variant="outline" className="border-2 border-orange-accent text-orange-accent px-8 py-4 rounded-full font-semibold hover:bg-orange-accent hover:text-white transition-all">
                  <Phone className="mr-2 h-4 w-4" />
                  联系销售
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-accent">200+</div>
                  <div className="text-sm text-slate-500">合作企业</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-accent">95%</div>
                  <div className="text-sm text-slate-500">项目成功率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-accent">24/7</div>
                  <div className="text-sm text-slate-500">技术支持</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Enterprise AI solutions" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-accent/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">核心服务</h2>
            <p className="text-xl text-slate-600">多样化的技术服务，满足不同企业需求</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 group">
                <CardContent className="space-y-6">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
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
                      <Button className={`${service.color} text-white hover:opacity-90 rounded-full`}>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-4">核心技术能力</h2>
            <p className="text-xl text-slate-600">行业领先的AI技术栈和解决方案</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center">
                    <tech.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{tech.title}</h3>
                  <p className="text-slate-600">{tech.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800">技术规格：</h4>
                    {tech.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-primary rounded-full"></div>
                        <span className="text-slate-600 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">成功案例</h2>
            <p className="text-xl text-slate-600">真实的合作案例，证明我们的专业实力</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-accent to-orange-accent/80 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{case_.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{case_.company}</h3>
                      <p className="text-sm text-slate-500">{case_.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">挑战：</h4>
                      <p className="text-slate-600 text-sm">{case_.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">解决方案：</h4>
                      <p className="text-slate-600 text-sm">{case_.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">成果：</h4>
                      <p className="text-green-600 text-sm font-medium">{case_.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gradient-to-br from-blue-primary to-blue-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">选择我们的理由</h2>
            <p className="text-xl text-blue-100">专业实力和丰富经验的完美结合</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{advantage.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-blue-100 text-sm">{advantage.description}</p>
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
            <p className="text-xl text-slate-600">标准化的项目流程，确保合作成功</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-accent to-orange-accent/80 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                  
                  <div className="space-y-1">
                    {step.tasks.map((task, idx) => (
                      <div key={idx} className="text-xs text-slate-500">• {task}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-accent to-orange-accent/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">开启AI合作之旅</h2>
          <p className="text-xl text-orange-50 mb-8">
            联系我们的专家团队，讨论您的项目需求，获取定制化解决方案。
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <Phone className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">电话咨询</h3>
              <p className="text-orange-100">400-888-0123</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <Mail className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">邮件联系</h3>
              <p className="text-orange-100">business@landoubao.com</p>
            </div>
          </div>
          
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