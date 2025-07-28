import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "公司地址",
      details: ["上海市 杨浦区", "北京市 中关村"],
      color: "text-blue-primary"
    },
    {
      icon: Phone,
      title: "联系电话",
      details: ["400-026-9568"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "邮箱地址",
      details: ["business@landoubao.com"],
      color: "text-orange-accent"
    },
    {
      icon: Clock,
      title: "工作时间",
      details: ["工作日：9:00-18:00"],
      color: "text-purple-500"
    }
  ];

  const qrcodes = [
    {
      title: "商务合作微信",
      image: "/qrcode-business-wechat.png"
    },
    {
      title: "媒体推广客服",
      image: "/qrcode-enterprise-wechat.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />

      {/* Hero Section */}
      <section className="bg-black from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-yellow-400 mb-6">联系我们</h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-4xl mx-auto">
              欢迎联系蓝豆包团队，我们期待与您探讨AI玩具的无限可能，为您提供专业的产品和服务。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-center p-8">
                <CardContent className="space-y-4">
                  <div className={`w-16 h-16 ${info.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-md font-semibold text-slate-800">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Contact QR Codes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">商务合作渠道</h2>
          <p className="text-lg text-slate-600 mb-12">添加下方微信二维码，获取更详细的产品方案或对接合作。</p>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
          {qrcodes.map((qrcode, index) => (
            <div key={index} className="space-y-4">
              <a href={qrcode.image} download target="_blank" rel="noopener noreferrer">
                <img
                  src={qrcode.image}
                  alt={qrcode.title}
                  className="w-56 h-56 mx-auto rounded-lg border shadow-md cursor-pointer hover:scale-105 transition-transform"
                  title="点击保存二维码"
                />
              </a>
              <p className="text-slate-700 font-medium">{qrcode.title}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
