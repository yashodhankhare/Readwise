

import { highlights } from "../data/highlights";


// 👋 Trigger redeploy for latest homepage


const highlights = [
  {
    quote: "You don't have to be sure to make a good decision. You just need a good process.",
    author: "Annie Duke",
    book: "Thinking in Bets",
    tags: ["decision-making", "mental models"]
  },
  {
    quote: "Markets are not random. They are based on human behavior...",
    author: "Jack Schwager",
    book: "Market Wizards",
    tags: ["trading", "psychology"]
  }
];

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>📚 Readwise Explorer</h1>
      {highlights.map((h, i) => (
        <div key={i} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <p><em>{h.quote}</em></p>
          <p>— {h.author}, <strong>{h.book}</strong></p>
          <p>Tags: {h.tags.join(", ")}</p>
        </div>
      ))}
    </main>
  );
}
