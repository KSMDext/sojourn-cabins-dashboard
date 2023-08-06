import React from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';

import { useState } from 'react';

const SeasonalRule = () => {
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

 


  const gridSeasonalRuleMenu = () => (
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

  

  const SeasonalRuleGrid = [
    
    { field: 'SeasonalRule', headerText: 'Seasonal Rule', width: '180', textAlign: 'Center' },
    { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center', height:'150' },
    { field: 'Cabin', headerText: 'Cabin', width: '140', textAlign: 'Center', height:'150' },
    { field: 'StartDate', headerText: 'Start Date', width: '140', textAlign: 'Center',height:'150' },
    { field: 'ExpiryDate', headerText: 'ExpiryDate', width: '140', textAlign: 'Center', height:'150' },
    { field: 'Menu', headerText: '', width: '50', template: gridSeasonalRuleMenu },
  ];

  const SeasonalRuleData = [
    {
      SeasonalRule: 'Valentine Weekend Package',
      Location: "Location1, Location2",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Menu: '.',
    },
    {
      SeasonalRule: 'New Year',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '15/12/2022',
      ExpiryDate: '27/12/2022', 
      Menu: '.',
    },
    {
      SeasonalRule: 'New Year',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '15/12/2022',
      ExpiryDate: '27/12/2022', 
      Menu: '.',
    },
    {
      SeasonalRule: 'New Year',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '15/12/2022',
      ExpiryDate: '27/12/2022', 
      Menu: '.',
    },
    {
      SeasonalRule: 'New Year',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '15/12/2022',
      ExpiryDate: '27/12/2022', 
      Menu: '.',
    },
    {
      SeasonalRule: 'Valentine Weekend Package',
      Location: "Location1, Location2",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Menu: '.',
    },
    {
      SeasonalRule: 'Valentine Weekend Package',
      Location: "Location1, Location2",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Menu: '.',
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(SeasonalRuleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = SeasonalRuleData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <div className=" grid grid-cols-3 gap-64 ">
          <div className=" text-xl mt-4 ml-5 ">Seasonal Rule</div>
          <div> </div>
          <div> 
          <button className=" text-white p-1  hover:bg-zinc-600 bg-zinc-800 rounded-md mt-4 bold text-14 w-40 ml-12 ">
            <Link to="/addreservations">
            <span className="mr-2">+</span>Add Seasonal Rule
            </Link>
          </button>
          </div>
        </div>
        <div>
        <div className="m-5  mt-6 rounded-md p-2  bg-white">
        <GridComponent dataSource={visibleData} enableHover={false} >
          <ColumnsDirective>
            {SeasonalRuleGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
        </div>
        <div className="flex justify-between mt-4 bg-zinc-300  h-12  items-center rounded-md p-1 m-5 ">
        <button
          className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <IoMdArrowBack className="mr-1" />
          Previous
        </button>
        <div className="flex items-center mx-2 text-sm rounded-md p-2 ml-4 w-28 h-7 ">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <span
              key={page}
              className={`mx-1 cursor-pointer ${
                page === currentPage ? 'font-bold bg-white rounded-md px-2' : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <button
          className="bg-white rounded-md p-2 mr-4 w-28 h-7 text-sm flex items-center pl-8"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
          <IoArrowForward className="ml-1" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default SeasonalRule