import { COLOR } from "@muc/constant";
import { Box, Typography } from "@mui/material";
import React from "react";

const UpdateText = () => {
  return (
    <>
      <Box textAlign={"center"} paddingY={10}>
        <Typography variant="h1" mb={5} fontSize={40} color={COLOR.lightBlack}>
          {" "}
          Join The The Community

        </Typography>
        <Typography variant="body1" color="initial">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
          <br />
          or double click me to add your own content and make changes to the font.
        </Typography>
      </Box>
    </>
  );
};

export default UpdateText;
