import { nanoid } from "nanoid";

const store = new Map();

export async function POST(req) {
  const { content } = await req.json();

  if (!content || !content.trim()) {
    return new Response(
      JSON.stringify({ error: "Paste cannot be empty" }),
      { status: 400 }
    );
  }

  const id = nanoid(6);
  store.set(id, content);

  return new Response(
    JSON.stringify({ id }),
    { status: 200 }
  );
}

// export store so GET can use it
export { store };