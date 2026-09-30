import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import topStory01 from "@/assets/top-story-01.jpg";
import topStory02 from "@/assets/top-story-02.jpg";
import topStory03 from "@/assets/top-story-03.jpg";
import storyTile01 from "@/assets/story-tile-01.jpg";
import storyTile02 from "@/assets/story-tile-02.jpg";
import storyTile03 from "@/assets/story-tile-03.jpg";
import storyTile04 from "@/assets/story-tile-04.jpg";

const heroStories = [
  {
    image: topStory01,
    category: "Funding",
    title: "Seed Funding Is Back: Investors Reopen Their Checkbooks",
    source: "Upfounder News",
    time: "2h ago",
  },
  {
    image: topStory02,
    category: "Founders",
    title: "The Solo Founder Wave: Building Alone, Together",
    source: "Upfounder News",
    time: "4h ago",
  },
  {
    image: topStory03,
    category: "Accelerators",
    title: "Inside the New Cohort: 10 Teams, 12 Weeks, One Demo Day",
    source: "Upfounder News",
    time: "6h ago",
  },
];

const latestStories = [
  {
    image: storyTile01,
    category: "News",
    title: "EU Startup Visas Expand to Six New Countries",
    time: "1h ago",
  },
  {
    image: storyTile02,
    category: "Funding",
    title: "AI Tooling Helps Solo Founders Raise More Than Ever",
    time: "3h ago",
  },
  {
    image: storyTile03,
    category: "Grants",
    title: "CleanFuture Grant Opens $250K Applications",
    time: "5h ago",
  },
  {
    image: storyTile04,
    category: "Community",
    title: "The Tools Founders Actually Pay For, Voted by the Community",
    time: "7h ago",
  },
];

const TopStories = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % heroStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const previous = () => setCurrent((value) => (value - 1 + heroStories.length) % heroStories.length);
  const next = () => setCurrent((value) => (value + 1) % heroStories.length);
  const story = heroStories[current];

  return (
    <section aria-label="Top stories" className="space-y-3">
      {/* Hero carousel — one image at a time */}
      <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-card sm:h-80" aria-roledescription="carousel" aria-label="Top stories highlights">
        {heroStories.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={index !== current}
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" width={1600} height={900} loading={index === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                  {item.category}
                </span>
                <h2 className="mt-2 max-w-2xl text-lg font-bold leading-snug text-white sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-1 flex items-center gap-2 text-xs text-white/80">
                  <span>{item.source}</span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{item.time}</span>
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          aria-label="Previous story"
          onClick={previous}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-0 transition-opacity hover:bg-black/60 focus-visible:opacity-100 group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next story"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-0 transition-opacity hover:bg-black/60 focus-visible:opacity-100 group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute right-4 top-4 flex gap-1.5" role="tablist" aria-label="Story position">
          {heroStories.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-label={`Go to story ${index + 1}`}
              aria-selected={index === current}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${index === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>

      {/* Latest stories — four tiles */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Latest stories">
        {latestStories.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
            <img src={item.image} alt="" className="aspect-[16/9] w-full object-cover" width={816} height={816} loading="lazy" />
            <div className="p-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{item.category}</span>
              <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {item.time}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopStories;
