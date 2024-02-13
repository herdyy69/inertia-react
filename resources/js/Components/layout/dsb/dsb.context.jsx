import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Head } from '@inertiajs/react';
import { routes } from '@/config/routes';
import { router } from '@inertiajs/react';
export const DsbContext = createContext();
export function useLayout() {
  return useContext(DsbContext);
}
export const DsbProvider = ({ children }) => {
  const [state, setState] = useState({
    activeMenu: null,
    activeSubMenu: null,
    activeSubSubMenu: null,
    collapsed: localStorage.getItem('collapsed') === 'true' ? true : false,
    hovered: false,
  });
  const memoizedRoutes = useMemo(() => {
    return routes;
  }, [routes]);
  const url = useMemo(() => {
    return router?.page?.url?.split('?')[0];
  }, [router?.page?.url]);
  useEffect(() => {
    memoizedRoutes.find((route) => {
      if (url === '/') {
        return route.path === '/';
      }
      if (route.subMenus?.length > 0) {
        return route.subMenus.find((subMenu) => {
          if (url === subMenu.path) {
            return setState((prevState) => ({
              ...prevState,
              activeMenu: route,
              activeSubMenu: subMenu,
            }));
          }
        });
      } else {
        if (url === route.path) {
          return setState((prevState) => ({
            ...prevState,
            activeMenu: route,
          }));
        }
      }
    });
  }, [url, memoizedRoutes]);

  const handleCollapse = () => {
    const collapsed = !state.collapsed;
    setState((prevState) => ({
      ...prevState,
      collapsed,
    }));
    localStorage.setItem('collapsed', collapsed);
  };
  const handleHover = () => {
    setState((prevState) => ({
      ...prevState,
      hovered: !prevState.hovered,
    }));
  };
  const value = {
    memoizedRoutes,
    ...state,
    handleCollapse,
    handleHover,
  };

  return (
    <DsbContext.Provider value={value}>
      <Head>
        {state.activeSubMenu?.name && (
          <title>
            {state.activeMenu?.name + ' ' + state.activeSubMenu?.name}
          </title>
        )}
        {!state.activeSubMenu?.name && <title>{state.activeMenu?.name}</title>}
        {state.activeSubSubMenu?.name && (
          <title>
            {state.activeMenu?.name +
              ' ' +
              state.activeSubMenu?.name +
              ' ' +
              state.activeSubSubMenu?.name}
          </title>
        )}
      </Head>
      {children}
    </DsbContext.Provider>
  );
};
