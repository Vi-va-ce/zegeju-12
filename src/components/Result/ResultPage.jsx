import React from "react";
import styles from "../../style";

import TestNav from "../TestNav";
import ResultBoard from '../../components/ResultBoard'

const ResultPage = () => (
<div className="gradient-background unscroll ">

  <div className={` ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
      <div className="pt-12">
        <TestNav/>
        </div>
      </div>
      </div>

      <div className={`md:ml-[200px] mb-8`}>
        <div className={``}>
          <ResultBoard/>
           
         
        </div>
      </div>

    </div>
     

    

);

export default ResultPage