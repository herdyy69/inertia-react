import React from 'react';
import { Input } from '@/Components/ui/input';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Components/layout/dsb/dsb.layout';

export default function Edit(props) {
  const { data, setData, errors, put } = useForm({
    title: props?.posts?.title,
    body: props?.posts?.body,
    category_id: props?.posts?.category.id,
    tag_id: props?.posts?.tag.id,
  });

  const submit = (e) => {
    e.preventDefault();
    put(route('posts.update', props?.posts.slug));
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
          <option value={data.category_id.id}>
            {props?.posts?.category.name}
          </option>
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
          <option value={data.tag_id.id}>{props?.posts?.tag.name}</option>
          {props?.tag.map((d, i) => {
            return (
              <option key={i} value={d.id}>
                {d.name}
              </option>
            );
          })}
        </select>
        <button type='submit'>UPDATE</button>
      </form>
    </DashboardLayout>
  );
}
