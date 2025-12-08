import { navbars } from "@/constants/navbars";
import { Navbar as NavbarType } from "@/interfaces/Navbar";
import useNavbarStore from "@/stores/navbarStore";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const { activeItem, setActiveItem } = useNavbarStore();
  const router = useRouter()

  const handleClick = (nav: NavbarType) => {
    setActiveItem(nav.label)
    router.push(`${nav.path}`)
  }
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100%",
        width: "content-fit",
        padding: 4,
        alignItems: "center",
        gap: 4,
      }}
    >
      {navbars.map((nav, index) => (
        <Typography
          key={index}
          sx={{ 
            color: activeItem === nav.label ? "#90B77D" : "#F4D793", 
            fontSize: "20px", 
            cursor: 'pointer',
            transition: "color 0.3s ease",
            '&:hover': {
                color: "#90B77D"
            }
           }}
          onClick={() => handleClick(nav)}
        >
          {nav.label}
        </Typography>
      ))}
    </Box>
  );
}

export default Navbar;
