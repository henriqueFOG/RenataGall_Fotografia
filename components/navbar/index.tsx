// components/Navbar.tsx
import React from 'react';
import { Link as MuiLink } from '@mui/material';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfólio', path: '/portfolio' },
  { label: 'Contato', path: '/contato' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={MuiLink} href={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar color='green' >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Minha Fotógrafa
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button key={item.label} color="inherit" component={MuiLink} href={item.path}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
