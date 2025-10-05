import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { CoreValues } from "@/components/CoreValues";
import { WhyJoinUs } from "@/components/WhyJoinUs";
import { Schedule } from "@/components/Schedule";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <CoreValues />
      <WhyJoinUs />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Index;
