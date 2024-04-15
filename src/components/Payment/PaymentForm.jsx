import React, { useState } from 'react';
import axios from 'axios';
import oro from "./oro.svg";
import nib from "./nib.svg";
import cbe from './cbe.svg';
import awash from './awash.svg';
import aby from './aby.svg';
import Dashn from './Dashen.svg';
import tele from './tele.svg';
import { fp } from "../../assets";

const PaymentForm = () => {
  const [photo, setPhoto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(4);
  const images = [oro, nib, cbe, awash, aby, Dashn, tele];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
formData.append('photo', photo);

try {
  const response = await axios.post(
    'v1/student/uploadPicture',
    formData,{
    headers: {
      'Content-Type': 'application/json',
    }});

  console.log(response.data);
  // Optionally, perform additional actions after successful submission
  // For example, you can redirect to another page:
} catch (error) {
  console.error(error);
}
};
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const renderWritingAndNumber = () => {
    switch (selectedImage) {
      case 0:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'> 1691595700001</p>
          </div>
        );
      case 1:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>7000056526035</p>
          </div>
        );
      case 2:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>1000261119688</p>
          </div>
        );
      case 3:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>01320944351300</p>
          </div>
        );
      case 4:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>-------</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>-------</p>
          </div>
        );
      case 5:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'> 5208703554011</p>
          </div>
        );
      case 6:
        return (
          <div>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>Esrom Sharew</p>
            <p className='bg-white w-[250px] h-[40px] rounded-sm text-center font-semibold text-teal-950'>0928665592</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-[40px] md:mt-[]">
      <img
        src={fp}
        className="w-[90px] md:w-[130px] h-[80px] md:h-[150px] ml-[120px] md:ml-[100px]"
        alt="Logo"
      />

      <div className="text-white text-lg text-[15.18px] md:text-[16.18px] font-semibold ml-[0px] md:ml-[25px] mt-[30px] md:mt-[20px] pt">
        Pay according to the following information
      </div>

      <div className="ml-[40px] md:ml-[50px] pt-3">
      <div className="">{renderWritingAndNumber()}</div>
        <hr className="border-gray-300 w-[250px] md:h-[2px]" />
        <div className=""></div>
     
        
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto pt-4">
        <div className="form-field ml-[25px] md:ml-[42px]">
          <div className="relative">
            <p className="ml-3 md:ml-1 pb-2 text-white">upload your payment screenshot here</p>
            <input
              className="relative block w-[280px] px-3 py-2 text-base text-neutral-700 transition duration-300 ease-in-out bg-gray-100 border border-neutral-300 rounded focus:border-primary focus:ring-primary focus:outline-none focus:bg-white dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
              type="file"
              id="formFile"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
              accept="image/*"
            />
          </div>
        </div>

        <div className='pt-4 md:ml-[-13px] ml-4'>
          <div className='flex md:w-[370px]  w-[300px] h-[60px] bg-white rounded-full'>
            {images.map((image, index) => (
              <React.Fragment key={index}>
                      <img
              key={index}
              src={image}
              alt="Bank Logo"
              className={`mt-4 w-[24px] md:w-[34px] h-[24px] rounded-full hover:bg-teal-200 md:mr-[10px] mr-[20px] md:ml-4 ml-[1px] ${
                selectedImage === index ? 'bg-teal-200' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="signuppage-layout signup-button"
            >
              <p className=''>
            upload
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;