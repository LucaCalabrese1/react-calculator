import logoImg from '../assets/investment-calculator-logo.png';

const Header = function() {
  return (
    <header id="header">
      <img src={logoImg} alt="projlogo"/>
      <h1>Investment calculator</h1>
    </header>
  );
};

export default Header;
