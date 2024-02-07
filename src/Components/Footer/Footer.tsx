import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box p={"1rem"} display="flex" justifyContent="center">
      <Typography variant="caption" textAlign='center'>
        © {new Date().getFullYear()}. All Rights Reserved to Nawoda Jayasinghe.
      </Typography>
    </Box>
  );
};

export default Footer;
