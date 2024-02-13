import React from 'react';
import { cn } from '@/lib/cn';

const HeadSide = (props) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4',
        props.collapsed ? 'justify-center' : 'justify-between'
      )}
    >
      <div
        className={cn(
          'w-[900px] h-[50px] bg-white',
          props.collapsed ? 'hidden' : 'block'
        )}
      />
      <div
        onClick={props.handleCollapse}
        className={cn(
          'w-full h-[50px] cursor-pointer rounded-md',
          props.collapsed ? 'bg-red-500' : 'bg-white'
        )}
      />
    </div>
  );
};

export default HeadSide;
