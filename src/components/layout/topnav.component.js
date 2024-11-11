import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import  Logo  from "../../assets/images/logo.png";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/lara-light-indigo/theme.css";

import { Checkbox } from "primereact/checkbox";

export default function TopNav(){
    const [value, setValue] = useState('');

    const mobover = useRef(null);
    const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-between  border-b drop-shadow-xs items-center bg-[#fff]  px-[20px] 
    xl:px-[6.208vw] 3xl:px-[10.417vw] py-[5px] drop-shadow-sm">
      
      <div className="">
          <img src={Logo}  className="max-w-[200px]"/>
      </div>
    
      <div className="cust_search relative"> 
      <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText placeholder="Search" />
      </IconField>
      </div>

      <div className="flex gap-[40px] items-center">
       
        <Link href="" className="text-[#666666] font-normal text-[16px]  leading-tight"><i className="pi pi-shopping-cart mr-2 text-[18px]"></i>Cart</Link>
        <Link href="" className="text-[#666666] font-normal text-[16px]  leading-tight"><i className="pi pi-heart mr-2 text-[18px]"></i></Link>
        <Link href="/login" className="text-[#fff] font-normal text-[16px] leading-tight bg-[#0585d5] py-[8px] px-[20px] rounded-[8px]">Login</Link>
    </div>
     

    

    </div>
  );
}