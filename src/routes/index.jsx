import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/layout";
import Login from "../pages/login/login";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
