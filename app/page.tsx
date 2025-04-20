

import { highlights } from "../data/highlights";


export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>📚 Readwise Explorer</h1>
      {highlights.slice(0, 50).map((highlight, index) => (
  <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
    <p className="text-lg font-medium">"{highlight.quote}"</p>
    <p className="text-sm text-gray-500 mt-2">— {highlight.author}, <em>{highlight.book}</em></p>
    <div className="mt-2 flex flex-wrap gap-2">
      {highlight.tags.map((tag, i) => (
        <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
          #{tag}
        </span>
      ))}
    </div>
  </div>
))}

    </main>
  );
}


