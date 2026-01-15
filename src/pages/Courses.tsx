import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, BookOpen, Award } from "lucide-react";
import SEO from "@/components/SEO";

const Courses = () => {
  const courses = [
    {
      title: "First 30 Days",
      description: "Navigate the crucial first month of fatherhood with confidence. Sleep schedules, feeding basics, and emotional support.",
      duration: "2 weeks",
      lessons: "12 lessons",
      level: "Beginner",
    },
    {
      title: "Dad Communication Skills",
      description: "Learn how to communicate effectively with your partner during this transformative time. Strengthen your relationship.",
      duration: "3 weeks",
      lessons: "15 lessons",
      level: "All Levels",
    },
    {
      title: "Work-Life Balance as a New Dad",
      description: "Strategies for managing your career while being present for your growing family. Practical time management tips.",
      duration: "4 weeks",
      lessons: "18 lessons",
      level: "Intermediate",
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Courses" 
        description="Practical, actionable courses designed by experienced fathers to help you thrive in your fatherhood journey."
        path="/courses"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Dad Academy Courses</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Practical, actionable courses designed by experienced fathers to help you thrive 
              in your fatherhood journey.
            </p>
            <Button asChild size="lg" className="gradient-cta text-white border-0 hover:opacity-90 transition-base">
              <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
                View All Courses & Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">What You'll Get</h2>
              <p className="text-lg text-muted-foreground">
                Every course is packed with practical wisdom and real-world strategies
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expert Content</h3>
                  <p className="text-muted-foreground">
                    Learn from experienced dads and professionals
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
                  <p className="text-muted-foreground">
                    Access courses anytime, anywhere on your schedule
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Support</h3>
                  <p className="text-muted-foreground">
                    Connect with other dads taking the same courses
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground">
                Start with these popular courses designed for new dads
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-base flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.lessons}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join The Dad Academy community to access all courses, connect with other fathers, 
              and get the support you need.
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
    </div>
  );
};

export default Courses;
