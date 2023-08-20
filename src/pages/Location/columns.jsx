import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom'
const gridLocationImage = (props) => (
  <div>
    <img className="h-20 md:ml-3" src={props.value} alt="location-item" />
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
           <Link to="/updatelocation"> Edit</Link> 
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
        Header: 'Location',
        accessor: 'LocationImage',
        Cell: gridLocationImage
    },
    {
        Header: 'Location Address',
        accessor: 'Location'
    },
    {
        Header: 'Description',
        accessor: 'Description'
    },
    {
        Header: 'Total Cabins',
        accessor: 'TotalCabins'
    },
    {
        Header: 'Available Cabins',
        accessor: 'AvailableCabins'
    },
    {
        Header: 'Booked Cabins',
        accessor: 'BookedCabins'
    },
    {
        Header: '', // Column header
        accessor: 'id', // This could be an identifier for the row data
        Cell: CustomMenuCell, // Use the custom cell renderer
        width: 50,
    },
    
]