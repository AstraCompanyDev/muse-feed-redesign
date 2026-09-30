# Project decisions

- Keep feed categories and their sample post assignments in the home page, because the current app has no persistent feed source and this keeps the swipe navigation self-contained.
- Scroll the center feed inside a viewport-height column and keep its composer outside that scroll region, because the composer must remain visible while posts scroll.