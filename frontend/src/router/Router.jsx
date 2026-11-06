import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/frontpage/Index";
import Documents from "../pages/navpages/Documents";
import Notifications from "../pages/navpages/Notifications";
import Login from "../pages/navpages/Login";
import Contact from "../pages/navpages/Contact";
import Terms_condition from "../pages/navpages/Terms_condition";
import Forget_pass from "../pages/navpages/Forget_pass";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/notifications" element={<Notifications />} />
        {/* <Route path="/instructions" element={<Instructions />} />
        <Route path="/how-to-apply" element={<HowToApply />} /> */}
        <Route path="/login" element={<Login />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/termscondition" element={<Terms_condition />} />
        <Route path="/forgetpass" element={<Forget_pass />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;