import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Code,
  Cpu,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "一站式AI软硬件解决方案",
      description:
        "为玩具品牌和IP方提供AI陪伴产品的全链路技术服务，助力产品从创意到大规模落地。",
      features: [
        "服务内容：面向玩具公司与IP方，提供AI软硬件一体化解决方案，支持1000+台定制盒子的稳定批量出货",
        "核心能力（硬件）：自研AI主控芯片，自主设计主板架构，元器件独立选型测试，全链条硬件能力自主可控",
        "核心能力（软件）：支持自训练小模型，灵活适配不同IP语义风格；熟练调用国内外主流大模型，支持多语种、多场景对话",
        "系统平台支持：全球服务器部署，提供APP、小程序、CMS管理后台开发与持续运营支持",
        "生态优势：与国内最大的玩具代工厂深度合作，保障生产、组装、质量控制与供货周期"
      ],
      price: "定制合作 · 全流程服务"
    },
    {
      icon: Cpu,
      title: "AI智能玩偶定制开发",
      description:
        "为企业、IP方定制AI毛绒玩具、AI搪胶玩具等陪伴型智能玩偶，满足交互、陪伴、教育等多种需求。",
      features: [
        "外观定制：从玩偶造型、触感材质、视觉风格全面贴合IP形象，提升品牌联结",
        "交互功能：支持语音唤醒、故事讲解、表情识别、动作控制、音乐播放等多模态交互",
        "角色建模：为不同IP打造个性化AI语音模型，输出定制化角色语料与成长型互动体验",
        "教育内容融合：可内嵌古诗词、英语学习、口算训练等功能，提升产品教育价值",
        "合规保障：通过儿童电子玩具相关国家与国际认证，确保使用安全"
      ],
      price: "定制报价 · 高度个性化"
    },
    {
      icon: Code,
      title: "AI系统与平台软件开发",
      description:
        "提供AI语音系统、后台管理平台与终端APP/小程序开发，打通数据闭环，实现AI玩具智能化管理与运营。",
      features: [
        "AI系统开发：提供语音识别、情绪识别、对话引擎、内容生成等AI底层能力接入",
        "平台建设：建设配套家长端/儿童端APP、小程序，支持内容更新、设备控制、成长报告生成",
        "数据运营系统：支持用户数据采集与分析、交互日志记录、行为洞察与精细化运营",
        "云端部署：全球多节点服务器部署，保障产品跨区域稳定运行",
        "合作方式灵活：支持独立模块接入或整体打包交付"
      ],
      price: "模块化合作 · 灵活开发"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-black from-blue-50 to-blue-100 py-24">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            企业级AI技术服务
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-4xl mx-auto">
            提供AI玩具领域最完整的软硬件一体化能力，帮助企业打造可落地、可量产、可运营的AI陪伴型产品。
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              ToB 解决方案
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              定制、批量、可控，一站式解决AI落地难题
            </p>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <Button className="text-[20px] bg-black text-yellow-500 hover:bg-yellow-400 hover:text-black rounded-none">
                      立即咨询
                    </Button>
            </a>

          </div>

          {services.map((service, index) => (
            <Card key={index} className="bg-black p-10 rounded-3xl shadow-md mb-12">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-accent rounded-full flex items-center justify-center">
                    <service.icon className="text-white h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">
                    {service.title}
                  </h3>
                </div>
                <p className="text-yellow-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mt-1" />
                      <span className="text-white leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t mt-6 flex justify-between items-center">
                  <span className="text-lg font-semibold text-orange-accent">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
