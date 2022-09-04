import React from 'react';
import { RouteObject } from "react-router-dom";
import Posts from '../components/posts';
import Contacts from '../components/contacts';
import Layout from '../components/layout';

export const routes: RouteObject[] = [
  { path: '/', element: <Layout />, children: [
      { index: true, element: <Posts /> },
      { path: 'contacts', element: <Contacts /> },
    ]
  },
];
