import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { FaEllipsisV } from 'react-icons/fa';

import location1 from '../../data/location1.jpeg';
import location2 from '../../data/location2.jpeg';
import location3 from '../../data/location3.jpeg';
import location4 from '../../data/location4.jpeg';
import location5 from '../../data/location5.jpeg';
import location6 from '../../data/location6.jpeg';
import location7 from '../../data/location7.jpeg';
import { useState } from 'react';


const Location = () => {

const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

const handleMenuClick = (menuItem) => {
  // Handle the menu item click event
  switch (menuItem) {
    case 'Delete':
      console.log('Delete clicked');
      // Add your delete logic here
      break;
    case 'Edit':
      console.log('Edit clicked');
      // Add your edit logic here
      break;
    default:
      break;
  }
};

const gridLocationImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.LocationImage}
      alt="location-item"
    />
  </div>
);



const gridLocationMenu = () => (
  <div className="menu-container">
    <button onClick={toggleMenu} className="menu-button">
      <FaEllipsisV /> {/* Replace with the desired menu button icon */}
    </button>
    {showMenu && (
      <div className="dropdown-menu">
        <button onClick={() => handleMenuClick('Delete')} className="dropdown-menu-item">
          Delete
        </button>
        <button onClick={() => handleMenuClick('Edit')} className="dropdown-menu-item">
          Edit
        </button>
      </div>
    )}
  </div>
);

 const locationsGrid = [
  {
    headerText: 'Location',
    template: gridLocationImage,
    textAlign: 'Center',
    width: '120',
  },

  {
    field: 'Location',
    headerText: 'Location Address',
    width: '168',
    textAlign: 'Center',
  },

  { field: 'Description',
    headerText: 'Description',
    width: '220',
    textAlign: 'Center',
  },

  {
    field: 'TotalCabins',
    headerText: 'Total Cabins',
    width: '125',
    textAlign: 'Center',
  },
  
  {
    field: 'AvailableCabins',
    headerText: 'Available Cabins',
    textAlign: 'Center',
    width: '146',
  },

  {
    field: 'BookedCabins',
    headerText: 'Booked Cabins',
    width: '140',
    textAlign: 'Center',
  },
  { field: 'Menu',
   headerText: '', 
   width: '50', 
   template: gridLocationMenu },

];


 const locationsData = [
  {
    BookedCabins: 10248,
    TotalCabins: '20',

    AvailableCabins: 38,
    Description: 'Best location to release stress',
    Location: 'Tema community18', 
    LocationImage:
    location1
    },
  {
    BookedCabins: 653,
    TotalCabins: '70',
    AvailableCabins: 34,
    Description: 'Best location to release stress',
    Location: 'Delhi',
    LocationImage:
    location2  },
  {
    BookedCabins: 390457,
    TotalCabins: '50',
    AvailableCabins: 93,
    Description: 'Best location to release stress',
    Location: 'New York',
    LocationImage:
    location3  },
  {
    BookedCabins: 893486,
    TotalCabins: '40',
    AvailableCabins: 93,
    Description: 'Best location to release stress',
    Location: 'Germany',
    LocationImage:
      location4
  },
  {
    BookedCabins: 748975,
    TotalCabins: '30',
    AvailableCabins: 23,
    Description: 'Healthcare Erbology',
    Location: 'Spain',
    LocationImage:
      location4},
  {
    BookedCabins: 94757,
    TotalCabins: '30',
    AvailableCabins: 99,
    Description: 'Makeup Lancome Rouge',
    Location: 'Tema community18',
    LocationImage:
      location5},
  {
    BookedCabins: 944895,
    TotalCabins: '55',
    AvailableCabins: 17,
    Description: 'Best location to release stress',
    Location: 'USA',
    LocationImage:
      location6},
  {
    BookedCabins: 845954,
    TotalCabins: '20',
    AvailableCabins: 59,
    Description: 'Best location to release stress',
    Location: 'USA',
    LocationImage:
      location7},
 

  {
    BookedCabins: 24546,
    TotalCabins: '60',
    AvailableCabins: 84,
    Description: 'Best location to release stress',
    Location: 'Delhi',
    LocationImage:
    location1}, 
  {
    BookedCabins: 874534,
    TotalCabins: '40',
    AvailableCabins: 122,
    Description: 'Best location to release stress',
    Location: 'USA',
    LocationImage:
    location2},
];



return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl">Location</p>
          <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
            <span className="mr-2">+</span>Add Location
          </button>
        </div>
        <GridComponent dataSource={locationsData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
          <ColumnsDirective>
            {locationsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
      </div>
    );
            };
    

export default Location