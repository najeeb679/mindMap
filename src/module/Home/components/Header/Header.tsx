import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { COLOR } from "@muc/constant";

const Header = () => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box
          sx={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(assets/Images/bgImg.png)`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: " top",
            width: "100%",
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: COLOR.white,
          }}
        >
          <Typography variant="body1" fontSize={{md:'88px',sm:'60px',xs:'40px'}}>
            {" "}
            Healing Touch
          </Typography>
          <Typography my={{md:'30px',sm:'20px',xs:'15px'}} variant="body1" fontSize={{md:'22px', sm:'18px',xs:'15px'}}>
            Reiki and Energetic Treatments
          </Typography>
          <Button
            color="white"
            sx={{
              fontSize: {md:'18px',sm:'14px',xs:'10px'},
              ":hover": {
                color: "black",
                backgroundColor: "white",
                borderColor: "white",
              },
              mt: "20px",
            }}
            variant="outlined"
          >
            {" "}
            Book Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
