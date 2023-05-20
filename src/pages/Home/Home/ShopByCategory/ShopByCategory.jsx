import React, {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TractorsCar from "./TractorsCar";
import SportsCarCard from "./SportsCarCard";
import PoliceCarCard from "./PoliceCarCard";

const ShopByCategory = () => {
  const [tractors, setTractors] = useState([]);
  const [sportsCars, setSportsCars] = useState([]);
  const [policeCars, setPoliceCars] = useState([]);

  useEffect(() => {
    fetch("https://glaze-car-server.vercel.app/tractor-car/tructor")
      .then((res) => res.json())
      .then((data) => {
        setTractors(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://glaze-car-server.vercel.app/tractor-car/sportsCar")
      .then((res) => res.json())
      .then((data) => {
        setSportsCars(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://glaze-car-server.vercel.app/tractor-car/policeCar")
      .then((res) => res.json())
      .then((data) => {
        setPoliceCars(data);
      });
  }, []);
  return (
    <div className="my-20">
      <div>
        <h2 className="text-center font-bold text-4xl mb-12">
          Shop By Category
        </h2>
      </div>
      <div className="text-center">
        <Tabs>
          <TabList>
            <Tab>Tractor Car</Tab>
            <Tab>Police Car</Tab>
            <Tab>Sports Car</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 text-center lg:grid-cols-3 gap-6">
              {tractors.map((tractor) => (
                <TractorsCar key={tractor._id} tractor={tractor}></TractorsCar>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 text-center lg:grid-cols-3 gap-6">
              {sportsCars.map((sportsCar) => (
                <SportsCarCard
                  key={sportsCar._id}
                  sportsCar={sportsCar}
                ></SportsCarCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 text-center lg:grid-cols-3 gap-6">
              {policeCars.map((policeCar) => (
                <PoliceCarCard
                  key={policeCar._id}
                  policeCar={policeCar}
                ></PoliceCarCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
