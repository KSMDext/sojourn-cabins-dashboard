import React , { useMemo, useState, useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import {IoArrowForward} from 'react-icons/io5';
import { Link } from 'react-router-dom'
import { GlobalFilter } from '../../components/GlobalFilter';
import { COLUMNS } from './columns';
import axios from "axios";


import './table.css';
import { useStateContext } from '../../contexts/ContextProvider';
import { baseUrl } from '../../components/Utilities/apiUtils';
const Location = () => {
  const {tokens} = useStateContext();
  const [MOCK_DATA, setMOCK_DATA] = useState([])
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    pageOptions,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }, 
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;
  const { pageIndex } = state;


  useEffect(() => {
    const token = tokens.access;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    axios.get(`${baseUrl}/locations?page=1`, config)
        .then((response) => {
            console.log(response.data);
            setMOCK_DATA(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [tokens]);

  return (   
        <div className='w-full'>
          <div className="flex mt-4 items-center w-full justify-between px-5">
        <div className="text-2xl">Location</div>
        <div></div>
        <div style={{}}>
          <button className="text-white p-1 hover:bg-zinc-300 bg-black rounded-md bold text-14 w-40">
            <Link to="/addlocation">
              <span className="">+</span>Add Location
            </Link>
          </button>
        </div>
      </div>
      <div className="flex mt-4 justify-between px-5">
        <div className="w-80 border rounded text-sm">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div>
          <select className="w-[190px] h-9 border-slate-200 border-1 rounded text-sm">
            <option>All Location</option>
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
        </div>
      </div>
      <div className="m-5">
        <div className="rounded-md bg-white mb-6">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-8 bg-zinc-400 h-12 items-center rounded-md p-1">
          <button
            className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <IoMdArrowBack className="mr-1" />
            Previous
          </button>

          <div className="flex items-center mx-2 text-sm rounded-md p-2 ml-4 w-28 h-7">
            {Array.from({ length: pageOptions.length }, (_, pageIndex) => pageIndex + 1).map(
              (page) => (
                <span
                  key={page}
                  className={`mx-1 cursor-pointer ${
                    page === pageIndex + 1 ? 'font-bold bg-white rounded-md px-2' : ''
                  }`}
                >
                  {page}
                </span>
              )
            )}
          </div>

          <button
            className="bg-white rounded-md p-2 mr-4 w-28 h-7 text-sm flex items-center pl-8"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
            <IoArrowForward className="ml-1" />
          </button>
        </div>
      </div>
          
        </div>
    
  )
}

export default Location