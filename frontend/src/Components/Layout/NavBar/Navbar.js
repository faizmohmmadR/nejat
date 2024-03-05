import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSearch = (event) => {
    // Handle search functionality here
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          {isSmallScreen ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Your Website Name
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  sx={{ mr: 2 }}
                  onChange={handleSearch}
                />
                <IconButton color="inherit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                Services
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 250 }}>
          <Toolbar>
            <IconButton onClick={handleDrawerClose}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
