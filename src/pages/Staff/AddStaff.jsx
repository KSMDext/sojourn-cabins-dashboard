import {React, useState,useEffect} from 'react';
import { Link, redirect } from 'react-router-dom'; 
import ImageUploader from '../../components/ImageUploader';
import { useDispatch,useSelector } from 'react-redux';
import { addStaff } from '../../actions/staff';
import Select from 'react-select';


const AddStaff = ({history}) => {

  

      const countryOptions = [
        { value: 'us', label: 'United States' },
        { value: 'gh', label: 'Ghana' },
        { value: 'ca', label: 'Canada' },
        // Add more countries
      ];

      
  
  const dispatch = useDispatch()
    const[first_name,setfirst_name] = useState('');
    const[last_name,setlast_name] =useState('');
    const[email,setEmail] =useState('');
    const[phone_number,setPhone] =useState('');
    const[address,setAddress] =useState('');
    const[work_location,setLocation] =useState('');
    const[country, setCountry] =useState('');
    const[role,setRole] =useState('');
    const[staffType,setStaffType] =useState('');
    const[date_joined,setDateJoined] = useState('');

    const handleSelect = (selectedOptions) => {
        setCountry(selectedOptions.label);
    }

    // const history = useHistory();

    const handleSubmit = (e)=>{
      e.preventDefault()
      const staffData = {first_name,last_name,email,phone_number,address,country,work_location,role,staffType,date_joined}
      console.log(staffData)
      dispatch(addStaff(staffData))

  }

  const {staff_, error, loading} = useSelector(state=>state.staff)


    useEffect(() => {
      if (staff_) {
        redirect("/staff")
      }
    }, [history, staff_])

  return (
    <div>
      <p className="mx-[35px] mt-[20px] text-2xl font-medium	">Add Staff</p>
      <form onSubmit={handleSubmit}>
    <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white ">
      

          <div className="text-left grid lg:grid-cols-2 space-y-[30px] text-slate-500 mt-[20px]">
          <label className="w-[310px] h-[40px] text-[14px]" >
            First Name*
            <input 
            className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="text" 
            onChange={(e) => setfirst_name(e.target.value)}
            required/>
          </label>

          <label 
          className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
          style={{marginTop: "0px"}}>
            Last Name*
            <input 
            className="w-[400px] h-[32px] p-2 border-1  border-slate-200 rounded"
            type="text" 
            onChange={(e) => setlast_name(e.target.value)}
            required/>
          </label>

          <label 
            className="w-[310px] h-[40px] text-[14px]">
            Email*
            <input 
            className="w-[400px] h-[32px] p-2 border-1  border-slate-200 rounded"
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            required/>
          </label>

          <label
          className="w-[310px] h-[40px] text-[14px]">
            Phone*
            <input 
            className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="text" 
            onChange={(e) => setPhone(e.target.value)}
            required/>
          </label>
          <label
          className="w-[310px] h-[40px] text-[14px]">
            Address*
            <input 
            className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="text" 
            onChange={(e) => setAddress(e.target.value)}
            required/>
          </label>
          <label
            className="w-[310px] h-[40px] text-[14px]">
              Work Location*
              <input 
              className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text" 
              onChange={(e) => setLocation(e.target.value)}
              required/>
          </label>
          <div>
            <span className="w-[310px] h-[40px] text-[14px]"> Country*</span>
            <Select 
              className="w-[400px] h-[32px] p-1 pl-[0rem]"
              type="text" 
              // value={country?.value}
              options = {countryOptions}
              onChange={handleSelect}
              required/>
          </div>
          <div className="flex">
            <div className="mr-3 text-[14px]">
              <label htmlFor="role" className="block">
                Role*
              </label>
              <input
                id="role"
                className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded"
                type="text"
                onChange={(e) => setRole(e.target.value)}
                required/>
            </div>
            <select
              className="w-[200px] h-[30px]  border-1 border-slate-200 rounded text-[14px] mt-[20px]"
              name="staffType"
              onChange={(e) => setStaffType(e.target.value)}
              required>
              <option value="">Choose Staff Type</option>
              <option value="Staff1">Staff1</option>
              <option value="Staff2">Staff2</option>
            </select>

          </div>
          <div className="flex">
          <div className="mr-3 text-[14px]">
              <label htmlFor="date_joined" className="block">
                start date*
              </label>
              <input
                id="date_joined"
                className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded uppercase"
                type="date"
                onChange={(e) => setDateJoined(e.target.value)}
                required/>
            </div>
          <div className=" ml-96">
            <div className="ml-64"><ImageUploader/></div>
          </div>
          </div>
          </div>
          </div>

          <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
              <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/staff">Cancel</Link></button> 
              <button 
              className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" 
              type="submit"
              onClick={ handleSubmit}
              required>Save</button>
          </div> 
    </form>
    </div>
  )
}

export default AddStaff