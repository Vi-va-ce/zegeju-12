import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { search, research, trigonometry } from "../../assets";
import Ebrw from './Ebrw';
import Questionoboard from './Questionoboard';
import FirstGraph from './FirstGraph';
import UpperGraphPart from './UpperGraphPart';
import Mathimaticsboard from './Mathimaticsboard';
import Mboard from './Mboard';
import UpperGraphPart2 from './UpperGraphPart2';
import SecondGraph from './SecondGraph';
import CrossTestBoard from './CrossTestBoard';
import Dashboardbar from './Dashboardbar';
import Dashboardbar2 from './Dashboardbar2';
import PieDash from './PieDash';

function DashboardHero() {
const [dashboardData, setDashboardData] = useState(null);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/v2/student/dashBoardData');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  fetchData();
}, []);


  return (
    <>
      <div className=' ml-4 mt-3 md:pt-16 md:pl-[210px]'>
        <Ebrw />
      </div>
      <div className="hidden lg:block">
        <img src={search} alt="search" className="absolute w-[110px] h-[110px] ml-28 pb-6" />
      </div>
      <div className='md:mr-32 '>
        <Questionoboard questionData={dashboardData?.Reading_and_Writing_subscores} />
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart />
        <div className='hidden lg:block'>
          <div className='md:ml-28'>
            <div className='md:ml-96'>
              <img src={research} alt="research" className="absolute w-[110px] h-[110px]  ml-96" />
            </div>
          </div>
        </div>
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
        <FirstGraph questionData={dashboardData?.Reading_and_Writing_subscores} />
      </div>
      <div className='ml-4 mt-3 md:pt-16 md:pl-[210px]'>
        <Mathimaticsboard />
      </div>
      <div className='md:mr-32'>
        <Mboard questionData={dashboardData?.Math_subscores} />
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart2 />
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
        <div className='hidden lg:block'>
          <div className='ml-96' style={{ marginRight: "390px" }}>
            <img src={trigonometry} alt="trigonometry" className="absolute mt-56 ml-96" />
          </div>
        </div>
        <SecondGraph questionData={dashboardData?.Math_subscores} />
      </div>
      <div className=' pl-12 pt-4 md:pl-56'>
        <CrossTestBoard />
      </div>
      <div className='md:flex'>
        <div className='flex '>
        <div className=' flex md:block p-2 md:pl-[200px]'>
          <div className='p-6'>
          <Dashboardbar questionData={dashboardData?.cross_test?.science_score} />
          </div>
          <div className='mt-6 md:ml-6 '>
            <Dashboardbar2 questionData={dashboardData?.cross_test?.history_score} />
        </div>
          </div>
        </div>
        <div className='md:ml-32 '>
          <PieDash questionData={dashboardData?.cross_test} />
        </div>
      </div>
    </>
  );
}

export default DashboardHero;