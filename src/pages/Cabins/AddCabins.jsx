import {React,useState,useEffect} from 'react';
import {Link, redirect} from 'react-router-dom';
import {CiCircleAlert} from "react-icons/ci";
import ImageUploader from '../../components/ImageUploader';
import { addCabins } from '../../actions/cabins';
import { useDispatch,useSelector } from 'react-redux';


const AddCabins = ({history}) => {
  const[name,setName] = useState('');
  const[maximum_adults,setMaximum_adults] =useState();
  const[maximum_kids,setMaximum_kids] =useState();
  const[description,setDescription] =useState('');
  const[units,setUnits] =useState();
  const[room_size,setRoom_size] =useState();
  const [beds, setBeds] = useState({
    type: '',
    quantity: ''

  });  
  const[location,setLocation] =useState('');
  const[weekend_price,setWeekend_price] =useState('');
  const[weekday_price,setWeekday_price] =useState('');
  const[price_rate,setPrice_rate] =useState({
        rate_type: '',
        weekday_price: '',
        weekend_price: '',
  });
  const[amenities,setAmenities] =useState([]);

  // Amenities Array
  const amenity = [
    { name: 'Swimming Pool', id: 'swimming pool' },
    { name: 'Wi-Fi', id: 'wi-fi' },
    // { name: 'WorkSpace', id: '' },
    // { name: 'Internet', id: '' },
    // { name: 'Shower', id: '' },
    // { name: 'Towel', id: '' },
    // { name: 'Safe', id: '' },
  ];

  // Beds Array
  const bed = [
    {type: 'Choose a bed'},
    {type: 'Student'},
    {type: 'Queen'}

  ]

  const rateType = [
    {rate: 'Choose rate type'},
    {rate: 'CHARGE PER CABIN'},
    
  ]
  
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault()
      const cabinData = {name,maximum_kids,maximum_adults,description,units,room_size,location,beds,amenities,price_rate}
      console.log(cabinData);
      dispatch(addCabins(cabinData))

  }
  
 const {cabin, error, loading} = useSelector(state=>state.cabins)

 useEffect(() => {
  if (cabin) {
    redirect("/cabins")
  }
}, [history, cabin])

// Amenity function
const handleAmenityChange =(e, amenityId) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    setAmenities((prevSelected) => [...prevSelected,amenityId]);
  } else {
    setAmenities((prevSelected) =>
      prevSelected.filter((id) => id !== amenityId)
    )}};

// Beds function
const handleInputChange = (e) => {
  const {name,value}  = e.target;
  setBeds({
    ...beds,
    [name]: value
  });
};

