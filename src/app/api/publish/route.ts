import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

/**
 * 公開API — Keystaticで保存した記事をgit commit & pushする（ローカル専用）
 * push後はVercelが自動デプロイする。
 */
export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "ローカル環境専用です" }, { status: 404 });
  }
  const cwd = process.cwd();
  try {
    await run("git", ["add", "content/articles"], { cwd });

    const { stdout: staged } = await run("git", ["diff", "--cached", "--name-only"], { cwd });
    if (!staged.trim()) {
      return NextResponse.json({ ok: true, message: "公開する変更はありません" });
    }

    const files = staged.trim().split("\n");
    await run(
      "git",
      ["commit", "-m", `記事更新（ビジュアルエディタ）\n\n${files.map((f) => `- ${f}`).join("\n")}`],
      { cwd }
    );

    const { stdout: branch } = await run("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd });
    await run("git", ["push", "origin", branch.trim()], { cwd });

    return NextResponse.json({
      ok: true,
      message: `${files.length} ファイルを公開しました（${branch.trim()} へpush済み・Vercelがデプロイを開始します）`,
      files,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
