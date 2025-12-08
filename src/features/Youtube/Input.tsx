import { TextField } from "@mui/material";

interface InputProps {
  url: string;
}

export default function Input({ url }: InputProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <TextField
      value={url}
      variant="outlined"
      fullWidth
      onClick={handleClick}
      InputProps={{
        readOnly: true,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          cursor: "pointer",
          "& input": {
            cursor: "pointer",
            color: '#90B77D',
            fontWeight: 'medium'
          },
          borderRadius: 2,
          "& fieldset": {
            borderWidth: 4,
            borderColor: "#A94A4A",
          },
          "&:hover fieldset": {
            borderColor: "#A94A4A",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#A94A4A",
          },
        },
      }}
    />
  );
}
