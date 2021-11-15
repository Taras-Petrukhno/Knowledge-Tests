import styles from "../сss-modules/Main.module.css";
// Components
import Sun from '../components/Sun'

const Main = () => {
  return (
    <div className={styles.main}>
      <div id={styles.ticker}>
        <p>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</p>
        <p>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</p>
      </div>

      <header>
        <div id={styles.burgerMenu}></div>

        <div id={styles.logo}>LOGO</div>

        <div id={styles.lang}>
          <span>👅</span>
          <ul>
            <li>EN</li>
            <li>UA</li>
            <li>RU</li>
          </ul>
        </div>

        <nav>
          <a href="#" id={styles.where}>
            where?
          </a>
          <a href="#" id={styles.who}>
            who?
          </a>
          <a href="#" id={styles.what}>
            what?
          </a>
        </nav>
      </header>
      <Sun styles={styles} />
    </div>
  );
};

export default Main;
