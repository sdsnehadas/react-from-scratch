import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <div className="footer">
      <IconButton color="inherit" aria-label="facebook">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="twitter">
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="instagram">
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="call">
        <CallIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
