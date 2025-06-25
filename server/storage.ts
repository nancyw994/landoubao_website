import { 
  products, testimonials, newsArticles,
  type Product, type InsertProduct,
  type Testimonial, type InsertTestimonial,
  type NewsArticle, type InsertNewsArticle,
  type User, type InsertUser
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // News Articles
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: number): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private newsArticles: Map<number, NewsArticle>;
  private currentUserId: number;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentNewsId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.testimonials = new Map();
    this.newsArticles = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentNewsId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed products
    const sampleProducts: InsertProduct[] = [
      {
        name: "智能陪伴机器人",
        description: "具有语音交互和情感识别的AI伙伴",
        price: "299.00",
        image: "https://pixabay.com/get/g70eea0c1074d6034e25022975b40d5b97f3c6b30a9d067d2397501544cc43e3a64939c3a0311137cdcf3c7796ab6036c8a87a34b717f5a7fdc1042447d62333b_1280.jpg",
        category: "陪伴机器人",
        features: ["语音交互", "情感识别", "学习能力", "安全材料"]
      },
      {
        name: "AI学习助手",
        description: "个性化教学的智能教育机器人",
        price: "599.00",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "教育机器人",
        features: ["个性化教学", "知识问答", "学习记录", "家长监控"]
      },
      {
        name: "互动智能宠物",
        description: "会学习和成长的虚拟AI宠物",
        price: "399.00",
        image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "智能宠物",
        features: ["虚拟宠物", "成长系统", "互动游戏", "情感陪伴"]
      },
      {
        name: "编程启蒙机器人",
        description: "让孩子轻松学习编程的AI导师",
        price: "799.00",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "编程教育",
        features: ["编程启蒙", "可视化编程", "项目实践", "创意发挥"]
      }
    ];

    sampleProducts.forEach(product => this.createProduct(product));

    // Seed testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "李女士",
        role: "8岁孩子家长",
        content: "我的孩子特别喜欢智能陪伴机器人，不仅能学到知识，还培养了良好的表达能力。产品质量很好，值得推荐！",
        rating: 5,
        avatar: "李"
      },
      {
        name: "王总",
        role: "玩具公司CEO",
        content: "蓝豆包的技术解决方案帮助我们公司快速进入了AI玩具市场，专业的技术支持让合作非常顺利。",
        rating: 5,
        avatar: "王"
      },
      {
        name: "张先生",
        role: "小学教师",
        content: "AI学习助手真的很棒！孩子现在更喜欢学习了，而且学习效率明显提高。感谢蓝豆包团队的用心设计。",
        rating: 5,
        avatar: "张"
      }
    ];

    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));

    // Seed news articles
    const sampleNews: InsertNewsArticle[] = [
      {
        title: "新一代AI陪伴机器人正式发布",
        excerpt: "蓝豆包最新推出的AI陪伴机器人具备更强的情感交互能力，为孩子们带来更加智能的陪伴体验...",
        content: "详细内容...",
        category: "产品发布",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        publishDate: new Date("2024-03-15")
      },
      {
        title: "AI玩具行业技术趋势分析",
        excerpt: "深度解析当前AI玩具行业的技术发展趋势，以及蓝豆包在技术创新方面的最新突破...",
        content: "详细内容...",
        category: "技术创新",
        image: "https://pixabay.com/get/gce5ded48bc4531312f5c0666380a79679bebf60b86eacd5eb116d6e9441706c96248b427057292a24198424e5cea4471b4a95dc0d912acdd6053acd71810d5a7_1280.jpg",
        publishDate: new Date("2024-03-10")
      },
      {
        title: "蓝豆包与知名教育机构达成战略合作",
        excerpt: "我们与多家知名教育机构建立战略合作关系，共同推进AI教育玩具在教学场景中的应用...",
        content: "详细内容...",
        category: "企业合作",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        publishDate: new Date("2024-03-05")
      }
    ];

    sampleNews.forEach(article => this.createNewsArticle(article));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // News methods
  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }

  async getNewsArticle(id: number): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }

  async createNewsArticle(insertNewsArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = this.currentNewsId++;
    const newsArticle: NewsArticle = { ...insertNewsArticle, id };
    this.newsArticles.set(id, newsArticle);
    return newsArticle;
  }
}

export const storage = new MemStorage();
