import React, { useMemo } from 'react';
import { Table } from '@/Components/ui/tables';
import DashboardLayout from '@/Components/layout/dsb/dsb.layout';
import { router, Link } from '@inertiajs/react';

export default function Index(props) {
  const deletePost = (slug) => {
    router.delete('posts/' + slug, {}, { preserveState: true });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: true,
      },
      {
        accessorKey: 'title',
        header: 'Nama',
        enableSorting: true,
      },
      {
        accessorKey: 'category.name',
        header: 'Kategori',
        enableSorting: true,
      },
      {
        accessorKey: 'tag.name',
        header: 'Tag',
        enableSorting: true,
      },
      {
        accessorKey: 'created_at',
        header: 'Tanggal',
        enableSorting: true,
      },
      {
        accessorKey: 'action',
        header: 'Action',
        cell: (props) => {
          const { row } = props;
          return (
            <div className='space-x-2'>
              <button
                onClick={() => deletePost(row.original.slug)}
                className='bg-red-500 text-white px-3 py-1 rounded-md'
              >
                Delete
              </button>
              <Link
                href={'posts/' + row.original.slug}
                className='bg-black text-white px-3 py-1 rounded-md'
              >
                Show
              </Link>
              <Link
                href={'posts/' + row.original.slug + '/edit'}
                className='bg-black text-white px-3 py-1 rounded-md'
              >
                Update
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <DashboardLayout>
      <Table
        tableEmptys='TableEmptyContact'
        columns={columns}
        dataQuery={props.data}
      />
    </DashboardLayout>
  );
}
