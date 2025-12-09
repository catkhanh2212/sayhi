import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "@/components/typewriter/TypeWriter";
import Butterfly from "@/components/animations/Butterfly";

export default function StageOne({ onFinish }: { onFinish: () => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/interlude_inst.mp3");
  }, []);

  const handleStart = () => {
    audioRef.current?.play();
    setStarted(true);

    setTimeout(() => setShowSecond(true), 500);
    setTimeout(() => setShowThird(true), 3500);
  };

  const finishStage = () => {
    setTimeout(() => onFinish(), 1000);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/starry.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="startButton"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  background:
                    "linear-gradient(90deg, #dcdcdc, #ffffff, #d4d4d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation:
                    "gradientMove 8s ease infinite, fadePulse 3.5s ease-in-out infinite",
                  cursor: "pointer",
                }}
                onClick={handleStart}
              >
                Bắt đầu
              </Typography>
            </motion.div>
          ) : (
            <motion.div
              key="welcomeTexts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                {showSecond && !showThird && (
                  <motion.div key="typo2">
                    <Typography sx={typoStyle}>
                      <TypeWriter text="20/09/2025 - 13/12/2025" speed={60} />
                    </Typography>
                  </motion.div>
                )}

                {showThird && !showFourth && (
                  <motion.div key="typo3">
                    <Typography sx={typoStyle}>
                      <TypeWriter
                        text="Hành trình Anh Trai Say Hi đã chính thức kết thúc"
                        speed={60}
                        onComplete={() =>
                          setTimeout(() => setShowFourth(true), 1800)
                        }
                      />
                    </Typography>
                  </motion.div>
                )}

                {showFourth && !showFifth && (
                  <motion.div key="typo4">
                    <Typography sx={typoStyle}>
                      <TypeWriter
                        text="Bạn vẫn còn nhớ những cảm xúc bồi hồi trên chặng đường 3 tháng vừa qua chứ?"
                        speed={60}
                        onComplete={() =>
                          setTimeout(() => setShowFifth(true), 1800)
                        }
                      />
                    </Typography>
                  </motion.div>
                )}

                {showFifth && !showSixth && (
                  <motion.div key="typo5">
                    <Typography sx={typoStyle}>
                      <TypeWriter
                        text="Hãy cùng mình tua lại thời gian để quay lại ngày đầu tiên cùng Vương Bình nhé!"
                        speed={60}
                        onComplete={() =>
                          setTimeout(() => setShowSixth(true), 1800)
                        }
                      />
                    </Typography>
                  </motion.div>
                )}

                {showSixth && (
                  <motion.div
                    key="butterfly"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.6,
                      },
                    }}
                    onAnimationComplete={() => {
                      setTimeout(() => finishStage(), 1200);
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: -20,
                      transition: { duration: 1 },
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Butterfly />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadePulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

const typoStyle = {
  fontSize: "36px",
  background: "linear-gradient(90deg, #ffffff, #ffffff, #dcdcdc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation:
    "gradientMove 8s ease infinite, fadePulse 3.5s ease-in-out infinite",
};
