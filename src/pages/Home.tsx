import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dad-baby.jpg";
import SEO from "@/components/SEO";

const Home = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Learn from Real Dads",
      description: "Access practical courses built by fathers who've been through it all.",
    },
    {
      icon: MessageCircle,
      title: "Get Practical Tips",
      description: "Real advice for real situations - no fluff, just what works.",
    },
    {
      icon: Users,
      title: "Find Your Crew",
      description: "Connect with a supportive community of dads on the same journey.",
    },
  ];

  const steps = [
    { number: "01", title: "Sign Up", description: "Create your account in minutes" },
    { number: "02", title: "Join the Chat", description: "Connect with other dads" },
    { number: "03", title: "Start a Course", description: "Begin your learning journey" },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Community, courses, and support for your fatherhood journey. Join hundreds of dads learning and growing together."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Helping New Dads Find Their Footing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Community, courses, and support for your fatherhood journey.
            </p>
            <Button asChild size="lg" className="gradient-cta text-white border-0 hover:opacity-90 transition-base text-lg px-8">
              <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Real Dads. Real Talk.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community built for fathers, by fathers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-base border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Built by Dads, For Dads</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">From Our Founder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "Becoming a dad was the most amazing and overwhelming experience of my life. 
                    I created The Dad Academy because I wished I had a place like this when I started."
                  </p>
                  <p className="font-semibold">— Xander Lattin, Founder</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Join the Movement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Hundreds of dads are already finding their footing together. Weekly emails, 
                    live discussions, and courses that actually help.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
                      <div className="w-8 h-8 rounded-full bg-primary border-2 border-background" />
                      <div className="w-8 h-8 rounded-full bg-accent border-2 border-background" />
                    </div>
                    <span className="text-sm font-medium">300+ Active Members</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Get Started in 3 Simple Steps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey to confident fatherhood starts here
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Your Journey Starts Here</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join a community of fathers who support, learn, and grow together.
          </p>
          <Button asChild size="lg" className="gradient-cta text-white border-0 hover:opacity-90 transition-base text-lg px-8">
            <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
