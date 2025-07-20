import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import Corevalues from '../Corevalues/Corevalues';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import Newsletter from '../Newsletter/Newsletter';

export default function HomePage() {
  return (
    <div>
      <Hero/>
    <Products/>
    <Corevalues/>
    <CompanyOverview/>
     <Newsletter/>
    </div>
  )
}
