import PocketBase from "pocketbase";

// Server-only: POCKETBASE_URL has no NEXT_PUBLIC_ prefix, so it is never
// bundled into client code. Set it in Vercel project settings. 
export function getPocketBase() {
  const url = process.env.POCKETBASE_URL;
  if (!url) throw new Error("POCKETBASE_URL is not set");
  const pb = new PocketBase(url);
  pb.autoCancellation(false);
  return pb;
}
