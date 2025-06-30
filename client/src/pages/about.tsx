import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Lightbulb, Award, TrendingUp, Globe, Rocket, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "创新驱动",
      description: "持续探索AI技术的无限可能，为用户带来前所未有的体验"
    },
    {
      icon: Users,
      title: "用户至上",
      description: "以用户需求为中心，打造真正有价值的产品和服务"
    },
    {
      icon: Target,
      title: "品质追求",
      description: "严格的质量标准，确保每一款产品都达到最高品质"
    },
    {
      icon: Heart,
      title: "社会责任",
      description: "关注儿童成长，促进教育公平，承担企业社会责任"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "公司成立",
      description: "蓝豆包科技在深圳成立，专注AI玩具研发",
      achievements: ["获得天使轮投资", "组建核心团队", "确定发展方向"]
    },
    {
      year: "2021",
      title: "技术突破",
      description: "自主研发AI语音交互和计算机视觉技术",
      achievements: ["申请20项技术专利", "发布首款原型产品", "建立研发实验室"]
    },
    {
      year: "2022",
      title: "产品上市",
      description: "首款智能陪伴机器人正式发布并获得市场认可",
      achievements: ["销售突破10万台", "获得A轮融资", "建立生产基地"]
    },
    {
      year: "2023",
      title: "业务扩展",
      description: "拓展企业服务业务，为多家企业提供AI技术解决方案",
      achievements: ["服务100+企业客户", "获得行业最佳创新奖", "团队扩展至200人"]
    },
    {
      year: "2024",
      title: "国际化发展",
      description: "产品出口海外市场，建立国际合作伙伴关系",
      achievements: ["进入20个国家市场", "获得B轮融资", "建立海外研发中心"]
    }
  ];

  const stats = [
    { number: "500万+", label: "全球用户", icon: Users },
    { number: "50+", label: "AI产品", icon: Rocket },
    { number: "200+", label: "企业伙伴", icon: Globe },
    { number: "98%", label: "用户满意度", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-warm">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-soft to-white py-fluid-3xl">
        <div className="container-fluid">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-fluid-5xl font-bold text-primary mb-fluid-lg">关于蓝豆包</h1>
            <p className="text-fluid-xl text-secondary leading-relaxed mb-fluid-xl">
              我们是一家专注于AI智能玩具研发的创新科技公司，致力于通过先进的人工智能技术，为全世界的孩子们创造更智能、更有趣、更有教育意义的玩具体验。
            </p>

            {/* Stats Grid */}
            <div className="grid-fluid-4 gap-fluid-lg">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 rounded-2xl p-fluid-lg shadow-sm">
                  <stat.icon className="h-8 w-8 text-blue-primary mx-auto mb-fluid-sm" />
                  <div className="text-fluid-3xl font-bold text-blue-primary mb-fluid-xs">{stat.number}</div>
                  <div className="text-fluid-sm font-medium text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="grid-fluid-2 items-center gap-fluid-2xl">
            <div>
              <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-lg">我们的故事</h2>
              <div className="space-y-fluid-md text-secondary text-fluid-base leading-relaxed">
                <p>
                  蓝豆包成立于2020年，由一群热爱科技和教育的工程师、设计师和教育专家共同创立。我们相信，人工智能不仅能够改变成人世界，更能为儿童的成长和学习带来革命性的变化。
                </p>
                <p>
                  我们的团队由90%清华北大毕业的顶尖人才组成，他们在人工智能、儿童心理学、产品设计等领域拥有深厚的专业背景和丰富的实践经验。
                </p>
                <p>
                  从第一款智能陪伴机器人开始，我们就坚持以儿童的需求为中心，将最前沿的AI技术与寓教于乐的设计理念相结合，打造出既安全又充满创意的智能玩具产品。
                </p>
                <p>
                  今天，我们的产品已经走进了全球数百万个家庭，同时我们也为众多企业客户提供专业的AI技术解决方案，推动整个行业的创新发展。
                </p>
              </div>

              <div className="mt-fluid-xl">
                <h3 className="text-fluid-xl font-semibold text-primary mb-fluid-md">我们的使命</h3>
                <p className="text-secondary text-fluid-base leading-relaxed">
                  通过人工智能技术，创造能够陪伴、教育和启发孩子们的智能产品，让每个孩子都能在快乐中学习，在游戏中成长，为他们的未来奠定坚实的基础。
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="img-responsive rounded-2xl shadow-xl aspect-4-3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-fluid-3xl bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">发展历程</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto">见证蓝豆包的成长轨迹</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-primary hidden lg:block"></div>

              <div className="space-y-fluid-xl">
                {timeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-fluid-lg`}>
                    {/* Timeline content */}
                    <div className="lg:w-1/2 w-full">
                      <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
                        <CardContent className="p-fluid-lg">
                          <div className="flex items-center gap-fluid-sm mb-fluid-md">
                            <div className="bg-blue-primary text-white px-fluid-md py-fluid-xs rounded-full text-fluid-sm font-bold">
                              {event.year}
                            </div>
                            <h3 className="text-fluid-xl font-semibold text-primary">{event.title}</h3>
                          </div>
                          <p className="text-secondary mb-fluid-md text-fluid-base">
                            {event.description}
                          </p>
                          <div className="space-y-fluid-xs">
                            {event.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-fluid-xs">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-fluid-sm text-secondary">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="lg:w-6 lg:h-6 w-4 h-4 bg-blue-primary rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                    {/* Empty space for alternating layout */}
                    <div className="lg:w-1/2 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">我们的价值观</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto">指导我们前行的核心理念</p>
          </div>

          <div className="grid-fluid-4 gap-fluid-xl">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-fluid-md">
                <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-fluid-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-secondary text-fluid-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section



        
      {/* Awards & Recognition */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">荣誉与认可</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto">获得行业和社会的广泛认可</p>
          </div>

          <div className="grid-fluid-3 gap-fluid-lg">
            {[
              {
                award: "2024年度最佳AI创新奖",
                organization: "中国人工智能产业联盟",
                year: "2024"
              },
              {
                award: "全国优秀儿童教育产品奖",
                organization: "中国教育装备行业协会",
                year: "2023"
              },
              {
                award: "深圳市高新技术企业认定",
                organization: "深圳市科技创新委员会",
                year: "2022"
              }
            ].map((recognition, index) => (
              <Card key={index} className="bg-gradient-to-br from-orange-accent/10 to-orange-accent/5 border-l-4 border-orange-accent">
                <CardContent className="p-fluid-lg">
                  <Award className="h-8 w-8 text-orange-accent mb-fluid-sm" />
                  <h3 className="text-fluid-lg font-semibold text-primary mb-fluid-xs">{recognition.award}</h3>
                  <p className="text-secondary text-fluid-sm mb-fluid-xs">{recognition.organization}</p>
                  <p className="text-orange-accent font-medium text-fluid-sm">{recognition.year}</p>
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