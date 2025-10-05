export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 space-y-8">
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed text-center">
              We believe in raising confident Muslim youth who love Allah جل جلاله and live with purpose!
            </p>

            <div className="border-l-4 border-primary pl-6 py-4">
              <p className="text-lg text-card-foreground leading-relaxed italic">
                PICC Islamic Weekend School provides a nurturing space for young Muslims to grow in faith, knowledge, and character. Our program offers Qur'anic reading, Arabic, Islamic studies, and key life lessons (Muhimmat), paired with fun activities that build confidence, friendships, and a love for Islam.
              </p>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 mt-8">
              <h3 className="font-serif text-2xl font-semibold text-accent-foreground mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-lg text-accent-foreground text-center italic">
                "To inspire, educate, and empower the next generation of Muslims through knowledge, faith, and community."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
