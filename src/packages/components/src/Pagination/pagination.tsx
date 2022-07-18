import React from 'react';

interface IPaginationProps {
  pages: number;
  currentPage: number;
}

export const Pagination: React.FC<IPaginationProps> =
  props => {
    return (
      <div
        className="pagination-container"
        data-testid="pagination"
      >
        <div className="pagination">
          <a href="/">&laquo;</a>
          {Array.from(
            { length: props.pages },
            (_, i) => i + 1,
          ).map((_, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  key={index}
                  href="/"
                  className={
                    props.currentPage === index
                      ? 'active'
                      : ''
                  }
                >
                  {index}
                </a>
              </React.Fragment>
            );
          })}
          <a href="/">&raquo;</a>
        </div>
      </div>
    );
  };
