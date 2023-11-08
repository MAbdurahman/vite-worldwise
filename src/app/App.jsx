import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/home/Home.jsx';
import Product from './../pages/product/Product.jsx';
import Pricing from './../pages/pricing/Pricing.jsx'
import PageNotFound from "./../pages/not_found/PageNotFound.jsx";
import Login from './../pages/login/Login.jsx';
import AppLayout from "../pages/app_layout/AppLayout.jsx";
import CityList from "../components/city_list/CityList.jsx";
import City from "../components/city/City.jsx";
import CountryList from "../components/country_list/CountryList.jsx";
import Form from "../layouts/form/Form.jsx";
import { CitiesProvider } from "../contexts/CitiesContext.jsx";


export default function App() {


    return (
        <CitiesProvider>
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />} >
                        <Route index element={<Navigate replace to="cities" />} />
                        <Route path="cities" element={<CityList />} />
                        <Route path="cities/:id" element={<City />} />
                        <Route path="countries" element={<CountryList/>} />
                        <Route path="form" element={<Form />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </CitiesProvider>

    );
};