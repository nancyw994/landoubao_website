import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Mall from "@/pages/mall";
import Contact from "@/pages/contact";
import Consumer from "@/pages/consumer";
import Enterprise from "@/pages/enterprise";
import JoinUs from "@/pages/join-us";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Route path="/mall" component={Mall} />
      <Route path="/contact" component={Contact} />
      <Route path="/consumer" component={Consumer} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/join-us" component={JoinUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;