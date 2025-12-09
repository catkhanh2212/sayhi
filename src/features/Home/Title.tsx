/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

import { Domine } from "next/font/google";
import { Box, Typography } from "@mui/material";

export const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine",
});

function Title() {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.96 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <Typography>
          
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Title;
