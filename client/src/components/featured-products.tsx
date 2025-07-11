import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  if (error) {
    return (
      <section className="py-fluid-2xl bg-white border-t border-divider">
        <div className="container-fluid">
          <div className="text-center">
            <p className="text-red-500 text-fluid-lg">Failed to load products. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-fluid-2xl bg-white border-t border-divider">
      <div className="container-fluid">
        <div className="text-center mb-fluid-2xl">
          <h2 className="text-fluid-4xl font-bold text-primary mb-fluid-lg">热门AI玩具</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-fluid-md"></div>
          <p className="text-fluid-xl text-secondary max-w-prose mx-auto leading-relaxed">
            发现我们最受欢迎的智能玩具产品，每一款都融合了最新的人工智能技术，为孩子们带来前所未有的互动学习体验
          </p>
        </div>

        <div className="grid-fluid-4 gap-fluid-lg">
          {isLoading ? (
            // Loading skeletons with borders
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="overflow-hidden card-hover-border">
                <Skeleton className="w-full aspect-video" />
                <div className="border-t border-subtle">
                  <CardContent className="p-fluid-lg">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="element-divider">
                      <div className="flex justify-between items-center gap-fluid-sm">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-10 flex-1 max-w-24" />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : products && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group card-hover-border border-accent-top">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Product badge with border */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-fluid-sm py-fluid-xs bg-blue-primary text-white text-xs font-medium rounded border-2 border-white shadow-sm">
                      热销
                    </span>
                  </div>
                </div>

                <div className="border-t-2 border-blue-primary/10">
                  <CardContent className="p-fluid-lg">
                    <h3 className="font-semibold text-fluid-lg text-primary mb-fluid-sm group-hover:text-blue-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="border-l-4 border-blue-soft pl-fluid-sm mb-fluid-md">
                      <p className="text-secondary text-fluid-sm line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="element-divider">
                      <div className="flex justify-between items-center gap-fluid-sm">
                        <span className="text-fluid-2xl font-bold text-blue-primary">¥{product.price}</span>
                        <Button className="bg-blue-primary text-white hover:bg-blue-deep transition-colors rounded-full text-fluid-sm shadow-lg px-fluid-md py-fluid-sm border border-blue-primary">
                          立即购买
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-fluid-2xl border border-dashed border-divider rounded-lg">
              <p className="text-slate-500 text-fluid-lg">暂无产品信息</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}