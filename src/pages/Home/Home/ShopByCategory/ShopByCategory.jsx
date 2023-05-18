import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
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
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
          </div>
    );
};

export default ShopByCategory;