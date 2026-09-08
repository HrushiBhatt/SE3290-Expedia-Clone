import { Admin } from "../features/admin/AdminFlight";
import { AdminStay } from "../features/admin/AdminStay";
import React from 'react'
import { Route, Routes } from "react-router-dom";
// import { HomePage } from "../features/home/HomePage";
import { AdminDashboard } from "../features/admin/AdminDashboard";
import { AdminProducts } from "../features/admin/AdminProducts";
import { AllHotels } from "../features/admin/AllHotels";
import { Destination } from "../features/activities/Destination";
import HomePage from "../features/home/HomePage";
import { Login } from "../features/auth/Login";
import { Register } from "../features/auth/Register";
import StayData from "../features/stays/StayData";
import CheckoutPage from "../features/checkout/CheckoutPage";
import FlightData from "../features/flights/FlightData";

export const AllRoutes = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/adminflight" element={<Admin />} />
            <Route path="/admin/adminstay" element={<AdminStay />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin/hotels" element={<AllHotels />} />
            <Route path="/ThingsToDo" element={<Destination/>}/>
            <Route path="/stay" element={<StayData />} />
            <Route path="/flight" element={<FlightData />} />
            
            <Route path="/checkout" element={<CheckoutPage/>} ></Route>
          </Routes>
        </>
      );
}

// add