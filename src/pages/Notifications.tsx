import { useState } from "react";
import { Bell, UserPlus, MessageSquare, Heart, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PromotionalSidebar from "@/components/PromotionalSidebar";

type NotificationType = "post" | "request" | "comment" | "like" | "share";

interface Notification {
  id: number;
  type: NotificationType;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
  unread: boolean;
}

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "requests" | "posts">("all");

  const notifications: Notification[] = [
    {
      id: 1,
      type: "post",
      user: {
        name: "Pavlo Ustymenko",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pavlo",
      },
      action: "created a new post!",
      time: "28 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "post",
      user: {
        name: "Marco Molokoane",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco",
      },
      action: "created a new post!",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "post",
      user: {
        name: "Vittorio E",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vittorio",
      },
      action: "created a new post!",
      time: "4 hours ago",
      unread: true,
    },
    {
      id: 4,
      type: "request",
      user: {
        name: "Darlington Faddams",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darlington",
      },
      action: "sent you a connection request",
      time: "8 hours ago",
      unread: false,
    },
    {
      id: 5,
      type: "post",
      user: {
        name: "Wandile Nxumalo",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wandile",
      },
      action: "created a new post!",
      time: "9 hours ago",
      unread: false,
    },
    {
      id: 6,
      type: "comment",
      user: {
        name: "JISEONG KANG",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jiseong",
      },
      action: "commented on your post",
      time: "18 hours ago",
      unread: false,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "requests") return notification.type === "request";
    if (activeFilter === "posts") return notification.type === "post";
    return true;
  });

  const unreadCount = notifications.filter((n) => n.unread).length;

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "post":
        return <MessageSquare className="h-4 w-4" />;
      case "request":
        return <UserPlus className="h-4 w-4" />;
      case "comment":
        return <MessageSquare className="h-4 w-4" />;
      case "like":
        return <Heart className="h-4 w-4" />;
      case "share":
        return <Share2 className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

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
              <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
              {unreadCount > 0 && (
                <Badge className="bg-primary text-primary-foreground">
                  {unreadCount} new
                </Badge>
              )}
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
                variant={activeFilter === "requests" ? "default" : "outline"}
                onClick={() => setActiveFilter("requests")}
                className={
                  activeFilter === "requests"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-foreground hover:bg-card-highlight"
                }
              >
                Requests
              </Button>
              <Button
                variant={activeFilter === "posts" ? "default" : "outline"}
                onClick={() => setActiveFilter("posts")}
                className={
                  activeFilter === "posts"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-foreground hover:bg-card-highlight"
                }
              >
                Posts
              </Button>
            </div>

            {/* Notifications List */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Today <span className="ml-2 text-xs">{filteredNotifications.length}</span>
                  </h2>
                  {unreadCount > 0 && (
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Mark all as read
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  {filteredNotifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">No notifications yet</p>
                    </div>
                  ) : (
                    filteredNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`group flex items-center gap-4 p-4 rounded-lg border transition-all hover:border-primary/40 hover:bg-card-highlight cursor-pointer ${
                          notification.unread
                            ? "border-primary/20 bg-primary/5"
                            : "border-border bg-background"
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={notification.user.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {notification.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center border-2 border-card">
                            <div className="text-primary">
                              {getNotificationIcon(notification.type)}
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground">
                            <span className="font-semibold">{notification.user.name}</span>{" "}
                            <span className="text-muted-foreground">{notification.action}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>

                        {notification.type === "post" && (
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                          >
                            View Post
                          </Button>
                        )}

                        {notification.type === "request" && (
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline" className="border-border hover:bg-card-highlight">
                              Decline
                            </Button>
                          </div>
                        )}

                        {notification.unread && (
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Load More */}
            {filteredNotifications.length > 0 && (
              <div className="flex justify-center">
                <Button variant="outline" className="border-border hover:bg-card-highlight">
                  Load More Notifications
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

export default Notifications;
