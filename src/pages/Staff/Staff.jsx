import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { FaEllipsisV } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import avatar from '../../data/avatar.jpg';
import avatar2 from '../../data/avatar2.jpg';
import avatar3 from '../../data/avatar3.png';
import avatar4 from '../../data/avatar4.jpg';
import { Link } from "react-router-dom";
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';

import { useState } from 'react';



const Staff = () => {
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

const gridStaffProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.StaffImage}
      alt="staff"
    />
  </div>
);
const gridStaffCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Address}</span>
  </div>
);



const gridStaffMenu = () => (
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

 const staffsGrid = [


  { headerText: 'Image',
    width: '100',
    template: gridStaffProfile,
    textAlign: 'Center' },

  { field: 'Name',
    headerText: 'Name',
    width: '145',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Role',
    width: '165',
    textAlign: 'Center',
  },

  { field: 'Email',
    headerText: 'Email',
    width: '200',
    textAlign: 'Center' },

  { field: 'Phone',
    headerText: 'Phone',
    width: '135',
    textAlign: 'Center' },

    { headerText: 'Address',
    width: '135',
    textAlign: 'Center',
    template: gridStaffCountry },

    { field: 'Menu',
    headerText: '', 
    width: '50', 
    template: gridStaffMenu },
];


const staffsData = [
  {
    Phone: "+233595309593", 
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
    avatar3,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nasimiyu Essel',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar3,
  },
  {
    Phone: "+233595309593", 
    Name: 'Iulia Albu',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar4,
  },
  {
    Phone: "+233595309593", 
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nana Essel',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nana Inyene',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: '30',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
    avatar2,

  },
  {
    Phone: "+233595309593", 
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar3,
  },
  {
    Phone: "+233595309593", 
    Name: 'Iulia Albu',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar4,
  },
  {
    Phone: "+233595309593", 
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Omar Darobe',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: '30',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
    avatar,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar3,
  },
  {
    Phone: "+233595309593", 
    Name: 'Iulia Albu',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar4,
  },
  {
    Phone: "+233595309593", 
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Omar Darobe',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: '30',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
    avatar2,

  },
  {
    Phone: "+233595309593", 
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar3,
  },
  {
    Phone: "+233595309593", 
    Name: 'Iulia Albu',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar4,
  },
  {
    Phone: "+233595309593", 
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar2,
  },
  {
    Phone: "+233595309593", 
    Name: 'Omar Darobe',
    Title: 'HR',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
  {
    Phone: "+233595309593", 
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    Address: 'Tema community18',
    Email: 'esseldacosta00@gmail.com',
    StaffImage:
      avatar,
  },
];

const itemsPerPage = 10;
const totalPages = Math.ceil(staffsData.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const visibleData = staffsData.slice(startIndex, startIndex + itemsPerPage);

return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl">Staff</p>
          <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
          <Link to='/addstaff'>
          <span className="mr-2">+</span>Add Staff
          </Link> 
          </button>
        </div>
        <GridComponent dataSource={visibleData} enableHover={false} >
          <ColumnsDirective>
            {staffsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page]} />
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
    

export default Staff