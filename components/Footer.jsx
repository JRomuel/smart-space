import Newsletter from "./Newsletter";
import classes from "./Footer.module.css";
import FooterNav from "./FooterNav";

const Footer = () => (
  <>
  <div className={classes.footer}>
    <div className="rpl__footer_container">
      <Newsletter/>
      <FooterNav/>
      <div className={classes.copyright}>
        Copyright © 2021 AR Shakir . All Rights Reseved.
      </div>
    </div>
  </div>


  </>

);

export default Footer;