import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";

export const Schedule = () => {
  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Registration & Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Join us for an enriching weekend learning experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-strong border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Start Date</h3>
                      <p className="text-muted-foreground">Sunday, September 14, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Schedule</h3>
                      <p className="text-muted-foreground">Every Sunday</p>
                      <p className="text-muted-foreground">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Fees</h3>
                      <p className="text-muted-foreground">Registration: $35 per student</p>
                      <p className="text-muted-foreground">Monthly Tuition: $40</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">1217 Todds Lane</p>
                      <p className="text-muted-foreground">Hampton, VA 23666</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="text-center space-y-4">
                  <Button size="lg" className="shadow-medium" asChild>
                    <a href="https://docs.google.com/forms/d/1MK6azN6AWDYKyiVeWXvXIphEg1gYL3kBs5jr3kKUgyg/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
                      Register Your Child Today
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    For children ages 5 and up
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-primary-foreground shadow-strong">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                We will help equip your child with essential life and Islamic values!
              </h3>
              <p className="text-lg opacity-90">
                The Quran is our guide, and Allah is our Lord
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
