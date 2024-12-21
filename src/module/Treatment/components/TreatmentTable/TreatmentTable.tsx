import { COLOR } from "@muc/constant";
import { Box, Typography, Button, Divider } from "@mui/material";

const TreatmentTable = () => {
    const TreatmentTableData=[
        {
            tittle:'One on One Reiki Session',
            time:'1 hr 30 min',
            price:'$80'
        },
        {
            tittle:'Energy and Chakra Cleanse',
            time:'1 hr 30 min',
            price:'$65'
        },
        {
            tittle:'Long Distance Reiki Session',
            time:'1 hr 30 min',
            price:'$65'
        },
    ]
  return (
    <>
      
   <Box paddingY={15}>
   {TreatmentTableData.map((item,)=>(
       <Box>
        <Divider sx={{width:'940px',mx:'auto'}}/>
         <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"940px"}
        mx={"auto"}
        paddingY={5}
      >
        <Typography variant="body1" sx={{fontSize:'24px',":hover":{
            color:COLOR.gray,
cursor:'pointer'

        }}} >
          {item.tittle}
        </Typography>
        <Box pl={4}>
          <Typography variant="body1" >
        {item.time}
          </Typography>

          <Typography variant="body1" >
            {item.price}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: COLOR.darkBlack,
            padding: "0 16px",
            borderRadius: "none",
          }}
        >
          Book Now
        </Button>
       
      </Box>
      <Divider sx={{width:'940px',marginX:'auto'}}/>
       </Box>
  
  
      ))}
       
   </Box>
    </>
  );
};

export default TreatmentTable;
