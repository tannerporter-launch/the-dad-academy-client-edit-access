import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Calendar, UserCheck, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const Community = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const features = [
    {
      icon: MessageSquare,
      title: "Daily Discussions",
      description: "Join conversations with other dads about everything from sleep training to career changes.",
    },
    {
      icon: Calendar,
      title: "Weekly Live Sessions",
      description: "Participate in live Q&A sessions with experienced fathers and parenting experts.",
    },
    {
      icon: UserCheck,
      title: "Accountability Groups",
      description: "Connect with a small group of dads for ongoing support and friendship.",
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: "Newsletter Subscriber",
            email: email,
            message: "Newsletter signup from Community page",
          },
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our weekly newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Community" 
        description="Connect with hundreds of dads navigating the same journey. Share experiences, get advice, and build lasting friendships."
        path="/community"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Join the Community</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Connect with hundreds of dads navigating the same journey. Share experiences, 
              get advice, and build lasting friendships.
            </p>
            <Button asChild size="lg" className="gradient-cta text-white border-0 hover:opacity-90 transition-base text-lg px-8">
              <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
                Access Community Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">What's Inside</h2>
              <p className="text-lg text-muted-foreground">
                Active discussions, expert guidance, and genuine friendships
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-base">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Dads Are Saying</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Finding The Dad Academy was a game-changer. I finally felt like I had a 
                    support system that understood what I was going through."
                  </p>
                  <p className="font-semibold">— Mike, Dad of twins</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">
                    "The weekly emails and community discussions have helped me become more 
                    confident in my role as a father. This is the real deal."
                  </p>
                  <p className="font-semibold">— Jason, First-time dad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Not Ready to Join Yet?</CardTitle>
                <CardDescription className="text-base">
                  Get our weekly newsletter with practical tips, inspiring stories, and community highlights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
