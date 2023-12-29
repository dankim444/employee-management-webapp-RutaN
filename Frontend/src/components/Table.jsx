import React, { useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import './Table.css'; 
import { getAllEmployees, getAllContractors } from '../api';

function Table({ filterOption }) {
  // If data is not available, return null 
  // if (!data || data.length === 0) {
  //   return null; 
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    // Async function that fetches data based on filter option
    const fetchData = async () => {
      let response;
      switch(filterOption) {
        case "NOMBRES":
          response = await getAllEmployees(); // Call your API functions here
          break;
        case "APELLIDOS":
          response = await getAllContractors(); // Call your API functions here
          break;
        // ... add more cases as needed ...
        default:
          break;
      }
      setData(response);  // assuming the response is the data you want to set
    };

    fetchData();
  }, [filterOption]); 

  const columns = React.useMemo(
    () => Object.keys(data[0] || {}).map(key => ({ 
      Header: key,
      accessor: key, 
    })),
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 7 },
    },
    usePagination
  )

  return (
    <>
      <div className="tableContainer">
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="Button">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        {' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <span>
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
          </strong>{' '}
        </span>
      </div>
    </>
  );
};

export default Table;

