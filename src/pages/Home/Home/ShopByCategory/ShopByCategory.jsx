import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TractorsCar from './TractorsCar';

const ShopByCategory = () => {
  const [tractors, setTractors] = useState([]);
  const [sportsCar , setSportsCar] = useState([]);
  const [policeCar, setPoliceCar] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/tractor-car/tructor')
    .then(res => res.json())
    .then(data =>{
      setTractors(data);
    })
  },[])
  useEffect(()=>{
    fetch('http://localhost:5000/tractor-car/sportsCar')
    .then(res => res.json())
    .then(data =>{
      setSportsCar(data);
    })
  },[])
  useEffect(()=>{
    fetch('http://localhost:5000/tractor-car/policeCar')
    .then(res => res.json())
    .then(data =>{
      setPoliceCar(data);
    })
  },[])
    return (
          <div className='my-20'>
          <div>
            <h2 className='text-center font-bold text-4xl mb-16'>Shop By Category</h2>
          </div>
      <div className='text-center'>
    <Tabs>
    <TabList>
      <Tab>Tractor Car</Tab>
      <Tab>Police Car</Tab>
      <Tab>Sports Car</Tab>
    </TabList>

    <TabPanel>
      <div className='grid md:grid-cols-2 text-center lg:grid-cols-3 gap-6'>
        {
          tractors.map(tractor => <TractorsCar 
            key={tractor._id}
            tractor={tractor}
          ></TractorsCar>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2 {sportsCar.length}</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3{policeCar.length}</h2>
    </TabPanel>
  </Tabs>
        </div>
          </div>
    );
};

export default ShopByCategory;