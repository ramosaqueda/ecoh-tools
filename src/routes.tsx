import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdOutlineAddIcCall  
} from 'react-icons/md';

const routes = [
  {
    name:  'Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Gestión de casos',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdOutlineAddIcCall   className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Estadisticas',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Perfile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
  {
    name: 'Gestion de casos',
    layout: '/gestion',
    path: 'index',
    icon: <MdLock className="h-6 w-6" />,
  }
];
export default routes;
