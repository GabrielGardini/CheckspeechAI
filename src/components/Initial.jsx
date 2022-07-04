import React from 'react';
import {Box, Divider, Grid, useMediaQuery} from '@mui/material';
import { i18n } from '../translate/i18n';



const Initial = () => {
  //ESTILOS DE INITIAL
  const matches = useMediaQuery('(min-width:900px)');
  const box = {
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginTop: matches ? 10 : 5
  };
  const gridContainer = {
    p: 5,
    color: 'black',
    width: matches ? '70%' : '100%'
  };
  const title = {
    fontSize: 40,
    color: '#1976d2'
  };
  const detailBox = {
    borderWidth: 1,
    borderColor: '#1976d2',
    borderStyle: 'solid',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 5,
    backgroundColor: 'white',
    color: 'black'
  };
  const animation = {
    width: matches ? 500 : 400,
    height: matches ? 500 : 400
  };


  return (
    <>
      <Box sx={box}>
        <Grid container sx={gridContainer}>
          <Grid item md={6} xs={12}>
            <h1 style={title}>{i18n.t('initial.title')}</h1>
            <Divider/>
            <h2>{i18n.t('initial.subtitles')}</h2>
            <Box style={detailBox}>
              <h3>
                {i18n.t('initial.detail1')}
              </h3>
              <h3>
                {i18n.t('initial.detail2')}
              </h3>
              <h3>
                {i18n.t('initial.detail3')}
              </h3>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{textAlign: '-webkit-right'}}>
            <Box>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_ba013t74.json"
                speed="1"
                style={animation}
                loop={true}
                autoplay={true}>
              </lottie-player>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Initial;
