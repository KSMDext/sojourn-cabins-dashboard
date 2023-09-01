import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';
import {GrLocation} from 'react-icons/gr'
const gridStaffProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10 align-middle items-center ml-4"
        src={props.value}
        alt="staff"
      />
    </div>
);
const gridStaffCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.value}</span>
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
          <div className=" absolute z-10 bg-white border rounded-md py-1 mt-1  right-0">
            <button
              type="button"
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
            >
             <Link to="/updatestaff"> Edit</Link> 
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

export const COLUMNS =[
    {
        Header:'Image',
        accessor: 'image',
        Cell: gridStaffProfile,
    },
    {
        Header:'First Name',
        accessor: 'first_name'
    },
    {
      Header:'Last Name',
      accessor: 'last_name'
  },
    {
        Header:'Role',
        accessor:'role'
    },
    {
        Header:'Email',
        accessor: 'email'
    },
    {
        Header:'Phone',
        accessor: 'phone_number'
    },
    {
        Header:'Address',
        accessor: 'address',
        Cell: gridStaffCountry
    },
    
    {
        Header: '', 
        accessor: 'id', 
        Cell: CustomMenuCell, 
        width: 100,
      },
]


