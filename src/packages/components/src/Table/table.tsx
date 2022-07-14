import React from 'react';
import classNames from 'classnames';
import {
  useTable,
  TableOptions,
  usePagination,
  useSortBy,
} from 'react-table';
import Pagination from '../Pagination';

/**
 * TODO add virtualized list -> react-window
 */

interface ITableProps<
  T extends Record<string, unknown> = any,
> extends TableOptions<T> {
  paginate?: boolean;
  sort?: boolean;
  wrapperClassName?: string;
  fetchData: (pagination: {
    pageSize: number;
    pageNumber?: number;
  }) => Promise<any>;
}

export function Table<
  TItem extends Record<string, unknown>,
>(props: ITableProps<TItem>) {
  const wrapperClassName = classNames(
    props.wrapperClassName,
    'tbl-wrapper',
  );
  const tableClassName = classNames('tbl');
  const {
    prepareRow,
    rows,
    headerGroups,
    getTableBodyProps,
    getTableProps,
    page,
  } = useTable<TItem>(
    {
      columns: props.columns,
      data: props.data,
      initialState: { pageSize: props.pageCount },
      manualPagination: props.manualPagination,
    },
    ...(props.sort ? [useSortBy] : []),
    ...(props.paginate ? [usePagination] : []), // conditially add usePagination hook if props.paginate is true
  );

  const dataRows = props.paginate ? page : rows;

  return (
    <div className={wrapperClassName}>
      <table
        className={tableClassName}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? 'no' : 'yes  '}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {dataRows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.value}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {props.paginate && (
        <Pagination currentPage={1} pages={10} />
      )}
    </div>
  );
}
