import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCards from '../Navigation/HomeSectionCard/HomeSectionCards';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const HomeSectionCarousel = ({ props }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        console.log('Prev Clicked');
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => {
                console.log('Setting Active Index (Prev):', prevIndex - 1);
                return prevIndex - 1;
            });
        }
    };

    const slideNext = () => {
        console.log('Next Clicked');
        if (activeIndex < props.length - 1) {
            setActiveIndex((prevIndex) => {
                console.log('Setting Active Index (Next):', prevIndex + 1);
                return prevIndex + 1;
            });
        }
    };

    const syncActiveIndex = ({ item }) => {
        console.log('Slide Changed:', item);
        setActiveIndex(item);
    };

    const items = props.slice(0, 10).map((item, index) => (
        <HomeSectionCards key={index} props={item} />
    ));

    return (
        <div className='border'>
            <div className='relative p-5'>
                <AliceCarousel
                    key={activeIndex} // Force reinitialization on activeIndex change
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex < items.length - 1 && (
                    <Button
                        className='z-50'
                        onClick={slideNext}
                        variant='contained'
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                        }}
                        aria-label='Next'
                    >
                        <ArrowBackIosNewIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}
                {activeIndex > 0 && (
                    <Button
                        className='z-50'
                        onClick={slidePrev}
                        variant='contained'
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                        }}
                        aria-label='Previous'
                    >
                        <ArrowBackIosNewIcon sx={{ transform: 'rotate(-90deg)' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
