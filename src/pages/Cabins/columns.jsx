import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';

const cabinGridImage = (props) => (
    <div className="image flex gap-10">
      <img className="rounded-xl h-20 md:ml-3" src={props.value} alt="cabin" />
    </div>
);


const gridCabinStatus = (props) => {
    let buttonStyle = {
        color: props.value === 'Available' ? 'green' : 'red'
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

export const COLUMNS = [
    {
        Header: '',
        accessor: 'CabinImage',
        Cell: cabinGridImage
    },
    {
        Header: 'Cabin Name',
        accessor: 'name'
    },
    {
        Header: 'Facilities',
        accessor: 'created-at'
    },
    {
        Header: 'Extra Charge',
        accessor: 'updated-at'
    },
    {
        Header: 'Rate',
        accessor: 'description'
    },
    {
        Header: 'Status',
        accessor: 'featured',
        Cell: gridCabinStatus
    },
    {
        Header: '', 
        accessor: 'id', 
        Cell: CustomMenuCell, 
        width: 100,
      },
]
