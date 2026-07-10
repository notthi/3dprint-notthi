import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const handler = makeRouteHandler({ config });

// ローカル編集専用。Vercel（本番）ではファイル書き込み不可のため404を返す。
const notFound = async () => new Response("Not found", { status: 404 });

export const GET = process.env.NODE_ENV === "production" ? notFound : handler.GET;
export const POST = process.env.NODE_ENV === "production" ? notFound : handler.POST;
