import { Link } from "react-router-dom";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import {
  ArrowLeft, Eye, Heart, MessageCircle, Users, FileText, GraduationCap,
  CalendarCheck, Send, Radio, UserCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ThemeToggle";

const stats = [
  { label: "Total users", value: "48,215", change: "+4.2%", icon: Users },
  { label: "Online now", value: "1,284", change: "live", icon: Radio },
  { label: "Total posts", value: "12,947", change: "+8.1%", icon: FileText },
  { label: "Total advisors", value: "642", change: "+2.3%", icon: UserCheck },
  { label: "Meetings booked", value: "3,518", change: "+11.6%", icon: CalendarCheck },
  { label: "Messages sent", value: "284,930", change: "+6.4%", icon: Send },
  { label: "Post views", value: "1.92M", change: "+9.8%", icon: Eye },
  { label: "Post likes", value: "214,306", change: "+5.1%", icon: Heart },
  { label: "Post comments", value: "38,772", change: "+3.7%", icon: MessageCircle },
  { label: "Courses completed", value: "7,463", change: "+14.2%", icon: GraduationCap },
];

const engagement = ["Sep 1", "Sep 5", "Sep 9", "Sep 13", "Sep 17", "Sep 21", "Sep 25", "Sep 29"].map((d, i) => ({
  day: d,
  views: 52000 + i * 4200 + (i % 3) * 6000,
  likes: 5800 + i * 520 + (i % 2) * 900,
  comments: 1100 + i * 110 + (i % 3) * 180,
}));

const streams = [
  { name: "Main", views: 812000, likes: 92400, comments: 17200 },
  { name: "News", views: 498000, likes: 51300, comments: 8900 },
  { name: "Learning", views: 356000, likes: 44100, comments: 7400 },
  { name: "Market", views: 254000, likes: 26500, comments: 5270 },
];

const countries = [
  { name: "United States", users: 16420 },
  { name: "United Kingdom", users: 6180 },
  { name: "India", users: 5930 },
  { name: "Germany", users: 3870 },
  { name: "Canada", users: 3240 },
  { name: "Australia", users: 2610 },
  { name: "Thailand", users: 1980 },
  { name: "Other", users: 7985 },
];

const activeUsers = [
  { name: "Maya Chen", posts: 142, comments: 611, score: 98 },
  { name: "Alex Rivera", posts: 118, comments: 540, score: 94 },
  { name: "Jordan Blake", posts: 97, comments: 488, score: 89 },
  { name: "Elena Vasquez", posts: 84, comments: 402, score: 85 },
  { name: "Omar Haddad", posts: 71, comments: 377, score: 80 },
  { name: "Iris Wong", posts: 66, comments: 351, score: 77 },
];

const courses = [
  { name: "Finding Your Co-Founder", enrolled: 4210, completed: 3120 },
  { name: "Fundraising 101", enrolled: 3880, completed: 2410 },
  { name: "Product-Market Fit", enrolled: 2950, completed: 1420 },
  { name: "Startup Legal Basics", enrolled: 1760, completed: 980 },
  { name: "Growth Marketing", enrolled: 1430, completed: 533 },
];

const userTypes = [
  { name: "Founders", value: 27400 },
  { name: "Co-founder seekers", value: 12800 },
  { name: "Advisors", value: 642 },
  { name: "Investors", value: 7373 },
];

const pieColors = ["hsl(var(--primary))", "hsl(152 60% 45%)", "hsl(38 92% 55%)", "hsl(270 60% 60%)"];
const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: 8,
  color: "hsl(var(--foreground))",
};
const fmt = (n: number) => n.toLocaleString();

const AdminDashboard = () => {
  const maxCountry = Math.max(...countries.map((c) => c.users));
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4 sm:px-[10%]">
          <div className="flex items-center gap-3">
            <Link to="/" className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Back to site">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-semibold">Upfounder Admin</h1>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">Last 30 days</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="space-y-6 px-4 py-6 sm:px-[10%]">
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {stats.map(({ label, value, change, icon: Icon }) => (
            <Card key={label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-xs font-medium">{label}</span>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-2 text-2xl font-semibold">{value}</div>
                <div className={`mt-1 flex items-center gap-1 text-xs ${change === "live" ? "text-emerald-500" : "text-emerald-500"}`}>
                  {change === "live" && <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />}
                  {change === "live" ? "Live" : `${change} vs last month`}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="text-base">Post engagement</CardTitle></CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagement}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="views" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} />
                  <Area type="monotone" dataKey="likes" stroke="hsl(152 60% 45%)" fill="hsl(152 60% 45%)" fillOpacity={0.15} />
                  <Area type="monotone" dataKey="comments" stroke="hsl(38 92% 55%)" fill="hsl(38 92% 55%)" fillOpacity={0.15} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">User breakdown</CardTitle></CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={userTypes} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={2}>
                      {userTypes.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {userTypes.map((t, i) => (
                  <li key={t.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: pieColors[i] }} />{t.name}
                    </span>
                    <span className="text-muted-foreground">{fmt(t.value)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Performance by stream</CardTitle></CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={streams}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
                  <Bar dataKey="likes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comments" fill="hsl(38 92% 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Users by country</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {countries.map((c) => (
                <div key={c.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{c.name}</span>
                    <span className="text-muted-foreground">{fmt(c.users)}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${(c.users / maxCountry) * 100}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Most active users</CardTitle></CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead className="text-left text-xs text-muted-foreground">
                  <tr><th className="pb-2 font-medium">User</th><th className="pb-2 font-medium">Posts</th><th className="pb-2 font-medium">Comments</th><th className="pb-2 font-medium">Activity</th></tr>
                </thead>
                <tbody>
                  {activeUsers.map((u) => (
                    <tr key={u.name} className="border-t border-border">
                      <td className="py-2.5">
                        <span className="flex items-center gap-2">
                          <Avatar className="h-7 w-7"><AvatarFallback className="text-xs">{u.name[0]}</AvatarFallback></Avatar>
                          {u.name}
                        </span>
                      </td>
                      <td>{u.posts}</td>
                      <td>{u.comments}</td>
                      <td className="w-28"><Progress value={u.score} className="h-1.5" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Course completion</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {courses.map((c) => {
                const pct = Math.round((c.completed / c.enrolled) * 100);
                return (
                  <div key={c.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{c.name}</span>
                      <span className="text-muted-foreground">{fmt(c.completed)} / {fmt(c.enrolled)} · {pct}%</span>
                    </div>
                    <Progress value={pct} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
