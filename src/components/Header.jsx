import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useScrollTrigger } from '@mui/material';
import React from 'react';

/* Elevation on scroll */
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);

  const lastScrollY = React.useRef(0);

  /* Scroll hide/show logic */
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.default' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: 'primary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <CodeIcon fontSize="small" />
          </Box>
          <Typography variant="h6" fontWeight={800}>
            Alex Johnson
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.href} onClick={handleDrawerClose}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3 }}>
        <Button variant="contained" fullWidth onClick={handleDrawerClose}>
          Hire Me
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Spacer so content doesn't go under fixed AppBar */}
      <Toolbar />

      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(16, 22, 34, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
            transform: isHeaderVisible
              ? 'translateY(0)'
              : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <CodeIcon fontSize="small" />
                </Box>
                <Typography variant="h6" fontWeight={800}>
                  Alex Johnson
                </Typography>
              </Box>

              {/* Desktop Nav */}
              <Stack
                direction="row"
                spacing={{ xs: 5, lg: 8 }}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontSize: { xs: "14px", lg: '16px' }
                }}>
                {navItems.map((item) => (
                  <Typography
                    component="a"
                    key={item.label}
                    href={item.href}
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                      transition: "all 0.2s ease-in-out",
                      fontSize: { xs: "14px", lg: "16px" },
                      textDecoration: "none",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-5px) scale(1.1)"
                      }
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>

              {/* CTA + Mobile Menu */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                  Hire Me
                </Button>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.default',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
