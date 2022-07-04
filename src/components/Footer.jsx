import React from 'react';
import {Box, Divider, Grid, Typography, useMediaQuery} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BoyIcon from '@mui/icons-material/Boy';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoFooter from "./LogoFooter";
import {i18n} from "../translate/i18n";

const Footer = () => {
  const matches = useMediaQuery('(min-width:900px)');
  //ESTILOS FOOTER
  const footer = {
    overflow: 'hidden',
    width: '100%',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    fontFamily: 'Poppins',
  };
  const box = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  };
  const boxIconTitle = {
    display: 'flex',
    flexDirection: 'row',
  };
  const option = {
    color: 'black',
    fontSize: 24,
    textDecoration: 'none'
  };


  return (
    <>
      <Divider/>
      <footer style={footer}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Box
              sx={box}
            >
              <BatchPredictionIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href={'#solucoes'} style={option}>
                  {i18n.t('footer.page1')}
                </a>
              </Typography>
            </Box>
            <Box pb={{xs: 4, md: 0}} sx={boxIconTitle}>
              <BoyIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href={'#clientes'} style={option}>
                  {i18n.t('footer.page2')}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box sx={box}>
              <AttachMoneyIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href={'#precos'} style={option}>
                  {i18n.t('footer.page3')}
                </a>
              </Typography>
            </Box>
            <Box pb={{xs: 4, md: 0}} sx={boxIconTitle}>
              <CallIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href={'#contato'} style={option}>
                  {i18n.t('footer.page4')}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box sx={box}>
              <FacebookIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href="https://www.facebook.com" target="_blank" style={option}>
                  {"Facebook"}
                </a>
              </Typography>
            </Box>
            <Box sx={boxIconTitle}>
              <InstagramIcon fontSize={'large'}/>
              <Typography marginLeft={1} fontFamily={'Poppins'} textAlign="center">
                <a href="https://www.instagram.com" target="_blank"
                   style={option}>
                  {"Instagram"}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            {matches ?
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 1,
              }}
            >
              <LogoFooter/>
            </Box> : null}
            <Box marginTop={matches? 0: 2} textAlign="left" fontSize={20} fontFamily={'Poppins'}>
              CheckSpeech AI &reg; {new Date().getFullYear()}
            </Box>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
