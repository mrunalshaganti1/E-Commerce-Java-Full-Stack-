import React from 'react'
import Carousel from '../../HomeCarousel/Carousel';
import HomeSectionCarousel from '../../../HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/shoes';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { lengha_page1 } from '../../../../../Data/Women/LenghaCholi';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';


const HomePage = () => {
  return (


    <div>
        <Carousel/>

        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel props={mens_kurta} sectionName={"Men's Kurtha"}/>
          <HomeSectionCarousel props={mensShoesPage1} sectionName={"Men's Shoes"}/>
          <HomeSectionCarousel props={lehngacholiPage2} sectionName={"Lehnga Cholis"}/>
          <HomeSectionCarousel props={lengha_page1} sectionName={"Lehngas"}/>
          <HomeSectionCarousel props={mensPantsPage1} sectionName={"Men's Pants"}/>
        </div>
    </div>
  )
}

export default HomePage