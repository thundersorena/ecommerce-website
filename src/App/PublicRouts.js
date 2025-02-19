import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import StoreSection from "../pages/store/StoreSection";
import ProductDetail from "../pages/store/ProductDetail";
import ContactUs from "../pages/contactUs/ContactUs";

const PublicRouts = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={StoreSection} />
            <Route path="/ProductDetail" component={ProductDetail} />
            <Route path="/ContactUs" component={ContactUs} />
        </>
    );
};

export default PublicRouts;
