'use client';

import React from 'react';
import {useParams} from "next/navigation";
import MenuItem from "@/app/components/MenuItem";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const MenuIt = () => {
    const {id} = useParams();
    return (
        <div>
            <Header/>
            <MenuItem/>
            <Footer/>
        </div>
    );
};

export default MenuIt;
