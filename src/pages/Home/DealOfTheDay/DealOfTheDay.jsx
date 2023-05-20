import React from 'react';
import tractor from '../../../../src/assets/pngwing.com.png'

const DealOfTheDay = () => {
    return (
        <div className='bg-[#262828] grid md:grid-cols-2 gap-4 p-6 items-center mt-32'>
            <div>
                <img src={tractor} alt="" />
            </div>
            <div className='text-white space-y-4'>
                <h2 className='text-5xl font-bold'>Deal Of The Day</h2>
                <h4><span className='text-[#e8f40a] text-4xl'>UPTO 35% OFF</span> ON ALL OTHER TRUCTOR TOYS</h4>
                <div>
                <li>Features realistic details and design</li>
                <li>Suitable for indoor and outdoor play</li>
                <li>Durable construction for rough play</li>
                <li>Imaginative play and role-playing opportunities</li>
                <li>Promotes fine motor skills and hand-eye coordination</li>
                </div>
                <button className='btn btn-outline btn-success'>Shop now</button>
            </div>
        </div>
    );
};

export default DealOfTheDay;