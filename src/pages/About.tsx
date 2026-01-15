import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";
import SEO from "@/components/SEO";
import xanderWithBaby from "@/assets/xander-with-baby.jpg";
import xanderFamily from "@/assets/xander-family.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "We believe in real conversations between real dads. No judgment, just support.",
    },
    {
      icon: Target,
      title: "Practical Guidance",
      description: "Our courses and advice focus on what actually works in real life.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Together we're stronger. Your success is our success.",
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="About" 
        description="Learn about The Dad Academy's mission to empower new fathers with confidence, community, and practical guidance."
        path="/about"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Dad Academy was born from a simple truth: every new father deserves support, 
              guidance, and a community that understands what he's going through.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Meet the Founder</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From first-time dad to fatherhood mentor — learn why Xander Lattin created The Dad Academy
              </p>
            </div>
            <Card className="shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Text Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey to Fatherhood</h3>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                      <p>
                        I come from a big family of six siblings, four of them younger than me. Two of them were a lot younger, so I got an early crash course in diapers, bottles, and toddler meltdowns. I still remember being a sophomore in high school when I found out my mom was pregnant again. Honestly, I was slightly embarrassed at first. But looking back, I realize how valuable that experience was. Helping raise my younger siblings gave me a hands-on preview of fatherhood, and I'm genuinely grateful for it.
                      </p>
                      <p>
                        Still, when I became a dad myself, it was a completely different story. This time, I was in the trenches instead of on the sidelines. The moment my wife and I walked out of the hospital with a brand new human in our arms, it hit me hard. I have to keep this tiny person alive.
                      </p>
                      <p>
                        Even with all that experience, the weight of responsibility was overwhelming. And I couldn't help but wonder what it would be like for dads who have never even held a newborn. They must feel like a deer in headlights.
                      </p>
                      <p>
                        That's why I created The Dad Academy. To help new and even experienced dads feel a little less terrified, a little more prepared, and a lot more supported. Whether you are expecting your first baby or holding your 4th newborn child for the first time, this is a place to learn, ask questions, and grow into the kind of father you want to be.
                      </p>
                      <p>
                        We are building a real community of men who show up. Not perfectly, but with purpose.
                      </p>
                      <p className="font-semibold text-foreground text-xl pt-6">
                        Welcome to The Dad Academy
                      </p>
                      <p className="font-semibold text-foreground text-xl pt-2">
                        -Xander, (Recovering First Time Dad)
                      </p>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                    <img 
                      src={xanderWithBaby} 
                      alt="Xander Lattin with his baby daughter" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Family Photo */}
            <div className="mt-12">
              <Card className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={xanderFamily} 
                    alt="Xander Lattin with his wife and baby daughter" 
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real dads. Real talk. That's what we're all about.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-base text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-12">Growing Together</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Weekly Posts</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Courses</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
