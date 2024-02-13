import React from 'react';
import { DsbProvider, DsbContext } from './dsb.context';
import { Sidebar } from './sidebar';

const DashboardLayout = ({ children, ...props }) => {
  return (
    <DsbProvider>
      <DsbContext.Consumer>
        {({ activeMenu, activeSubMenu, activeSubSubMenu }) => {
          return (
            <main className='min-h-screen relative flex transition-all duration-300 ease-in-out'>
              <Sidebar
                activeMenu={activeMenu}
                activeSubMenu={activeSubMenu}
                activeSubSubMenu={activeSubSubMenu}
              />
              <div className='w-full'>
                <div className='p-5'>{children}</div>
              </div>
            </main>
          );
        }}
      </DsbContext.Consumer>
    </DsbProvider>
  );
};

export default DashboardLayout;
