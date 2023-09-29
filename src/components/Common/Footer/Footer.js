import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.main_container}>
        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>COMPANY</div>
            <div className={classes.company_legal_social_itmes}>
              <Link to="aboutus">ABOUT US</Link>
            </div>
            <div className={classes.company_legal_social_itmes}>FAQ</div>
            <div className={classes.company_legal_social_itmes}>CONTACT US</div>
          </div>
        </div>

        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>LEGAL</div>
            <div className={classes.company_legal_social_itmes}>
              TERMS & CONDITIONS
            </div>
            <div className={classes.company_legal_social_itmes}>
              PRIVACY POLICY
            </div>
            <div className={classes.company_legal_social_itmes}>DISCLAIMER</div>
          </div>
        </div>

        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>SOCIAL MEDIA</div>
            <div className={classes.company_legal_social_itmes}>INSTAGRAM</div>
            <div className={classes.company_legal_social_itmes}>LINKEDLN</div>
            <div className={classes.company_legal_social_itmes}>YOUTUBE</div>
          </div>
        </div>
      </div>
      <div className={classes.copy}>
        COPYRIGHT © 2023 TAP LAPTOPGALAXY LTD. | ALL RIGHTS RESERVED
      </div>
    </React.Fragment>
  );
};

export default Footer;