import Head from "next/head";
import StageOne from "@/features/Home/StageOne";
import { useState } from "react";
import StageTwo from "@/features/Home/StageTwo";

export default function Home() {
  const [stage, setStage] = useState<"stage1" | "stage2">("stage1");

  return (
    <>
      <Head>
        <title>Bé Voi Say Hi</title>
      </Head>

      {stage === "stage1" && (
        <StageOne onFinish={() => setStage("stage2")} />
      )}

      {stage === "stage2" && (
        <StageTwo />
      )}
    </>
  );
}
