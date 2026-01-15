import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";

const Contact = () => {

  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact" 
        description="Have questions? Want to share your story? Get in touch with The Dad Academy team."
        path="/contact"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? Want to share your story? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
                </CardHeader>
                <CardContent className="px-1 lg:px-8 pt-4 pb-0">
                  <div 
                    id="contact-form-embed" 
                    style={{ 
                      margin: 0, 
                      padding: 0, 
                      lineHeight: 'normal',
                      minHeight: 0
                    }}
                  >
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/fvAJD1EqEiVnVa3B0zhl"
                      style={{ 
                        display: 'block',
                        width: '100%', 
                        height: '700px', 
                        border: 0, 
                        overflow: 'hidden',
                        margin: 0,
                        padding: 0
                      }}
                      id="inline-fvAJD1EqEiVnVa3B0zhl" 
                      scrolling="no"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Contact Form"
                      data-height="700"
                      data-layout-iframe-id="inline-fvAJD1EqEiVnVa3B0zhl"
                      data-form-id="fvAJD1EqEiVnVa3B0zhl"
                      title="Contact Form"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-8">Connect With Us</h2>
                <div className="space-y-6">
                  <Card className="shadow-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Location</h3>
                          <p className="text-muted-foreground">Butte, Montana</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href="mailto:hello@thedadacademy.co"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            hello@thedadacademy.co
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Community</h3>
                          <p className="text-muted-foreground mb-2">
                            Join our community for instant support
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
                              Join Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
