import { useState } from "react";
import { Search, Mail, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PromotionalSidebar from "@/components/PromotionalSidebar";
import { Link } from "react-router-dom";

interface InboxMessage {
  id: number;
  sender: {
    name: string;
    avatar: string;
  };
  subject: string;
  preview: string;
  timestamp: string;
  unread: boolean;
}

const Inbox = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "unread">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const messages: InboxMessage[] = [
    {
      id: 1,
      sender: {
        name: "Nobody N.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nobody",
      },
      subject: "Welcome to CoFoundersLab!",
      preview: "Welcome to CoFoundersLab! We're excited to have you join the community. We'd love to learn a...",
      timestamp: "4 hours ago",
      unread: true,
    },
    {
      id: 2,
      sender: {
        name: "Bharat V.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bharat",
      },
      subject: "Looking for technical support",
      preview: "I am looking at real time voice filtering tool. I am looking for technical support while I build...",
      timestamp: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      sender: {
        name: "Paul R.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paul",
      },
      subject: "Welcome to CoFoundersLab!",
      preview: "Welcome to CoFoundersLab! We're excited to have you join the community. We'd love to learn a...",
      timestamp: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      sender: {
        name: "Daryll G.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daryll",
      },
      subject: "Welcome to CoFoundersLab!",
      preview: "Welcome to CoFoundersLab! We're excited to have you join the community. We'd love to learn a...",
      timestamp: "2 days ago",
      unread: false,
    },
    {
      id: 5,
      sender: {
        name: "Xavier R.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xavier",
      },
      subject: "Building together",
      preview: "Welcome to CoFoundersLab - We'd love to learn about what you're building and how we can hel...",
      timestamp: "3 days ago",
      unread: false,
    },
    {
      id: 6,
      sender: {
        name: "Ahmad B.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
      },
      subject: "Welcome to CoFoundersLab!",
      preview: "Welcome to CoFoundersLab! We're excited to have you join the community. We'd love to learn a...",
      timestamp: "3 days ago",
      unread: false,
    },
    {
      id: 7,
      sender: {
        name: "Rick S.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rick",
      },
      subject: "Team members wanted",
      preview: "Team members wanted A.I. Discovers 1st Gospel According to Jesus Christ Hid In Parables 2 ne...",
      timestamp: "3 days ago",
      unread: false,
    },
    {
      id: 8,
      sender: {
        name: "Michael T.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      },
      subject: "Building together",
      preview: "Welcome to CoFoundersLab - We'd love to learn about what you're building and how we can hel...",
      timestamp: "3 days ago",
      unread: false,
    },
    {
      id: 9,
      sender: {
        name: "Melissa E.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Melissa",
      },
      subject: "Welcome to CoFoundersLab!",
      preview: "Welcome to CoFoundersLab! We're excited to have you join the community. We'd love to learn a...",
      timestamp: "4 days ago",
      unread: false,
    },
  ];

  const filteredMessages = messages
    .filter((message) => {
      if (activeFilter === "unread") return message.unread;
      return true;
    })
    .filter((message) =>
      message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const unreadCount = messages.filter((m) => m.unread).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">Message</h1>
              {unreadCount > 0 && (
                <Badge className="bg-primary text-primary-foreground">
                  {unreadCount} unread
                </Badge>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={
                  activeFilter === "all"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-foreground hover:bg-card-highlight"
                }
              >
                All
              </Button>
              <Button
                variant={activeFilter === "unread" ? "default" : "outline"}
                onClick={() => setActiveFilter("unread")}
                className={
                  activeFilter === "unread"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-foreground hover:bg-card-highlight"
                }
              >
                Unread
                {unreadCount > 0 && (
                  <Badge className="ml-2 bg-primary-foreground text-primary">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Messages List */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <p className="text-muted-foreground">No messages found</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredMessages.map((message) => (
                      <Link
                        key={message.id}
                        to="/messages"
                        className={`group block p-4 rounded-lg border transition-all hover:border-primary/40 hover:bg-card-highlight ${
                          message.unread
                            ? "border-primary/20 bg-primary/5"
                            : "border-border bg-background"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 flex-shrink-0">
                            <AvatarImage src={message.sender.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {message.sender.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-semibold text-foreground">
                                {message.sender.name}
                              </h3>
                              <span className="text-xs text-muted-foreground flex-shrink-0">
                                {message.timestamp}
                              </span>
                            </div>
                            <p className="text-sm text-foreground font-medium mb-1 truncate">
                              {message.subject}
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {message.preview}
                            </p>
                          </div>

                          <div className="flex-shrink-0 ml-2">
                            {message.unread ? (
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Mail className="h-4 w-4 text-primary" />
                              </div>
                            ) : (
                              <div className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <MailOpen className="h-4 w-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Load More */}
            {filteredMessages.length > 0 && (
              <div className="flex justify-center">
                <Button variant="outline" className="border-border hover:bg-card-highlight">
                  Load More Messages
                </Button>
              </div>
            )}
          </main>

          <div className="hidden xl:block">
            <PromotionalSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
