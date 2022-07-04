import logo from '../logoAzul.svg';

const Logo = (props) => <img onClick={() => window[`scrollTo`]({top: 0, behavior: `smooth`})
} alt="Logo" src={logo} {...props} />;

export default Logo;
