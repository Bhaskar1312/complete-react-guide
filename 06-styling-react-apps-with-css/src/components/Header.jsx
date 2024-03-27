import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/*  inline css as css files are applied across components even if we separate them */}
      <p style={{color: 'red', alignItems: 'left'}}>A community of artists and art-lovers.</p>
      <p className={classes.p}>A community of artists and art-lovers.</p>
    </header>
  );
}
