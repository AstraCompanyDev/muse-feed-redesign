import { useState } from "react";
import { Check, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PollData {
  question: string;
  options: { label: string; votes: number }[];
}

const FeedPoll = ({ poll }: { poll: PollData }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [vote, setVote] = useState<number | null>(null);
  const total = poll.options.reduce((sum, option) => sum + option.votes, 0) + (vote === null ? 0 : 1);

  return (
    <div className="space-y-3" aria-label="Poll">
      <h4 className="font-semibold text-foreground">{poll.question}</h4>
      <div className="space-y-2" role={vote === null ? "radiogroup" : "group"} aria-label={poll.question}>
        {poll.options.map((option, index) => {
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
              className={`h-auto min-h-11 w-full justify-start whitespace-normal rounded-md px-4 py-2 text-left text-sm ${selected === index ? "border-primary bg-accent text-foreground" : "bg-background text-foreground"}`}
            >
              <span className="flex w-full items-center justify-between gap-3">
                <span>{option.label}</span>
                {selected === index && <Check className="h-4 w-4 shrink-0 text-primary" />}
              </span>
            </Button>
          ) : (
            <div key={option.label} className="relative min-h-11 overflow-hidden rounded-md border border-border bg-muted" aria-label={`${option.label}: ${percentage} percent` }>
              <div className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-500" style={{ width: `${percentage}%` }} />
              <div className="relative flex min-h-11 items-center justify-between gap-3 px-4 py-2 text-sm text-foreground">
                <span className="flex items-center gap-2 font-medium">{option.label}{vote === index && <Check className="h-4 w-4 text-primary" />}</span>
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