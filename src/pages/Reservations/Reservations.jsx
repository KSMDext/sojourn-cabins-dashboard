import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';

import avatar from '../../data/avatar.jpg';
import avatar2 from '../../data/avatar2.jpg';
import avatar3 from '../../data/avatar3.png';
import avatar4 from '../../data/avatar4.jpg';

import { useState } from 'react';

const Reservations = () => {
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

const gridPaymentStatus = (props) => {
  let buttonStyle = {
    color: props.Payment === 'Paid' ? 'green' : 'red'
  };

  return (
    <button
      type="button"
      style={buttonStyle}
       className="text-white py-1 px-2 capitalize  text-md"
    >
      {props.Payment}
    </button>
  );
};


const reservationGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.ReservationImage}
      alt="staff"
    />
    <div>
      <p>{props.ReservationName}</p>
      
    </div>
  </div>
);


const gridReservationStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p>{props.Status}</p>
  </div>
);


const gridReservationMenu = () => (
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


 const reservationsGrid = [

  { headerText: 'Name',
    width: '150',
    template: reservationGridImage,
    textAlign: 'Center' },

    {
      field: 'Phone',
      headerText: 'Phone',
      width: '130',
      
      textAlign: 'Center' },

  { field: 'Email',
    headerText: 'Email',
    headerTextSize:'300px',
    width: '160',
    textAlign: 'Center',
 },
 
  

  { field: 'CheckIn',
    headerText: 'Check-In',
    width: '125',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'CheckOut',
    headerText: 'Check-Out',
    width: '125',
    format: 'yMd',
    textAlign: 'Center' },

    { field: 'Status',
    headerText: 'Status',
    width: '125',
    textAlign: 'Center',
    template: gridReservationStatus, },

  { field: 'Payment',
    headerText: 'Payment',
    width: '100',
    textAlign: 'Center',
    template: gridPaymentStatus,
  },

  { field: 'Menu',
    headerText: '', 
    width: '50', 
    template: gridReservationMenu },

];
 const reservationsData = [
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Reserved',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-06-06',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Checked In',
    ReservationImage:
      avatar,
    Phone: '+233547932587',
    CheckIn: '2023-04-05',
    CheckOut: '2023-07-07',
  },
  
  {
    Payment: 'UnPaid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar4,
    Status: 'Checked Out',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Not Available',
    ReservationImage:
      avatar3,
    Phone: '+233547932587',
    CheckIn: '2023-04-05',
    CheckOut: '2023-07-07',
  },
 
 
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Cancelled',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  
  {
    Payment: "UnPaid",
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar,
    Status: 'Reserved',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: "UnPaid",
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Checked In',
    ReservationImage:
      avatar4,
    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
 
  
  {
    Payment: 'Paid',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status:'Checked Out',
    ReservationImage:
      avatar2,
    StatusBg: 'red',
    Phone: '+233595309592',
    CheckIn : '2023-09-02',
    CheckOut: '2023-06-07',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Not Available',
    Phone: '+233595309592',
    CheckIn : "2023-05-03",
    CheckOut: '2023-07-07',
  },

  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Cancelled',
    ReservationImage:
      avatar3,

    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
  
 
  {
    Payment: 'Paid',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    Status:'Reserved',
    ReservationImage:
      avatar4,
    StatusBg: 'red',
    Phone: '+233595309592',
    CheckIn : '2023-09-02',
    CheckOut: '2023-11-12',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Checked In',
    Phone: '+233595309592',
    CheckIn : "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Checked Out',
    ReservationImage:
      avatar,
    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
  

  {
    Payment: 'Paid',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status:'Not Available',
    ReservationImage:
      avatar2,
    StatusBg: 'red',
    Phone: '34',
    CheckIn : '2023-09-02',
    CheckOut: '2023-06-02',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Cancelled',
    Phone: '+233595309592',
    CheckIn : "20230503",
    CheckOut: '20230707',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Reserved',
    ReservationImage:
      avatar,
    Phone: '+233547932587',
    CheckIn : '20230405',
    CheckOut: '20230707',
  },
 
  {
    Payment: 'Paid',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Checked In',
    Phone: '+233595309592',
    CheckIn : "20230503",
    CheckOut: '20230707',
  },
  {
    Payment: 'Paid',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Checked Out',
    ReservationImage:
      avatar,
    Phone: '+233547932587',
    CheckIn : '20230702',
    CheckOut: '20230707',
  },
];


const itemsPerPage = 10;
const totalPages = Math.ceil(reservationsData.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const visibleData = reservationsData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div >
        <div className=" grid grid-cols-3 gap-64 ">
          <div className=" text-xl mt-4 ml-5 mr-96">Reservations</div>
          <div> </div>
          <div> 
          <button className=" text-white p-1  hover:bg-zinc-300 bg-zinc-800 rounded-md mt-4 bold text-14 w-40 ml-12 ">
            <Link to="/addreservations">
            <span className="mr-2">+</span>Add Reservation
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
              <option>Location 1</option>
              <option>Location 2</option>
              <option>Location 3</option>
          </select>
          </div>
        <div>
        <div className="m-5  mt-6 rounded-md p-2  bg-white">
        <GridComponent dataSource={visibleData} enableHover={false} >
          <ColumnsDirective>
            {reservationsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
        </div>
        <div className="flex justify-between mt-4 bg-zinc-600  h-12  items-center rounded-md p-1 m-5">
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

export default Reservations