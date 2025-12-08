import { Box } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

function Messages() {
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);
  const [showImg4, setShowImg4] = useState(false);

  const boomAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    boomAudio.current = new Audio("/boom.mp3");

    setTimeout(() => {
      setShowImg1(true);
      boomAudio.current?.play();
    }, 200);

    setTimeout(() => {
      setShowImg2(true);
      boomAudio.current?.play();
    }, 700);
    setTimeout(() => {
      setShowImg3(true);
      boomAudio.current?.play();
    }, 1200);
    setTimeout(() => {
      setShowImg4(true);
      boomAudio.current?.play();
    }, 1700);
  }, []);

  const boomVariants: Variants = {
    hidden: {
      scale: 0.4,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 0.85,
      transition: {
        duration: 0.18,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '20%', height: '100%', gap: 8 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        {showImg1 && (
          <motion.img
            initial="hidden"
            animate="visible"
            variants={boomVariants}
            src="/messages/message_1.jpg"
            alt="message1"
            style={{
              height: "200px",
              width: "auto",
              borderRadius: 12,
              opacity: 0.85,
            }}
          />
        )}

        {showImg2 && (
          <motion.img
            initial="hidden"
            animate="visible"
            variants={boomVariants}
            src="/messages/message_2.jpg"
            alt="message2"
            style={{
              height: "60px",
              width: "auto",
              borderRadius: 10,
              opacity: 0.85,
            }}
          />
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
      {showImg3 && (
        <motion.img
          initial="hidden"
          animate="visible"
          variants={boomVariants}
          src="/messages/message_3.jpg"
          alt="message1"
          style={{
            height: "50px",
            width: "auto",
            borderRadius: 12,
            opacity: 0.85,
          }}
        />
      )}

      {showImg4 && (
        <motion.img
          initial="hidden"
          animate="visible"
          variants={boomVariants}
          src="/messages/message_4.jpg"
          alt="message2"
          style={{
            height: "80px",
            width: "auto",
            borderRadius: 10,
            opacity: 0.85,
          }}
        />
      )}
    </Box>
    </Box>
  );
}

export default Messages;
