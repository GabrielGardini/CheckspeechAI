import React from 'react';
import {Box, Card, Grid, useMediaQuery} from '@mui/material';
import { i18n } from '../translate/i18n';


const Solutions = () => {
  //ESTILOS SOLUTIONS
  const matches = useMediaQuery('(min-width:1000px)');
  const box = {
    marginY: 5,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontSize: matches ? 24 : 18
  };
  const titleCard = {
    backgroundColor: '#1976d2',
    borderRadius: 2
  };
  const title = {
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: '#1976d2',
    color: 'white'
  };
  const gridContainerWhite = {
    p: 5,
    color: 'white',
    width: matches ? '70%' : '100%',
  };
  const gridContainerBlue = {
    p: 5,
    color: '#1976d2',
    width: matches ? '70%' : '100%',
  };
  const solutionBoxBlue = {
    fontFamily: 'Poppins',
    backgroundColor: '#1976d2',
    display: 'flex',
    justifyContent: 'center',
  };
  const solutionBoxWhite= {
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <Box id={"solucoes"} data-anime={"left"}
           sx={box}>
        <Card elevation={4} sx={titleCard}>
          <h1 style={title}>
            {i18n.t('solutions.mainTitle')}
          </h1>
        </Card>
      </Box>
      <Box
        sx={solutionBoxBlue}>
        <Grid container sx={gridContainerWhite}>
          <Grid data-anime={"left"} item md={6} xs={12}>
            <h1>
              {i18n.t('solutions.title1')}
            </h1>
            <h3>
              {i18n.t('solutions.subtitle1')}
            </h3>
            <h3>
              {i18n.t('solutions.detail1')}
            </h3>
          </Grid>
          <Grid item data-anime={"image"} md={6} xs={12} sx={{textAlign: '-webkit-right'}}>
            <Box>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_z01bika0.json"
                speed="1"
                style={{width: 300, height: 300}}
                loop={true}
                autoplay={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={solutionBoxWhite}>
        <Grid container sx={gridContainerBlue}>
          <Grid item data-anime={"image"} md={6} xs={12} sx={{textAlign: '-webkit-left'}}>
            <Box>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_vjysv46c.json"
                speed="1"
                style={{width: 300, height: 300}}
                loop={true}
                autoplay={true}
              />
            </Box>
          </Grid>
          <Grid item data-anime={"right"} md={6} xs={12}>
            <h1>
              {i18n.t('solutions.title2')}
            </h1>
            <h3>
              {i18n.t('solutions.subtitle2')}
            </h3>
            <h3>
              {i18n.t('solutions.detail2')}
            </h3>
          </Grid>
        </Grid>
      </Box>
      <Box sx={solutionBoxBlue}>
        <Grid container sx={gridContainerWhite}>
          <Grid data-anime={"left"} item md={6} xs={12}>
            <h1>
              {i18n.t('solutions.title3')}
            </h1>
            <h3>
              {i18n.t('solutions.subtitle3')}
            </h3>
          </Grid>
          <Grid item data-anime={"image"} md={6} xs={12} sx={{textAlign: '-webkit-right'}}>
            <Box>
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_holcet7m.json"
                speed="1"
                style={{width: 300, height: 300}}
                loop={true}
                autoplay={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={solutionBoxWhite}>
        <Grid container sx={gridContainerBlue}>
          <Grid data-anime={"image"} item md={6} xs={12} sx={{textAlign: '-webkit-left'}}>
            <Box>
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_15btieym.json"
                speed="1"
                style={{width: 300, height: 300}}
                loop={true}
                autoplay={true}
              />
            </Box>
          </Grid>
          <Grid data-anime={"right"} item md={6} xs={12}>
            <h1>
              {i18n.t('solutions.title4')}
            </h1>
            <h3>
              {i18n.t('solutions.subtitle4')}
            </h3>
            <h3>
              {i18n.t('solutions.detail4')}
            </h3>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Solutions;
