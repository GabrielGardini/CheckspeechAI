import React, {useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  TextField,
  useMediaQuery
} from '@mui/material';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";
import ReCAPTCHA from "react-google-recaptcha";
import {i18n} from "../translate/i18n";

const paises = [
    {id: "", label: ""},
    {id: "África do Sul", label: "África do Sul"},
    {id: "Albânia", label: "Albânia"},
    {id: "Alemanha", label: "Alemanha"},
    {id: "Andorra", label: "Andorra"},
    {id: "Angola", label: "Angola"},
    {id: "Anguilla", label: "Anguilla"},
    {id: "Antigua", label: "Antigua"},
    {id: "Arábia Saudita", label: "Arábia Saudita"},
    {id: "Argentina", label: "Argentina"},
    {id: "Armênia", label: "Armênia"},
    {id: "Aruba", label: "Aruba"},
    {id: "Austrália", label: "Austrália"},
    {id: "Áustria", label: "Áustria"},
    {id: "Azerbaijão", label: "Azerbaijão"},
    {id: "Bahamas", label: "Bahamas"},
    {id: "Bahrein", label: "Bahrein"},
    {id: "Bangladesh", label: "Bangladesh"},
    {id: "Barbados", label: "Barbados"},
    {id: "Bélgica", label: "Bélgica"},
    {id: "Benin", label: "Benin"},
    {id: "Bermudas", label: "Bermudas"},
    {id: "Botsuana", label: "Botsuana"},
    {id: "Brasil", label: "Brasil"},
    {id: "Brunei", label: "Brunei"},
    {id: "Bulgária", label: "Bulgária"},
    {id: "Burkina Fasso", label: "Burkina Fasso"},
    {id: "botão", label: "botão"},
    {id: "Cabo Verde", label: "Cabo Verde"},
    {id: "Camarões", label: "Camarões"},
    {id: "Camboja", label: "Camboja"},
    {id: "Canadá", label: "Canadá"},
    {id: "Cazaquistão", label: "Cazaquistão"},
    {id: "Chade", label: "Chade"},
    {id: "Chile", label: "Chile"},
    {id: "China", label: "China"},
    {id: "Cidade do Vaticano", label: "Cidade do Vaticano"},
    {id: "Colômbia", label: "Colômbia"},
    {id: "Congo", label: "Congo"},
    {id: "Coréia do Sul", label: "Coréia do Sul"},
    {id: "Costa do Marfim", label: "Costa do Marfim"},
    {id: "Costa Rica", label: "Costa Rica"},
    {id: "Croácia", label: "Croácia"},
    {id: "Dinamarca", label: "Dinamarca"},
    {id: "Djibuti", label: "Djibuti"},
    {id: "EUA", label: "EUA"},
    {id: "Egito", label: "Egito"},
    {id: "El Salvador", label: "El Salvador"},
    {id: "Emirados Árabes", label: "Emirados Árabes"},
    {id: "Equador", label: "Equador"},
    {id: "Eritréia", label: "Eritréia"},
    {id: "Escócia", label: "Escócia"},
    {
      id: "Eslováquia", label: "Eslováquia"
    },
    {
      id: "Eslovênia", label: "Eslovênia"
    },
    {
      id: "Espanha", label: "Espanha"
    },
    {
      id: "Estônia", label: "Estônia"
    },
    {
      id: "Etiópia", label: "Etiópia"
    },
    {
      id: "Fiji", label: "Fiji"
    },
    {
      id: "Filipinas", label: "Filipinas"
    },
    {
      id: "Finlândia", label: "Finlândia"
    },
    {
      id: "França", label: "França"
    },
    {
      id: "Gabão", label: "Gabão"
    },
    {
      id: "Gâmbia", label: "Gâmbia"
    },
    {
      id: "Gana", label: "Gana"
    },
    {
      id: "Geórgia", label: "Geórgia"
    },
    {
      id: "Gibraltar", label: "Gibraltar"
    },
    {
      id: "Granada", label: "Granada"
    },
    {
      id: "Grécia", label: "Grécia"
    },
    {
      id: "Guadalupe", label: "Guadalupe"
    },
    {
      id: "Guam", label: "Guam"
    },
    {
      id: "Guatemala", label: "Guatemala"
    },
    {
      id: "Guiana", label: "Guiana"
    },
    {
      id: "Guiana Francesa", label: "Guiana Francesa"
    },

    {
      id: "Guiné-bissau", label: "Guiné-bissau"
    },
    {
      id: "Haiti", label: "Haiti"
    },
    {
      id: "Holanda", label: "Holanda"
    },
    {
      id: "Honduras", label: "Honduras"
    },
    {
      id: "Hong Kong", label: "Hong Kong"
    },
    {
      id: "Hungria", label: "Hungria"
    },
    {
      id: "Iêmen", label: "Iêmen"
    },
    {
      id: "Ilhas Cayman", label: "Ilhas Cayman"
    },
    {
      id: "Ilhas Cook", label: "Ilhas Cook"
    },
    {
      id: "Ilhas Curaçao", label: "Ilhas Curaçao"
    },
    {
      id: "Ilhas Marshall", label: "Ilhas Marshall"
    },
    {
      id: "Ilhas Turks &#038; Caicos", label: "Ilhas Turks &#038; Caicos"
    },
    {
      id: "Ilhas Virgens (brit.)", label: "Ilhas Virgens (brit.)"
    },
    {
      id: "Ilhas Virgens(amer.)", label: "Ilhas Virgens(amer.)"
    },
    {
      id: "Ilhas Wallis e Futuna", label: "Ilhas Wallis e Futuna"
    },
    {
      id: "Índia", label: "Índia"
    },
    {
      id: "Indonésia", label: "Indonésia"
    },
    {
      id: "Inglaterra", label: "Inglaterra"
    },
    {
      id: "Irlanda", label: "Irlanda"
    },
    {
      id: "Islândia", label: "Islândia"
    },
    {
      id: "Israel", label: "Israel"
    },
    {
      id: "Itália", label: "Itália"
    },
    {
      id: "Jamaica", label: "Jamaica"
    },
    {
      id: "Japão", label: "Japão"
    },
    {
      id: "Jordânia", label: "Jordânia"
    },
    {
      id: "Kuwait", label: "Kuwait"
    },
    {
      id: "Latvia", label: "Latvia"
    },
    {
      id: "Líbano", label: "Líbano"
    },
    {
      id: "Liechtenstein", label: "Liechtenstein"
    },
    {
      id: "Lituânia", label: "Lituânia"
    },
    {
      id: "Luxemburgo", label: "Luxemburgo"
    },
    {
      id: "Macau", label: "Macau"
    },
    {
      id: "Macedônia", label: "Macedônia"
    },
    {
      id: "Madagascar", label: "Madagascar"
    },
    {
      id: "Malásia", label: "Malásia"
    },
    {
      id: "Malaui", label: "Malaui"
    },
    {
      id: "Mali", label: "Mali"
    },
    {
      id: "Malta", label: "Malta"
    },
    {
      id: "Marrocos", label: "Marrocos"
    },
    {
      id: "Martinica", label: "Martinica"
    },
    {
      id: "Mauritânia", label: "Mauritânia"
    },
    {
      id: "Mauritius", label: "Mauritius"
    },
    {
      id: "México", label: "México"
    },
    {
      id: "Moldova", label: "Moldova"
    },
    {
      id: "Mônaco", label: "Mônaco"
    },
    {
      id: "Montserrat", label: "Montserrat"
    },
    {
      id: "Nepal", label: "Nepal"
    },
    {
      id: "Nicarágua", label: "Nicarágua"
    },
    {
      id: "Niger", label: "Niger"
    },
    {
      id: "Nigéria", label: "Nigéria"
    },
    {
      id: "Noruega", label: "Noruega"
    },
    {
      id: "Nova Caledônia", label: "Nova Caledônia"
    },
    {
      id: "Nova Zelândia", label: "Nova Zelândia"
    },
    {
      id: "Omã", label: "Omã"
    },
    {
      id: "Palau", label: "Palau"
    },
    {
      id: "Panamá", label: "Panamá"
    },
    {
      id: "Papua-nova Guiné", label: "Papua-nova Guiné"
    },
    {
      id: "Paquistão", label: "Paquistão"
    },
    {
      id: "Peru", label: "Peru"
    },
    {
      id: "Polinésia Francesa", label: "Polinésia Francesa"
    },
    {
      id: "Polônia", label: "Polônia"
    },
    {
      id: "Porto Rico", label: "Porto Rico"
    },
    {
      id: "Portugal", label: "Portugal"
    },
    {
      id: "Qatar", label: "Qatar"
    },
    {
      id: "Quênia", label: "Quênia"
    },
    {
      id: "Rep. Dominicana", label: "Rep. Dominicana"
    },
    {
      id: "Rep. Tcheca", label: "Rep. Tcheca"
    },
    {
      id: "Reunion", label: "Reunion"
    },
    {
      id: "Romênia", label: "Romênia"
    },
    {
      id: "Ruanda", label: "Ruanda"
    },
    {
      id: "Rússia", label: "Rússia"
    },
    {
      id: "Saipan", label: "Saipan"
    },
    {
      id: "Samoa Americana", label: "Samoa Americana"
    },
    {
      id: "Senegal", label: "Dinamarca"
    },
    {id: "Serra Leone", label: "Serra Leone"},
    {
      id: "Sri Lanka", label: "Sri Lanka"
    },
    {id: "t. Kitts &#038; Nevis", label: "t. Kitts &#038; Nevis"},
    {
      id: "St. Lúcia", label: "St. Lúcia"
    },
    {
      id: "St. Vincent", label: "St. Vincent"
    },
    {
      id: "Sudão", label: "Sudão"
    },
    {
      id: "Suécia", label: "Suécia"
    },
    {
      id: "Suiça", label: "Suiça"
    },
    {
      id: "Suriname", label: "Suriname"
    },
    {
      id: "Tailândia", label: "Tailândia"
    },
    {
      id: "Taiwan", label: "Taiwan"
    },
    {
      id: "Tanzânia", label: "Tanzânia"
    },
    {
      id: "Togo", label: "Togo"
    },
    {
      id: "Trinidad &#038; Tobago", label: "Trinidad &#038; Tobago"
    },
    {
      id: "Tunísia", label: "Tunísia"
    },
    {
      id: "Turquia", label: "Turquia"
    },
    {
      id: "Ucrânia", label: "Ucrânia"
    },
    {
      id: "Uganda", label: "Uganda"
    },
    {
      id: "Uruguai", label: "Uruguai"
    },
    {
      id: "Venezuela", label: "Venezuela"
    },
    {
      id: "Vietnã", label: "Vietnã"
    },
    {
      id: "Zaire", label: "Zaire"
    },
    {
      id: "Zâmbia", label: "Zâmbia"
    },
    {
      id: "Zimbábue", label: "Zimbábue"
    }
  ]
