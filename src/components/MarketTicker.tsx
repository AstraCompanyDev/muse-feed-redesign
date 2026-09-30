import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

const initial = [
  { symbol: "S&P 500", price: 5712.4 },
  { symbol: "NASDAQ", price: 18204.1 },
  { symbol: "DOW", price: 42118.9 },
  { symbol: "AAPL", price: 228.35 },
  { symbol: "MSFT", price: 431.2 },
  { symbol: "NVDA", price: 121.44 },
  { symbol: "TSLA", price: 254.1 },
  { symbol: "AMZN", price: 187.6 },
  { symbol: "GOOGL", price: 165.9 },
  { symbol: "META", price: 572.3 },
];

type Quote = { symbol: string; price: number; open: number };

const MarketTicker = () => {
  const [quotes, setQuotes] = useState<Quote[]>(() =>
    initial.map((q) => ({ ...q, open: q.price * (1 + (Math.random() - 0.5) * 0.03) })),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setQuotes((qs) => qs.map((q) => ({ ...q, price: +(q.price * (1 + (Math.random() - 0.5) * 0.002)).toFixed(2) })));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const items = [...quotes, ...quotes];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-2" aria-label="Market tickers">
      <div className="flex w-max animate-ticker gap-6 px-3 hover:[animation-play-state:paused]">
        {items.map((q, i) => {
          const change = ((q.price - q.open) / q.open) * 100;
          const up = change >= 0;
          return (
            <div key={i} className="flex shrink-0 items-center gap-2 text-sm">
              <span className="font-semibold text-foreground">{q.symbol}</span>
              <span className="tabular-nums text-muted-foreground">
                {q.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className={`flex items-center gap-0.5 tabular-nums font-medium ${up ? "text-emerald-500" : "text-destructive"}`}>
                {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {up ? "+" : ""}
                {change.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketTicker;
