import React from 'react';
import tractor from '../../../../src/assets/pngwing.com.png'

const DealOfTheDay = () => {
    return (
        <div className='bg-[#262828] grid md:grid-cols-2 items-center mt-32'>
            <div>
                <img src={tractor} alt="" />
            </div>
            <div className='text-white'>
                <h2>Deal Of The Day</h2>
                <h4>UPTO 35% OFF ON ALL OTHER BABY PRODUCTS</h4>
                <li>lorem7</li>
                <li>lorem7</li>
                <li>dfdfdfdf</li>
                <li>fdfdfdfd</li>
                <li>fdfdfdfd</li>
                <button className='btn'>Shop now</button>
            </div>
        </div>
    );
};

export default DealOfTheDay;