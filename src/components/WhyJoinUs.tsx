import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Faith Foundation",
    description: "Build a loving relationship with Allah and Islam",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Expert teachers providing comprehensive Islamic knowledge",
  },
  {
    icon: Users,
    title: "Community Bonds",
    description: "Form lasting friendships with fellow young Muslims",
  },
  {
    icon: Sparkles,
    title: "Character Building",
    description: "Essential life and Islamic values for confident youth",
  },
];

export const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Join Us?
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto">
            At PICC Weekend Islamic School is where faith, knowledge, and friendships grow!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-accent/20 border-2 border-accent shadow-strong">
            <CardContent className="p-8 text-center">
              <p className="text-lg md:text-xl italic text-accent-foreground">
                "This school has given my child a deeper love for Islam and lifelong friends!"
              </p>
              <p className="text-sm text-muted-foreground mt-4">— Parent Testimonial</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
