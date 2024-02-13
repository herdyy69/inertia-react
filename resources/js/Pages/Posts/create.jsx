import React from 'react';
import { Input } from '@/Components/ui/input';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Components/layout/dsb/dsb.layout';

export default function Create(props) {
  const { data, setData, errors, post } = useForm({
    title: '',
    body: '',
    category_id: props?.category[0].id,
    tag_id: props?.tag[0].id,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('posts.store'));
  };

  return (
    <DashboardLayout>
      <form onSubmit={submit} className='p-5 grid gap-4'>
        <Input
          name='title'
          label='Title'
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
          message={errors?.title}
        />
        <Input
          name='body'
          label='body'
          value={data.body}
          onChange={(e) => setData('body', e.target.value)}
          message={errors?.body}
        />
        <select
          name='category_id'
          id='category_id'
          onChange={(e) => setData('category_id', e.target.value)}
        >
          {props?.category.map((d, i) => {
            return (
              <option key={i} value={d.id}>
                {d.name}
              </option>
            );
          })}
        </select>
        <select
          name='tag_id'
          id='tag_id'
          onChange={(e) => setData('tag_id', e.target.value)}
        >
          {props?.tag.map((d, i) => {
            return (
              <option key={i} value={d.id}>
                {d.name}
              </option>
            );
          })}
        </select>
        <button type='submit'>CREATE</button>
      </form>
    </DashboardLayout>
  );
}
