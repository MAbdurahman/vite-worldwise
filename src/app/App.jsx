import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/home/Home.jsx';
import Product from './../pages/product/Product.jsx';
import Pricing from './../pages/pricing/Pricing.jsx'
import PageNotFound from "./../pages/not_found/PageNotFound.jsx";
import Login from './../pages/login/Login.jsx';
import AppLayout from "../pages/app_layout/AppLayout.jsx";
import CityList from "../components/city_list/CityList.jsx";
import CountryList from "../components/country_list/CountryList.jsx";

export default function App() {
    const BASE_URL = `https://mabdurahman.github.io/questions-api/data`;
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(function() {
        async function fetchCities() {
            try {
                setIsLoading(true);
            const response = await fetch(`${BASE_URL}/cities.json`);
            const data = await response.json();
                console.log(data);
                setCities(data)

            } catch (err) {
                console.log(`Error fetching cities`, err.message)
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, [BASE_URL])

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />} >
                        {/*<Route index element={<Navigate replace to="cities" />} />*/}
                        <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
                        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
                        <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
                        <Route path="form" element={<p>Form</p>} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};