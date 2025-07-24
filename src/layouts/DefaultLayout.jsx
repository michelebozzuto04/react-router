import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}