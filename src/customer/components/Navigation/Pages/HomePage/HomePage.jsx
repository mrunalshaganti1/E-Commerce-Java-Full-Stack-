import React from 'react'
import Carousel from '../../HomeCarousel/Carousel';
import HomeSectionCarousel from '../../../HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';


const HomePage = () => {
  return (


    <div>
        <Carousel/>

        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
          <HomeSectionCarousel props={mens_kurta}/>
        </div>
    </div>
  )
}

export default HomePage