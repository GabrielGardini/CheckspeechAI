import React from 'react';
import {Box, Card, useMediaQuery} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {i18n} from '../translate/i18n';


const Prices = () => {
  //ESTILOS PRICES
  const matches = useMediaQuery('(min-width:1000px)');

  const box = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontSize: matches ? 20 : 18
  };
  const cardTitle = {
    backgroundColor: '#1976d2',
    borderRadius: 2
  };
  const title = {
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: '#1976d2',
    color: 'white'
  };
  const container = {
    display: 'flex',
    flexDirection: matches ? 'row' : 'column',
    height: '100%',
    justifyContent: 'center',
  };
  const standardCard = {
    mt: '5%',
    p: 5
  };
  const standardCardTitle = {
    p: 2,
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: 2,
    textAlign: 'center'
  };
  const option = {
    fontSize: 20,
    marginBottom: 20
  };
  const standardCardPrice = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  };
  const premiumCard = {
    mt: '5%',
    p: 5,
    fontFamily: 'Poppins',
    marginBottom: 6,
  };
  const premiumCardTitle = {
    p: 2,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 2,
    textAlign: 'center'
  };
  const buttonBox = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5
  };
  const button = {
    '&:hover': {
      color: '#1976d2',
      backgroundColor: 'white',
    },
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Poppins'
  };


  return (
    <>
      <Box data-anime={"right"} id={"precos"} fontFamily={'Poppins'}>
        <Box sx={box}>
          <Card elevation={4} sx={cardTitle}>
            <h1 style={title}>
              {i18n.t('prices.mainTitle')}
            </h1>
          </Card>
        </Box>
        <Box sx={container}>
          <Container>
            <Card elevation={4} sx={standardCard}>
              <Card elevation={4} sx={standardCardTitle}>
                <h1>
                  {i18n.t('prices.card1.title1')}
                </h1>
              </Card>
              <Box sx={{p: 2}}>
                <ul>
                  <li style={option}>
                    {i18n.t('prices.card1.feature1')}
                    <p>
                      {i18n.t('prices.card1.featurePrice1')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card1.feature2')}
                    <p>
                      {i18n.t('prices.card1.featurePrice2')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card1.feature3')}
                    <p>
                      {i18n.t('prices.card1.featurePrice3')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card1.feature4')}
                    <p>
                      {i18n.t('prices.card1.featurePrice4')}
                    </p>
                  </li>
                </ul>
              </Box>
              <Card elevation={4} sx={standardCardTitle}>
                <Box sx={standardCardPrice}>
                  <h1> R$328 </h1>
                  <h5>{i18n.t('prices.card1.perYear')}</h5>
                </Box>
                <h3>{i18n.t('prices.card1.perMonth')}</h3>
              </Card>
            </Card>
          </Container>
          <Container>
            <Card elevation={4} sx={standardCard}>
              <Card elevation={4} sx={standardCardTitle}>
                <h1>{i18n.t('prices.card2.title1')}</h1>
              </Card>
              <Box sx={{p: 2}}>
                <ul>
                  <li style={option}>
                    {i18n.t('prices.card2.feature1')}
                    <p>
                      {i18n.t('prices.card2.featurePrice1')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card2.feature2')}
                    <p>
                      {i18n.t('prices.card2.featurePrice2')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card2.feature3')}
                    <p>
                      {i18n.t('prices.card2.featurePrice3')}
                    </p>
                  </li>
                  <li style={option}>
                    {i18n.t('prices.card2.feature4')}
                    <p>
                      {i18n.t('prices.card2.featurePrice4')}
                    </p>
                  </li>
                </ul>
              </Box>
              <Card elevation={4} sx={standardCardTitle}>
                <Box sx={standardCardPrice}>
                  <h1> R$499 </h1>
                  <h5>{i18n.t('prices.card2.perYear')}</h5>
                </Box>
                <h3>{i18n.t('prices.card2.perMonth')}</h3>
              </Card>
            </Card>
          </Container>
        </Box>
      </Box>
      <Container data-anime={"left"}>
        <Card elevation={4} sx={premiumCard}>
          <Card elevation={4} sx={premiumCardTitle}>
            <h1>{i18n.t('prices.card3.title1')}</h1>
          </Card>
          <Box sx={{p: 2}}>
            <ul>
              <li style={option}>
                {i18n.t('prices.card3.feature1')}
              </li>
              <li style={option}>
                {i18n.t('prices.card3.feature2')}
              </li>
              <li style={{fontSize: 20}}>
                {i18n.t('prices.card3.feature3')}
              </li>
            </ul>
            <Card elevation={4} sx={premiumCardTitle}>
              <h1>
                {i18n.t('prices.card3.price')}
              </h1>
              <Box sx={buttonBox}>
                <Button
                  href={'#contato'}
                  sx={button}
                  size="large"
                  type="submit"
                  variant="contained"
                  startIcon={<CallIcon fontSize="large"/>}
                  title="conato"
                >
                  {i18n.t('prices.card3.contact')}
                </Button>
              </Box>
            </Card>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Prices;
