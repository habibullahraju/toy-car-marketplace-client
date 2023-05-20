import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../../Gallery/Gallery';
import useTitle from '../../../../hooks/useTitle';
import PlushCar from '../../PlushCar/PlushCar';
import DealOfTheDay from '../../DealOfTheDay/DealOfTheDay';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <PlushCar></PlushCar>
            <DealOfTheDay></DealOfTheDay>
            <h3>This is home Page</h3>
        </div>
    );
};

export default Home;