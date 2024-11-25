import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { COLOR } from "@muc/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const SliderData = [
    {
      img: "assets/Images/docter1.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. Emma Collins",
    },
    {
      img: "assets/Images/docter2.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. John Patel",
    },
    {
      img: "assets/Images/docter3.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. Susan Martinez",
    },
    {
      img: "assets/Images/docter4.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. Michael Lee",
    },
    {
      img: "assets/Images/docter5.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. Angela Smith",
    },
    {
      img: "assets/Images/docter6.jpg",
      text: "This is your Testimonial quote. Use this space to share reviews about your store, your products and the shopping experience at your store. Get your site visitors excited to jump into action!",
      Name: "Dr. David Thompson",
    },
  ];
  const settings = {
    dots: true,
    backgroundColor: COLOR.darkBrown,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 0.5,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Box
        bgcolor={COLOR.lightOrange}
        paddingX={{md:10,sm:4,xs:'none'}}
        paddingY={10}
        sx={{
          "& .slick-dots li button:before": {
            color: COLOR.white,
            fontSize:'4px'
          },
          "& .slick-dots li.slick-active button:before": {
            color: COLOR.darkBlack,
            fontSize:'4px'
          },
        }}
      >
        <Typography
          variant="body1"
          textAlign={"center"}
          color={COLOR.lightBlack}
          mb={8}
          fontSize={{md:40,sm:30,xs:25}}
        >
          Testimonials
        </Typography>
        <Box width={{md:'90%',sm:'100%'}} marginX={{md:'auto',sm:'none'}} className="slider-container">
          <Slider {...settings}>
            {SliderData.map((item) => (
              <Card
                sx={{ backgroundColor: COLOR.lightOrange, boxShadow: "none" }}
              >
                <CardMedia
                  sx={{
                    height: {md:140,sm:90,xs:70},
                    width: {md:140,sm:90,xs:70},
                    borderRadius: "50%",
                    marginX: "auto",
                    backgroundPosition: "cover",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  image={item.img}
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    width:{md:240,sm:200,xs:100},
                    marginX: 'auto',
                    color: COLOR.white,
                  }}
                >
                  <Typography variant="body2" fontSize={{md:16,sm:13,xs:6}}> {item.text}</Typography>
                  <Typography gutterBottom variant="h5" fontSize={{md:15,sm:14,xs:10}} mt={2}>
                    {item.Name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
