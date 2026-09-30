import { useState } from "react";
import { Check, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PollData {
  question: string;
  options: { label: string; votes: number; image?: string }[];
}

// Subtle colour tints that identify each poll option, in light and dark mode.
const optionTints = [
  { fill: "bg-emerald-500/25", selected: "border-emerald-500/40 bg-emerald-500/10", check: "text-emerald-600 dark:text-emerald-400" },
  { fill: "bg-sky-500/25", selected: "border-sky-500/40 bg-sky-500/10", check: "text-sky-600 dark:text-sky-400" },
  { fill: "bg-amber-500/25", selected: "border-amber-500/40 bg-amber-500/10", check: "text-amber-600 dark:text-amber-400" },
  { fill: "bg-violet-500/25", selected: "border-violet-500/40 bg-violet-500/10", check: "text-violet-600 dark:text-violet-400" },
];

const FeedPoll = ({ poll }: { poll: PollData }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [vote, setVote] = useState<number | null>(null);
  const total = poll.options.reduce((sum, option) => sum + option.votes, 0) + (vote === null ? 0 : 1);

  const hasImages = poll.options.some((o) => o.image);

  if (hasImages) {
    return (
      <div className="space-y-3" aria-label="Poll">
        <h4 className="font-semibold text-foreground">{poll.question}</h4>
        <div className="grid grid-cols-2 gap-3" role={vote === null ? "radiogroup" : "group"} aria-label={poll.question}>
          {poll.options.map((option, index) => {
            const tint = optionTints[index % optionTints.length];
            const count = option.votes + (vote === index ? 1 : 0);
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
            const isPicked = vote === null ? selected === index : vote === index;
            return (
              <button
                key={option.label}
                type="button"
                role={vote === null ? "radio" : undefined}
                aria-checked={vote === null ? selected === index : undefined}
                disabled={vote !== null}
                onClick={(e) => { e.stopPropagation(); setSelected(index); }}
                className={`overflow-hidden rounded-xl border text-left transition-colors ${isPicked ? tint.selected : "border-border bg-background"}`}
              >
                <div className="relative aspect-square w-full">
                  <img src={option.image} alt={option.label} loading="lazy" className="h-full w-full object-cover" />
                  {isPicked && (
                    <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/90">
                      <Check className={`h-4 w-4 ${tint.check}`} />
                    </span>
                  )}
                </div>
                <div className="relative overflow-hidden">
                  {vote !== null && <div className={`absolute inset-y-0 left-0 transition-[width] duration-500 ${tint.fill}`} style={{ width: `${percentage}%` }} />}
                  <div className="relative flex items-center justify-between gap-2 px-3 py-2 text-sm text-foreground">
                    <span className="font-medium">{option.label}</span>
                    {vote !== null && <span className="font-semibold tabular-nums">{percentage}%</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {vote === null ? (
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">{total} votes</span>
            <Button size="sm" disabled={selected === null} onClick={(e) => { e.stopPropagation(); setVote(selected); }} className="gap-2 rounded-md">
              <Vote className="h-4 w-4" /> Vote
            </Button>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">{total} votes · Thanks for voting</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3" aria-label="Poll">
      <h4 className="font-semibold text-foreground">{poll.question}</h4>
      <div className="space-y-2" role={vote === null ? "radiogroup" : "group"} aria-label={poll.question}>
        {poll.options.map((option, index) => {
          const tint = optionTints[index % optionTints.length];
          const count = option.votes + (vote === index ? 1 : 0);
          const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
          return vote === null ? (
            <Button
              key={option.label}
              type="button"
              variant="outline"
              role="radio"
              aria-checked={selected === index}
              onClick={() => setSelected(index)}
              className={`h-auto min-h-11 w-full justify-start whitespace-normal rounded-md px-4 py-2 text-left text-sm transition-colors ${selected === index ? `${tint.selected} text-foreground` : "border-border bg-background text-foreground"}`}
            >
              <span className="flex w-full items-center justify-between gap-3">
                <span>{option.label}</span>
                {selected === index && <Check className={`h-4 w-4 shrink-0 ${tint.check}`} />}
              </span>
            </Button>
          ) : (
            <div
              key={option.label}
              className="relative min-h-11 overflow-hidden rounded-md border border-border bg-muted"
              aria-label={`${option.label}: ${percentage} percent`}
            >
              <div className={`absolute inset-y-0 left-0 transition-[width] duration-500 ${tint.fill}`} style={{ width: `${percentage}%` }} />
              <div className="relative flex min-h-11 items-center justify-between gap-3 px-4 py-2 text-sm text-foreground">
                <span className="flex items-center gap-2 font-medium">{option.label}{vote === index && <Check className={`h-4 w-4 shrink-0 ${tint.check}`} />}</span>
                <span className="shrink-0 font-semibold tabular-nums">{percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
      {vote === null ? (
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">{total} votes</span>
          <Button size="sm" disabled={selected === null} onClick={() => setVote(selected)} className="gap-2 rounded-md">
            <Vote className="h-4 w-4" /> Vote
          </Button>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">{total} votes · Thanks for voting</p>
      )}
    </div>
  );
};

export default FeedPoll;
