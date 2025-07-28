import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Lightbulb, Award, TrendingUp, Globe, Rocket, CheckCircle, Zap, Brain, Smile, GraduationCap } from "lucide-react";
console.log({ Zap, GraduationCap, Heart, Target });
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Zap,
      title: "快速创新",
      description: "以敏锐的技术洞察力紧跟时代前沿，通过快速迭代为孩子们持续带来最先进的AI体验"
    },
    {
      icon: GraduationCap,
      title: "教育赋能",
      description: "运用人工智能技术深度赋能传统教育，让学习过程变得更加智能化、个性化、趣味化"
    },
    {
      icon: Heart,
      title: "情感陪伴",
      description: "以温暖的科技传递真挚的关爱，专注孩子的情感需求与心理健康，提供有温度的智能陪伴"
    },
    {
      icon: Target,
      title: "关注成长",
      description: "始终专注于孩子的全面发展与个性培养，激发创造潜能而非单纯的应试能力提升"
    }
  ];

  const timeline = [
    {
      year: "2024年12月",
      title: "梦想启航",
      description: "蓝豆包团队正式成立，由一群热爱科技与教育的清北精英共同发起，致力于用AI点亮儿童成长之路。",
      achievements: [
        "团队正式组建，90%以上成员来自清华北大",
        "确立“以儿童为中心”的产品理念",
        "完成核心技术架构设计"
      ]
    },
    {
      year: "2025年1月",
      title: "初展锋芒",
      description: "首次参赛即入围杨浦区“创业之星”大赛决赛，展现出强大的创新实力与市场潜力。",
      achievements: [
        "进入杨浦区创业之星大赛决赛",
        "吸引行业导师关注",
        "进一步验证产品商业价值"
      ]
    },
    {
      year: "2025年4月",
      title: "技术登台",
      description: "受邀参加北京亦庄开发区AI智能成果展，首次公开展示AI教育陪伴技术，获得观众与专家一致好评。",
      achievements: [
        "亮相AI智能成果展",
        "获得现场媒体广泛报道",
        "拓展政企合作资源"
      ]
    },
    {
      year: "2025年6月",
      title: "正式上市",
      description: "蓝豆包AI教育陪伴玩偶正式发布并进入市场，开创家庭AI陪伴与个性化教育融合新纪元。",
      achievements: [
        "蓝豆包正式上市销售",
        "直播预热",
        "用户好评率突破95%"
      ]
    }
  ];

  const stats = [
    { number: "90%", label: "清华北大顶尖人才", icon: Users },
    { number: "5年", label: "专注AI教育领域", icon: Target },
    { number: "5个国家", label: "1000+ 家庭", icon: Globe },
    { number: "企业级", label: "AI技术解决方案", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-gray-warm text-sm">
      <Header />

      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-yellow-400 mb-10">关于蓝豆包</h1>
            <p className="text-xl text-white leading-relaxed mb-16 px-4">
              蓝豆包成立于2024年，由90%清华北大顶尖人才组成的专业团队创立。我们既是在人工智能领域深耕多年的技术专家，更是对儿童教育怀有深度思考的教育实践者。致力于用前沿科技重新定义儿童学习体验，用温暖陪伴守护每一个纯真童年。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                  <stat.icon className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid space-y-fluid-3xl">

          {/* Our Story + photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-2xl items-start">
            <div>
              <h2 className="text-fluid-2xl font-bold text-primary mb-8 px-10">我们的故事</h2>
              <div className="space-y-fluid-base text-secondary text-fluid-base leading-relaxed px-10">
                <p>蓝豆包AI两位创始人均为清华校友，他们不仅拥有扎实的学术功底和丰富的行业经验，更重要的是，他们同时承担着父母的角色: 一位是两个孩子的父亲，一位是三个孩子的母亲。正是这种技术专家与教育实践者的双重身份，让他们对当代儿童教育有着更为深刻的洞察与使命担当。</p>
                <p>我们深信，人工智能技术不应仅局限于成人世界，更应当为儿童的成长和学习带来根本性的变革。基于这一理念，我们汇聚了一支由90%清华北大毕业生组成的顶尖专业团队，他们在人工智能、儿童心理学、产品设计等前沿领域拥有深厚的学术底蕴和丰富的实战经验。</p>
                <p>在陪伴孩子成长的过程中，创始人们敏锐地观察到现代教育体系的深层挑战。过度竞争的内卷化教育模式，正在无形中侵蚀着孩子们最宝贵的财富: 天真烂漫的童年时光和与生俱来的创造天赋。面对这样的困境，我们确立了以儿童真实需求为核心的产品哲学，致力于将最前沿的AI技术与寓教于乐的设计理念完美融合，打造出安全可靠又充满创意想象的智能教育产品。</p>
                <p>与此同时，我们还为众多企业客户提供专业的AI技术解决方案，持续推动整个儿童教育科技行业的创新发展。</p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-20 mb-15">
              <img
                src="/public/logo.jpg"
                alt="创始人故事图片"
                className="rounded-2xl shadow-md w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="text-center max-w-8xl mx-auto mt-fluid-3xl">
            <div className="bg-gradient-to-r from-blue-primary to-purple-600 rounded-2xl p-fluid-lg text-white">
              <div className="flex items-center gap-fluid-md justify-center flex-wrap mb-10">
              <div className="bg-black backdrop-blur-md px-8 py-10 shadow-md w-full mb-10">
                <h4 className="text-fluid-xl font-bold mb-6 text-yellow-500">
                  让每一个孩子更聪明、更健康、更快乐
                </h4>
                <div className="mt-4"></div>
                <p className="text-fluid-xl text-yellow-500">
                  以科技之力点亮智慧，用温情陪伴守护成长，让每个童年都闪耀着独特的光芒
                </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-fluid-3xl bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-10">发展历程</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto mb-10">
              见证蓝豆包五年来从创想萌芽到行业领军的精彩蜕变历程
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black hidden lg:block"></div>

              <div className="space-y-fluid-xl">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-fluid-lg`}
                  >
                    {/* Timeline content */}
                    <div className="lg:w-1/2 w-full">
                      <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
                        <CardContent className="p-fluid-lg">
                          <div className="flex items-center gap-fluid-sm mb-fluid-md">
                            <div className="bg-yellow-500 text-black px-fluid-md mb-2 py-fluid-xs rounded-xl text-fluid-xs font-bold">
                              {event.year}
                            </div>
                            <h3 className="text-fluid-lg mb-2 font-semibold text-primary">{event.title}</h3>
                          </div>
                          <p className="text-secondary mb-fluid-md text-fluid-sm mb-3">
                            {event.description}
                          </p>
                          <div className="space-y-fluid-xs">
                            {event.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-fluid-xs mb-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-fluid-xs text-secondary">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="lg:w-6 lg:h-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

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
            <h2 className="text-fluid-3xl font-bold text-primary mb-10">我们的价值观</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto">引领我们前行的核心信念与行为准则</p>
          </div>

          <div className="grid-fluid-4 gap-fluid-xl">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center space-y-fluid-md group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-primary to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-fluid-lg font-semibold text-primary">{value.title}</h3>
                <p className="text-secondary text-fluid-base leading-relaxed">{value.description}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-fluid-3xl bg-gradient-to-br from-blue-primary to-purple-600">
        <div className="container-fluid">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-16 text-black">我们的愿景</h2>
            <p className="text-xl text-blue-100 leading-relaxed text-secondary mb-fluid-xl mb-10">
              致力于成为全球领先的AI教育陪伴品牌，以人工智能技术为核心驱动力，为每一个孩子创造更加智慧、健康、快乐的成长环境。我们深信，通过科技与教育的深度融合，能够为下一代开启更加光明、充满无限可能的未来篇章。
            </p>
            <div className="flex-responsive justify-center">
              <Link href="/products">
              <Button className="text-[20px] bg-black text-yellow-500 hover:bg-yellow-400 hover:text-black rounded-none ">
                  了解产品
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-[20px] bg-black text-yellow-500 hover:bg-yellow-400 hover:text-black rounded-none "
                >
                  联系我们
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}