

import { highlights } from "../data/highlights";



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
