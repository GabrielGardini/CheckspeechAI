import React, {useEffect} from 'react';
import {Box, Modal, Typography, useMediaQuery} from '@mui/material';
import Button from "@mui/material/Button";
import CookieIcon from '@mui/icons-material/Cookie';
import {i18n} from "../../translate/i18n";

const Cookies = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matches? 400 :200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

  const [open, setOpen] = React.useState(false);
  const acceptCookies = () => {
    setOpen(false);
    localStorage.setItem('nossoCookie', 'accept');
  };
  useEffect(() => {
    if (!localStorage.nossoCookie) {
      setOpen(true);
    }
  }, []);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontFamily: 'Poppins'}} id="modal-modal-title" variant="h6" component="h2">
            {i18n.t('cookies.text')}
          </Typography>
          <Box sx={{
            flex: 'display',
            justifyContent: 'center',
          }}>
            <Button
              color="primary"
              size="large"
              variant="contained"
              onClick={acceptCookies}
              sx={{width: 150, fontFamily: 'Poppins'}}
              startIcon={<CookieIcon fontSize="large"/>}
              title="aceitar"
            >
              {i18n.t('cookies.accept')}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Cookies;
