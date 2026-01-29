"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [content, setContent] = useState("");
  const router = useRouter();

  async function createPaste() {
    const res = await fetch("/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const data = await res.json();

    if (data.id) {
      router.push(`/paste/${data.id}`);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Pastebin Lite</h1>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste your text here..."
        style={{ width: "100%", height: 150 }}
      />

      <br /><br />
      <button onClick={createPaste}>Create Paste</button>
    </div>
  );
}