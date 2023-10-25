import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/home/Home.jsx';
import Product from './../pages/product/Product.jsx';
import Pricing from './../pages/pricing/Pricing.jsx'
import PageNotFound from "./../pages/not_found/PageNotFound.jsx";
import Login from './../pages/login/Login.jsx';
import AppLayout from "../pages/app_layout/AppLayout.jsx";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />} >
                        <Route index element={<Navigate replace to="cities" />} />
                        <Route path="cities" element={<p>List Of Cities</p>} />
                        <Route path="countries" element={<p>List Of Countries</p>} />
                        <Route path="form" element={<p>Form</p>} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};