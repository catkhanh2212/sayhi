import Head from "next/head";
import styles from "@/styles/Home.module.css";
// import animation from "../../public/animations/starry.json";
// import LottieBackground from "@/components/backgrounds/LottieBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className={styles.page}>
        <main
          className={styles.main}
          style={{ position: "relative", zIndex: 0 }}
        >
          <div style={{ position: "relative", minHeight: "100vh", width: '100vw' }}>
            {/* <LottieBackground animationData={animation} /> */}

          </div>
        </main>
      </div>
    </>
  );
}
