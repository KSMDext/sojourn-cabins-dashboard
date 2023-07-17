import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { FaEllipsisV } from 'react-icons/fa';
import {Link} from "react-router-dom"


import avatar from '../../data/avatar.jpg';
import avatar2 from '../../data/avatar2.jpg';
import avatar3 from '../../data/avatar3.png';
import avatar4 from '../../data/avatar4.jpg';

import { useState } from 'react';


const Reservations = () => {

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

 const gridPaymentStatus = (props) => (
  <button
    type="button"
    style={{ color: props.PaymentBg }}
    // className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Payment}
  </button>
);
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
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
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
    width: '160',
    textAlign: 'Center' },
 
  

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
    PaymentBg: '#8BE78B',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-06-06',
  },
  {
    Payment: 'PAID',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn: '2023-04-05',
    CheckOut: '2023-07-07',
  },
  
  {
    Payment: 'UnPaid',
    PaymentBg: 'red',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar4,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar3,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn: '2023-04-05',
    CheckOut: '2023-07-07',
  },
 
 
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  
  {
    Payment: "UnPaid",
    PaymentBg: 'red',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn: "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: "UnPaid",
    PaymentBg: 'red',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar4,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
 
  
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status:'UnBooked',
    ReservationImage:
      avatar2,
    StatusBg: 'red',
    Phone: '+233595309592',
    CheckIn : '2023-09-02',
    CheckOut: '2023-06-07',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn : "2023-05-03",
    CheckOut: '2023-07-07',
  },

  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar3,

    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
  
 
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    Status:'UnBooked',
    ReservationImage:
      avatar4,
    StatusBg: 'red',
    Phone: '+233595309592',
    CheckIn : '2023-09-02',
    CheckOut: '2023-11-12',
  },
  {
    Payment: 'Paid',
    PaymentBg: 'red',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn : "2023-05-03",
    CheckOut: '2023-07-07',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn : '2023-04-05',
    CheckOut: '2023-07-07',
  },
  

  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Michael',
    Email: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status:'UnBooked',
    ReservationImage:
      avatar2,
    StatusBg: 'red',
    Phone: '34',
    CheckIn : '2023-09-02',
    CheckOut: '2023-06-02',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar3,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn : "20230503",
    CheckOut: '20230707',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn : '20230405',
    CheckOut: '20230707',
  },
 
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Nirav Joshi',
    Email: 'nirav@gmail.com',
    ReservationImage:
      avatar2,
    Status: 'Booked',
    StatusBg: '#8BE78B',
    Phone: '+233595309592',
    CheckIn : "20230503",
    CheckOut: '20230707',
  },
  {
    Payment: 'Paid',
    PaymentBg: '#8BE78B',
    ReservationName: 'Sunil Joshi',
    Email: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Booked',
    ReservationImage:
      avatar,
    StatusBg: '#8BE78B',
    Phone: '+233547932587',
    CheckIn : '20230702',
    CheckOut: '20230707',
  },
];
 
return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl">Location</p>
          <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
          <Link to='/addreservation'>
          <span className="mr-2">+</span>Add Reservation
</Link>
          </button>
        </div>
        <GridComponent dataSource={reservationsData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
          <ColumnsDirective>
            {reservationsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
      </div>
    );
            };
    

export default Reservations