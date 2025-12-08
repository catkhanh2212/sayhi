/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// PlaylistSlip.tsx
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { keywords } from "@/constants/keywords";
import { Box, Typography } from "@mui/material";
import { FastForward, FastRewind, PauseCircle } from "@mui/icons-material";

interface PlaylistSlipProps {
  onFinish?: (keyword: string) => void;
}

export default function PlaylistSlip({
  onFinish,
}: PlaylistSlipProps) {
  const [index, setIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const runningRef = useRef(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     runFakeShuffle();
  //   }, interval);

  //   return () => clearInterval(timer);
  // }, [index]);

  const indexRef = useRef(0);

  const runFakeShuffle = () => {
    if (runningRef.current) return;
    runningRef.current = true;

    const totalSteps = keywords.length;
    const speed = 120;

    let count = 0;
    let tempIndex = indexRef.current;

    const loop = setInterval(() => {
      tempIndex = (tempIndex + 1) % keywords.length;

      setDisplayIndex(tempIndex);
      setAnimKey((k) => k + 1);

      count++;

      if (count >= totalSteps) {
        clearInterval(loop);

        const next = (indexRef.current + 1) % keywords.length;
        indexRef.current = next; // update ref
        setIndex(next);
        setDisplayIndex(next);
        setAnimKey((k) => k + 1);

        if (onFinish) onFinish(keywords[next].name);

        runningRef.current = false;
      }
    }, speed);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     runFakeShuffle();
  //   }, interval);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    const current = keywords[index];
    const ms = (current.duration ?? 180) * 1000;

    const timer = setTimeout(() => {
      runFakeShuffle();
    }, ms);

    return () => clearTimeout(timer);
  }, [index]);

  const center = keywords[displayIndex];
  const top = keywords[(displayIndex - 1 + keywords.length) % keywords.length];
  const bottom = keywords[(displayIndex + 1) % keywords.length];

  const handleClick = () => {
    if (center) {
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        center.slug
      )}`;
      window.open(url, "_blank");
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: 80,
        width: "100%",
        px: 16,
        pt: 12,
        pb: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", position: "relative" }}>
        <motion.div
          key={`top-${top.id}-${animKey}`}
          initial={{ y: -115, opacity: 0 }}
          animate={{ y: -65, opacity: 0.5, scale: 0.96 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.12 }}
          style={{
            position: "absolute",
            left: 8,
            right: 8,
            height: 56,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: 18,
            boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              px: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <img
                  width={30}
                  height={30}
                  src={top.thumbnail}
                  alt="thumbnail"
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif !important",
                  color: "#F4D793",
                  fontWeight: "medium",
                }}
              >
                {top.name}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FastRewind sx={{ color: "white" }} />
              <PauseCircle sx={{ color: "white" }} />
              <FastForward sx={{ color: "white" }} />
            </Box>
          </Box>
        </motion.div>

        <motion.div
          key={`center-${center.id}-${animKey}`}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.12 }}
          onClick={handleClick}
          style={{
            position: "absolute",
            left: 8,
            right: 8,
            height: 72,
            background: "rgba(255,255,255,0.5)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: 22,
            fontWeight: "medium",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              px: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <img
                  width={36}
                  height={36}
                  src={center.thumbnail}
                  alt="thumbnail"
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif !important",
                  color: "#F4D793",
                  fontWeight: "medium",
                }}
              >
                {center.name}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FastRewind sx={{ color: "white" }} />
              <PauseCircle sx={{ color: "white" }} />
              <FastForward sx={{ color: "white" }} />
            </Box>
          </Box>
        </motion.div>

        <motion.div
          key={`bottom-${bottom.id}-${animKey}`}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 80, opacity: 0.5, scale: 0.96 }}
          exit={{ y: 160, opacity: 0 }}
          transition={{ duration: 0.12 }}
          style={{
            position: "absolute",
            left: 8,
            right: 8,
            height: 56,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: 18,
            boxShadow: "0 4px 18px rgba(0,0,0,0.30)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <img
                  width={30}
                  height={30}
                  src={bottom.thumbnail}
                  alt="thumbnail"
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif !important",
                  color: "#F4D793",
                  fontWeight: "medium",
                }}
              >
                {bottom.name}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FastRewind sx={{ color: "white" }} />
              <PauseCircle sx={{ color: "white" }} />
              <FastForward sx={{ color: "white" }} />
            </Box>
          </Box>
        </motion.div>
      </div>
    </Box>
  );
}
