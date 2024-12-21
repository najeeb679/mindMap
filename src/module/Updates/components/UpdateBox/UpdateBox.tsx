import { SearchField } from "@muc/components";
import { COLOR } from "@muc/constant";
import { Box, Grid, Typography, Button } from "@mui/material";


const UpdateBox = () => {
  return (
    <>
      <Box maxWidth={"940px"} mx={"auto"} paddingY={12}>
        <Typography variant="body1" fontSize={"28px"}>
          Groups Feed
        </Typography>
        <Typography variant="body1" mb={2} fontSize={"14px"}>
          View groups and posts below.
        </Typography>
        <Grid container>
          <Grid
            item
            md={8}
            height={"390px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            border={`2px solid ${COLOR.lightGray}`}
          >
            <Typography variant="body1">No Posts to Show</Typography>
            <Typography variant="body1" color="initial">
              {" "}
              Check out the available groups for you to join and start posting.
            </Typography>
          </Grid>
          <Grid
            item
            md={3.5}
            ml={"auto"}
            height={"250px"}
            position={"sticky"}
            top={"10%"}
            padding={2}
            border={`2px solid ${COLOR.lightGray}`}
          >
            <SearchField />

            <Typography
              variant="body1"
              fontSize={"12px"}
              fontWeight={"500"}
              my={2}
            >
              Suggested Groups
            </Typography>
            <Box display={"flex"} position={"relative"}>
              <Box
                mr={"12px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img
                  src="assets/Images/lipstick.jpg"
                  width={"40px"}
                  height={"40px"}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="body1">
                  Information and Update
                  <br />
                  <span style={{ fontSize: "13px" }}> Public . 1 member</span>
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "7%",
                  height: "40px",
                  width: "90px",
                  whiteSpace: "nowrap",
                  backgroundColor: COLOR.darkBlack,
                  opacity: "0",
                  ":hover": {
                    opacity: "100%",
                    borderRadius: "none",
                  },
                }}
              >
                Join Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateBox;
