import { Stack, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIconGroup = () => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <div className="icon-container">
      <IconButton href="https://x.com" target="_blank" rel="noopener noreferrer">
        <XIcon fontSize="large" color="primary"/>
      </IconButton>
      <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize="large" color="primary"/>
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="large" color="primary"/>
      </IconButton>
      </div>
    </Stack>
  );
};

export default SocialIconGroup;
