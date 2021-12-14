import React from 'react'
import Slider from '../../components/slider/Slider'
import Heading from '../../components/heading/Heading'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='home-page'>
            <Slider /><br/><br/>
            <Heading trendingShoes/>           
            <CollectionOverview />      {/* collections of shoes */}
        </div>
    )
}

export default Homepage