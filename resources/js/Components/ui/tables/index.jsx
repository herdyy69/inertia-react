import React, { useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { useUpdateParams } from '@/lib/updateParam';
import { Input } from '../input';
import { HeadTable } from './headTable';
import { BodyTable } from './bodyTable';
import { PaginationTable } from './paginationTable';

export function Table({ columns, dataQuery, onClick }) {
  const setParams = useUpdateParams();
  const searchParams = new URLSearchParams(window.location.search);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 8,
  });

  useEffect(() => {
    setParams({ page: pageIndex.toString(), limit: pageSize.toString() });
  }, [pageIndex, pageSize, searchParams]);

  useEffect(() => {
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    if (page && limit) {
      setPagination({
        pageIndex: Number(page) || 1,
        pageSize: Number(limit) || 8,
      });
    }
  }, []);

  const table = useReactTable({
    columns,
    data: dataQuery?.data,
    pageCount: dataQuery?.pagination.total_pages || 1,
    state: {
      pageIndex,
      pageSize,
      sorting: [],
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  return (
    <div>
      <div className='w-1/3 my-4'>
        <Input
          type='search'
          placeholder='Search'
          onChange={(e) => {
            setParams({ search: e.target.value, page: '1' });
            setPagination({ pageIndex: 1, pageSize });
          }}
          value={searchParams.get('search') || ''}
        />
      </div>
      <div className='overflow-auto'>
        <table className='base-table w-full table-fixed'>
          <HeadTable
            table={table}
            onClick={onClick}
            setPagination={setPagination}
            pageSize={pageSize}
          />
          <BodyTable
            table={table}
            onClick={onClick}
            setPagination={setPagination}
            pageSize={pageSize}
            pageIndex={pageIndex}
          />
        </table>
      </div>
      <PaginationTable
        table={table}
        setPagination={setPagination}
        pageSize={pageSize}
        pageIndex={pageIndex}
      />
    </div>
  );
}
