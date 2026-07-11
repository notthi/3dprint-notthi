"use client";
import { makePage } from "@keystatic/next/ui/app";
import config from "../../../../keystatic.config";
import FloatingPublish from "@/components/admin/FloatingPublish";

const KeystaticApp = makePage(config);

export default function Page() {
  return (
    <>
      <KeystaticApp />
      <FloatingPublish />
    </>
  );
}
