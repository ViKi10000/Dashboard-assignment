import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";

import LeaveBoard from "../sidebarPages/LeaveBoard";
import Training from "../sidebarPages/Training";




function MainFill() {
  return (
    <main id="main" className="main">
      <Routes>
      <Route path='/sideNav' element={<SideNav/>}/>

     <Route path='/leaveStatus' element={<LeaveBoard/>}/>
         
         <Route path="/certificate" element={<Training/>}/>
        
      </Routes>
    </main>
  );
}

export default MainFill;
