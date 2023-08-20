import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';


const gridPaymentStatus = (props) => {
  let buttonStyle = {
    color: props.value === 'Paid' ? 'green' : 'red'
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      className="text-white py-1 px-2 capitalize text-md"
    >
      {props.value}
    </button>
  );
};

const reservationGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10 items-center align-middle"
      src={props.cell.row.original.ReservationImage} 
      alt="staff"
    />
    <div className="items-center align-middle mt-2">
      <p>{props.cell.row.original.ReservationName}</p> 
    </div>
  </div>
);

const gridReservationStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p>{props.value}</p>
  </div>
);

const CustomMenuCell = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-gray-600"
        onClick={toggleMenu}
      >
        <HiDotsVertical />
      </button>
      {menuOpen && (
        <div className=" absolute z-10 bg-white border rounded-md py-1 mt-1 right-0">
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
          >
           <Link to="/updatereservations"> Edit</Link> 
          </button>
          <button
            type="button"
            className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
  
export const COLUMNS =
[
    {
        Header: 'Name',
        accessor: 'ReservationImage',
        Cell: reservationGridImage,
        width: 150,


    },
    {
        Header: 'Phone',
        accessor:'Phone',
        width: 130,
    },
    {
        Header: 'Email',
        accessor:'Email',
        width: 160,
    },
    {
        Header: 'Check In',
        accessor:'CheckIn',
        width: 125,
    },
    {
        Header: 'Check Out',
        accessor:'CheckOut',
        width: 125,
    },
    {
        Header: 'Status',
        accessor:'Status',
        Cell: gridReservationStatus,
        width: 125,
    },
    {
        Header: 'Payment',
        accessor:'Payment',
        Cell: gridPaymentStatus,
        width: 100,
    },
    {
      Header: '', 
      accessor: 'id', 
      Cell: CustomMenuCell, 
      width: 100,
    },
   
];
