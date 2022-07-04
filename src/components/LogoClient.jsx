import logoClient from '../Orbitc-Color.svg';

const LogoClient = (props) => <img onClick={() => window[`scrollTo`]({top: 0, behavior: `smooth`})
} alt="Logo" src={logoClient} {...props} />;

export default LogoClient;
