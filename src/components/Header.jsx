import * as React from 'react';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../components/Logo'
import {Fab, Modal, Slide, TextField, useMediaQuery, useScrollTrigger} from '@mui/material';
import {i18n} from '../translate/i18n';
import {Settings} from "@mui/icons-material";


const pages = [
  {title: i18n.t('header.page1'), route: '#solucoes'},
  {title: i18n.t('header.page2'), route: '#clientes'},
  {title: i18n.t('header.page3'), route: '#precos'},
  {title: i18n.t('header.page4'), route: '#contato'},
];

function HideOnScroll(props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  //ESTILOS DO HEADER
  const matches = useMediaQuery('(min-width:600px)');
  const matches2 = useMediaQuery('(min-width:900px)');

  const logo = {
    textAlign: 'left',
    width: matches ? 255 : 168,
    height: matches ? 64 : 42,
  };
  const box1 = {
    flexGrow: 1,
    display: {xs: 'flex', md: 'none'},
    justifyContent: 'flex-end',
  };
  const box2 = {
    flexGrow: 1,
    display: {xs: 'none', md: 'flex'},
    justifyContent: 'flex-end',
  };
  const option = {
    color: 'white',
    display: 'block',
    fontSize: 24,
    textDecoration: 'none',
    margin: 30
  };
  const optionSmall = {
    textDecoration: 'none',
    color: 'black'
  };
  const fab = {
    color: '#1976d2',
    backgroundColor: 'white',
    position: 'fixed',
    top: '90%',
    left: '95%',
    transform: 'translate(-50%, -50%)',
  };
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matches ? 400 : 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const modalBox = {
    p: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const modalText = {
    fontFamily: 'Poppins',
  };


  const I18N_STORAGE_KEY = 'i18nextLng'
  const handleSelectChange = event => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar elevation={2}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo style={logo}/>
              <Box
                sx={box1}
              >
                <IconButton
                  size="large"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {xs: 'block', md: 'none'},
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.title}
                    >
                      <Typography fontFamily={'Poppins'} textAlign="center">
                        <a href={page.route}
                           style={optionSmall}>
                          {page.title}
                        </a>
                      </Typography>
                    </MenuItem>
                    ))}
                  <MenuItem
                    key={'language'}
                  >
                    <Typography onClick={()=>handleOpen()} fontFamily={'Poppins'} textAlign="center">
                      {i18n.t('header.page5')}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={box2}>
                {pages.map((page, index) => (
                  <div key={index}>
                    <Typography fontFamily={'Poppins'} textAlign="center">
                      <a href={page.route}
                         style={option}>
                        {page.title}
                      </a>
                    </Typography>
                  </div>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {matches2 ?
        <Fab style={fab} onClick={() => {
          handleOpen()
        }} size="small" color="secondary" aria-label="add">
          <Settings/>
        </Fab>
        : null
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={{fontFamily: 'Poppins'}} id="modal-modal-title" variant="h6" component="h2">
            {i18n.t('header.modalText')}
          </Typography>
            <Box sx={modalBox}>
              <TextField
                sx={modalText}
                name="pais"
                select
                SelectProps={{native: true}}
                variant={'outlined'}
                onChange={handleSelectChange}
              >
                <option style={modalText} key={0} value={'pt-BR'}>
                  {i18n.t('header.language')}
                </option>
                <option style={modalText} key={1} value={'pt-BR'}>
                  {'pt-BR'}
                </option>
                <option style={modalText} key={2} value={'en-US'}>
                  {'en-US'}
                </option>
              </TextField>
            </Box>
        </Box>
      </Modal>
    </>
  );
};
export default Header;



