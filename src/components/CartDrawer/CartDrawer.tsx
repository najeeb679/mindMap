import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { COLOR } from "@muc/constant";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box onClick={toggleDrawer(true)} padding={'8px'}>
        <AddShoppingCartIcon sx={{ cursor: "pointer" }} />
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ bgcolor: COLOR.gray }}
      >
        <Box width={300}>
          <Box
            bgcolor={COLOR.white}
            padding={4}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            height={"16vh"}
          >
            <Box
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <CloseIcon
                  sx={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={toggleDrawer(false)}
                />
              ) : (
                <KeyboardArrowRightIcon
                  sx={{ fontSize: "30px", cursor: "pointer" }}
                />
              )}
            </Box>
            <Typography
              variant="body1"
              fontSize="25px"
              textAlign="center"
              flexGrow={1}
            >
              Cart
            </Typography>
          </Box>
          <Box bgcolor={COLOR.lightGray} height={"84vh"}>
            <Typography variant="body1" textAlign={"center"} pt={2}>
              Cart is empty
            </Typography>
            .
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
