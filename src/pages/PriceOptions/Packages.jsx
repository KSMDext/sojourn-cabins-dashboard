import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';

import { useState } from 'react';

const Packages = () => {
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

 


  const gridPackagesMenu = () => (
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

  const PackagesGrid = [
    
    { field: 'PackageName', headerText: 'PackageName', width: '180', textAlign: 'Center' },
    { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center' },
    { field: 'Cabin', headerText: 'Cabins', width: '140', textAlign: 'Center' },
    { field: 'StartDate', headerText: 'Start Date', width: '140', textAlign: 'Center' },
    { field: 'ExpiryDate', headerText: 'ExpiryDate', width: '140', textAlign: 'Center' },
    { field: 'Price', headerText: 'price', width: '140', textAlign: 'Center' },
    { field: 'Menu', headerText: '', width: '50', template: gridPackagesMenu },
  ];

  const PackagesData = [
    {
      PackageName: 'Package 1',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Price: '$10',
      Menu: '.',
    },
    {
      PackageName: 'Package 2',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Price: '$500',
      Menu: '.',
    },
    {
      PackageName: 'Package 3',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Price: '$230',
      Menu: '.',
    },
    {
      PackageName: 'Package 4',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Price: '$1000',
      Menu: '.',
    },
    {
      PackageName: 'Package 4',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Price: '$120',
      Menu: '.',
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Packages</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
          <span className="mr-2">+</span>Add Packages
        </button>
      </div>
      <GridComponent dataSource={PackagesData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {PackagesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
    };

export default Packages;
