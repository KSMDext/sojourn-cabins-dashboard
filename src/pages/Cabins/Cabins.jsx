import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent,  Edit,ExcelExport, PdfExport, ContextMenu,ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import cabin1 from '../../data/cabin1.jpeg';
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';
import cabin2 from '../../data/cabin2.jpeg';
import { Link } from "react-router-dom";

import { useState } from 'react';

const Cabins = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const editing = { allowDeleting: true, allowEditing: true };
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


  const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];
  





  const cabinGridImage = (props) => (
    <div className="image flex gap-10">
      <img className=" h-20 md:ml-3" src={props.CabinImage} alt="cabin" />
    </div>
  );

  const gridCabinStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );

  const gridCabinMenu = () => (
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

  const cabinsGrid = [
    { headerText: '', width: '120', template: cabinGridImage, textAlign: 'Center' },
    { field: 'CabinName', headerText: 'CabinName', width: '145', textAlign: 'Center' },
    { field: 'Facility', headerText: 'Facility', width: '150', textAlign: 'Center' },
    { field: 'ExtraCharges', headerText: 'Extra Charges', width: '140', textAlign: 'Center' },
    { field: 'Rate', headerText: 'Rate', width: '140', textAlign: 'Center' },
    { field: 'Status', headerText: 'Status', width: '140', textAlign: 'Center', template: gridCabinStatus },
    { field: 'Menu', headerText: '', width: '50', template: gridCabinMenu },
  ];

  const cabinsData = [
    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 1',
      Facility: 'Ac, Shower, Wifi',
      CabinImage: cabin1,
      Status: 'Booked',
      StatusBg: '#8BE78B',
      CabinType: 'Standard',
      ExtraCharges: 'Splash pool, Tourism',
      Rate: '$100',
      Menu: '.',
    },
    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 2',
      Facility: 'Ac, Shower, Wifi',
      ProjectName: 'Weekly WP Theme',
      Status: 'UnBooked',
      CabinImage: cabin2,
      StatusBg: 'red',
      CabinType: 'Double',
      ExtraCharges: 'Grill, Tourism',
      Rate: '$150',
    },
  ];
  const itemsPerPage = 10;
  const totalPages = Math.ceil(cabinsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = cabinsData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white ">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Cabins</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
        <Link to='/addreservation'>
        <span className="mr-2">+</span>Add Cabins
</Link>
        </button>
      </div>
      <GridComponent dataSource={visibleData} enableHover={false}
       allowExcelExport
       allowPdfExport
       contextMenuItems={contextMenuItems}
       editSettings={editing}>
     
        <ColumnsDirective>
          {cabinsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, ContextMenu, ExcelExport, Edit, PdfExport]} />
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

export default Cabins;
