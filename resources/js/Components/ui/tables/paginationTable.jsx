import React from 'react';
import { cn } from '@/lib/cn';

export const PaginationTable = ({
  table,
  setPagination,
  pageIndex,
  pageSize,
}) => {
  return (
    <div className='flex justify-between items-center gap-2 px-8 py-4 border-y border-greyscale-5'>
      <div className=''>
        <span className='min-w-max heading-semibold-14'>Rows per page: </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPagination({
              pageIndex: 1,
              pageSize: Number(e.target.value),
            });
          }}
          className='text-caption-reguler-14 border-none outline-none focus:ring-0 focus:outline-none'
        >
          {[8, 16, 24, 32].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center gap-4'>
        <span className='flex items-center text-caption-medium-14 text-greyscale-6 gap-1'>
          {pageIndex} of {table.getPageCount()}
        </span>
        <button
          className={cn(
            'p-0 !bg-transparent',
            pageIndex === 1 && 'opacity-50 cursor-not-allowed'
          )}
          onClick={() => {
            setPagination({
              pageIndex: pageIndex - 1,
              pageSize,
            });
          }}
          disabled={pageIndex === 1}
          type='button'
        >
          PREV
        </button>
        <div className='flex gap-4 justify-center'>
          <div className='flex gap-4 justify-center'>
            {Array.from({
              length: Math.min(3, table.getPageCount()),
            }).map((_, index) => {
              const pageNumber = pageIndex - 1 + index;
              if (pageNumber < table.getPageCount()) {
                return (
                  <button
                    key={index}
                    className={cn(
                      'p-0 !bg-transparent',
                      pageIndex === pageNumber + 1 &&
                        'opacity-50 cursor-not-allowed'
                    )}
                    onClick={() => {
                      setPagination({
                        pageIndex: pageNumber + 1,
                        pageSize,
                      });
                    }}
                  >
                    {pageNumber + 1}
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <button
          className={cn(
            'p-0 !bg-transparent',
            pageIndex === table.getPageCount() &&
              'opacity-50 cursor-not-allowed'
          )}
          onClick={() => {
            setPagination({
              pageIndex: pageIndex + 1,
              pageSize,
            });
          }}
          disabled={pageIndex === table.getPageCount()}
          type='button'
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
