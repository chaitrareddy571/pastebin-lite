"use client";

import { useEffect, useState } from "react";
import { use } from "react";

export default function PastePage({ params }) {
  const { id } = use(params); // ✅ VERY IMPORTANT
  const [content, setContent] = useState("");

  useEffect(() => {
    async function loadPaste() {
      const res = await fetch(`/api/paste/${id}`);
      if (res.ok) {
        const data = await res.json();
        setContent(data.content);
      }
    }
    loadPaste();
  }, [id]);

  if (!content) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Pastebin Lite</h1>

      <pre
  style={{
    background: "#f3f4f6",
    padding: "16px",
    borderRadius: "8px",
    whiteSpace: "pre-wrap"
  }}
>
  {content}
</pre>
<p style={{ marginTop: "12px", color: "#555" }}>
  Shareable URL:
</p>

<input
  value={typeof window !== "undefined" ? window.location.href : ""}
  readOnly
  style={{
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  }}
/>

<button
  onClick={() => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }}
  style={{
    padding: "8px 14px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Copy Link
</button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(content);
          alert("Copied!");
        }}
      >
        Copy
      </button>
    </div>
  );
}