import { Link } from "react-router-dom";

import React, { useState } from "react";
import TopNav from "../../components/layout/topnav.component";
import MegaMenu from "../../components/layout/megamenu.component";





export default function AllProducts() {


  return (
    <>
     <TopNav />
    
     <div className=" px-[20px]  xl:px-[6.208vw] 3xl:px-[10.417vw]">
     <MegaMenu/>
      </div>
    </>
   
  );
}