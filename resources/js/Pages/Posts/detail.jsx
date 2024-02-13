import React from 'react';
import { Input } from '@/Components/ui/input';
import DashboardLayout from '@/Components/layout/dsb/dsb.layout';

export default function Detail(props) {
  return (
    <DashboardLayout>
      <div className='p-5 grid gap-4'>
        <Input
          name='title'
          label='Title'
          value={props?.posts?.title}
          readOnly
        />
        <Input name='body' label='body' value={props?.posts?.body} readOnly />
        <Input
          name='category'
          label='Category'
          value={props?.posts?.category?.name}
          readOnly
        />
        <Input
          name='tag'
          label='Tag'
          value={props?.posts?.tag?.name}
          readOnly
        />
      </div>
    </DashboardLayout>
  );
}
