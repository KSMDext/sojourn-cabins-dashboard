import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import {Link} from "react-router-dom"
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';

import { useState } from 'react';

const ExtraCharge = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
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

  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(ExtraChargeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = ExtraChargeData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Extra Charge</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
        <Link to='/addextracharge'>
        <span className="mr-2">+</span>Add Extra Charge
</Link>
        </button>
      </div>
      <GridComponent dataSource={visibleData} enableHover={false} >
        <ColumnsDirective>
          {ExtraChargeGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
      <div className="flex justify-between mt-4 bg-ash ">
        <button
          className="bg-white rounded-full p-  flex items-center"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <IoMdArrowBack className="mr-1" />
          Previous
        </button>
        <div className="flex items-center mx-2 bg-ash rounded-lg p-1">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <span
              key={page}
              className={`mx-1 cursor-pointer ${
                page === currentPage ? 'font-bold bg-white rounded-full px-1' : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <button
          className="bg-white rounded-full p-1  flex items-center"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
          <IoArrowForward className="ml-1" />
        </button>
      </div>
    </div>
  );
    };

export default ExtraCharge;
