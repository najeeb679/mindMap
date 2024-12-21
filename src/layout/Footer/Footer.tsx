import { Box, Typography } from "@mui/material";
import { COLOR } from "@muc/constant";

const Footer = () => {
  return (
    <>
      <Box
        bgcolor={COLOR.lightGray}
        paddingY={10}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <i
            className="fa-brands fa-facebook-f"
            style={{ fontSize: "20px", margin: "50px 40px" }}
          ></i>
          <i className="fa-brands fa-linkedin" style={{ fontSize: "20px" }}></i>
        </Box>
        <Typography
          variant="body1"
          fontSize={{ md: "14px", xs: "10px" }}
          fontWeight={"300"}
        >
          ©2035 by Olivia Myers. Powered and secured by{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            wix
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
