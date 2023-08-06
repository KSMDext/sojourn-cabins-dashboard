import React from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent,  Edit,ExcelExport, PdfExport, ContextMenu,ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import cabin1 from '../../data/cabin1.jpeg';
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';
import cabin2 from '../../data/cabin2.jpeg';
import { Link } from 'react-router-dom'
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
      <img className="rounded-xl h-20 md:ml-3" src={props.CabinImage} alt="cabin" />
    </div>
  );


  const gridCabinStatus = (props) => {
    let buttonStyle = {
      color: props.Status === 'Available' ? 'green' : 'red'
    };
  
    return (
      <button
        type="button"
        style={buttonStyle}
         className="text-white py-1 px-2 capitalize  text-md"
      >
        {props.Status}
      </button>
    );
  };

 
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
    { headerText: '', width: '120', template: cabinGridImage, textAlign: 'Center'},
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
      Status: 'Available',
      CabinImage: cabin2,
      CabinType: 'Double',
      ExtraCharges: 'Grill, Tourism',
      Rate: '$150',
    },

    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 1',
      Facility: 'Ac, Shower, Wifi',
      CabinImage: cabin1,
      Status: 'Booked',
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
      Status: 'Available',
      CabinImage: cabin2,
      CabinType: 'Double',
      ExtraCharges: 'Grill, Tourism',
      Rate: '$150',
    },
    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 1',
      Facility: 'Ac, Shower, Wifi',
      CabinImage: cabin1,
      Status: 'Booked',
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
      Status: 'Available',
      CabinImage: cabin2,
      CabinType: 'Double',
      ExtraCharges: 'Grill, Tourism',
      Rate: '$150',
    },
  ];
  const itemsPerPage = 5;
  const totalPages = Math.ceil(cabinsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = cabinsData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <div className="grid grid-cols-3 gap-64">
            <div className=" text-xl mt-4 ml-5 mr-96">Cabins</div>
            <div></div>
            <div>
            <button className=" text-white p-1  hover:bg-zinc-600 bg-zinc-800 rounded-md mt-4 bold text-14 w-40 ml-12">
              <Link to="/addcabins">
                <span className="mr-2">+</span>Add Cabin
              </Link> 
            </button>
            </div>
            </div>
            <div className="flex gap-[665px] mt-4">
      <div className="flex items-center justify-center w-80 border rounded text-sm">    
              <input
                className="w-full px-4 py-2 rounded h-8 ml-5"
                type="text"
                placeholder=" Search..."
              />
           
          </div>
          <select  className="w-[190px] h-9 border-slate-200 border-1 rounded text-sm">
              <option>Location</option>
              <option>Location 2</option>
              <option>Location 2</option>
          </select>
          </div>
            <div>
            <div className="m-5  mt-6 rounded-md p-2  bg-white">
              <GridComponent dataSource={visibleData} enableHover={false}>
              <ColumnsDirective>
              {cabinsGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
              </ColumnsDirective>
              <Inject services={[Page]} />
              </GridComponent>

            </div>
            <div className="flex justify-between mt-4 bg-zinc-300  h-12  items-center rounded-md p-1 m-5  ">
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

export default Cabins