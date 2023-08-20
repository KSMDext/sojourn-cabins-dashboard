import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';
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
             <Link to="/updateseasonalrule"> Edit</Link> 
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
        Header: 'Seasonal Rule',
        accessor: 'SeasonalRule'
    },
    {
        Header: 'Location',
        accessor: 'Location'
    },
    {
        Header: 'Cabin',
        accessor: 'Cabin'
    },
    {
        Header: 'Start Date',
        accessor: 'StartDate'
    },
    {
        Header: 'Expiry Date',
        accessor: 'ExpiryDate'
    },
    {
        Header: '', 
        accessor: 'id', 
        Cell: CustomMenuCell, 
        width: 100,
      },
]