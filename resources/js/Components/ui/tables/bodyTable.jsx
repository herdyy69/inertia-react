import React from 'react';
import { cn } from '@/lib/cn';
import { flexRender } from '@tanstack/react-table';

export const BodyTable = (props) => {
  return (
    <tbody>
      {props.table.getRowModel().rows.length > 0 &&
        props.table.getRowModel().rows.map((row) => {
          return (
            <tr
              onClick={() => props.onClick && props.onClick(row)}
              className={cn(
                props.onClick &&
                  'hover:bg-blue-10 active:bg-blue-20 transition-colors cursor-pointer'
              )}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => {
                const id = cell.column.columnDef.id ?? cell.column.id;
                return (
                  <td
                    className={cn(
                      'px-4 py-5 text-start text-greyscale-8 text-caption-reguler-14 border-b border-greyscale-2 truncate',
                      id === 'id' && 'w-1/12',
                      id === 'action' && 'flex justify-center items-center'
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
};
