import React, { useState } from 'react';
import ContentSide from './contentSide';
import { cn } from '@/lib/cn';

const SubContentSide = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='space-y-3'>
      <div
        onClick={handleOpen}
        className={cn(
          'bg-slate-600 p-3 rounded-lg hover:bg-slate-700 transition-all cursor-pointer',
          props.collapsed && 'w-full text-center',
          props?.activeMenu?.id === props?.route?.id && 'bg-slate-800'
        )}
      >
        {props.collapsed ? props.route.name.slice(0, 2) : props.route.name}
      </div>
      <ul
        className={cn(
          'pl-6 space-y-3',
          open ? 'block' : 'hidden',
          props.collapsed && 'pl-0'
        )}
      >
        {props.route.subMenus.map((subMenu, index) => {
          return (
            <li key={index}>
              <ContentSide
                route={subMenu}
                collapsed={props.collapsed}
                hovered={props.hovered}
                activeMenu={props.activeMenu}
                activeSubMenu={props.activeSubMenu}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubContentSide;
