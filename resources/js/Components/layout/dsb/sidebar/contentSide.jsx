import React from 'react';
import { cn } from '@/lib/cn';
import { Link } from '@inertiajs/react';

const ContentSide = (props) => {
  return (
    <Link href={props.route.path}>
      <div
        className={cn(
          'bg-slate-600 p-3 rounded-lg hover:bg-slate-700 transition-all cursor-pointer',
          props.collapsed && 'w-full text-center',
          props?.activeSubMenu?.id === props.route.id
            ? 'bg-slate-800'
            : props?.activeMenu?.id === props.route.id && 'bg-slate-800'
        )}
      >
        {props.collapsed ? props.route.name.slice(0, 2) : props.route.name}
      </div>
    </Link>
  );
};

export default ContentSide;
