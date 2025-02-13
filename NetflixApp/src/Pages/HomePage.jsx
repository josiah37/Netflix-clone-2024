import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import RowLists from "../Components/Rows/RowLists/RowLists";

const HomePage = () => {
   return (
      <>
         <Header />
         <Banner />
         <RowLists />
         <Footer />
      </>
   );
};

export default HomePage;
