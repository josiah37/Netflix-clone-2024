import React from "react";
import netflixLogo from "../../assets/netflix-3.svg";
import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
   return (
      <>
         <div className={styles.Header}>
            <nav>
               <img src={netflixLogo} width="70px" alt="netflix Logo" />
               <ul>
                  <li>
                     <a href="">Home</a>
                  </li>
                  <li>
                     <a href="">Tv shows</a>
                  </li>
                  <li>
                     <a href="">Movies</a>
                  </li>
                  <li>
                     <a href="">Latest</a>
                  </li>
                  <li>
                     <a href="">My List</a>
                  </li>
                  <li>
                     <a href="">Browse by Languages</a>
                  </li>
               </ul>
            </nav>

            <div className={styles.rightIcons}>
               <li>
                  <SearchIcon />
               </li>

               <li>
                  <NotificationsIcon />
               </li>

               <li>
                  <PersonIcon />
               </li>

               <li>
                  <ArrowDropDownIcon />
               </li>
            </div>
         </div>
      </>
   );
};

export default Header;
