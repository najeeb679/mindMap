import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { COLOR } from "@muc/constant";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CartDrawer } from "@muc/components";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = "100vw";
const navItems = [
  { title: "About", path: "/About" },
  { title: "Treatment", path: "/treatment" },
  { title: "Plans & Pricing", path: "/plans & Pricing" },
  { title: "Updates", path: "/Updates" },
  { title: "info@mysite.com", path: "info@mysite.com" },

  { title: "LogIn", path: "logIn" },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);




  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemText
              style={{ textAlign: "center" }}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );


  
  

  return (
    <Box sx={{ display: "flex" ,height:'70px',}}>
      <AppBar
        component="nav"
        style={{
          backgroundColor: COLOR.white,
          color: COLOR.darkBlack,
          height: "70px",
          boxShadow:'none'
        }}
      >
        <Toolbar sx={{ color: COLOR.darkBlack,  }}>
        
          <Box
           
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <NavLink
              to="/"
              
              style={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                textDecoration:'none',
                color:COLOR.darkBlack
              }}
            >
              <Box mr={3}>
                <img src="assets/Images/logo.png" alt="Logo" />
              </Box>
              <Typography whiteSpace={"nowrap"}>
                <span style={{ fontSize: "24px" }}> Olivia Myers</span>

                <br />
                <span style={{ fontWeight: "300", fontSize: "14px" }}>
                  Reiki Master
                </span>
              </Typography>
            </NavLink>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, textWrap: "nowrap" }}
          >
           {navItems.map((item) => (
  <NavLink
    to={item.path}
    key={item.title}
    style={({ isActive }) => ({
      textDecoration: "none",
      padding: "0 15px",
      fontSize: "15px",
      color: isActive ? COLOR.lightOrange : COLOR.darkBlack,
    })}
  >
    {item.title}
  </NavLink>
))}

          </Box>
          <Box sx={{ display: "flex",alignItems:'center', marginLeft:'auto', justifyContent:'center', flexWrap: "nowrap" }}>
            <AccountCircleIcon sx={{ marginRight: "15px",display: { xs: "none",sm:'block ' }  }} />
            <CartDrawer  />
            <IconButton
         aria-label="open drawer"
         edge="start"
         onClick={handleDrawerToggle}
         sx={{ mr: 2,marginLeft:'auto', display: { sm: "none" } }}
       >
         <MenuIcon />
       </IconButton >
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
