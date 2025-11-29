import { useState } from "react";
import { Send, Image, Smile, Paperclip, MoreVertical, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";

interface Message {
  id: number;
  sender: "user" | "other";
  content: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: number;
  user: {
    name: string;
    avatar: string;
    title: string;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
  online?: boolean;
}

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number>(2);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const conversations: Conversation[] = [
    {
      id: 1,
      user: {
        name: "Nobody N.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nobody",
        title: "Founder",
      },
      lastMessage: "Welcome to CoFoundersLab!...",
      timestamp: "2 hours ago",
      unread: 0,
    },
    {
      id: 2,
      user: {
        name: "Bharat V.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bharat",
        title: "Founder",
      },
      lastMessage: "I am looking at real time voice...",
      timestamp: "6 hours ago",
      unread: 2,
      online: true,
    },
    {
      id: 3,
      user: {
        name: "Paul R.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paul",
        title: "Investor",
      },
      lastMessage: "Welcome to CoFoundersLab!...",
      timestamp: "2 days ago",
      unread: 0,
    },
    {
      id: 4,
      user: {
        name: "Daryll G.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daryll",
        title: "Co-Founder",
      },
      lastMessage: "Welcome to CoFoundersLab!...",
      timestamp: "3 days ago",
      unread: 0,
    },
    {
      id: 5,
      user: {
        name: "Xavier R.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xavier",
        title: "Founder",
      },
      lastMessage: "Welcome to CoFoundersLab -...",
      timestamp: "3 days ago",
      unread: 0,
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: "other",
      content: "Welcome to CoFoundersLab - Would love to hear more about what you're building! 👍",
      timestamp: "8:22 PM",
      read: true,
    },
    {
      id: 2,
      sender: "other",
      content: "I am looking at real time voice filtering tool. I am looking for technical support while I build partnerships and look at fund raising.",
      timestamp: "12:06 AM",
      read: true,
    },
  ];

  const selectedConv = conversations.find((c) => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <div className="flex-1 flex gap-4 h-[calc(100vh-180px)]">
            {/* Conversations List */}
            <Card className="w-full lg:w-96 border-border bg-card flex flex-col">
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background border-border"
                    />
                  </div>
                </div>

                <ScrollArea className="flex-1 -mx-4 px-4">
                  <div className="space-y-2">
                    {filteredConversations.map((conversation) => (
                      <button
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-card-highlight ${
                          selectedConversation === conversation.id
                            ? "bg-primary/10 border-2 border-primary/20"
                            : "border-2 border-transparent"
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={conversation.user.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {conversation.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-card" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {conversation.user.name}
                            </h4>
                            <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                              {conversation.timestamp}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate mb-1">
                            {conversation.user.title}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate flex-1">
                              {conversation.lastMessage}
                            </p>
                            {conversation.unread > 0 && (
                              <Badge className="bg-primary text-primary-foreground ml-2 flex-shrink-0">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chat Window */}
            <Card className="flex-1 border-border bg-card flex flex-col">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="border-b border-border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={selectedConv.user.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {selectedConv.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {selectedConv.online && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-card" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{selectedConv.user.name}</h3>
                          <p className="text-xs text-muted-foreground">{selectedConv.user.title}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          Today, November 29
                        </span>
                      </div>

                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className={`flex gap-2 max-w-[70%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                            {message.sender === "other" && (
                              <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarImage src={selectedConv.user.avatar} />
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                  {selectedConv.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div className="space-y-1">
                              {message.sender === "other" && (
                                <p className="text-xs text-muted-foreground px-1">{selectedConv.user.name}</p>
                              )}
                              <div
                                className={`rounded-lg px-4 py-2 ${
                                  message.sender === "user"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-foreground"
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                              </div>
                              <p className="text-xs text-muted-foreground px-1">
                                {message.timestamp}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="border-t border-border p-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground flex-shrink-0"
                      >
                        <Image className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground flex-shrink-0"
                      >
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <div className="flex-1 flex items-center gap-2 bg-background border border-border rounded-lg px-3">
                        <Input
                          placeholder="Type Your Message..."
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-foreground flex-shrink-0"
                        >
                          <Smile className="h-5 w-5" />
                        </Button>
                      </div>
                      <Button
                        size="icon"
                        onClick={handleSendMessage}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0"
                        disabled={!messageInput.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <Send className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Select a conversation</h3>
                    <p className="text-sm text-muted-foreground">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
