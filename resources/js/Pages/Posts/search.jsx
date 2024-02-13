import React from 'react';
import { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import { Input } from '@/Components/ui/input';
import DashboardLayout from '@/Components/layout/dsb/dsb.layout';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const { posts, url } = usePage().props;

  useEffect(() => {
    if (search.length >= 1) {
      router.get(url, { s: search }, { preserveState: true, replace: true });
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('s')) {
        router.get(url, {}, { preserveState: true, replace: true });
      }
    }
  }, [search]);

  return (
    <DashboardLayout>
      <Input
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label={'Search'}
        message={posts?.length <= 0 ? 'No results found' : ''}
      />
      <div className='mt-4 space-y-4'>
        {posts.map((t, i) => {
          return (
            <p key={i}>
              {i + 1}. {t.title}
            </p>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