// Price Rate Function
 const handlePriceRateChange = (e) => {
    const { name, value } = e.target;
    setPrice_rate({
      ...price_rate,
      [name]: value,
    });
  };



  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium">Add Cabins</p>

    {/* Cabin Details */}
    <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-[200px] p-8 mt-[20px] mx-[35px] bg-white rounded  ">
      <div className="grid grid-cols-2 ">
        <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700	">Cabin Details</p>  
      <div>
      <div className="grid grid-rows-2">
      <div className="flex flex-col items-left">
          <div className="flex items-center text-[14px]">
            
            <span>Name this Cabin*</span>
          </div>
          <input 
            className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded "
            type="text"
            onChange={(e)=>setName(e.target.value)}
          />
      </div>
        <div className="grid grid-cols-2  mt-2">
          <div className="flex flex-col items-left text-[14px]">
              <div className="flex items-center">
                
                <span>Max Guest</span>
                <CiCircleAlert className="mr-1" />
              </div>
              <input 
                className="w-[108px] h-[30px] p-2 border-1 border-slate-200 rounded "
                type="number"
                onChange={(e)=>setMaximum_adults(e.target.value)}
              />
          </div>

          <div className="flex flex-col items-left">
              <div className="flex items-center text-[14px]">
                
                <span>Max Kids</span>
                <CiCircleAlert className="mr-1" />
              </div>
              <input 
                className="w-[108px] h-[30px] p-2 border-1 border-slate-200 rounded "
                type="number"
                onChange={(e)=>setMaximum_kids(e.target.value)}

              />
          </div>
        </div>
      </div>
    </div>
      </div>
    

    <div>    
      <div>
      <form>
      <div className="grid grid-rows-2 ">
      <div className="flex flex-col items-left">
          <div className="flex items-center text-[14px]">
            
            <span>Units</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[127px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="number"
            onChange={(e)=>setUnits(e.target.value)}
          />
      </div>
      <div>
      <div className="flex flex-col items-left mt-1">
          <div className="flex items-center text-[14px]">
            
            <span>Room Size</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[253px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="number"
            onChange={(e)=>setRoom_size(e.target.value)}

          />
      </div>
      </div>
      </div>
      </form>
    </div>
      </div>
    </div>

{/* BED */}
    <div className="grid grid-cols-2 gap-[200px] p-8 mt-[20px]  mx-[35px] bg-white rounded">
      <div >
        <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700">Beds</p>  
      

            <div className="grid grid-cols-2 gap-[100px] w-[700px]">

                    <div className="grid grid-rows-2 pt-[20px]">
                    <div className="flex flex-col items-left text-[14px]">
                          <label htmlFor='' className='flex items-center text-[14px]'>
                            Bed type
                          </label>
                        <select 
                        className="w-[334px] h-[32px]  border-1 border-slate-200 rounded mt-2 text-[14px] mb-1"
                        name='type'
                        value={beds.bedType}
                        // id = {formData.bedType}
                        onChange={handleInputChange}
                        > 
                          {bed.map((bedd)=>(
                            <option value={bedd.type}>{bedd.type}</option> 
                          ))}  
                        </select>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col items-left">
                        <div className="flex items-center text-[14px]">
                      </div>
                        
                    </div>
                    </div>
                    </div>

                      <div className="flex flex-col items-left text-[14px] mb-1">          
                            <span className="mt-[20px] mb-[5px]">Number</span>

                            <input 
                            type="number"
                            name="quantity"
                            value={beds.number}
                            // id = {}
                            className="w-[127px] h-[30px] p-2 border-1  border-slate-200 rounded text-[14px] mb-1" 
                            onChange={handleInputChange}
                            />
                        
                      </div>
                      
            </div>

  </div>

{/* Amenities Section */}

    <div className="border-l-2 ">    
      <div className="ml-6 ">
      <div className="grid grid-cols-2 ">
        <div>
          <div className="flex flex-col items-left ">

              <div className="flex items-center text-[14px]">
                <span className="text-xl font-bold text-sky-700">Amenities</span>
              </div>

              
              {amenity.map((amenityy) => (
                <div className="mb-2 flex items-center text-[14px]" key={amenityy.name}>
                  <input
                    className="border-1 border-slate-200 w-[23px] h-[19px]"
                    type="checkbox"
                    id={amenityy.name}
                    onChange={(e) => handleAmenityChange(e, amenityy.name)}
                  />
                  <label htmlFor={amenityy.id} className="pl-[5px]">
                    {amenityy.id}
                  </label>
                </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

{/* Photo Section */}
    <div className="  grid grid-cols-2 p-6 mt-[20px]  mx-[35px] bg-white rounded">
      <div className="grid grid-cols-2">
    <div>
    <p className="text-xl font-bold text-sky-700">Photo</p>
       <div className=" mt-44 ml-44">
       <ImageUploader />
       </div>
       
    </div>
    </div>

    {/* Description Section */}
    <div className="grid grid-rows-2 border-l-2 text-[14px]">
      <div className="ml-6">
        <p className="text-xl font-bold text-sky-700">Description</p>
        <label>
          <p>Description*</p>
        <textarea
          className="w-[444px] h-[98px] p-2 border-1 border-slate-200 rounded"
          onChange={(e)=>setDescription(e.target.value)}
          >
            
        </textarea>
        </label>    
      </div>

      <div className="flex flex-col items-left ml-6">
          <div className="flex items-center">           
            <span>Location*</span>
          </div>
          <select 
          className="w-[444px] h-[39px]  border-1 border-slate-200 rounded mt-2"
          value = {location}
          onChange={(e)=>setLocation(e.target.value)}
          > 
            <option value="">Choose a location</option>
            <option value="f3bca31b-3e2e-42e0-b506-664af57b5da5">f3bca31b-3e2e-42e0-b506-664af57b5da5</option>
            
          </select>
      </div>
      </div>
    </div>

{/* Price Rate Section */}
    <div className=" pt-[10px] grid grid-cols-3 p-8 mt-[20px]  mx-[35px] bg-white rounded text-[14px]">
    <div 
    >
    <p className="text-xl font-bold text-sky-700">Price</p>
    <div className="flex flex-col items-left">
          <div className="flex items-center">           
            <span>Rate Type</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <select 
          name='rate_type'
          value={price_rate.rate_type}
          onChange={handlePriceRateChange}
          className="w-[330px] h-[32px]  border-1 border-slate-200 rounded mt-2"
          > 
            {rateType.map((ratee)=>(
              <option value={ratee.rate}>{ratee.rate}</option>
            ))}
            
          </select>
      </div>

      {/* <div className="flex items-center">
        <select 
        className="text-sky-500 text-xs inline-flex w-[200px] rounded-none mt-[0.3rem]">
          <option value="" className='border-[none]'>More pricing options</option>
        </select>
      </div> */}


    </div>

    <div className="mt-[30px]">
      <label className="flex flex-col w-[310px]">
        <span className="flex items-center">
          Weekday Price
          <CiCircleAlert className="ml-1" />
        </span>
        <input 
          className="w-[330px] h-[32px] p-2 border-1 border-slate-200 rounded mt-2"
          type="text"
          name='weekday_price'
          value={price_rate.weekday_price}
          onChange={handlePriceRateChange}
        />
      </label>
    </div>


    <div className="mt-[30px]">
      <label className="flex flex-col w-[310px]">
        <span className="flex items-center">
          Weekend Price
          <CiCircleAlert className="ml-1" />
        </span>
        <input 
          className="w-[330px] h-[32px] p-2 border-1 border-slate-200 rounded mt-2"
          type="text"
          name = 'weekend_price'
          value = {price_rate.weekend_price}
          onChange={handlePriceRateChange}
        />
      </label>
    </div>

    </div>
    <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/cabins">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="submit" >Save</button>
    </div>
   

    </form>
</div>

  )
}

export default AddCabins