import React from 'react';
import { cn } from '@/lib/cn';
import { useLayout } from '../dsb.context';
import HeadSide from './headSide';
import ContentSide from './contentSide';
import SubContentSide from './subContentSide';

export const Sidebar = (props) => {
  const { memoizedRoutes, collapsed, hovered, handleCollapse, handleHover } =
    useLayout();
  return (
    <div
      className={cn(
        'w-2/12 bg-[#060E1D] text-white p-6 space-y-6',
        collapsed && 'w-[5%] p-3'
      )}
    >
      <HeadSide
        collapsed={collapsed}
        hovered={hovered}
        handleCollapse={handleCollapse}
        handleHover={handleHover}
      />
      <ul className='space-y-3'>
        {memoizedRoutes.map((route, index) => {
          if (route.subMenus) {
            return (
              <li key={index}>
                <SubContentSide
                  route={route}
                  collapsed={collapsed}
                  hovered={hovered}
                  activeMenu={props.activeMenu}
                  activeSubMenu={props.activeSubMenu}
                  activeSubSubMenu={props.activeSubSubMenu}
                />
              </li>
            );
          } else {
            return (
              <li key={index}>
                <ContentSide
                  route={route}
                  collapsed={collapsed}
                  hovered={hovered}
                  activeMenu={props.activeMenu}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
