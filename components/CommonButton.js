import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Fade, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

export default function ResponsiveHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        {isMobile ? (
          <div className="centerContainer">
            <Button
              variant="outlined"
              onClick={handleClick}
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} passHref legacyBehavior>
                  <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
        ) : (
          <div className="centerContainer">
            <Stack spacing={2} direction="row">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} passHref legacyBehavior>
                  <Button variant="outlined">{item.label}</Button>
                </Link>
              ))}
            </Stack>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}