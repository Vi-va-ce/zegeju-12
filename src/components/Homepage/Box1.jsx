import React from 'react';
import SATPIC from "./SATPIC.png";
import { Link } from 'react-router-dom';

function Box1({ SatData, onClickButton }) {
  const handleClick = () => {
    onClickButton('scroll');
  };

  return (
    <div>
      <div className="w-[90.03px] h-[105.82px] md:w-[240px] md:h-[299.61px]  bg-slate-200 rounded-[3.18px] md:rounded-xl relative">
      </div>

      <div className="ml-[35px] md:ml-[90px] mt-[-80px] md:mt-[-230px] absolute">
        <img className="w-[20px] h-[20px] md:w-[60px] md:h-[60px]" src={SATPIC}/>
      </div>

      <div className="md:ml-[90px] ml-[33px] md:mt-[-165px] mt-[-58px] absolute">
        <div className=" text-center text-black text-[12.76px] md:text-[28.07px] font-bold font-['Arial'] ">SAT</div>
      </div>
      
      <button className="bg-green-700 hover:bg-green-900 w-[38px] md:w-[120px] h-[16px] md:h-[55px] rounded rounded-xl absolute mt-[-33px] md:mt-[-120px] ml-[26px] md:ml-[53px]" onClick={handleClick}>
        <p className='mt-[-3.5px] md:mt-[-3px] text-[3.76px] md:text-[18.07px] text-white font-bold md:font--semibold'>{SatData}</p>
      </button>
    </div>
  );
}

export default Box1;