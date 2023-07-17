import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import {Link} from "react-router-dom"


import { useState } from 'react';

const Coupons = () => {
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

 


  const gridCouponsMenu = () => (
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

  const CouponsGrid = [
    
    { field: 'CouponID', headerText: 'Coupon ID', width: '180', textAlign: 'Center' },
    { field: 'CouponCode', headerText: 'Coupon Code', width: '150', textAlign: 'Center' },
    { field: 'StartDate', headerText: 'Start Date', width: '140', textAlign: 'Center' },
    { field: 'ExpiryDate', headerText: 'ExpiryDate', width: '140', textAlign: 'Center' },
    { field: 'Discount', headerText: '%Discount', width: '140', textAlign: 'Center' },
    { field: 'Usage', headerText: 'Usage', width: '140', textAlign: 'Center' },
    { field: '', headerText: '', width: '50', template: gridCouponsMenu },
  ];

  const CouponsData = [
    {
      CouponID: 'Kingsley Yankson',
      CouponCode: "002HDJSKS",
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Discount: '10%', 
      Usage: '0/100', 
      Menu: '.',
    },
    {
      CouponID: 'Kingsley Yankson',
      CouponCode: "001HDJSKS",
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Discount: '10%', 
      Usage: '0/100', 
      Menu: '.',
    },

    {
      CouponID: 'Abdul Aziz',
      CouponCode: "002HDJSKS",
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Discount: '10%', 
      Usage: '0/100', 
      Menu: '.',
    },

    {
      CouponID: 'Wisdom Senya',
      CouponCode: "003HDJSKS",
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Discount: '10%', 
      Usage: '0/100', 
      Menu: '.',
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Coupons</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
        <Link to='/addreservation'>
        <span className="mr-2">+</span>Add Coupons
</Link>
        </button>
      </div>
      <GridComponent dataSource={CouponsData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {CouponsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
    };

export default Coupons;
