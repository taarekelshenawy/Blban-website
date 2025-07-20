import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import Corevalues from '../Corevalues/Corevalues';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div>
     <Navbar/>
     <Outlet/>
    <Footer/>
    </div>
  )
}
