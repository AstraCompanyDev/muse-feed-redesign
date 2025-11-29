import { useState } from "react";
import { MapPin, Link2, Mail, Edit, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const Profile = () => {
  const skills = [
    { name: "Crypto", icon: "💰" },
    { name: "Corporate Strategy", icon: "🎯" },
    { name: "Engineering", icon: "⚙️" },
    { name: "Analysis", icon: "📊" },
    { name: "Communities", icon: "👥" },
    { name: "Finance", icon: "💵" },
    { name: "Fundraising", icon: "💼" },
    { name: "Graphics Design", icon: "🎨" },
    { name: "Human Resources", icon: "🔍" },
    { name: "Leadership", icon: "📈" },
    { name: "Management", icon: "📋" },
    { name: "Marketing / Communications", icon: "📢" },
    { name: "NFT", icon: "🖼️" },
    { name: "Operations", icon: "⚡" },
    { name: "Technical", icon: "💻" },
    { name: "web3", icon: "🌐" },
    { name: "Team Building", icon: "🤝" },
    { name: "Product Management", icon: "📦" },
    { name: "Business Planning / Processes", icon: "📝" },
    { name: "Project Management", icon: "🎯" },
  ];

  const interests = [
    { name: "Education", icon: "🎓" },
    { name: "Networking", icon: "🔗" },
    { name: "Mentorship", icon: "👨‍🏫" },
    { name: "Investment", icon: "💎" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex-1 space-y-6">
            {/* Profile Header Card */}
            <Card className="border-border bg-card overflow-hidden">
              {/* Cover Photo with Gradient Overlay */}
              <div className="relative h-48 bg-gradient-to-br from-primary via-primary/80 to-secondary overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 text-6xl opacity-50">💡</div>
                  <div className="absolute top-20 right-20 text-5xl opacity-40">🚀</div>
                  <div className="absolute bottom-10 left-1/3 text-4xl opacity-35">💼</div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border-border hover:bg-background"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <CardContent className="pt-0 pb-6 px-6">
                <div className="flex flex-col md:flex-row gap-6 -mt-16">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar className="h-32 w-32 border-4 border-card shadow-lg">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sagar" />
                      <AvatarFallback className="text-3xl bg-primary text-primary-foreground">SD</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 mt-16 md:mt-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h1 className="text-3xl font-bold text-foreground">Sagar Dey</h1>
                          <Badge className="bg-primary/10 text-primary border-primary/20">✓ Verified</Badge>
                        </div>
                        <p className="text-lg text-muted-foreground mb-2">
                          Technical Director At CoFoundersLab(ASTRA)
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Sylhet, Bangladesh</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-2 border-border hover:bg-card-highlight">
                          <MessageSquare className="h-4 w-4" />
                          Message
                        </Button>
                        <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link2 className="h-4 w-4" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground">About</h2>
                  <Button size="sm" variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>

                <div className="prose prose-sm max-w-none text-foreground space-y-4">
                  <p>
                    As the <strong>Founder & CEO of HypoMatrix</strong>, I specialize in crafting cutting-edge web and software solutions 
                    that empower businesses to thrive in the digital age. With a deep understanding of both technology and business dynamics, 
                    my mission is to bridge the gap between innovation and real-world impact.
                  </p>

                  <p>
                    In addition to leading HypoMatrix, I am a <strong>Technical Director at CFL</strong>, where I drive scalable solutions 
                    and optimize core business processes.
                  </p>

                  <p>
                    On Upwork, I hold the <strong>Top Rated Plus Software Developer</strong> badge, recognized for consistently delivering 
                    excellence to a global clientele.
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold mb-2">💡 What I Bring to the Table:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Expertise in developing tailored web and software solutions.</li>
                      <li>A results-driven approach to streamline operations and enhance ROI.</li>
                      <li>A collaborative mindset that works for companies with CTOs, founders, and decision-makers.</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold mb-2">📈 Beyond the Code:</h3>
                    <p className="text-muted-foreground">
                      I create engaging content on YouTube, sharing insights about technology, entrepreneurship, and personal growth 
                      to inspire and educate my audience.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold mb-2">🤝 Let's Connect:</h3>
                    <p className="text-muted-foreground">
                      Whether you're looking to enhance your digital presence, streamline your business with technology, or collaborate 
                      on a visionary project, I'd love to hear from you. Together, we can turn ideas into impactful realities.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-muted-foreground">
                      🚀 <strong>Reach out today to explore how I can add value to your business journey!</strong>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <Link2 className="h-4 w-4" />
                      HypoMatrix Website
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="h-4 w-4" />
                      sagardey9898@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Interests Section */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Skills & Interests</h2>
                  <Button size="sm" variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="group flex flex-col items-center justify-center p-4 rounded-lg border-2 border-border bg-background hover:border-primary/40 hover:bg-card-highlight transition-all cursor-pointer"
                        >
                          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</span>
                          <span className="text-xs text-center text-foreground font-medium leading-tight">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Interests</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {interests.map((interest, index) => (
                        <div
                          key={index}
                          className="group flex flex-col items-center justify-center p-4 rounded-lg border-2 border-border bg-background hover:border-primary/40 hover:bg-card-highlight transition-all cursor-pointer"
                        >
                          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{interest.icon}</span>
                          <span className="text-xs text-center text-foreground font-medium">{interest.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          <div className="hidden xl:block">
            <PromotionalSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
