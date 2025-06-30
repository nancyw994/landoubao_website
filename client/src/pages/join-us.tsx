// This file should be saved as: client/src/pages/join-us.tsx

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  Heart,
  Star,
  Coffee,
  GraduationCap,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Search,
  Filter
} from "lucide-react";
import { useState } from "react";

export default function JoinUs() {
  const [selectedDepartment, setSelectedDepartment] = useState("全部");
  const [searchTerm, setSearchTerm] = useState("");

  const benefits = [
    {
      icon: Heart,
      title: "五险一金",
      description: "完善的社会保险和住房公积金"
    },
    {
      icon: Coffee,
      title: "弹性工作",
      description: "灵活的工作时间和远程办公"
    },
    {
      icon: GraduationCap,
      title: "学习成长",
      description: "丰富的培训机会和学习资源"
    },
    {
      icon: Star,
      title: "股权激励",
      description: "优秀员工享有股权激励计划"
    },
    {
      icon: Globe,
      title: "国际视野",
      description: "参与国际项目的机会"
    },
    {
      icon: Shield,
      title: "健康保障",
      description: "年度体检和健康管理服务"
    }
  ];

  const departments = ["全部", "算法研发", "产品设计", "硬件工程", "市场营销", "商务拓展", "运营管理"];

  const jobs = [
    {
      id: 1,
      title: "高级AI算法工程师",
      department: "算法研发",
      location: "深圳",
      type: "全职",
      experience: "3-5年",
      salary: "25-40K",
      description: "负责AI算法的研发和优化，包括语音识别、计算机视觉、自然语言处理等核心技术。",
      requirements: [
        "计算机科学、人工智能相关专业硕士及以上学历",
        "3年以上AI算法开发经验",
        "熟练掌握Python、TensorFlow、PyTorch等",
        "有深度学习项目经验",
        "良好的数学基础和算法思维"
      ],
      responsibilities: [
        "设计和实现先进的AI算法",
        "优化模型性能和推理速度",
        "与产品团队合作，将算法应用到实际产品中",
        "跟踪最新的AI技术发展趋势",
        "指导初级工程师的技术成长"
      ],
      tags: ["Python", "深度学习", "计算机视觉", "NLP"],
      urgent: true
    },
    {
      id: 2,
      title: "资深产品经理",
      department: "产品设计",
      location: "深圳",
      type: "全职",
      experience: "5-8年",
      salary: "30-50K",
      description: "负责AI玩具产品的规划、设计和管理，确保产品符合用户需求和市场趋势。",
      requirements: [
        "5年以上产品管理经验，有AI或智能硬件产品经验优先",
        "深度理解用户需求和市场趋势",
        "优秀的沟通协调和项目管理能力",
        "具备数据分析和用户研究能力",
        "对儿童教育和AI技术有深入了解"
      ],
      responsibilities: [
        "制定产品发展战略和路线图",
        "深入了解用户需求，设计产品功能",
        "协调研发、设计、运营等团队",
        "跟踪产品数据，持续优化产品体验",
        "参与市场调研和竞品分析"
      ],
      tags: ["产品规划", "用户研究", "项目管理", "数据分析"],
      urgent: false
    },
    {
      id: 3,
      title: "嵌入式软件工程师",
      department: "硬件工程",
      location: "深圳",
      type: "全职",
      experience: "2-4年",
      salary: "20-30K",
      description: "负责智能玩具的嵌入式软件开发，包括系统底层、驱动程序和应用软件。",
      requirements: [
        "电子工程、计算机相关专业本科及以上学历",
        "2年以上嵌入式开发经验",
        "熟练掌握C/C++编程语言",
        "熟悉ARM架构和RTOS系统",
        "有硬件调试和优化经验"
      ],
      responsibilities: [
        "开发嵌入式系统软件",
        "编写设备驱动程序",
        "优化系统性能和功耗",
        "与硬件团队协作进行系统集成",
        "解决产品中的技术问题"
      ],
      tags: ["C/C++", "嵌入式", "RTOS", "ARM"],
      urgent: false
    },
    {
      id: 4,
      title: "UI/UX设计师",
      department: "产品设计",
      location: "深圳",
      type: "全职",
      experience: "2-4年",
      salary: "15-25K",
      description: "负责AI玩具APP和交互界面的设计，创造优秀的用户体验。",
      requirements: [
        "设计相关专业本科及以上学历",
        "2年以上UI/UX设计经验",
        "熟练使用Figma、Sketch、Adobe系列等设计工具",
        "有移动APP设计经验",
        "了解儿童产品设计特点"
      ],
      responsibilities: [
        "设计产品的用户界面和交互流程",
        "制作设计原型和视觉规范",
        "与产品和开发团队协作",
        "进行用户测试和体验优化",
        "维护设计系统的一致性"
      ],
      tags: ["UI设计", "UX设计", "Figma", "原型设计"],
      urgent: false
    },
    {
      id: 5,
      title: "市场营销专员",
      department: "市场营销",
      location: "深圳",
      type: "全职",
      experience: "1-3年",
      salary: "12-20K",
      description: "负责品牌推广、内容营销和用户增长，提升品牌知名度和市场份额。",
      requirements: [
        "市场营销、广告学相关专业本科及以上学历",
        "1年以上数字营销经验",
        "熟悉社交媒体运营和内容创作",
        "有数据分析能力",
        "对AI和教育行业有一定了解"
      ],
      responsibilities: [
        "制定和执行营销策略",
        "管理社交媒体账号和内容运营",
        "策划线上线下营销活动",
        "分析市场数据和用户反馈",
        "与KOL和媒体建立合作关系"
      ],
      tags: ["数字营销", "内容运营", "社交媒体", "数据分析"],
      urgent: false
    },
    {
      id: 6,
      title: "商务拓展经理",
      department: "商务拓展",
      location: "深圳",
      type: "全职",
      experience: "3-5年",
      salary: "20-35K",
      description: "负责企业客户的商务合作，拓展技术授权和联合研发业务。",
      requirements: [
        "商务、市场营销相关专业本科及以上学历",
        "3年以上B2B销售或商务拓展经验",
        "优秀的沟通谈判和客户管理能力",
        "有技术背景或对AI技术有深入了解",
        "具备良好的英语沟通能力"
      ],
      responsibilities: [
        "开发和维护企业客户关系",
        "洽谈技术授权和合作协议",
        "制定商务拓展策略",
        "参与重要客户的项目推进",
        "完成销售目标和业绩指标"
      ],
      tags: ["B2B销售", "商务拓展", "客户管理", "谈判"],
      urgent: true
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === "全部" || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-blue-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 py-fluid-3xl">
        <div className="container-fluid">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-fluid-5xl font-bold mb-fluid-lg">加入蓝豆包</h1>
            <p className="text-fluid-xl text-blue-100 leading-relaxed mb-fluid-xl">
              与我们一起创造AI玩具的未来，让科技更好地服务于儿童教育和成长
            </p>

            <div className="grid-fluid-3 gap-fluid-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-lg">
                <Users className="h-8 w-8 mx-auto mb-fluid-sm" />
                <div className="text-fluid-2xl font-bold">200+</div>
                <div className="text-blue-100 text-fluid-sm">团队成员</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-lg">
                <TrendingUp className="h-8 w-8 mx-auto mb-fluid-sm" />
                <div className="text-fluid-2xl font-bold">500%</div>
                <div className="text-blue-100 text-fluid-sm">年增长率</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-lg">
                <Award className="h-8 w-8 mx-auto mb-fluid-sm" />
                <div className="text-fluid-2xl font-bold">10+</div>
                <div className="text-blue-100 text-fluid-sm">行业奖项</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">为什么选择我们</h2>
            <p className="text-fluid-xl text-secondary max-w-prose mx-auto">优厚的福利待遇和广阔的发展空间</p>
          </div>

          <div className="grid-fluid-3 gap-fluid-lg">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-responsive bg-gradient-to-br from-blue-soft to-white border-0">
                <CardContent className="text-center p-fluid-lg">
                  <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto mb-fluid-md">
                    <benefit.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-fluid-lg font-semibold text-primary mb-fluid-sm">{benefit.title}</h3>
                  <p className="text-secondary text-fluid-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-fluid-lg bg-slate-100">
        <div className="container-fluid">
          <div className="flex-responsive items-center gap-fluid-md">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索职位..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-slate-300"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-fluid-sm">
              <Filter className="text-slate-500 h-5 w-5" />
              <div className="flex gap-fluid-xs overflow-x-auto">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                    className={`rounded-full whitespace-nowrap text-fluid-sm ${
                      selectedDepartment === dept
                        ? "bg-blue-primary text-white hover:bg-blue-deep"
                        : "border-slate-300 text-slate-600 hover:border-blue-primary hover:text-blue-primary"
                    }`}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-fluid-3xl bg-white">
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">职位机会</h2>
            <p className="text-fluid-xl text-secondary">找到适合你的职业发展机会</p>
          </div>

          <div className="space-y-12">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Card key={job.id} className="card-responsive hover:shadow-xl transition-all border-l-4 border-blue-primary">
                  <CardContent className="p-fluid-xl">
                    <div className="grid lg:grid-cols-3 gap-fluid-lg">
                      {/* Job Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-fluid-md">
                          <div>
                            <div className="flex items-center gap-fluid-sm mb-fluid-xs">
                              <h3 className="text-fluid-2xl font-bold text-primary">{job.title}</h3>
                              {job.urgent && (
                                <Badge className="bg-orange-accent text-white">急招</Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-fluid-sm text-secondary text-fluid-base">
                              <div className="flex items-center gap-fluid-xs">
                                <Briefcase className="h-4 w-4" />
                                <span>{job.department}</span>
                              </div>
                              <div className="flex items-center gap-fluid-xs">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-fluid-xs">
                                <Clock className="h-4 w-4" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-fluid-2xl font-bold text-blue-primary">{job.salary}</div>
                            <div className="text-secondary text-fluid-sm">{job.experience}经验</div>
                          </div>
                        </div>

                        <p className="text-secondary mb-fluid-md text-fluid-base leading-relaxed">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-fluid-xs mb-fluid-md">
                          {job.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-blue-primary border-blue-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex flex-col justify-center">
                        <Button className="bg-blue-primary text-white hover:bg-blue-deep btn-responsive mb-fluid-sm">
                          立即申请
                        </Button>
                        <Button variant="outline" className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white btn-responsive">
                          查看详情
                        </Button>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="mt-fluid-lg pt-fluid-lg border-t border-slate-200">
                      <div className="grid md:grid-cols-2 gap-fluid-lg">
                        <div>
                          <h4 className="text-fluid-lg font-semibold text-primary mb-fluid-sm">岗位职责</h4>
                          <ul className="space-y-fluid-xs">
                            {job.responsibilities.map((responsibility, index) => (
                              <li key={index} className="flex items-start gap-fluid-xs">
                                <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-secondary text-fluid-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-fluid-lg font-semibold text-primary mb-fluid-sm">任职要求</h4>
                          <ul className="space-y-fluid-xs">
                            {job.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start gap-fluid-xs">
                                <div className="w-2 h-2 bg-orange-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-secondary text-fluid-sm">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-fluid-2xl">
                <p className="text-slate-500 text-fluid-lg">没有找到符合条件的职位</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-fluid-3xl bg-gradient-to-br from-slate-100 to-blue-soft">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <Card className="card-responsive">
              <CardContent className="p-fluid-2xl">
                <div className="text-center mb-fluid-xl">
                  <h2 className="text-fluid-3xl font-bold text-primary mb-fluid-md">在线申请</h2>
                  <p className="text-fluid-lg text-secondary">没有找到合适的职位？发送简历给我们，我们会主动联系您</p>
                </div>

                <form className="space-y-fluid-lg">
                  <div className="grid md:grid-cols-2 gap-fluid-lg">
                    <div>
                      <label className="block text-fluid-base font-medium text-primary mb-fluid-sm">姓名 *</label>
                      <Input placeholder="请输入您的姓名" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-fluid-base font-medium text-primary mb-fluid-sm">电话 *</label>
                      <Input placeholder="请输入您的电话" className="rounded-lg" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-fluid-base font-medium text-primary mb-fluid-sm">邮箱 *</label>
                    <Input type="email" placeholder="请输入您的邮箱" className="rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-fluid-base font-medium text-primary mb-fluid-sm">期望职位</label>
                    <Input placeholder="请输入您期望的职位" className="rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-fluid-base font-medium text-primary mb-fluid-sm">自我介绍 *</label>
                    <Textarea
                      placeholder="请简单介绍您的经历和优势..."
                      rows={6}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button className="bg-blue-primary text-white hover:bg-blue-deep btn-responsive">
                      <Zap className="mr-2 h-5 w-5" />
                      提交申请
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-fluid-2xl bg-gradient-to-br from-blue-primary to-blue-deep">
        <div className="container-fluid">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h3 className="text-fluid-2xl font-bold mb-fluid-md">联系我们</h3>
            <p className="text-blue-100 mb-fluid-lg text-fluid-base">
              如果您对职位有任何问题，欢迎随时联系我们的人力资源团队
            </p>
            <div className="flex-responsive justify-center">
              <div className="flex items-center gap-fluid-sm">
                <MapPin className="h-5 w-5" />
                <span className="text-fluid-base">深圳市南山区科技园</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <span className="text-fluid-base">hr@landoubao.com</span>
              </div>
              <div className="flex items-center gap-fluid-sm">
                <span className="text-fluid-base">0755-8888-0123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}