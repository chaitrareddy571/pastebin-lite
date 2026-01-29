import { store } from "../route";

export async function GET(req, context) {
  const { id } = await context.params; // ✅ MUST await

  const content = store.get(id);

  if (!content) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(
    JSON.stringify({ content }),
    { status: 200 }
  );
}