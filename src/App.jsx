import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Footer2 from "./components/Footer/Footer2";
import DefaultPage from "./components/DefaultPage";
import HomePagemain from "./components/HomePagemain";

import DMathc from "./components/ExamPages/DiagnosticExam/DMathWithCalculator/DMathc";
import Devidence from "./components/ExamPages/DiagnosticExam/DEvidenceBasedReading/Devidence";
import Dmathnc from "./components/ExamPages/DiagnosticExam/DMathWithNoCalculator/Dmathnc";
import Dwriting from "./components/ExamPages/DiagnosticExam/DWritingAndLanguage/Dwriting";

import Pevidence from "./components/ExamPages/PracticeExam/PEvidenceBasedReading/Pevidence";
import Pmath from "./components/ExamPages/PracticeExam/PMathWithCalculator/Pmath"
import Pnmath from "./components/ExamPages/PracticeExam/PMathWithNoCalculator/Pnmath";
import Pwriting from "./components/ExamPages/PracticeExam/PWritingAndLanguage/Pwriting";

import FMathc from "./components/ExamPages/FinalExam/FMathWithCalculator/FMathc";
import Fevidence from "./components/ExamPages/FinalExam/FEvidenceBasedReading/Fevidence";
import Fmathnc from "./components/ExamPages/FinalExam/FMathWithNoCalculator/Fmathnc";
import Fwriting from "./components/ExamPages/FinalExam/FWritingAndLanguage/Fwriting";


import MapApp from "./components/Map/MapApp";
import AccountApp from "./components/Map/AccountApp";
import SignupPage from "./components/SignupPage";
import OtpPage from "./components/OtpPage";
import Success from "./components/OTP/Success";
import LoginPage from "./components/LoginPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ForgetPasswordSecond from "./components/ForgetPassword/ForgetPasswordSecond";
import Payment from "./components/Payment/Payment";
import TestComplete from "./components/Messages/TestComplete";
import Aboutus from "./components/About/Aboutus";
import Cookies from "./components/Policy/Cookies";
import Terms from "./components/Policy/Terms";
import ResultPage from "./components/Result/ResultPage";
import DashMain from "./components/Dashboard/DashMain";
import Help from "./components/Help/Help";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/HomePage" || location.pathname === "/";

  const [loginStatus, setLoginStatus] = useState(false);
  const [satData, setSatData] = useState('');

  const handleLoginSuccess = () => {
    setLoginStatus(true);
  };

  const handleSatDataReceived = (data) => {
    setSatData(data);
    // Store satData in local storage
    localStorage.setItem('satData', data);
  };

  useEffect(() => {
    // Retrieve satData from local storage on component mount
    const storedSatData = localStorage.getItem('satData');
    if (storedSatData) {
      setSatData(storedSatData);
    }

    // Check satData when accessing /Map or /Payment routes
    if ((location.pathname === "/Map" || location.pathname === "/Payment") && !satData) {
      // Redirect user to homepage or any other appropriate page
      navigate("/");
    }
  }, [location.pathname, satData]);

  return (
    <div className="unscroll">
     <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/Otp" element={<OtpPage />} />
        <Route path="/Login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/Login/Forgetpassword" element={<ForgetPassword />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/Terms" element={<Terms />} />

        {satData === "See Plans" && (
          <Route path="/Payment" element={<Payment />} />
        )}

        {satData === "Continue Preparing" && (
          <Route
            path="/Map"
            element={
              <Auth>
                <MapApp />
              </Auth>
            }
          />
        )}


          <Route
            path="/Account"
            element={
              <Auth>
                <AccountApp />
              </Auth>
            }
          />
        

        <Route path="/Help" element={<Help />} />
        <Route
          path="/Login/Forgetpassword/ForgetPasswordSecond"
          element={<ForgetPasswordSecond />}
        />
        <Route
          path="/HomePage"
          element={
            <Auth>
              <HomePagemain onSatDataReceived={handleSatDataReceived} />
            </Auth>
          }
        />
        <Route
          path="/TestComplete"
          element={
            <Auth>
              <TestComplete />
            </Auth>
          }
        />
        <Route
          path="/TestComplete/Result"
          element={
            <Auth>
              <ResultPage />
            </Auth>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Auth>
              <DashMain />
            </Auth>
          }
        />
        <Route
          path="/DMath"
          element={
            <Auth>
              <DMathc />
            </Auth>
          }
        />
        <Route
          path="/Devidence"
          element={
            <Auth>
              <Devidence />
            </Auth>
          }
        />
        <Route
          path="/Dmathnc"
          element={
            <Auth>
              <Dmathnc />
            </Auth>
          }
        />
        <Route
          path="/Dwriting"
          element={
            <Auth>
              <Dwriting />
            </Auth>
          }
        />

<Route
          path="/Pevidence"
          element={
            <Auth>
              <Pevidence/>
            </Auth>
          }
        />
        <Route
          path="/Pmath"
          element={
            <Auth>
              <Pmath/>
            </Auth>
          }
        />
         <Route
          path="/Pnmath"
          element={
            <Auth>
              <Pnmath/>
            </Auth>
          }
        />
         <Route
          path="/Pwriting"
          element={
            <Auth>
              <Pwriting/>
            </Auth>
          }
        />

<Route
          path="/Fevidence"
          element={
            <Auth>
              <Fevidence/>
            </Auth>
          }
        />
        <Route
          path="/FMathc"
          element={
            <Auth>
              <FMathc/>
            </Auth>
          }
        />
         <Route
          path="/Fmathnc"
          element={
            <Auth>
              <Fmathnc/>
            </Auth>
          }
        />
         <Route
          path="/Fwriting"
          element={
            <Auth>
              <Fwriting/>
            </Auth>
          }
        />


        <Route
          path="/payment"
          element={
            <Auth>
              <Payment />
            </Auth>
          }
        />
        <Route path="/ResultBoard" element={<ResultPage/>} />
      </Routes>

      {!isHomepage && <Footer2 />}
    </div>
  );
};

export default App;