import React from "react";
import styles from "./Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
   return (
      <>
         <div className={styles.Footer}>
            <div className={styles.innerContainer}>
               <ul>
                  <li>
                     <FacebookOutlinedIcon />
                  </li>
                  <li>
                     <InstagramIcon />
                  </li>
                  <li>
                     <TwitterIcon />
                  </li>
                  <li>
                     <YouTubeIcon />
                  </li>
               </ul>
               <div className={styles.footerLinks}>
                  <div className={styles.firstCol}>
                     <li>
                        <a href="http://">Audio discription</a>
                     </li>
                     <li>
                        <a href="http://">investor relation</a>
                     </li>
                     <li>
                        <a href="http://">Legal notice</a>
                     </li>
                     <li>
                        <a href="http://">Service Code</a>
                     </li>
                  </div>

                  <div className={styles.secCol}>
                     <li>
                        <a href="http://">Help center</a>
                     </li>
                     <li>
                        <a href="http://">Jobs</a>
                     </li>
                     <li>
                        <a href="http://">cookies Prefernces</a>
                     </li>
                  </div>

                  <div className={styles.thirdCol}>
                     <li>
                        <a href="http://">Media center</a>
                     </li>
                     <li>
                        <a href="http://">Privacy</a>
                     </li>
                     <li>
                        <a href="http://">ContactUs</a>
                     </li>
                  </div>
               </div>
               <p>&copy; 1997-2004 Netflix, Inc.</p>
            </div>
         </div>
      </>
   );
};

export default Footer;
