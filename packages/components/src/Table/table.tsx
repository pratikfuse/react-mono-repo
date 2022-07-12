import classNames from 'classnames';
import React from 'react';
import {
  useTable,
  TableOptions,
  usePagination,
} from 'react-table';
/**
 * TODO add virtualized list -> react-window
 */

interface ITableProps<
  T extends Object,
> extends TableOptions<T> {
  paginate?: boolean;
  wrapperClassName?: string;
  fetchData: ({}: {
    pageSize: number;
    pageNumber?: number;
  }) => void;
}

export const Table: React.FC<
  ITableProps<{}>
> = props => {
  const wrapperClassName =
    classNames(
      props.wrapperClassName,
    );
  const tableClassName =
    classNames(
      'table',
    );
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    state:
      {},
  } = useTable(
    {
      columns:
        props.columns,
      data: props.data,
    },
    usePagination,
  );

  return (
    <div
      className={
        wrapperClassName
      }
    >
      <table
        className={
          tableClassName
        }
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map(
            headerGroup => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map(
                  column => (
                    <th
                      {...column.getHeaderProps()}
                    >
                      {column.render(
                        'Header',
                      )}
                    </th>
                  ),
                )}
              </tr>
            ),
          )}
        </thead>
        <tbody
          {...getTableBodyProps()}
        >
          {}
        </tbody>
      </table>
    </div>
  );
};
