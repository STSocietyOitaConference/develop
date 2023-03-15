import React from "react";
import Title from "./components/Title";
import WhatNew from "./components/WhatNew";
import IntroVideo from "./components/IntroVideo";
import Greeting from "./components/Greeting";
import Summary from "./components/Summary";
import Program from "./components/Program";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Downloads from "./components/Downloads";
import AbstractRegistration from "./components/AbstractRegistration";
import Inquiry from "./components/Inquiry";
import Advertisement from "./components/Advertisement";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function Main(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "紹介VTR",
          "会長挨拶",
          "概要",
          "プログラム",
          "スケジュール",
          "参加登録",
          "演題登録",
          "各種ダウンロード",
          "問い合わせ",
          "広告",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`#item_${index}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div style={{ marginLeft: "0%" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#25C49F" }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              日本言語聴覚士協会
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Grid
            container
            spacing={12}
            direction="column"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Title />
            </Grid>
            <Grid item>
              <WhatNew />
            </Grid>
            <Grid item>
              <IntroVideo />
            </Grid>
            <Grid item>
              <Greeting />
            </Grid>
            <Grid item>
              <Summary />
            </Grid>
            <Grid item>
              <Program />
            </Grid>
            <Grid item>
              <Schedule />
            </Grid>
            <Grid item>
              <Registration />
            </Grid>
            <Grid item>
              <AbstractRegistration />
            </Grid>
            <Grid item>
              <Downloads />
            </Grid>
            <Grid item>
              <Inquiry />
            </Grid>
            <Grid item>
              <Advertisement />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Main;
