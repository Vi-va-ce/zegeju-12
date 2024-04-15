import React from "react";
import styles from "../../style";
import TestNav from "../TestNav";
import Profile from "./Profile"
import DashboardHero from "./DashboardHero";


const DashMain= () => (
<div className="">

  <div className={`gradient-backgroundtwo ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <div className="pt-12">
        <TestNav/>
        </div>
        </div>
  <div>

  </div>
  </div>
  <div className="dashboard-background">
    <div className={` ${styles.boxWidth}`}>
        <div className="dashboard-hero-container ">
          <DashboardHero/>
           
        </div>   
    </div>
  </div>

    </div>
     

    

);

export default DashMain

