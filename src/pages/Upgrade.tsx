import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ShieldCheck,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

interface Tier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  icon: typeof Sparkles;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  {
    name: "Freemium",
    tagline: "Get started and explore the community",
    price: "$0",
    period: "forever",
    icon: Sparkles,
    features: [
      "Weekly calls",
      "Basic access to tools",
      "Partner perks",
      "Unlimited messaging",
      "Unlimited connections",
    ],
    cta: "Start for free",
  },
  {
    name: "Premium",
    tagline: "For founders ready to grow faster",
    price: "$29",
    period: "per month",
    icon: Zap,
    features: [
      "Premium AI messaging",
      "Ad-free experience",
      "Weekly calls",
      "Member matching",
      "Member spotlight",
      "Premium badge",
      "Verification",
      "Extra credits for tools",
      "See who viewed your profile",
      "Video messaging",
      "Audio messaging",
    ],
    cta: "Start your free trial",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Pro",
    tagline: "Everything you need to build and raise",
    price: "$89",
    period: "per month",
    icon: Crown,
    features: [
      "Everything in Premium",
      "Upfounder Accountability group",
      "Goal setting",
      "Weekly founder calls",
      "Monthly investor calls",
      "Builder access",
      "AI content generation access",
      "Full partner perks",
      "Higher Pro credit limit",
      "Removal of Upfounder branding",
      "Resource library",
    ],
    cta: "Start your free trial",
  },
];

const Upgrade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(var(--primary-deep)) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            30-day free trial — no charge until it ends
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Turn your idea into a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              funded company
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Match with co-founders, advisors and investors, and get the tools to
            build faster. Every paid plan starts with 30 days free — cancel
            anytime.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all sm:p-8 ${
                tier.highlighted
                  ? "border-primary/50 bg-card shadow-[0_10px_40px_-12px_hsl(var(--primary)/0.35)] lg:-my-4 lg:py-12"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  {tier.badge}
                </div>
              )}

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    tier.highlighted
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <tier.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {tier.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {tier.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {tier.period}
                </span>
              </div>
              {tier.highlighted && (
                <p className="mt-1 text-xs font-medium text-primary">
                  Free for 30 days, then $29/month
                </p>
              )}
              {tier.name === "Pro" && (
                <p className="mt-1 text-xs font-medium text-primary">
                  Free for 30 days, then $89/month
                </p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        tier.highlighted
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/search" className="mt-8">
                <Button
                  className={`w-full rounded-xl font-semibold ${
                    tier.highlighted
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                  variant={tier.highlighted ? "default" : "ghost"}
                >
                  {tier.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                30 days completely free
              </p>
              <p className="text-xs text-muted-foreground">
                Full access to every feature from day one.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RefreshCcw className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Cancel anytime
              </p>
              <p className="text-xs text-muted-foreground">
                One click in settings — no calls, no emails.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Keep what you build
              </p>
              <p className="text-xs text-muted-foreground">
                Your connections and posts stay yours, always.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Questions about plans?{" "}
          <Link to="/messages" className="font-medium text-primary hover:underline">
            Message our team
          </Link>{" "}
          — we usually reply within a day.
        </p>
      </section>
    </div>
  );
};

export default Upgrade;
