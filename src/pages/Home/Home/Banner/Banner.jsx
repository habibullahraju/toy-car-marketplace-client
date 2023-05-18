import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-black relative'>
                <img className='w-full h-[700px] object-cover object-bottom opacity-50' src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=918&q=80" alt="banner image" />
                <div className='absolute top-10 md:top-1/3 text-white px-10 space-y-6'>
                    <h2 className='text-center text-5xl md:text-6xl font-bold leading-tight'>Discover a World of Joy and Play with Our Spectacular <span className='text-[#E74646]'>Toy Car Assortment</span>!</h2>
                    <p className='text-center'>Discover a world of thrilling toy cars that inspire imagination and deliver non-stop fun. From sleek racers to rugged off-roaders, our collection fuels excitement and endless play possibilities. Start the adventure now!</p>
                   <div className='text-center '>
                   <button className='btn bg-[#E74646] px-10  border-none'>Shop Now</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;