import { Link } from "react-router-dom";
import  loginbg  from "../../assets/images/auth-login-illustration-light.png";
import  shape  from "../../assets/images/bg-shape-image-light.png";
import  Logo  from "../../assets/images/logonew.png";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Password } from 'primereact/password';




export default function Login() {
    const [value, setValue] = useState('');

  return (
    <div className="bg-[#f8f7fa] h-full">
      
       <div className="grid grid-cols-12">
        <div className="col-span-8 relative">
        <div className="px-[50px] mt-20px"> <img src={Logo}  className="w-[180px] pt-[20px]"/></div>
              <div className="login-bg  flex justify-center items-center">
                     <img src={loginbg}  className="loginimg"/>
                </div>  
                <div className=" ">
                     <img src={shape}  className="bgbottom"/>
                </div>  
        </div>
        <div className="col-span-4">
            <div className="bg-white flex flex-col items-start justify-center p-16 h-full z-10">
                    <h1 className="font-semibold text-lg text-[#545454]">Welcome to Show Now! 👋</h1>
                    <p className="text-[#6d6d6d] font-normal text-md">Please sign-in to your account and start the adventure</p>

                    <div className="mt-[50px] flex flex-col w-full">
                        <label className="font-normal text-sm mb-0.5">Email or Username</label>
                        <InputText   className="p-inputtext-sm w-full" placeholder="Enter your Email or Username" />
                        <label className="font-normal text-sm mt-[20px] mb-0.5">Password</label>
                        <Password value={value} onChange={(e) => setValue(e.target.value)}  className="w-full" toggleMask />
                    </div>
                    <div className="mt-[40px] w-full ">
                    <a href="" className="flex justify-center w-full p-2 text-center text-white bg-[#0585d5] rounded-md">Sign In</a>
                    </div>
             
            </div>
        </div>

       </div>
    </div>
  );
}