;

const Form = () => {
  const matches = useMediaQuery('(min-width:600px)');

  //ESTILOS FORM
  const card = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  };
  const titleBox = {
    backgroundColor: '#1976d2',
    marginBottom: 4,
  };
  const title = {
    fontSize: 32,
    color: 'white'
  };
  const formControl = {
    marginBottom: 4,
  };
  const boxCaptcha = {
    display: 'flex',
    justifyContent: 'center'
  };


  const [captcha, setCaptcha] = useState(false);
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      pais: '',
      mensagem: '',
    },
    validationSchema: Yup.object().shape({
      nome: Yup.string().required(`${i18n.t('contact.nameValidation')}`),
      email: Yup.string().email(`${i18n.t('contact.emailInvalid')}`).required(`${i18n.t('contact.emailValidation')}`),
      pais: Yup.string().required(`${i18n.t('contact.countryValidation')}`),
    }),
    onSubmit: async () => {
      window.alert(`${i18n.t('contact.success')}`);
    },
  });
  const onChange = () => {
    setCaptcha(true);
  }
  const formatPhoneNumber = (val) => {
    const dd = val.substring(0, 2);
    if (val.length <= 10) {
      return `(${dd}) ${val.substring(2, 6)}-${val.substring(6, 10)}`;
    }
    return `(${dd}) ${val.substring(2, 7)}-${val.substring(7, 11)}`;
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box id={"contato"} fontFamily={'Poppins'}>
          <Card sx={card}>
            <CardContent sx={{width: matches ? '50%' : '80%'}}>
              <FormControl fullWidth sx={titleBox}>
                <h1 style={title}>
                  {i18n.t('contact.mainTitle')}
                </h1>
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={formControl}>
                <TextField
                  error={Boolean(
                    formik.touched.nome && formik.errors.nome
                  )}
                  fullWidth
                  helperText={
                    formik.touched.nome && formik.errors.nome
                  }
                  label={i18n.t('contact.name')}
                  placeholder={i18n.t('contact.name')}
                  type="text"
                  name="nome"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={formControl}>
                <TextField
                  error={Boolean(
                    formik.touched.email && formik.errors.email
                  )}
                  fullWidth
                  helperText={
                    formik.touched.email && formik.errors.email
                  }
                  label={i18n.t('contact.email')}
                  placeholder={i18n.t('contact.email')}
                  type="text"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth sx={formControl}>
                <TextField
                  error={Boolean(
                    formik.touched.pais &&
                    formik.errors.pais
                  )}
                  fullWidth
                  helperText={
                    formik.touched.pais &&
                    formik.errors.pais
                  }
                  label={i18n.t('contact.country')}
                  defaultValue={
                    formik.values.pais
                      ? formik.values.pais
                      : ''
                  }
                  onChange={formik.handleChange}
                  select
                  SelectProps={{native: true}}
                  variant="outlined"
                >
                  {paises.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.label}
                    </option>
                  ))}
                </TextField>
              </FormControl>
              {formik.values.pais === 'Brasil' ?
                <FormControl fullWidth variant="outlined" sx={formControl}>
                  <NumberFormat
                    format={formatPhoneNumber}
                    fullWidth
                    label={i18n.t('contact.phone')}
                    placeholder={i18n.t('contact.phone')}
                    type="text"
                    name="telefone"
                    value={formik.values.telefone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    customInput={TextField}
                    variant="outlined"
                  />
                </FormControl>
                : <FormControl fullWidth variant="outlined" sx={formControl}>
                  <NumberFormat
                    format="(+##) ### ### ####"
                    fullWidth
                    label={i18n.t('contact.phone')}
                    placeholder={i18n.t('contact.phone')}
                    type="text"
                    name="telefone"
                    value={formik.values.telefone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    customInput={TextField}
                    variant="outlined"
                  />
                </FormControl>}
              <FormControl fullWidth variant="outlined" sx={formControl}>
                <TextField
                  error={Boolean(
                    formik.touched.mensagem && formik.errors.mensagem
                  )}
                  helperText={formik.touched.mensagem && formik.errors.mensagem}
                  label={i18n.t('contact.message')}
                  placeholder={i18n.t('contact.message')}
                  multiline
                  rows={5}
                  name="mensagem"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  defaultValue={formik.values.mensagem}
                  variant="outlined"
                />
              </FormControl>
              <Box fullWidth variant="outlined" sx={boxCaptcha}>
                <ReCAPTCHA
                  sitekey="6LeQcaEgAAAAAF3uk5hVp-J50QHl8JEKG14CdAYd"
                  render={'explicit'}
                  onChange={onChange}
                />
              </Box>
              <Box sx={{p: 2, fontSize: 20}}>
                <input type="checkbox" id="lgpd" name="lgpd" required/>
                <label htmlFor="lgpd">{i18n.t('contact.privacy')}</label>
              </Box>
              <Divider/>
              {captcha ?
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <Button
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    startIcon={<ArrowUpward fontSize="large"/>}
                    sx={{width: 150, fontFamily: 'Poppins'}}
                    title="Cadastrar"
                  >
                    {i18n.t('contact.send')}
                  </Button>
                </Box>
                : null}
            </CardContent>
          </Card>
        </Box>
      </form>
    </>
  );
};

export default Form;
