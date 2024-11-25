import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";

import { COLOR } from "@muc/constant";

const AboutMe = () => {
  const CardData = [
    {
      img: "assets/Images/pic2.jpg",
      title: "One on One Reiki Session",
      text: `Im a paragraph. Click here `,
      text2:'to add your own text and edit me.',
      Button: "Book It",
    },
    {
      img: "assets/Images/pic3.jpg",
      title: "Long Distance Reiki Session",
      text: `Im a paragraph. Click here `,
      text2:'to add your own text and edit me.',
      Button: "Book It",
    },
    {
      img: "assets/Images/pic4.jpg",
      title: "Energy and Chakra Cleanse",
      text: `Im a paragraph. Click here `,
      text2:'to add your own text and edit me.',
      Button: "Book It",
    },
  ];
  return (
    <>
      <Box bgcolor={COLOR.lightGray}>
        <Box
        
          mt={8}
          position="relative"
          display={"flex"}
          bgcolor={COLOR.lightGray}
          maxWidth={"1000px"}
          height={"540px"}
          mx={"auto"}
        >
          <Box
            position={"absolute"}
            zIndex={444}
            top={"12%"}
            left={"10%"}
            bgcolor={COLOR.white}
            width={"460px"}
            color={COLOR.darkBlack}
            height={"419px"}
            p={"20px 40px"}
          >
            <Typography variant="body1" fontSize={"40px"} mb={"40px"}>
              About ME
            </Typography>
            <Typography variant="body1" fontSize={"15px"} mb={"40px"}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text”or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </Typography>
            <Button
              variant="outlined"
              color="black"
              sx={{
                borderRadius: "0px",
                ":hover": {
                  backgroundColor: COLOR.darkBlack,
                  color: COLOR.white,
                  borderColor: COLOR.darkBlack,
                },
              }}
            >
              {" "}
              Read More
            </Button>
          </Box>
          <Box position={"absolute"} top={0} right={0}>
            <img
              src="assets/Images/pic1.jpg"
              width={560}
              height={540}
              style={{ objectFit: "cover" }}
              alt="pic1"
            />
          </Box>
        </Box>
        <Box textAlign={"center"} py={"150px"}>
          <Typography variant="body1" fontSize={{md:'40px',sm:'30px',xs:'25px'}} color={COLOR.darkBrown}>
            "A single act of kindness
            <br />
            can cause ripples of healing"
          </Typography>
          <Typography variant="body1" mt={"20px"} color={COLOR.darkBlack}>
            {" "}
            Anonymous
          </Typography>
        </Box>
        <Typography variant="h2" textAlign={"center"} fontSize={{md:40,sm:30,xs:25}} mb={10}  color={COLOR.lightBlack} > My Treatments</Typography>
        <Grid container spacing={4} padding={{md:4,sm:2,xs:0}}>
       {CardData.map((item)=>(
        <Grid item md={4} sm={6} xs={12}>
        <Card>
       <CardActionArea>
         <CardMedia
           component="img"
           height="540"
           image={item.img}
           alt="green iguana"
         />
         <CardContent sx={{height:'340px',textAlign:'center',whiteSpace:'nowrap'}} >
           <Typography fontSize={'20px'} variant="h5" component="p" my={6}>
             {item.title}
           </Typography>
           
           <Typography fontSize={'15px'} variant="body2" sx={{ color: 'text.secondary' }} mb={2}>
             {item.text}
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }} mb={6}>
             {item.text2}
           </Typography>
           <Button variant="outlined" color={COLOR.darkBlack} sx={{":hover":{
            color:COLOR.white,
            backgroundColor:COLOR.darkBlack,
            border:COLOR.darkBlack
           }}}>Book It</Button>
         </CardContent>
       </CardActionArea>
     </Card>
        </Grid>
       ))}
         
        </Grid>


        
      </Box>
    </>
  );
};

export default AboutMe;
