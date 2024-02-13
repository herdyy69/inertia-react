export const routes = [
  {
    id: 1,
    name: 'Posts',
    path: '/posts',
    isCollapse: true,
    subMenus: [
      {
        id: 2,
        name: 'Index',
        path: '/posts',
        subMenus: [
          {
            id: 3,
            name: 'Index 2',
            path: '/posts/index2',
          },
        ],
      },
      {
        id: 4,
        name: 'Create',
        path: '/posts/create',
      },
    ],
  },
  {
    id: 5,
    name: 'SEARCH POSTS',
    path: '/posts/q/search',
    isCollapse: true,
  },
];
