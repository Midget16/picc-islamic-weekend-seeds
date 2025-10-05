import { Card, CardContent } from "@/components/ui/card";

const values = [
  { title: "Faith", description: "Building a strong foundation in Islamic beliefs and practices" },
  { title: "Knowledge", description: "Pursuing Islamic and worldly education with excellence" },
  { title: "Community", description: "Fostering bonds of brotherhood and sisterhood" },
  { title: "Identity", description: "Embracing our Muslim identity with pride and confidence" },
];

export const CoreValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-card to-accent/5"
            >
              <CardContent className="p-8 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
