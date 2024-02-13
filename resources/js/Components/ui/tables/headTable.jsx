import React from 'react';
import { cn } from '@/lib/cn';
import { flexRender } from '@tanstack/react-table';

export const HeadTable = (props) => {
  return (
    <thead className='border-y border-greyscale-5'>
      {props.table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const id =
              header.column.columnDef.id ?? header.column.columnDef.accessorKey;
            return (
              <th
                key={header.id}
                className={cn(
                  'p-4 text-caption-medium-14 text-start',
                  id === 'id' && 'w-1/12',
                  id === 'action' && 'flex justify-center items-center'
                )}
                colSpan={header.colSpan}
                onClick={() => {}}
              >
                {header.isPlaceholder ? null : (
                  <div className='flex items-center gap-2'>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
