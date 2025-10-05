import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Languages, Users } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Quranic Reading",
    description: "Learning to read with accuracy & love",
  },
  {
    icon: Heart,
    title: "Islamic Studies",
    description: "Discovering core beliefs, fiqh, seerah, akhlaq, and the beauty of our deen",
  },
  {
    icon: Users,
    title: "Al-Muhimmät",
    description: "Essential Islamic values for character building",
  },
  {
    icon: Languages,
    title: "Arabic Language",
    description: "Building skills in reading and writing Arabic",
  },
];

export const Programs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Islamic education tailored for young learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <program.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {program.title}
                </h3>
                <p className="text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8" />
                <h3 className="font-serif text-2xl font-semibold">Recreation</h3>
              </div>
              <p className="text-lg">
                Promoting teamwork, confidence, and positive friendships through engaging activities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
