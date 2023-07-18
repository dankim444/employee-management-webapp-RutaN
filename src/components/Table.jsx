import React from 'react';
import { useTable, usePagination } from 'react-table';
import './Table.css'; 

function Table({ data }) {
  const columns = React.useMemo(
    () => Object.keys(data[0]).map(key => ({ 
      Header: key,
      accessor: key, // accessor is the "key" in the data
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

