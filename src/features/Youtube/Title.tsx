import { motion } from "framer-motion";

export default function Title() {
  const baseStyle = {
    fontSize: 100,
    fontWeight: "bold",
    display: "inline-block",
    whiteSpace: "nowrap",
    margin: "0 8px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        userSelect: "none",
      }}
    >
      {/* MASS */}
      <motion.span
        style={{
          ...baseStyle,
          background: "linear-gradient(90deg, #a3d9a5, #8abf8f, #b7d3a3)",
          // background: "linear-gradient(90deg, #0a1f44, #1e3a8a, #ffffff)",
          backgroundSize: "200%",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 12px rgba(255,255,255,0.1)",
          animation: "massFlow 7s ease-in-out infinite",
        }}
        initial={{ opacity: 0, y: -20, filter: "blur(10px)", skewX: 10 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", skewX: 10 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Mass
      </motion.span>

      {/* STREAM */}
      <motion.span
        style={{
          ...baseStyle,
          background: "linear-gradient(90deg, #d46c6c, #c04848, #d88484)",
          // background: "linear-gradient(90deg, #1e3a8a, #0a1f44, #ffffff)",
          backgroundSize: "200%",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow:
            "0 0 10px rgba(255,255,255,0.15), 0 0 20px rgba(0,0,0,0.2)",
          animation: "streamFlow 7s ease-in-out infinite",
        }}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)", skewX: -10 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", skewX: -10 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      >
        Stream
      </motion.span>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes massFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes streamFlow {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
