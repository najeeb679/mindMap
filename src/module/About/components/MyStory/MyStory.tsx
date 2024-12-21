
import { Box, Grid, Typography, Button } from "@mui/material";
import { COLOR } from "@muc/constant";

const MyStory = () => {
  return (
    <>
      <Box>
        <Grid container padding={9} bgcolor={COLOR.lightGray}>
          <Grid
            item
            md={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={COLOR.darkBrown}
          >
            <Box width={460}>
              <Typography
                mb={6}
                variant="h5"
                color={COLOR.lightBlack}
                fontSize={40}
              >
                My Story
              </Typography>
              <Typography variant="body1" fontSize={14} mb={6}>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </Typography>
              <Typography variant="body1" fontSize={14}>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="assets/Images/about1.jpg"
              width={"90%"}
              height={840}
              style={{ objectFit: "cover", objectPosition: "center center" }}
              alt=""
            />
          </Grid>
        </Grid>

        <Grid container padding={9}>
          <Grid item md={6}>
            <img
              src="assets/Images/about2.png"
              width={"90%"}
              height={840}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Grid>
          <Grid
            item
            md={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={COLOR.darkBrown}
          >
            <Box width={460}>
              <Typography
                mb={6}
                variant="h5"
                color={COLOR.lightBlack}
                fontSize={40}
              >
                My Approach
              </Typography>
              <Typography variant="body1" fontSize={14} mb={6}>
                Describe your service here. What makes it great? Use short
                catchy text to tell people what you offer, and the benefits they
                will receive. A great description gets readers in the mood, and
                makes them more likely to go ahead and book.
              </Typography>
              <Typography variant="body1" fontSize={14}>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </Typography>
              <Button
                variant="outlined"
                
                sx={{
                  color:"black",
                  ":hover": {
                    color: COLOR.white,
                    backgroundColor: COLOR.darkBlack,
                    borderColor: COLOR.darkBlack,
                  },
                  marginTop: "40px",
                  padding: "8px",
                  borderRadius: "0px",
                }}
              >
                See My Treatment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MyStory;
