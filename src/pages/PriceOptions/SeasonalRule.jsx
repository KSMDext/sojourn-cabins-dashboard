import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';

import { useState } from 'react';

const SeasonalRule = () => {
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

 


  const gridSeasonalRuleMenu = () => (
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

  

  const SeasonalRuleGrid = [
    
    { field: 'SeasonalRule', headerText: 'Seasonal Rule', width: '180', textAlign: 'Center' },
    { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center' },
    { field: 'Cabin', headerText: 'Cabin', width: '140', textAlign: 'Center' },
    { field: 'StartDate', headerText: 'Start Date', width: '140', textAlign: 'Center' },
    { field: 'ExpiryDate', headerText: 'ExpiryDate', width: '140', textAlign: 'Center' },
    { field: 'Menu', headerText: '', width: '50', template: gridSeasonalRuleMenu },
  ];

  const SeasonalRuleData = [
    {
      SeasonalRule: 'Valentine Weekend Package',
      Location: "Location1, Location2",
      Cabin: 'All Cabins',
      StartDate: '11/02/2022',
      ExpiryDate: '12/02/2023', 
      Menu: '.',
    },
    {
      SeasonalRule: 'New Year',
      Location: "All Locations",
      Cabin: 'All Cabins',
      StartDate: '15/12/2022',
      ExpiryDate: '27/12/2022', 
      Menu: '.',
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Seasonal Rule</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
          <span className="mr-2">+</span>Add Seasonal Rule
        </button>
      </div>
      <GridComponent dataSource={SeasonalRuleData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {SeasonalRuleGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
    };

export default SeasonalRule;
