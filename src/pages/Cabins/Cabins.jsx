import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import cabin1 from '../../data/cabin1.jpeg';
import cabin2 from '../../data/cabin2.jpeg';
import { Link } from "react-router-dom";

const Cabins = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cabinsData, setCabinsData] = useState([
    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 1',
      Facility: 'Ac, Shower, Wifi',
      CabinImage: cabin1,
      Status: 'Booked',
      StatusBg: '#8BE78B',
      CabinType: 'Standard',
      ExtraCharges: 'Splash pool, Tourism',
      Rate: '$100',
      Menu: '.',
    },
    {
      PaymentBg: '#8BE78B',
      CabinName: 'Cabin 2',
      Facility: 'Ac, Shower, Wifi',
      ProjectName: 'Weekly WP Theme',
      Status: 'UnBooked',
      CabinImage: cabin2,
      StatusBg: 'red',
      CabinType: 'Double',
      ExtraCharges: 'Grill, Tourism',
      Rate: '$150',
    },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem, cabin) => {
    setSelectedCabin(cabin);
    switch (menuItem) {
      case 'Delete':
        console.log('Delete clicked');
        showDeleteConfirmation();
        break;
      case 'Edit':
        console.log('Edit clicked');
        // Add your edit logic here
        break;
      default:
        break;
    }
  };

  const cabinGridImage = (props) => (
    <div className="image flex gap-10">
      <img className="rounded-xl h-20 md:ml-3" src={props.CabinImage} alt="cabin" />
    </div>
  );

  const gridCabinStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );

  const gridCabinMenu = (props) => (
    <div className="menu-container">
      <button onClick={toggleMenu} className="menu-button">
        <FaEllipsisV />
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <button onClick={() => handleMenuClick('Delete', props)} className="dropdown-menu-item">
            Delete
          </button>
          <button onClick={() => handleMenuClick('Edit', props)} className="dropdown-menu-item">
            Edit
          </button>
        </div>
      )}
    </div>
  );

  const cabinsGrid = [
    { headerText: '', width: '120', template: cabinGridImage, textAlign: 'Center' },
    { field: 'CabinName', headerText: 'CabinName', width: '145', textAlign: 'Center' },
    { field: 'Facility', headerText: 'Facility', width: '150', textAlign: 'Center' },
    { field: 'ExtraCharges', headerText: 'Extra Charges', width: '140', textAlign: 'Center' },
    { field: 'Rate', headerText: 'Rate', width: '140', textAlign: 'Center' },
    { field: 'Status', headerText: 'Status', width: '140', textAlign: 'Center', template: gridCabinStatus },
    { field: 'Menu', headerText: '', width: '50', template: gridCabinMenu },
  ];

  const showDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideDeleteConfirmation = () => {
    setShowConfirmation(false);
  };

  const deleteCabin = () => {
    if (selectedCabin) {
      const updatedData = cabinsData.filter((cabin) => cabin !== selectedCabin);
      setCabinsData(updatedData);
      setSelectedCabin(null);
      hideDeleteConfirmation();
    }
  };

  const ConfirmationPopup = ({ onCancel, onConfirm }) => (
    <div className="confirmation-popup">
      <p>Are you sure you want to delete this cabin?</p>
      <button onClick={onCancel} className="confirmation-popup-button">
        Cancel
      </button>
      <button onClick={onConfirm} className="confirmation-popup-button">
        Delete
      </button>
    </div>
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Cabins</p>
        <button className="text-white p-1 hover:bg-zinc-600 bg-zinc-800 rounded-md bold text-14">
        <Link to='/addreservation'>
        <span className="mr-2">+</span>Add Cabins
</Link>
        </button>
      </div>
      <GridComponent dataSource={cabinsData} enableHover={false} allowPaging pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {cabinsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
      {showConfirmation && (
        <ConfirmationPopup onCancel={hideDeleteConfirmation} onConfirm={deleteCabin} />
      )}
    </div>
  );
};

export default Cabins;
