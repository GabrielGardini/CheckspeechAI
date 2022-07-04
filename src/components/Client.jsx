import React from 'react';
import {Box, Grid, useMediaQuery} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Button from "@mui/material/Button";
import LogoClient from "./LogoClient";
import { i18n } from '../translate/i18n';

const Client = () => {
  const matches = useMediaQuery('(min-width:1000px)');
//ESTILOS
  const box = {
    fontFamily: 'Poppins',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
  };
  const gridContainer = {
    p: 5,
    color: 'white',
    width: matches ? '70%' : '100%'
  };
  const detailBox = {
    paddingLeft: 30,
    fontSize: 18,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderColor: 'aqua',
    borderStyle: 'solid',
    marginTop: 40,
  };
  const logoClient = {
    textAlign: 'center',
    width: matches ? 300 : 255,
    height: matches ? 300 : 252,
  };
  const botaoContato = {
    backgroundColor: 'white',
    fontFamily: 'Poppins',
    color: 'black',
    marginTop: 5,
    '&:hover': {
      color: '#1976d2',
      backgroundColor: 'white',
    },
  };


  return (
    <>
      <Box style={box} id={"clientes"}>
        <Grid sx={gridContainer} container spacing={5}>
          <Grid item xl={6} xs={12}>
            <h1>{i18n.t('client.title')}
              <b style={{color: 'aqua'}}>
                {i18n.t('client.orbitc')}
              </b>
            </h1>
            <h2>
              {i18n.t('client.subtitle')}
            </h2>
            <Box style={detailBox}>
              <h3>
                {i18n.t('client.detail1')}
              </h3>
              <h3>
                {i18n.t('client.detail2')}
              </h3>
            </Box>
          </Grid>
          <Grid item xl={6} xs={12} sx={{textAlign: '-webkit-center'}}>
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
              <LogoClient
                style={logoClient}
              />
            </Box>
            <h2 style={{color: 'white'}}>
              {i18n.t('client.detail3')}
            </h2>
            <Button
              href={'#contato'}
              sx={botaoContato}
              size="large"
              variant="contained"
              startIcon={<CallIcon fontSize="large"/>}
              title="conato"
            >
              {i18n.t('client.contact')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Client;
