import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


function Root () {



    return (
        <>
    <Navigation/>
    <Outlet/>
    </>
    )
}
export default Root