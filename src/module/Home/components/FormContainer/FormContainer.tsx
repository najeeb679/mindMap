
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { COLOR } from "@muc/constant";

const FormContainer = () => {
  const FormData = [
    { label: "First Name" },
    { label: "Last Name" },
    { label: "Email" },
    { label: "Subject" },
    { label: "Message" },
  ];

  return (
    <>
      <Grid container>
        <Grid
          item
          sm={6}
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box padding={{ xs: 1 }}>
            <Typography
              variant="body1"
              fontSize={{ md: "40px", sm: "30px", xs: "25px" }}
              color={COLOR.lightBlack}
              mb={3}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              fontSize={{ md: 18, xs: 13 }}
              color={COLOR.darkBlack}
            >
              500 Terry Francine Street San Francisco, CA 94158
            </Typography>
            <Typography mb={8} variant="body1" color={COLOR.darkBlack}>
              info@mysite.com
            </Typography>

            <Box display={"flex"} maxWidth={'460px'} flexWrap={"wrap"} gap={2}>
              {FormData.map((item, i) => (
                <Box
                  key={i}
                  width={
                    i === 4
                      ? { md: "460px", xs: "100%" }
                      : { md: "220px", xs: "100%" }
                  }
                >
                  <Typography variant="body1" mb={3} mt={1}>
                    {item.label}
                  </Typography>
                  <TextField
                    id="filled-basic"
                    multiline
                    variant="standard" 
                    fullWidth
                    rows={i === 4 ? 4 : 1}
                    // sx={{ width: i === 4 ? '100%' : {sm:'220px',xs:'100%'} }}
                  />
                </Box>
              ))}
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "16px",
                padding: "10px",
                width: "100%",
                color: COLOR.white,
                backgroundColor: COLOR.darkBlack,
                ":hover": {
                  backgroundColor: COLOR.white,
                  color: COLOR.darkBlack,
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            src="assets/Images/lipstick.jpg"
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
            alt="lipstick"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormContainer;
