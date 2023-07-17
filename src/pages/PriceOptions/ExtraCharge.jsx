import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';

import { useState } from 'react';

const ExtraCharge = () => {
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

 


  const gridExtraChargeMenu = () => (
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

  const ExtraChargeGrid = [
    
    { field: 'Service', headerText: 'Service', width: '90', textAlign: 'Center' },
    { field: 'Price', headerText: 'Price', width: '90', textAlign: 'Center' },
    { field: 'Description', headerText: 'Description', width: '170', textAlign: 'Center' },
    { field: 'AvailableTimes', headerText: 'Available Times', width: '100', textAlign: 'Center' },
    { field: 'Menu', headerText: '', width: '40', template: gridExtraChargeMenu },
  ];

  const ExtraChargeData = [
    {
      Service: 'Massage',
      Price: "$20",
      Description: 'Soothing massage from our experts',
      AvailableTimes: 'Weekends', 
      Menu: '.',
    },
    {
      Service: 'Wifi',
      Price: "Free",
      Description: 'Free Wifi, sufficient enough for your internet needs',
      AvailableTimes: 'Alwyas', 
      Menu: '.',
    },
    {
      Service: 'Splash Pool',
      Price: "$20",
      Description: 'A clean smimming pool',
      AvailableTimes: 'Always', 
      Menu: '.',
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Extra Charge</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
          <span className="mr-2">+</span>Add Extra Charge
        </button>
      </div>
      <GridComponent dataSource={ExtraChargeData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {ExtraChargeGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
    };

export default ExtraCharge;
