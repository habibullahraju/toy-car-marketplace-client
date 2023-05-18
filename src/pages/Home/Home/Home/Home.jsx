import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <h3>This is home Page</h3>
        </div>
    );
};

export default Home;