import { useState } from 'react';

const HIGHLIGHTS = [
  {
    quote: "You don’t have to be sure to make a good decision. You just need a good process.",
    book: "Thinking in Bets",
    author: "Annie Duke",
    tags: ["decision-making", "vihang"]
  },
  {
    quote: "Markets are not random. They are based on human behavior...",
    book: "Market Wizards",
    author: "Jack Schwager",
    tags: ["trading", "non-random"]
  }
];

export default function ReadwiseExplorer() {
  const [query, setQuery] = useState("");

  const filtered = HIGHLIGHTS.filter(h => {
    const q = query.toLowerCase();
    return (
      h.quote.toLowerCase().includes(q) ||
      h.book.toLowerCase().includes(q) ||
      h.author.toLowerCase().includes(q) ||
      h.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Readwise Explorer</h1>
      <input
        placeholder="Search by quote, tag, book or author..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border px-2 py-1 w-full mb-6"
      />

      {filtered.map((h, i) => (
        <div key={i} className="border p-4 mb-4 rounded">
          <p className="italic">“{h.quote}”</p>
          <p className="mt-2 text-sm text-gray-600">
            — <strong>{h.author}</strong>, <em>{h.book}</em>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {h.tags.map((tag, j) => (
              <span key={j} className="text-xs bg-gray-200 px-2 py-1 rounded">#{tag}</span>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && <p className="text-center text-gray-400">No results found.</p>}
    </div>
  );
}