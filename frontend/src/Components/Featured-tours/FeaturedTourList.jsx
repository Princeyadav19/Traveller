import React from 'react'
import tourData from '../../assets/data/tours.js';
import TourCard from '../../shared/TourCard';
import {Col} from 'reactstrap';
const FeaturedTourList = () => {
  return (
    <>
        {
            tourData?.map((tour,index)=>(
                <Col lg='3' className='mb-4' key={tour.id}>
                    <TourCard tour={tour} />
                </Col>
            )) 
        }
    </>
  )
}

export default FeaturedTourList