import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "公司地址",
      details: ["深圳市南山区科技园", "蓝豆包AI科技大厦15楼"],
      color: "text-blue-primary"
    },
    {
      icon: Phone,
      title: "联系电话",
      details: ["客服热线：400-888-0123", "技术支持：0755-8888-0123"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "邮箱地址",
      details: ["商务合作：business@landoubao.com", "技术支持：support@landoubao.com"],
      color: "text-orange-accent"
    },
    {
      icon: Clock,
      title: "工作时间",
      details: ["工作日：9:00-18:00", "周末：10:00-17:00"],
      color: "text-purple-500"
    }
  ];

  const offices = [
    {
      city: "深圳总部",
      address: "深圳市南山区科技园蓝豆包AI科技大厦",
      phone: "0755-8888-0123",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      city: "北京分部",
      address: "北京市海淀区中关村软件园",
      phone: "010-8888-0123",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      city: "上海分部",
      address: "上海市浦东新区张江高科技园区",
      phone: "021-8888-0123",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">联系我们</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-slate-800">{info.title}</h3>
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

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">发送消息</h2>
                <p className="text-slate-600">请填写下方表单，我们会尽快回复您的消息。</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">姓名 *</label>
                    <Input placeholder="请输入您的姓名" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">电话 *</label>
                    <Input placeholder="请输入您的电话" className="rounded-lg" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">邮箱 *</label>
                  <Input type="email" placeholder="请输入您的邮箱" className="rounded-lg" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">主题 *</label>
                  <Input placeholder="请输入消息主题" className="rounded-lg" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">消息内容 *</label>
                  <Textarea 
                    placeholder="请详细描述您的需求或问题..." 
                    rows={6} 
                    className="rounded-lg resize-none"
                  />
                </div>
                
                <Button className="w-full bg-blue-primary text-white hover:bg-blue-deep py-3 rounded-lg font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  发送消息
                </Button>
              </form>
            </div>
            
            {/* Map & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">找到我们</h2>
                <p className="text-slate-600 mb-6">
                  我们在多个城市设有办公室，欢迎您到访交流。
                </p>
              </div>
              
              {/* Mock Map */}
              <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">地图位置</p>
                  <p className="text-sm text-slate-400">深圳市南山区科技园</p>
                </div>
              </div>
              
              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-blue-primary to-blue-deep text-white rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageCircle className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-semibold">在线客服</h3>
                      <p className="text-blue-100">实时解答您的问题</p>
                    </div>
                  </div>
                  <Button className="bg-white text-blue-primary hover:bg-blue-50 w-full">
                    立即咨询
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">办公地点</h2>
            <p className="text-xl text-slate-600">我们在全国主要城市设有办公室</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{office.city}</h3>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-1 text-blue-primary flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-primary" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white">
                    查看详情
                  </Button>
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