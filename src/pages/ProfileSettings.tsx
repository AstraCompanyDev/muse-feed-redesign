import { useState } from "react";
import { Camera, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const ProfileSettings = () => {
  const [selectedSkills, setSelectedSkills] = useState([
    "Business Planning",
    "Corporate Strategy",
    "Engineering",
    "Fundraising",
    "Finance",
    "Leadership",
    "Marketing / Communications",
    "Programming",
    "Operations",
    "Technical",
    "Team Building",
  ]);

  const [selectedInterests, setSelectedInterests] = useState([
    "Education",
    "Investment",
    "Networking",
    "Mentorship",
  ]);

  const availableSkills = [
    "Analysis", "Crypto", "Communities", "Graphics Design",
    "Human Resources", "Management", "NFT", "web3",
    "Product Management", "Business Planning / Processes",
    "Project Management"
  ];

  const availableInterests = ["Startup", "Innovation", "Technology"];

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const removeInterest = (interest: string) => {
    setSelectedInterests(selectedInterests.filter(i => i !== interest));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex-1">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted/50">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="account">Deactivate Account</TabsTrigger>
                    <TabsTrigger value="billing">Plan & Billing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile" className="space-y-6">
                    {/* Profile Picture Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Profile picture</h3>
                        <p className="text-sm text-muted-foreground">Share the best version of yourself</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xl">U</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" className="gap-2 border-border hover:bg-card-highlight">
                          <Camera className="h-4 w-4" />
                          Change
                        </Button>
                      </div>
                    </div>

                    {/* Profile Banner Section */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Profile Banner</h3>
                        <p className="text-sm text-muted-foreground">Choose banner for your profile</p>
                      </div>
                      <div className="h-32 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <Button variant="outline" size="sm" className="gap-2 border-border hover:bg-card-highlight">
                            Change
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Personal Information</h3>
                        <p className="text-sm text-muted-foreground">Tell us a few details about you</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" defaultValue="CoFoundersLab" className="bg-background border-border" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" defaultValue="Official" className="bg-background border-border" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pronouns">Pronouns</Label>
                        <Select defaultValue="none">
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border z-50">
                            <SelectItem value="none">Don't want to share</SelectItem>
                            <SelectItem value="he">He/Him</SelectItem>
                            <SelectItem value="she">She/Her</SelectItem>
                            <SelectItem value="they">They/Them</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input id="tagline" defaultValue="Start, Grow, Fund" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="cofounderslab@cofounderslab.com" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Los Angeles, CA, United States" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Url</Label>
                        <Input id="linkedin" placeholder="LinkedIn URL (e.g., https://linkedin.com/)" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="twitter">Twitter Url</Label>
                        <Input id="twitter" placeholder="Twitter URL (e.g., https://twitter.com/)" className="bg-background border-border" />
                      </div>

                      <div className="flex justify-end">
                        <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>

                    {/* Personal Summary */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Personal Summary</h3>
                        <p className="text-sm text-muted-foreground">This information is displayed on your public profile page</p>
                      </div>

                      <div className="space-y-2">
                        <Textarea
                          placeholder="Tell us about yourself..."
                          className="min-h-[200px] bg-background border-border resize-none"
                          defaultValue="The Official CoFoundersLab Profile&#10;&#10;Welcome to CoFoundersLab! We're excited to grow the world's largest community of startups, ideas and business talent!&#10;&#10;Please feel free to reach out with anything we can help you with on your journey!"
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Professional Information</h3>
                        <p className="text-sm text-muted-foreground">Tell us about your professional experience</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select defaultValue="founder">
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-border z-50">
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="cofounder">Co-Founder</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                              <SelectItem value="advisor">Advisor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lookingFor">Looking For</Label>
                          <Select defaultValue="cofounder">
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-border z-50">
                              <SelectItem value="cofounder">CoFounder</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                              <SelectItem value="advisor">Advisor</SelectItem>
                              <SelectItem value="team">Team Member</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessStage">Current Business Stage</Label>
                        <Select defaultValue="growth">
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border z-50">
                            <SelectItem value="idea">Idea Stage</SelectItem>
                            <SelectItem value="mvp">MVP</SelectItem>
                            <SelectItem value="early">Early Stage</SelectItem>
                            <SelectItem value="growth">Growth</SelectItem>
                            <SelectItem value="scale">Scale-Up</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        <Label>Skills</Label>
                        <div className="flex flex-wrap gap-2 p-3 rounded-md border border-border bg-background min-h-[60px]">
                          {selectedSkills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                              onClick={() => removeSkill(skill)}
                            >
                              {skill}
                              <span className="ml-2">×</span>
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Click on a skill to remove it</p>
                      </div>

                      {/* Available Skills to Add */}
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Add more skills:</Label>
                        <div className="flex flex-wrap gap-2">
                          {availableSkills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="border-border hover:border-primary hover:bg-primary/5 cursor-pointer"
                              onClick={() => setSelectedSkills([...selectedSkills, skill])}
                            >
                              + {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Interests */}
                      <div className="space-y-2 pt-4">
                        <Label>Interests</Label>
                        <div className="flex flex-wrap gap-2 p-3 rounded-md border border-border bg-background min-h-[60px]">
                          {selectedInterests.map((interest) => (
                            <Badge
                              key={interest}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                              onClick={() => removeInterest(interest)}
                            >
                              {interest}
                              <span className="ml-2">×</span>
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Click on an interest to remove it</p>
                      </div>

                      {/* Available Interests to Add */}
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Add more interests:</Label>
                        <div className="flex flex-wrap gap-2">
                          {availableInterests.map((interest) => (
                            <Badge
                              key={interest}
                              variant="outline"
                              className="border-border hover:border-primary hover:bg-primary/5 cursor-pointer"
                              onClick={() => setSelectedInterests([...selectedInterests, interest])}
                            >
                              + {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="password" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Change Password</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="bg-background border-border" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="bg-background border-border" />
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Save className="h-4 w-4" />
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="account" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Deactivate Account</h3>
                      <p className="text-muted-foreground">
                        Once you deactivate your account, there is no going back. Please be certain.
                      </p>
                      
                      <div className="pt-4">
                        <Button variant="destructive" className="gap-2">
                          Deactivate Account
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="billing" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Plan & Billing</h3>
                      <p className="text-muted-foreground">
                        Manage your subscription and billing information.
                      </p>
                      
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground">No active subscription</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
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

export default ProfileSettings;
